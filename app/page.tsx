"use client";

import Image from "next/image";
import Link from "next/link";
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
import ExpertPanelSection from "@/components/expertpanel";
import YouTubeVideosSection from "@/components/youtube";
import YouTubeShortsSection from "@/components/shorts";
import AppDownloadSection from "@/components/app-download-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background vector / gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl md:h-[420px] md:w-[420px]" />
          <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl md:h-[420px] md:w-[420px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(254,204,87,0.12),transparent_40%)]" />

          {/* Soft vector accents */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute -right-10 top-10 hidden h-[420px] w-[420px] opacity-70 animate-float lg:block"
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src="/bg-vectors-hero-main.svg"
                alt="Decorative vector background"
                className="object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                width={420}
                height={420}
              />
            </div>

            <div
              className="absolute bottom-10 right-[8%] hidden h-[260px] w-[520px] opacity-60 animate-fade-in-up lg:block"
              style={{ animationDelay: "0.4s" }}
            >
              <Image
                src="/bg-vectors-hero-city.svg"
                alt="City skyline"
                width={520}
                height={260}
                className="object-cover mix-blend-screen"
              />
            </div>

            <div className="absolute bottom-16 left-4 hidden h-[160px] w-[220px] opacity-70 animate-slide-in-left md:left-10 md:block">
              <Image
                src="/bg-vectors-hero-left-shapes.svg"
                alt="Abstract shapes"
                className="object-contain"
                width={220}
                height={160}
              />
            </div>
          </div>
        </div>

        <div className="container relative z-10 flex flex-col items-center gap-10 py-16 md:py-24 lg:flex-row lg:py-28">
          {/* Left: Text */}
          <div className="max-w-2xl animate-fade-in-up space-y-6 lg:w-1/2">
            <h1
              className="animate-fade-in-up text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block">Start Building</span>
              <span className="block">
                <span className="text-[0.7em]">W</span>ealth{" "}
                <span className="text-[0.7em]">W</span>ith
              </span>
              <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent text-accent">
                MiniLands
              </span>
            </h1>

            <p
              className="animate-fade-in-up text-lg font-medium text-accent md:text-2xl"
              style={{ animationDelay: "0.4s" }}
            >
              India&apos;s Most Trusted Fractional Ownership Platform
            </p>

            <p
              className="animate-fade-in-up max-w-xl text-sm text-white/80 md:text-base"
              style={{ animationDelay: "0.6s" }}
            >
              Invest from as low as Rs. 1L | Easy Real Estate Access | Expert Managed |
              Smart Returns | Start Small, Grow Big
            </p>

            <div
              className="animate-fade-in-up flex flex-wrap items-center gap-4 pt-2"
              style={{ animationDelay: "0.8s" }}
            >
              <Link
                href="/properties"
                className="shine-button hover:scale-105"
              >
                Explore Projects
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                See how it works
              </Link>
            </div>

            <div
              className="animate-fade-in-up flex flex-nowrap gap-4 pt-4 text-xs text-white/60 md:text-sm"
              style={{ animationDelay: "1s" }}
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                SEBI-Compliant Structures
              </span>
              <span className="h-1 w-1 self-center rounded-full bg-white/40" />
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
                  style={{ animationDelay: "0.3s" }}
                />
                Expert Asset Management
              </span>
              <span className="h-1 w-1 self-center rounded-full bg-white/40" />
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
                  style={{ animationDelay: "0.6s" }}
                />
                Upside Appreciation + Rental
              </span>
            </div>
          </div>

          {/* Right: Main property image */}
          <div className="mt-10 flex justify-center animate-slide-in-right lg:mt-0 lg:w-1/2">
            <div className="group relative">
              <div className="absolute -inset-1 animate-pulse-slow rounded-xl bg-gradient-to-r from-accent/60 to-sky-400/30 opacity-60 blur-lg transition-opacity group-hover:opacity-90" />
              <Image
                src="/mail.google.jpg"
                alt="Featured India property"
                width={1000}
                height={800}
                className="relative transform rounded-xl border border-white/10 object-cover shadow-panel transition-transform group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <DubaiRealEstateSection />
      <WhyBaytukumSection />
      <HowItWorksSection />
      <YouTubeVideosSection />
      <YouTubeShortsSection />
      <BlogsSection />
      <FeaturedProjectsSection />
      <ExpertPanelSection />
      <InvestorsResourcesSection />
      <TestimonialsSection />
      <MeetVisionarySection />
      <AppDownloadSection />
      <ContactSection />
    </>
  );
}
