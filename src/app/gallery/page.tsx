import type { Metadata } from "next";
import { photoPlaceholders } from "@/lib/business";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = { title: "Gallery", description: "Explore garment-care imagery and the C&K Courtesy Cleaners experience." };
export default function GalleryPage() {
  return <>
    <section className="page-hero page-hero-gallery"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">A CLOSER LOOK</span><h1>Care in the <em>details.</em></h1><p>A visual introduction to garment care, fabrics and the pieces we look after.</p></div></section>
    <section className="section-pad"><div className="container"><div className="gallery-intro"><span className="eyebrow">THE GALLERY</span><p>These are temporary illustrative images for the website design. Replace them with photographs approved by C&K before launch.</p></div><Gallery images={photoPlaceholders}/></div></section>
  </>;
}
