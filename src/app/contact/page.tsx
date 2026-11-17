import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { business } from "@/lib/business";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact & Location", description: "Contact C&K Courtesy Cleaners in South Surrey, BC, or get directions to the store." };
export default function ContactPage() {
  return <>
    <section className="page-hero page-hero-contact"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">WE'D BE HAPPY TO HELP</span><h1>Let's talk about<br/><em>what you need.</em></h1><p>Questions about a garment, a service or a visit? Get in touch with C&K Courtesy Cleaners.</p></div></section>
    <section className="section-pad"><div className="container contact-grid"><div><span className="eyebrow">CONTACT DETAILS</span><h2>Find your way to C&K.</h2><div className="contact-details"><a href={`tel:${business.phoneLink}`}><span><Phone/></span><div><small>CALL US</small><strong>{business.phoneDisplay}</strong></div><ArrowUpRight/></a><a href={`mailto:${business.email}`}><span><Mail/></span><div><small>EMAIL</small><strong>{business.email}</strong></div><ArrowUpRight/></a><a href={business.googleMaps} target="_blank" rel="noreferrer"><span><MapPin/></span><div><small>VISIT US</small><strong>{business.address}</strong></div><ArrowUpRight/></a><div className="hours-note"><span><Clock/></span><div><small>OPENING HOURS</small><strong>Please call to confirm current hours.</strong><p>Hours can change. Contact the store before making a special trip.</p></div></div></div></div><div className="contact-form-wrap"><span className="eyebrow">SEND AN ENQUIRY</span><h2>How can we help?</h2><ContactForm/></div></div></section>
    <section className="map-section"><iframe title="Map showing C&K Courtesy Cleaners in South Surrey" src="https://www.google.com/maps?q=Unit%20139%2C%201959%20152%20Street%2C%20Surrey%2C%20BC%20V4A%209E3&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><div className="map-caption"><MapPin/><div><strong>C&K Courtesy Cleaners</strong><span>{business.address}</span></div><a href={business.googleMaps} target="_blank" rel="noreferrer">Directions <ArrowUpRight size={14}/></a></div></section>
  </>;
}
