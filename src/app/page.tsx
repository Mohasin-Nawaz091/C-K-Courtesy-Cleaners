import Link from "next/link";
import { ArrowDown, ArrowUpRight, Leaf, Droplets, HeartHandshake, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Callout } from "@/components/Callout";
import { services, business } from "@/lib/business";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-photo" role="img" aria-label="Freshly cared-for clothing on hangers" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow eyebrow-light">C&K COURTESY CLEANERS · SOUTH SURREY</span>
          <h1>A fresher approach<br />to caring for <em>your clothes.</em></h1>
          <p>Professional garment care with environmentally conscious wet cleaning. Thoughtful care for the clothes and textiles you value.</p>
          <div className="hero-actions">
            <Link href="/services" className="button button-light">Explore our services <ArrowUpRight size={16} /></Link>
            <Link href="/contact" className="text-link text-link-light">Visit our store <ArrowUpRight size={15} /></Link>
          </div>
          <div className="hero-bottom"><span>GARMENT CARE, CONSIDERED.</span></div>
        </div>

      </section>

      <section className="intro-section section-pad" id="intro">
        <div className="container intro-grid">
          <div className="intro-label"><span className="eyebrow">A DIFFERENT KIND OF CLEAN</span><span className="vertical-rule" /></div>
          <div className="intro-copy">
            <h2>Care that starts with a <em>closer look.</em></h2>
            <p className="lead">The right care can help the garments you love stay part of your everyday. At C&K Courtesy Cleaners, professional wet cleaning is at the heart of a thoughtful approach to garment care.</p>
            <Link href="/wet-cleaning" className="underlined-link">Discover wet cleaning <ArrowUpRight size={16} /></Link>
          </div>
          <div className="intro-aside"><Droplets size={27} /><p>Water-based cleaning, specialized products and carefully controlled processes.</p></div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-topline"><span className="eyebrow">WHAT WE CARE FOR</span><Link href="/services" className="underlined-link">View all services <ArrowUpRight size={16} /></Link></div>
          <SectionHeading eyebrow="THE C&K APPROACH" title="Care for the pieces that make a day." description="From everyday wardrobe staples to special pieces and household textiles, explore the types of care you can ask our team about." />
          <div className="service-grid">
            {services.slice(0, 3).map((service, i) => <ServiceCard key={service.slug} service={service} index={i} />)}
          </div>
          <div className="service-bottom"><p>Have something different in mind? Ask us about your garment.</p><Link href="/contact" className="button button-outline">Talk to our team <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>

      <section className="wet-feature">
        <div className="wet-feature-image" role="img" aria-label="Clean white fabric and garment-care details" />
        <div className="wet-feature-copy">
          <span className="eyebrow">THE WET CLEANING DIFFERENCE</span>
          <h2>Less about a label.<br /><em>More about the care.</em></h2>
          <p>Professional wet cleaning uses water, specialized cleaning products and controlled processes. Each garment still needs an individual look at its fabric, construction and care instructions.</p>
          <Link href="/wet-cleaning" className="underlined-link">Learn how it works <ArrowUpRight size={16} /></Link>
          <div className="wet-stats"><div><Droplets /><strong>Water-based</strong><span>Cleaning process</span></div><div><Leaf /><strong>Considered</strong><span>Garment care approach</span></div></div>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="WHY C&K" title="Thoughtful at every step." description="A good garment-care experience is built on clear communication, careful assessment and attention to the details." align="center" />
          <div className="values-grid">
            <article><span className="value-icon"><HeartHandshake /></span><span className="eyebrow">01 / PERSONAL</span><h3>Care begins with listening.</h3><p>Tell us about the item and what matters to you. Garments are different, and their care should be considered individually.</p></article>
            <article><span className="value-icon"><Droplets /></span><span className="eyebrow">02 / SPECIALIZED</span><h3>A wet-cleaning focus.</h3><p>Wet cleaning is central to C&K's approach, using water and purpose-designed products in a controlled process.</p></article>
            <article><span className="value-icon"><Leaf /></span><span className="eyebrow">03 / CONSCIOUS</span><h3>A considered approach.</h3><p>We believe garment care should take the fabric, the process and the wider impact into account.</p></article>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="story-image" role="img" aria-label="A carefully arranged wardrobe of clothing" />
        <div className="story-copy">
          <span className="eyebrow">A LOCAL STORY</span>
          <h2>Rooted in care.<br /><em>Looking forward.</em></h2>
          <p>C&K Courtesy Cleaners has a history in the South Surrey community. The business's wet-cleaning journey became a defining part of its approach, with a transition to 100% wet cleaning reported in 2003.</p>
          <Link href="/about" className="underlined-link">Get to know C&K <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="visit-section section-pad">
        <div className="container visit-grid">
          <div><span className="eyebrow">COME SAY HELLO</span><h2>We're here for your<br /><em>garment-care questions.</em></h2><p>Visit us in South Surrey or get in touch before bringing in a special item.</p><div className="visit-actions"><a href={`tel:${business.phoneLink}`} className="button button-dark"><Phone size={15} /> {business.phoneDisplay}</a><Link href="/contact" className="button button-outline">Contact & location <ArrowUpRight size={15} /></Link></div></div>
          <div className="visit-card"><span className="visit-pin"><MapPin /></span><span className="eyebrow">FIND C&K</span><h3>South Surrey, BC</h3><p>{business.address}</p><a href={business.googleMaps} target="_blank" rel="noreferrer" className="underlined-link">Get directions <ArrowUpRight size={15} /></a></div>
        </div>
      </section>
      <Callout />
    </>
  );
}
