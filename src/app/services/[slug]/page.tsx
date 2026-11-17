import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/business";
import { Callout } from "@/components/Callout";

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = services.find((s) => s.slug === slug);
  return service ? { title: service.title, description: service.description } : {};
}
export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <>
    <section className="detail-hero"><div className="detail-hero-image" style={{ backgroundImage: `url("${service.image}")` }}/><div className="detail-hero-overlay"/><div className="container detail-hero-content"><Link href="/services" className="back-link"><ArrowLeft size={15}/> All services</Link><span className="eyebrow eyebrow-light">{service.eyebrow}</span><h1>{service.title}<em>.</em></h1><p>{service.description}</p></div></section>
    <section className="section-pad"><div className="container detail-grid"><div><span className="eyebrow">A THOUGHTFUL FIRST STEP</span><h2>Start with the garment.</h2></div><div className="detail-body"><p className="lead">{service.details}</p><h3>Items to ask us about</h3><ul className="check-list">{service.items.map((item) => <li key={item}>{item}</li>)}</ul><p className="editorial-note">Please contact C&K to confirm current service availability and whether your specific item can be accepted. Cleaning suitability depends on fabric, construction and care instructions.</p><Link href="/contact" className="button button-dark">Ask about this service <ArrowUpRight size={15}/></Link></div></div></section>
    <Callout/>
  </>;
}
