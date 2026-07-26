import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";

const MAX = { name: 120, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** The message is interpolated into an HTML email — escape it. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strip CR/LF so a crafted name can't inject extra mail headers. */
function headerSafe(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: NextRequest) {
  let payload: unknown;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = (payload ?? {}) as Record<string, unknown>;

  const cleanMessage = typeof message === "string" ? message.trim() : "";
  const cleanName = typeof name === "string" ? headerSafe(name).slice(0, MAX.name) : "";
  const cleanEmail = typeof email === "string" ? headerSafe(email).slice(0, MAX.email) : "";

  if (!cleanMessage) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }
  if (cleanMessage.length > MAX.message) {
    return NextResponse.json(
      { error: `Message must be ${MAX.message} characters or fewer.` },
      { status: 400 }
    );
  }
  if (cleanEmail && !EMAIL_RE.test(cleanEmail)) {
    return NextResponse.json({ error: "That email address looks invalid." }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    // Misconfiguration is ours, not the visitor's — say so without leaking which var is missing.
    console.error("[contact] GMAIL_USER / GMAIL_APP_PASSWORD are not configured");
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable. Please email me directly." },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: user,
      replyTo: cleanEmail || undefined,
      subject: `Portfolio inquiry — ${cleanName || "Anonymous"}`,
      text: `Name: ${cleanName || "-"}\nEmail: ${cleanEmail || "-"}\n\n${cleanMessage}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;color:#111">
          <h2 style="margin-bottom:16px">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(cleanName) || "-"}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail) || "-"}</p>
          <hr style="margin:16px 0;border:none;border-top:1px solid #ddd"/>
          <p style="white-space:pre-wrap">${escapeHtml(cleanMessage)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Previously this threw, producing an HTML 500 that the client's
    // res.json() then choked on, surfacing a confusing parse error.
    console.error("[contact] sendMail failed:", err);
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again or email me directly." },
      { status: 502 }
    );
  }
}
