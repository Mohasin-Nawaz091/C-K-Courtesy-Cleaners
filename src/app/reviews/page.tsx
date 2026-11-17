import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "Customer Reviews", description: "Find customer feedback for C&K Courtesy Cleaners." };
export default function ReviewsPage() {
  return <>
    <section className="page-hero page-hero-reviews"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">CUSTOMER EXPERIENCES</span><h1>Good care is<br/><em>worth sharing.</em></h1><p>Customer feedback helps neighbours make informed choices. Explore verified reviews and share your experience.</p></div></section>
    <section className="section-pad"><div className="container review-empty"><span className="review-icon"><MessageCircle/></span><span className="eyebrow">REAL WORDS, REAL PEOPLE</span><h2>We believe reviews should speak for themselves.</h2><p>We are not displaying testimonial quotes or ratings here until approved, verifiable customer feedback is supplied. You can use the button below to find C&K's business listing and review options.</p>{business.reviewsUrl ? <a href={business.reviewsUrl} target="_blank" rel="noreferrer" className="button button-dark">Read customer reviews <ArrowUpRight size={15}/></a> : <a href={business.googleMaps} target="_blank" rel="noreferrer" className="button button-dark">Find C&K online <ArrowUpRight size={15}/></a>}<p className="editorial-note">The Google Business Profile review URL should be confirmed and added before launch.</p></div></section>
  </>;
}
