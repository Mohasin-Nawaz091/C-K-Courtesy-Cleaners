import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/business";

const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(business.website),
  title: { default: "C&K Courtesy Cleaners | Wet Cleaning in South Surrey", template: "%s | C&K Courtesy Cleaners" },
  description: "A fresher approach to caring for your clothes. Discover professional garment care and wet cleaning at C&K Courtesy Cleaners in South Surrey, BC.",
  openGraph: { title: "C&K Courtesy Cleaners", description: "A fresher approach to caring for your clothes.", type: "website", locale: "en_CA" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: business.name,
    url: business.website,
    telephone: business.phoneLink,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
  };
  return (
    <html lang="en-CA">
      <body className={`${display.variable} ${sans.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
