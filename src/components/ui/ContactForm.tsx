"use client";

import { useRef, useState } from "react";
import { Send, CheckCheck, Loader2, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { resume } from "@/data/resume";

type Status = "idle" | "sending" | "sent" | "error";

const MAX_MESSAGE = 5000;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const empty = !message.trim();
  const sending = status === "sending";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    // The button used to be `disabled` while the message was empty, so filling
    // in only name and email and pressing Send did nothing at all — no error,
    // no hint. Fail loudly and put the cursor where the problem is instead.
    if (empty) {
      setErrMsg("Please write a message before sending.");
      setStatus("error");
      messageRef.current?.focus();
      return;
    }

    setStatus("sending");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      // The route always answers with JSON now, but a proxy or network error
      // can still hand back HTML — don't let that surface as a parse error.
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setErrMsg(
        err instanceof Error && err.message
          ? err.message
          : "Could not reach the server. Please check your connection."
      );
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "var(--success-soft)", color: "var(--success)" }}
        >
          <CheckCheck className="h-7 w-7" aria-hidden="true" />
        </div>
        <div>
          <p className="text-lg font-bold" style={{ color: "var(--fg)" }}>
            Message sent!
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--fg-3)" }}>
            Thanks for reaching out — I&rsquo;ll get back to you as soon as possible.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost px-4 py-2 text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { id: "c-name", label: "Name", val: name, set: setName, type: "text", ac: "name", ph: "Your name" },
          { id: "c-email", label: "Email", val: email, set: setEmail, type: "email", ac: "email", ph: "you@example.com" },
        ].map((f) => (
          <div key={f.id} className="space-y-1.5">
            <label
              htmlFor={f.id}
              className="block text-sm font-semibold"
              style={{ color: "var(--fg-2)" }}
            >
              {f.label}
            </label>
            <input
              id={f.id}
              name={f.ac}
              type={f.type}
              value={f.val}
              onChange={(e) => f.set(e.target.value)}
              placeholder={f.ph}
              autoComplete={f.ac}
              className="field h-11"
              disabled={sending}
            />
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        <div className="flex items-baseline justify-between gap-2">
          <label
            htmlFor="c-msg"
            className="block text-sm font-semibold"
            style={{ color: "var(--fg-2)" }}
          >
            Message{" "}
            <span className="font-normal" style={{ color: "var(--fg-4)" }}>
              (required)
            </span>
          </label>
          <span
            className="font-mono text-[11px] tabular-nums"
            style={{
              color: message.length > MAX_MESSAGE ? "var(--error)" : "var(--fg-4)",
            }}
          >
            {message.length}/{MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id="c-msg"
          name="message"
          ref={messageRef}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            // Clear the "write a message" complaint as soon as they start typing.
            if (status === "error" && e.target.value.trim()) setStatus("idle");
          }}
          rows={6}
          required
          aria-invalid={status === "error" && empty}
          aria-describedby={status === "error" ? "c-msg-error" : undefined}
          maxLength={MAX_MESSAGE}
          placeholder="Tell me about your project or opportunity..."
          className="field resize-y"
          disabled={sending}
        />
      </div>

      {status === "error" && (
        <p
          id="c-msg-error"
          role="alert"
          className="flex items-start gap-2 border px-3 py-2.5 text-sm"
          style={{
            color: "var(--error)",
            borderColor: "var(--error)",
            background: "color-mix(in srgb, var(--error) 8%, transparent)",
          }}
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="min-w-0">{errMsg}</span>
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
        {/* Only disabled while a send is in flight — an empty message is
            reported on submit rather than silently blocking the click. */}
        <button
          type="submit"
          disabled={sending}
          className={`btn w-full py-2.5 sm:w-auto ${sending ? "" : "btn-primary"}`}
          style={
            sending
              ? {
                  background: "var(--surface-3)",
                  color: "var(--fg-4)",
                  border: "1px solid var(--border)",
                }
              : undefined
          }
        >
          {sending ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {sending ? "Sending…" : "Send Message"}
        </button>

        <a
          href={resume.person.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-full py-2.5 text-white sm:w-auto"
          style={{ background: "#128c7e", borderColor: "#128c7e" }}
        >
          <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </form>
  );
}
