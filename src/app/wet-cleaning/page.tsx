import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Droplets, Leaf, Shirt } from "lucide-react";
import { Callout } from "@/components/Callout";

export const metadata: Metadata = { title: "Professional Wet Cleaning", description: "Learn about professional wet cleaning and C&K Courtesy Cleaners' water-based approach to garment care in South Surrey." };
const faqs = [
  ["What is professional wet cleaning?", "Professional wet cleaning is a garment-cleaning method that uses water, specialized detergents, suitable equipment and controlled processes."],
  ["Is wet cleaning the same as washing at home?", "No. Professional wet cleaning uses purpose-designed equipment, products and process controls. Garments still need to be assessed individually."],
  ["Can every garment be wet cleaned?", "No. Suitability depends on the fabric, construction, trims, dyes and care instructions. Ask the team about your specific item."],
  ["Does wet cleaning remove every stain?", "No cleaning method can guarantee every stain will be removed. Results depend on the stain, fabric, age and any previous treatment."],
];
export default function WetCleaningPage() {
  return <>
    <section className="page-hero page-hero-wet"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">THE C&K DIFFERENCE</span><h1>Water-based care.<br/><em>Considered in every detail.</em></h1><p>Discover professional wet cleaning and why it is central to C&K Courtesy Cleaners' approach.</p></div></section>
    <section className="section-pad"><div className="container wet-intro-grid"><div><span className="eyebrow">THE PROCESS</span><h2>What does wet cleaning mean?</h2></div><div><p className="lead">Professional wet cleaning uses water, specialized cleaning products and carefully controlled processes to clean garments.</p><p>Rather than relying on conventional dry-cleaning solvents, the process uses equipment and settings designed for professional garment care. The right approach depends on the item in front of you: its fabric, construction, trims and care label.</p></div></div></section>
    <section className="wet-steps"><div className="container"><div className="section-heading"><span className="eyebrow eyebrow-light">A GARMENT-FIRST APPROACH</span><h2>Care is a process, not a shortcut.</h2></div><div className="wet-step-grid"><article><span>01</span><Shirt/><h3>Assess</h3><p>Consider the fabric, construction, care label and any visible concerns.</p></article><article><span>02</span><Droplets/><h3>Choose the process</h3><p>Use appropriate water-based settings and professional cleaning products.</p></article><article><span>03</span><Leaf/><h3>Finish with care</h3><p>Handle and finish the garment with its material and intended use in mind.</p></article></div></div></section>
    <section className="section-pad"><div className="container faq-layout"><div><span className="eyebrow">GOOD TO KNOW</span><h2>Wet cleaning, <em>explained.</em></h2><p>Have a question about a particular garment? The team can help you understand what to ask before you bring it in.</p><Link href="/contact" className="underlined-link">Contact C&K <ArrowUpRight size={15}/></Link></div><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <Callout/>
  </>;
}
