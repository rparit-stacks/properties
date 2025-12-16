 "use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import TrustSection from "@/components/trust-section";
import DubaiRealEstateSection from "@/components/dubai-real-estate-section";
import WhyBaytukumSection from "@/components/why-baytukum-section";
import HowItWorksSection from "@/components/how-it-works-section";
import FeaturedProjectsSection from "@/components/featured-projects-section";
import BlogsSection from "@/components/blogs";
import InvestorsResourcesSection from "@/components/investors-resources-section";
import TestimonialsSection from "@/components/testimonials-section";
import MeetVisionarySection from "@/components/meet-visionary-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ExpertPanelSection from "@/components/expertpanel";
import YouTubeVideosSection from "@/components/youtube";
import YouTubeShortsSection from "@/components/shorts";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MiniLands Logo"
              width={40}
              height={40}
              className="h-10 w-auto -mt-4"
            />
            <span
              className="text-accent font-semibold text-xl"
              style={{ color: "#eae8e9" }}
            >
              MiniLands
            </span>
          </div>
          <nav
            className="hidden md:flex items-center space-x-6 text-sm font-medium"
          >
            <Link href="/" className="text-foreground border-b-2 border-accent">
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/properties"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/expert"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Expert Panel
            </Link>
            <Link
              href="/blogs"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Blogs
            </Link>
            <Link
              href="/faq"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ's
            </Link>
            <Link
              href="/login"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/98">
            <div className="container py-3 flex flex-col space-y-2 text-sm font-medium">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-foreground">
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
              <Link
                href="/properties"
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/expert"
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                Expert Panel
              </Link>
              <Link
                href="/blogs"
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                Blogs
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                FAQ&apos;s
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background vector / gradient */}
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          >
            <div
              className="absolute -right-40 -top-40 w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-accent/10 blur-3xl"
            />
            <div
              className="absolute -left-40 bottom-0 w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-emerald-500/5 blur-3xl"
            />
          </div>

          <div className="container relative z-10 py-16 md:py-24 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
            {/* Left: Text */}
            <div className="lg:w-1/2 max-w-2xl space-y-6">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent">
                Fractional Real Estate • India
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Start Building Wealth
                <br className="hidden sm:block" />
                <span className="text-accent">With MIS</span>
              </h1>

              <p className="text-lg md:text-2xl text-accent font-medium">
                India’s most trusted fractional ownership platform
              </p>

              <p className="text-white/80 text-sm md:text-base max-w-xl">
                Invest from as low as <span className="font-semibold">Rupees One Lakh</span> in
                curated, professionally managed properties. Access real estate
                like an institution—without the complexity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black shadow-lg hover:bg-accent/90 transition-colors"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/#how-it-works"
                  className="text-sm font-medium text-white/80 hover:text-accent transition-colors"
                >
                  See how it works
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-xs md:text-sm text-white/60 pt-4">
                <span>SEBI-compliant structures</span>
                <span className="h-1 w-1 rounded-full bg-white/40 self-center" />
                <span>Expert asset management</span>
                <span className="h-1 w-1 rounded-full bg-white/40 self-center" />
                <span>Rental + appreciation upside</span>
              </div>
            </div>

            {/* Right: Main property image */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <Image
                src="/property.jpg"
                alt="Featured India property"
                width={1000}
                height={800}
                className="object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <TrustSection />
        <DubaiRealEstateSection />
        <WhyBaytukumSection />
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <YouTubeVideosSection />
        <YouTubeShortsSection />
        <BlogsSection />
        <FeaturedProjectsSection />
        <ExpertPanelSection />
        <InvestorsResourcesSection />
        <TestimonialsSection />
        <MeetVisionarySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
