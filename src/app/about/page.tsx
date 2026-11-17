import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Leaf, Droplets } from "lucide-react";
import { Callout } from "@/components/Callout";

export const metadata: Metadata = { title: "About C&K", description: "Learn about C&K Courtesy Cleaners and its approach to professional wet cleaning in South Surrey." };

export default function AboutPage() {
  return <>
    <section className="page-hero page-hero-about"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">A LOCAL GARMENT-CARE STORY</span><h1>Care has always<br/>been at the <em>centre.</em></h1><p>Get to know the story and approach behind C&K Courtesy Cleaners.</p></div></section>
    <section className="section-pad"><div className="container narrow-copy"><span className="eyebrow">ABOUT C&K</span><h2>Built around a more considered way to care for clothes.</h2><p className="lead">C&K Courtesy Cleaners is a garment-care business serving the South Surrey community. Its story is connected to a long-standing focus on professional cleaning and a distinctive commitment to wet cleaning.</p><p>The business history dates back to 1990. In 2003, C&K moved to a 100% wet-cleaning approach—a significant part of the company's identity and the way it talks about garment care today.</p><p>As the business continues under its current management, this website is designed to make its services, approach and location easier for customers to understand.</p></div></section>
    <section className="history-band"><div className="container history-grid"><div><span className="eyebrow eyebrow-light">A JOURNEY OVER TIME</span><h2>Experience, with an eye on <em>what's next.</em></h2></div><div className="timeline"><div><strong>1990</strong><p>The business's history begins.</p></div><div><strong>2003</strong><p>C&K transitions to 100% wet cleaning.</p></div><div><strong>Today</strong><p>Continuing the conversation about thoughtful garment care in South Surrey.</p></div></div></div></section>
    <section className="section-pad"><div className="container about-values"><article><Droplets/><span className="eyebrow">OUR METHOD</span><h3>Wet cleaning at the heart.</h3><p>Water, specialized cleaning products and carefully controlled processes are central to professional wet cleaning.</p></article><article><Leaf/><span className="eyebrow">OUR MINDSET</span><h3>Care with consideration.</h3><p>Every garment is different. Fabric, construction and care instructions all matter when choosing an appropriate process.</p></article></div></section>
    <section className="section-pad soft-section"><div className="container narrow-copy"><span className="eyebrow">A NOTE ON OUR STORY</span><h2>Good information matters.</h2><p>Ownership and management can change over time. This page focuses on the documented history of the business and its cleaning approach, rather than assuming historical owners represent the current team.</p><Link href="/contact" className="underlined-link">Have a question? Contact us <ArrowUpRight size={15}/></Link></div></section>
    <Callout/>
  </>;
}
