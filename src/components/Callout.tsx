import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Callout() {
  return (
    <section className="callout">
      <div className="container callout-inner">
        <div><span className="eyebrow eyebrow-light">A little more care goes a long way</span><h2>Have a garment in mind?</h2><p>Talk with the C&K team about the item you would like cared for.</p></div>
        <Link href="/contact" className="button button-light">Get in touch <ArrowUpRight size={16}/></Link>
      </div>
    </section>
  );
}
