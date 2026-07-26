import type { ElementType } from "react";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import ContactForm from "@/components/ui/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import ProfileLinks from "@/components/ui/ProfileLinks";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { resume } from "@/data/resume";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${resume.person.name} — ${resume.person.role} based in ${resume.person.location}.`,
};

type Channel = {
  icon: ElementType;
  label: string;
  content: string;
  href?: string;
  external?: boolean;
  accent?: string;
};

export default function ContactPage() {
  const channels: Channel[] = [
    {
      icon: Mail,
      label: "Email",
      content: resume.person.email,
      href: `mailto:${resume.person.email}`,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      content: resume.person.phone,
      href: resume.person.whatsapp,
      external: true,
      accent: "#16a34a",
    },
    {
      icon: Phone,
      label: "Phone",
      content: resume.person.phone,
      href: resume.person.phoneHref,
    },
    {
      icon: MapPin,
      label: "Location",
      content: resume.person.location,
    },
  ];

  return (
    <main id="content" className="shell py-12 md:py-16">

      {/* ── Header ── */}
      <AnimatedSection>
        <span className="chip">
          <MessageSquare className="h-3 w-3" aria-hidden="true" />
          Get in touch
        </span>
        <h1
          className="font-outfit mt-4 text-[clamp(2rem,6vw,3rem)] font-bold leading-tight tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          Contact
        </h1>
        <p
          className="mt-3 max-w-prose text-sm leading-relaxed md:text-base"
          style={{ color: "var(--fg-3)" }}
        >
          Have a project or role that needs reliable execution? Send a message and
          I&rsquo;ll respond as soon as possible.
        </p>
      </AnimatedSection>

      <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6">

        {/* ── Left: channels ── */}
        <AnimatedSection className="lg:col-span-5" direction="left" delay={0.08}>
          <div className="space-y-5">
            <div className="card accent-bar p-6">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--fg-4)" }}
              >
                Direct Contact
              </p>
              <ul className="mt-5 space-y-4">
                {channels.map(({ icon: Icon, label, content, href, external, accent }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center border"
                      style={{
                        background: "var(--surface-2)",
                        borderColor: "var(--border)",
                        color: accent ?? "var(--fg-3)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: "var(--fg-4)" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="link-underline break-anywhere text-sm font-semibold"
                          style={{ color: "var(--fg)" }}
                        >
                          {content}
                        </a>
                      ) : (
                        <span
                          className="break-anywhere text-sm font-semibold"
                          style={{ color: "var(--fg)" }}
                        >
                          {content}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6" style={{ borderTop: "2px solid var(--cyan)" }}>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.14em]"
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

        {/* ── Right: form ── */}
        <AnimatedSection className="lg:col-span-7" direction="right" delay={0.12}>
          <div className="card accent-bar p-6 md:p-8">
            <h2 className="font-outfit text-xl font-bold" style={{ color: "var(--fg)" }}>
              Send a Message
            </h2>
            <p className="mt-1.5 text-sm" style={{ color: "var(--fg-3)" }}>
              Fill in the form and I&rsquo;ll receive your message directly.
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
