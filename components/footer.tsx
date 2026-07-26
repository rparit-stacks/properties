import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Youtube,
  TwitterIcon as TikTok,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(254,204,87,0.1),transparent_40%)]" />
      <div className="container relative mx-auto max-w-6xl py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="MiniLands Logo" width={32} height={32} />
              <span className="text-xl font-semibold text-white">
                Mini<span className="text-accent">Lands</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for fractional real-estate investments in India.
              Transparent, professionally managed, and built for long-term wealth.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/minilands.in?igsh=enhtMWExcnh1NXZy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-accent/40 hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/minilands/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-accent/40 hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.youtube.com/@minilands_yt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-accent/40 hover:text-accent"
              >
                <Youtube className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.facebook.com/share/16TeTjLAyt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-accent/40 hover:text-accent"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-accent/40 hover:text-accent"
              >
                <TikTok className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-accent">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/#download-app" className="hover:text-accent">
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Investment</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/#how-it-works" className="hover:text-accent">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/roi" className="hover:text-accent">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/expert" className="hover:text-accent">
                  Expert View
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact & Legal</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/#contact" className="hover:text-accent">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-accent">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-accent">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/account-deletion" className="hover:text-accent">
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MiniLands. All rights reserved. | LSAR Real
            World Assets Private Limited
          </p>
          <p className="text-xs text-slate-600">
            Investments involve risk. Returns are not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
