import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!message?.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email || undefined,
    subject: `Portfolio inquiry — ${name || "Anonymous"}`,
    text: `Name: ${name || "-"}\nEmail: ${email || "-"}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;color:#111">
        <h2 style="margin-bottom:16px">New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #ddd"/>
        <p style="white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
