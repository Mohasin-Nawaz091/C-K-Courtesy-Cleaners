import Link from "next/link";
export default function NotFound() { return <section className="section-pad"><div className="container narrow-copy"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>That page seems to have wandered.</h1><p>Let's get you back to the right place.</p><Link href="/" className="button button-dark">Back to home</Link></div></section>; }
