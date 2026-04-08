"use client";

import { useMemo, useState } from "react";
import { Copy, Mail, Send, CheckCheck } from "lucide-react";
import { resume } from "@/data/resume";

export default function ContactForm() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [copied,  setCopied]  = useState<"email" | "message" | null>(null);

  const mailto = useMemo(() => {
    const subject = `Portfolio inquiry — ${name || "Hello"}`;
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message || "-",
    ].join("\n");
    return `mailto:${resume.person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, message, name]);

  const copyText = async (type: "email" | "message") => {
    try {
      await navigator.clipboard.writeText(type === "email" ? resume.person.email : message);
      setCopied(type);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  const disabled = message.trim().length === 0;

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-accent-400 focus:bg-white focus:ring-2 focus:ring-accent-500/15 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-white dark:focus:border-accent-500/50 dark:focus:bg-white/[0.07] dark:focus:ring-accent-500/10";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!disabled) window.location.href = mailto;
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={inputClass}
            autoComplete="email"
            inputMode="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="contact-message">
          Message{" "}
          <span className="font-normal text-slate-400 dark:text-slate-500">(required)</span>
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
          placeholder="Tell me about your project or opportunity..."
          className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent-400 focus:bg-white focus:ring-2 focus:ring-accent-500/15 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-white dark:placeholder-slate-600 dark:focus:border-accent-500/50 dark:focus:bg-white/[0.07] dark:focus:ring-accent-500/10"
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
        <button
          type="submit"
          disabled={disabled}
          className={[
            "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-sm transition",
            disabled
              ? "cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-white/[0.04] dark:text-slate-600"
              : "btn-primary",
          ].join(" ")}
        >
          <Send className="h-4 w-4" />
          Open email client
        </button>

        <a
          href={mailto}
          className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm"
        >
          <Mail className="h-4 w-4" />
          Preview mail
        </a>

        <button
          type="button"
          onClick={() => copyText("email")}
          className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm"
        >
          {copied === "email" ? <CheckCheck className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
          {copied === "email" ? "Copied!" : "Copy email"}
        </button>

        <button
          type="button"
          onClick={() => copyText("message")}
          disabled={disabled}
          className={[
            "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition",
            disabled
              ? "cursor-not-allowed border border-slate-200 bg-slate-50 text-slate-400 dark:border-white/[0.07] dark:bg-white/[0.02] dark:text-slate-600"
              : "btn-ghost",
          ].join(" ")}
        >
          {copied === "message" ? <CheckCheck className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
          {copied === "message" ? "Copied!" : "Copy message"}
        </button>
      </div>
    </form>
  );
}
