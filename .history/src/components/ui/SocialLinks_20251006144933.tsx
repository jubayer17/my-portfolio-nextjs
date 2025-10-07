"use client";

const socialLinksData = [
  {
    href: "https://www.linkedin.com/in/jubayer-ahmed26/",
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/jubayer17",
    icon: "fab fa-github",
    label: "GitHub",
    external: true,
  },
  {
    href: "mailto:jubayer17@cse.pstu.ac.bd",
    icon: "fas fa-envelope",
    label: "Email",
    external: false,
  },
  {
    href: "https://codeforces.com/profile/jubayer17",
    icon: "fas fa-code",
    label: "Codeforces",
    external: true,
  },
  {
    href: "https://leetcode.com/jubayer17",
    icon: "fas fa-laptop-code",
    label: "LeetCode",
    external: true,
  },
];

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({
  className = "social-links",
}: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinksData.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="social-link hover-scale magnetic"
          aria-label={link.label}
          {...(link.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
}
