"use client";
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

type GalleryImage = { label: string; category: string; image: string };
export function Gallery({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  return <>
    <div className="gallery-grid">{images.map((image, i) => <button key={image.label} className={`gallery-item gallery-item-${i % 3}`} onClick={() => setSelected(image)} aria-label={`View ${image.label}`}><span style={{ backgroundImage: `url("${image.image}")` }}/><small>{image.category}</small><strong>{image.label}<ArrowUpRight size={15}/></strong></button>)}</div>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.label} onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image"><X/></button><div className="lightbox-image" style={{ backgroundImage: `url("${selected.image}")` }} onClick={(e) => e.stopPropagation()}/><p>{selected.label} <span>· Illustrative image</span></p></div>}
  </>;
}
