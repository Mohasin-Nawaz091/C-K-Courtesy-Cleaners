 "use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, ArrowUpRight, Facebook, Instagram } from "lucide-react";
import { business, navItems } from "@/lib/business";
import { TikTok } from "@/components/icons/TikTok";
import logoImg from "../../assets/logo.png";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <div className="topline-left">
            <span className="topline-tagline">Thoughtful garment care in South Surrey</span>
          </div>
          <div className="topline-right">
            <div className="topline-socials" aria-label="Social media">
              <a
                href={business.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow C&K Courtesy Cleaners on Facebook"
                className="topline-social-link"
              >
                <Facebook size={13} />
              </a>
              <a
                href={business.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow C&K Courtesy Cleaners on Instagram"
                className="topline-social-link"
              >
                <Instagram size={13} />
              </a>
              <a
                href={business.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow C&K Courtesy Cleaners on TikTok"
                className="topline-social-link"
              >
                <TikTok size={13} />
              </a>
            </div>
            <span className="topline-divider" aria-hidden="true" />
            <a href={`tel:${business.phoneLink}`} className="topline-phone">
              <Phone size={13} /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="C&K Courtesy Cleaners home" onClick={() => setOpen(false)}>
            <Image
              src={logoImg}
              alt="C&K Courtesy Cleaners"
              width={192}
              height={48}
              priority
              className="brand-logo"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/")) ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="button button-dark header-cta">Get in touch <ArrowUpRight size={15} /></Link>
          <button className="menu-toggle" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
            ))}
            <a href={`tel:${business.phoneLink}`} className="mobile-call"><Phone size={16}/> Call {business.phoneDisplay}</a>
          </nav>
        )}
      </header>
    </>
  );
}
