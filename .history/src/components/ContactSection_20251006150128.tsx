"use client";

import { contactData, contactContent } from "../data";
import ContactItem from "./ui/ContactItem";
import ContactForm from "./ui/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-paper-plane"></i>
          Get In Touch
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>
              <i className="fas fa-handshake"></i>
              {contactContent.title}
            </h3>
            <p>{contactContent.description}</p>
            <div className="contact-details">
              {contactData.map((contact, index) => (
                <ContactItem
                  key={index}
                  icon={contact.icon}
                  label={contact.label}
                  value={contact.value}
                  href={contact.href}
                  isLink={contact.isLink}
                />
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
