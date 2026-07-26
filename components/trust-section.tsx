import Link from "next/link";
import { Youtube, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const socials = [
  {
    href: "https://x.com/minilands_?t=Re4mV24UkjmMyyv_rKEd4A&s=09",
    Icon: Twitter,
  },
  {
    href: "https://www.instagram.com/minilands.in?igsh=enhtMWExcnh1NXZy",
    Icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/minilands/",
    Icon: Linkedin,
  },
  {
    href: "https://www.facebook.com/share/16TeTjLAyt/",
    Icon: Facebook,
  },
  {
    href: "https://www.youtube.com/@minilands_yt",
    Icon: Youtube,
  },
];

export default function TrustSection() {
  return (
    <section className="section-shine py-16">
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Community</span>
          <h2 className="section-heading mt-5">Let&apos;s Build Connections</h2>
          <p className="section-subheading mt-4">
            Stay connected with us across platforms for deals, insights, and updates.
          </p>
          <div className="gold-rule mt-6 mb-10" />
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map(({ href, Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:border-accent/50 hover:bg-accent hover:text-slate-950 hover:shadow-glow"
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
