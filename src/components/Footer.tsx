"use client";

import { footerSocialData } from "../data";

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
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
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
