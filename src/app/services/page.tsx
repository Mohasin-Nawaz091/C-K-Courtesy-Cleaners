import type { Metadata } from "next";
import { services } from "@/lib/business";
import { ServiceCard } from "@/components/ServiceCard";
import { Callout } from "@/components/Callout";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Services", description: "Explore garment-care services and ask C&K Courtesy Cleaners about your cleaning needs in South Surrey." };

export default function ServicesPage() {
  return <>
    <section className="page-hero page-hero-services"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">GARMENT & TEXTILE CARE</span><h1>Care for the things<br/>you <em>wear and love.</em></h1><p>Explore the types of garment and textile care you can ask the C&K team about.</p></div></section>
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="OUR SERVICES" title="A little more attention for every item." description="Different fabrics and garments call for different considerations. Select a category to learn more, then contact us to confirm current availability."/><div className="service-grid service-grid-full">{services.map((service, i) => <ServiceCard key={service.slug} service={service} index={i}/>)}</div><p className="editorial-note">Service categories shown here are a proposed website structure. Please contact C&K to confirm that a particular service or item is currently accepted.</p></div></section>
    <Callout/>
  </>;
}
