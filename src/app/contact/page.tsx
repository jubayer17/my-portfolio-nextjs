import ContactForm from "@/components/ui/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import { resume } from "@/data/resume";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-14 md:py-20">

      {/* ── Header ── */}
      <AnimatedSection>
        <span className="section-label">
          <MessageSquare className="h-3 w-3" />
          Get in touch
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Contact
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
          Have a project or role that needs reliable execution? Send a message and I&rsquo;ll
          respond as soon as possible.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-12 md:gap-8">

        {/* ── Left: Info ── */}
        <AnimatedSection className="md:col-span-5" direction="left" delay={0.1}>
          <div className="space-y-4">

            {/* Direct contact card */}
            <div className="card-hover glow-border relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/[0.07] dark:bg-ink-700">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent-500 via-violet-500 to-cyan-400 opacity-60" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Direct Contact
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-500 dark:border-white/[0.07] dark:from-white/[0.04] dark:to-white/[0.02] dark:text-slate-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a
                    href={`mailto:${resume.person.email}`}
                    className="link-hover font-semibold text-slate-800 transition-colors hover:text-accent-600 dark:text-slate-200 dark:hover:text-accent-400"
                  >
                    {resume.person.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-500 dark:border-white/[0.07] dark:from-white/[0.04] dark:to-white/[0.02] dark:text-slate-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {resume.person.phone}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-500 dark:border-white/[0.07] dark:from-white/[0.04] dark:to-white/[0.02] dark:text-slate-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {resume.person.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social links card */}
            <div className="card-hover glow-border relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/[0.07] dark:bg-ink-700">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-accent-500 to-violet-500 opacity-60" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Find Me Online
              </p>
              <div className="mt-4">
                <SocialLinks className="flex flex-wrap items-center gap-2.5" />
              </div>
              <div className="mt-5 space-y-2">
                {resume.person.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-accent-200 hover:bg-accent-50/50 hover:text-accent-700 dark:border-white/[0.05] dark:bg-white/[0.02] dark:text-slate-300 dark:hover:border-accent-500/20 dark:hover:bg-accent-500/8 dark:hover:text-accent-400"
                  >
                    <span className="font-semibold">{l.label}</span>
                    <span className="truncate max-w-[160px] text-xs text-slate-400 dark:text-slate-500 font-mono">
                      {l.href.replace("https://", "")}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* ── Right: Form ── */}
        <AnimatedSection className="md:col-span-7" direction="right" delay={0.15}>
          <div className="card-hover glow-border overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/[0.07] dark:bg-ink-700 md:p-8">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent-500 via-cyan-400 to-violet-500 opacity-60" />
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Send a Message
            </h2>
            <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
              The form opens your email client with a pre-filled message.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </AnimatedSection>

      </div>
    </main>
  );
}
