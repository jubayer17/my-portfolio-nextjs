import ContactForm from "@/components/ui/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import ProfileLinks from "@/components/ui/ProfileLinks";
import { resume } from "@/data/resume";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">

      {/* ── Header ── */}
      <AnimatedSection>
        <span className="chip">
          <MessageSquare className="h-3 w-3" />
          Get in touch
        </span>
        <h1
          className="font-outfit mt-4 text-4xl font-black tracking-tight md:text-5xl"
          style={{ color: "var(--fg)" }}
        >
          Contact
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed md:text-base" style={{ color: "var(--fg-3)" }}>
          Have a project or role that needs reliable execution? Send a message and
          I&rsquo;ll respond as soon as possible.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-12 md:gap-8">

        {/* ── Left: Info ── */}
        <AnimatedSection className="md:col-span-5" direction="left" delay={0.1}>
          <div className="space-y-4">

            {/* Direct contact */}
            <div className="card accent-bar p-6">
              <p
                className="text-[10px] font-black uppercase tracking-[0.12em]"
                style={{ color: "var(--fg-4)" }}
              >
                Direct Contact
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { icon: Mail,   label: "Email",    content: resume.person.email, href: `mailto:${resume.person.email}` },
                  { icon: Phone,  label: "Phone",    content: resume.person.phone  },
                  { icon: MapPin, label: "Location", content: resume.person.location },
                ].map(({ icon: Icon, label, content, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        background: "var(--surface-2)",
                        borderColor: "var(--border)",
                        color: "var(--fg-3)",
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="link-underline text-sm font-semibold"
                        style={{ color: "var(--fg)" }}
                      >
                        {content}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                        {content}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Online presence */}
            <div
              className="card p-6"
              style={{ borderTop: "2px solid var(--cyan)", borderTopColor: "var(--cyan)" }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-[0.12em]"
                style={{ color: "var(--fg-4)" }}
              >
                Find Me Online
              </p>
              <div className="mt-4">
                <SocialLinks className="flex flex-wrap items-center gap-2.5" />
              </div>
              <ProfileLinks links={resume.person.links} />
            </div>
          </div>
        </AnimatedSection>

        {/* ── Right: Form ── */}
        <AnimatedSection className="md:col-span-7" direction="right" delay={0.15}>
          <div className="card accent-bar p-6 md:p-8">
            <h2
              className="font-outfit text-xl font-extrabold"
              style={{ color: "var(--fg)" }}
            >
              Send a Message
            </h2>
            <p className="mt-1.5 text-sm" style={{ color: "var(--fg-3)" }}>
              Opens your email client with a pre-filled message.
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
