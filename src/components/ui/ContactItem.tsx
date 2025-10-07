"use client";

interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
  isLink?: boolean;
}

export default function ContactItem({
  icon,
  label,
  value,
  href,
  isLink = false,
}: ContactItemProps) {
  return (
    <div className="contact-item">
      <i className={icon}></i>
      <div>
        <strong>{label}:</strong>
        {isLink && href ? <a href={href}>{value}</a> : <span>{value}</span>}
      </div>
    </div>
  );
}
