import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://ckcourtesycleaners.ca";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/wet-cleaning", "/gallery", "/reviews", "/contact", "/privacy-policy", "/services/shirt-cleaning", "/services/bridal-formal-wear", "/services/coats-jackets", "/services/household-textiles", "/services/stain-treatment"];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
