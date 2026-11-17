"use client";

import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { business } from "@/lib/business";

export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Website enquiry").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("Please complete your name, email and message.");
      return;
    }
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email application should open with your message ready. Please send it from there.");
  }
  return (
    <form className="contact-form" action={submit}>
      <div className="form-row">
        <label>Your name<input name="name" placeholder="Name" required /></label>
        <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
      </div>
      <label>Subject<input name="subject" placeholder="How can we help?" /></label>
      <label>Your message<textarea name="message" rows={5} placeholder="Tell us a little about what you need..." required /></label>
      <button className="button button-dark" type="submit">Prepare email <Send size={15}/></button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="form-hint">This starter form opens your email application; it does not transmit or store your information on this website.</p>
    </form>
  );
}
