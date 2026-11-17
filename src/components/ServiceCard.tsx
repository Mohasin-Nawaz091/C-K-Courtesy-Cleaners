import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service, index = 0 }: { service: { slug: string; title: string; eyebrow: string; description: string; image: string }; index?: number }) {
  return (
    <Link href={`/services/${service.slug}`} className={`service-card service-card-${index % 3}`}>
      <div className="service-image" style={{ backgroundImage: `url("${service.image}")` }} role="img" aria-label={`${service.title} garment care photography`}>
        <span className="service-number">0{index + 1}</span>
      </div>
      <div className="service-card-copy">
        <span className="eyebrow">{service.eyebrow}</span>
        <div className="service-card-title"><h3>{service.title}</h3><span className="circle-arrow"><ArrowUpRight size={18}/></span></div>
        <p>{service.description}</p>
      </div>
    </Link>
  );
}
