"use client";

export default function ContactForm() {
  return (
    <form className="contact-form" id="contact-form">
      <div className="form-group">
        <label htmlFor="name">
          <i className="fas fa-user"></i> Name
        </label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          <i className="fas fa-envelope"></i> Email
        </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">
          <i className="fas fa-comment"></i> Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-full">
        <i className="fas fa-paper-plane"></i> Send Message
      </button>
    </form>
  );
}
