"use client";

import SocialLinks from "./ui/SocialLinks";

const footerSocialData = [
  {
    href: "https://www.linkedin.com/in/jubayer-ahmed26/",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jubayer17",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    href: "mailto:jubayer17@cse.pstu.ac.bd",
    icon: "fas fa-envelope",
    label: "Email",
  },
  {
    href: "https://twitter.com/yourname",
    icon: "fab fa-twitter",
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>
              <i className="fas fa-code"></i>
              Jubayer Ahmed
            </h3>
            <p>Building the future, one line of code at a time. ✨</p>
          </div>
          <div className="footer-social">
            {footerSocialData.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer-social-link"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>Jubayer Ahmed • © 2025 | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
