"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { getPlayStoreUrl } from "@/lib/site-config";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/properties", label: "Projects" },
  { href: "/expert", label: "Expert Panel" },
  { href: "/blogs", label: "Blogs" },
  { href: "/faq", label: "FAQ's" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const playStoreUrl = getPlayStoreUrl();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="MiniLands Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="text-xl font-semibold text-white">
            Mini<span className="text-accent">Lands</span>
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href) ? "site-nav-link-active" : "site-nav-link"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-button hidden gap-2 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Download App
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-accent/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="container flex flex-col space-y-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive(item.href)
                    ? "text-sm font-medium text-white"
                    : "text-sm font-medium text-slate-400 hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="shine-button mt-2 gap-2"
            >
              <Download className="h-4 w-4" />
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
