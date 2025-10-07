"use client";

import ContactItem from "./ui/ContactItem";
import ContactForm from "./ui/ContactForm";

const contactData = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "jubayer17@cse.pstu.ac.bd",
    href: "mailto:jubayer17@cse.pstu.ac.bd",
    isLink: true,
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Patuakhali, Barishal",
    isLink: false,
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "+880-1785-720-927",
    href: "tel:+8801785720927",
    isLink: true,
  },
];

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
              Let&apos;s work together
            </h3>
            <p>
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you have a question or just want to say hi, feel
              free to reach out! 💬
            </p>
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
