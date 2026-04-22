"use client";

import { useState } from "react";
import { Send, CheckCheck, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<Status>("idle");
  const [errMsg,  setErrMsg]  = useState("");

  const empty = !message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (empty) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("sent");
      setName(""); setEmail(""); setMessage("");
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}
        >
          <CheckCheck className="h-8 w-8" />
        </div>
        <div>
          <p className="text-lg font-semibold" style={{ color: "var(--fg)" }}>Message sent!</p>
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { id: "c-name",  label: "Name",  val: name,  set: setName,  type: "text",  ac: "name",  ph: "Your name" },
          { id: "c-email", label: "Email", val: email, set: setEmail, type: "email", ac: "email", ph: "you@example.com" },
        ].map((f) => (
          <div key={f.id} className="space-y-1.5">
            <label htmlFor={f.id} className="block text-sm font-semibold" style={{ color: "var(--fg-2)" }}>
              {f.label}
            </label>
            <input
              id={f.id}
              type={f.type}
              value={f.val}
              onChange={(e) => f.set(e.target.value)}
              placeholder={f.ph}
              autoComplete={f.ac}
              className="field h-11"
              disabled={status === "sending"}
            />
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="c-msg" className="block text-sm font-semibold" style={{ color: "var(--fg-2)" }}>
          Message{" "}
          <span className="font-normal" style={{ color: "var(--fg-4)" }}>(required)</span>
        </label>
        <textarea
          id="c-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
          placeholder="Tell me about your project or opportunity..."
          className="field resize-y"
          disabled={status === "sending"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm" style={{ color: "var(--error, #ef4444)" }}>
          {errMsg}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
        <button
          type="submit"
          disabled={empty || status === "sending"}
          className={`btn py-2.5 w-full sm:w-auto ${empty || status === "sending" ? "opacity-40" : "btn-primary"}`}
          style={empty || status === "sending" ? { background: "var(--surface-3)", color: "var(--fg-4)", border: "1px solid var(--border)" } : {}}
        >
          {status === "sending"
            ? <Loader2 className="h-4 w-4 animate-spin" />
            : <Send className="h-4 w-4" />}
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        <a
          href="https://wa.me/8801785720927"
          target="_blank"
          rel="noopener noreferrer"
          className="btn py-2.5 w-full sm:w-auto inline-flex items-center justify-center gap-2"
          style={{ background: "#25d366", color: "#fff", border: "none" }}
        >
          <FaWhatsapp className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </form>
  );
}
