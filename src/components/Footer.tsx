import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Mail, Leaf } from "lucide-react";
import { business, navItems } from "@/lib/business";
import logoImg from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand-footer" aria-label="C&K Courtesy Cleaners home">
            <Image
              src={logoImg}
              alt="C&K Courtesy Cleaners"
              width={184}
              height={46}
              className="brand-logo brand-logo-footer"
            />
          </Link>
          <p>Thoughtful garment care, with professional wet cleaning at the heart of our approach.</p>
          <span className="footer-note"><Leaf size={15}/> A considered approach to garment care.</span>
        </div>
        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            {navItems.filter((item) => item.href !== "/").map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3>Get in touch</h3>
          <div className="footer-contact">
            <a href={business.googleMaps} target="_blank" rel="noreferrer"><MapPin size={16}/><span>{business.address}</span></a>
            <a href={`tel:${business.phoneLink}`}><Phone size={16}/><span>{business.phoneDisplay}</span></a>
            <a href={`mailto:${business.email}`}><Mail size={16}/><span>{business.email}</span></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} C&K Courtesy Cleaners. All rights reserved.</span>
        <Link href="/privacy-policy">Privacy</Link>
        <a href={business.googleMaps} target="_blank" rel="noreferrer">Find us <ArrowUpRight size={14}/></a>
      </div>
    </footer>
  );
}
