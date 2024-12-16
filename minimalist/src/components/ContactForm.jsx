import React from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form action="" className="contact-form">
        <label htmlFor="name" className="input-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input-field"
          placeholder="Jane Appleseed"
          aria-label="name"
        />
        <label htmlFor="email" className="input-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="input-field"
          placeholder="email@example.com"
          aria-label="email"
        />
        <label htmlFor="message" className="input-label">
          Message
        </label>
        <textarea
          type="text"
          id="message"
          className="input-field message"
          placeholder="How can I help?"
          aria-label="message"
        />
        <button>SEND MESSAGE</button>
      </form>
    </div>
  );
}
