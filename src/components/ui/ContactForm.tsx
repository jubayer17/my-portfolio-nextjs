"use client";

import { useMemo, useState } from "react";
import { Copy, Mail, Send, CheckCheck } from "lucide-react";
import { resume } from "@/data/resume";

export default function ContactForm() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [copied,  setCopied]  = useState<"email" | "msg" | null>(null);

  const mailto = useMemo(() => {
    const subject = `Portfolio inquiry — ${name || "Hello"}`;
    const body = `Name: ${name || "-"}\nEmail: ${email || "-"}\n\n${message || "-"}`;
    return `mailto:${resume.person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, email, message]);

  const copy = async (type: "email" | "msg") => {
    try {
      await navigator.clipboard.writeText(type === "email" ? resume.person.email : message);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch { /* ignore */ }
  };

  const empty = !message.trim();

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (!empty) window.location.href = mailto; }}
      className="space-y-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { id: "c-name",  label: "Name",  val: name,  set: setName,  type: "text",  ac: "name",  ph: "Your name" },
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
              type={f.type}
              value={f.val}
              onChange={(e) => f.set(e.target.value)}
              placeholder={f.ph}
              autoComplete={f.ac}
              className="field h-11"
            />
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="c-msg"
          className="block text-sm font-semibold"
          style={{ color: "var(--fg-2)" }}
        >
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
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
        <button
          type="submit"
          disabled={empty}
          className={`btn py-2.5 w-full sm:w-auto ${empty ? "opacity-40" : "btn-primary"}`}
          style={empty ? { background: "var(--surface-3)", color: "var(--fg-4)", border: "1px solid var(--border)" } : {}}
        >
          <Send className="h-4 w-4" />
          Open email client
        </button>

        <a href={mailto} className="btn btn-ghost py-2.5 w-full sm:w-auto">
          <Mail className="h-4 w-4" />
          Preview mail
        </a>

        <button
          type="button"
          onClick={() => copy("email")}
          className="btn btn-ghost py-2.5 w-full sm:w-auto"
        >
          {copied === "email"
            ? <CheckCheck className="h-4 w-4" style={{ color: "var(--success)" }} />
            : <Copy className="h-4 w-4" />}
          {copied === "email" ? "Copied!" : "Copy email"}
        </button>

        <button
          type="button"
          onClick={() => copy("msg")}
          disabled={empty}
          className={`btn btn-ghost py-2.5 w-full sm:w-auto ${empty ? "opacity-40" : ""}`}
        >
          {copied === "msg"
            ? <CheckCheck className="h-4 w-4" style={{ color: "var(--success)" }} />
            : <Copy className="h-4 w-4" />}
          {copied === "msg" ? "Copied!" : "Copy message"}
        </button>
      </div>
    </form>
  );
}
