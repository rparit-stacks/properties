import Link from "next/link";
import { Youtube, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🤝 Let&apos;s Build Connections
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
            Stay connected with us across all social platforms for the latest
            deals, insights, and updates.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 max-w-2xl mx-auto">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-white hover:bg-accent hover:text-black transition-all duration-300"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-white hover:bg-accent hover:text-black transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-white hover:bg-accent hover:text-black transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-white hover:bg-accent hover:text-black transition-all duration-300"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-white hover:bg-accent hover:text-black transition-all duration-300"
            >
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
