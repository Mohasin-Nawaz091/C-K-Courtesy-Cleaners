import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function PrivacyPage() {
  return <section className="section-pad"><div className="container narrow-copy"><span className="eyebrow">WEBSITE INFORMATION</span><h1>Privacy policy</h1><p>This is a starter privacy page and must be reviewed and completed by the business before the website is published.</p><h2>Contact enquiries</h2><p>The current contact form opens the visitor's email application. This website starter does not store contact form submissions.</p><h2>Analytics and third-party services</h2><p>If analytics, embedded maps, advertising, or other third-party services are enabled, this page should explain what information those services collect and how visitors can manage their choices.</p><h2>Questions</h2><p>For privacy questions, contact the business using the contact details on this website.</p></div></section>;
}
