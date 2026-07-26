"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import {
  fallbackProperties,
  fetchWebsitePropertiesClient,
  type Property,
} from "@/lib/property-api";
import { getPlayStoreUrl } from "@/lib/site-config";

export default function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("commercial");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [properties, setProperties] = useState<Property[]>(fallbackProperties);
  const playStoreUrl = getPlayStoreUrl();

  useEffect(() => {
    let cancelled = false;
    fetchWebsitePropertiesClient().then((list) => {
      if (!cancelled) setProperties(list);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProperties = properties.filter(
    (property) => property.type === activeTab,
  );
  const totalSlides = Math.max(0, filteredProperties.length - 2);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % (totalSlides + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides + 1) % (totalSlides + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTabChange = (tab: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveTab(tab);
    setCurrentSlide(0);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const visibleProperties = filteredProperties.slice(
    currentSlide,
    currentSlide + 3,
  );

  return (
    <section className="section-shine overflow-hidden py-16 md:py-20">
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="section-heading mt-5">
            Discover Our <span className="text-accent">Featured Projects</span>
          </h2>
          <p className="section-subheading mx-auto mt-4 max-w-2xl">
            Curated residential and commercial opportunities with strong
            projected returns, trusted developers, and strategic locations.
          </p>
          <div className="gold-rule mb-8 mt-6" />

          {/* Tab Buttons */}
          <div className="mb-8 flex justify-center gap-4">
            <Button
              onClick={() => handleTabChange("residential")}
              disabled={isAnimating}
              className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === "residential"
                  ? "bg-accent text-background hover:bg-accent/90 transform scale-105"
                  : "bg-transparent border border-white/30 text-white hover:border-accent hover:text-accent hover:scale-105"
                }`}
            >
              Residential
            </Button>
            <Button
              onClick={() => handleTabChange("commercial")}
              disabled={isAnimating}
              className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === "commercial"
                  ? "bg-accent text-background hover:bg-accent/90 transform scale-105"
                  : "bg-transparent border border-white/30 text-white hover:border-accent hover:text-accent hover:scale-105"
                }`}
            >
              Commercial
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          {totalSlides > 0 && (
            <>
              <Button
                onClick={prevSlide}
                disabled={isAnimating}
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border-white/20 text-white hover:bg-accent hover:text-background hover:border-accent hover:scale-110 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextSlide}
                disabled={isAnimating}
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border-white/20 text-white hover:bg-accent hover:text-background hover:border-accent hover:scale-110 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}

          {/* Property Cards Container */}
          <div className="px-4 sm:px-8 lg:px-16 overflow-hidden">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${isAnimating
                  ? "transform translate-x-2 opacity-90"
                  : "transform translate-x-0 opacity-100"
                }`}
            >
              {visibleProperties.map((property, index) => (
                <div
                  key={`${property.id}-${property.name}`}
                  className="glass-panel overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-glow"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Property Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={
                        property.image ||
                        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                      }
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Returns Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 text-white px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-md border border-white/10">
                        {property.projectedReturns}
                      </span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6 space-y-4">
                    {/* Title and Location */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                        {property.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-white/50" />
                        <span className="text-white/60 text-sm">
                          {property.location}
                        </span>
                      </div>
                    </div>

                    {/* Key Metrics - Row Layout */}
                    <div className="bg-white/5 rounded-lg px-3 py-2">
                      <div className="flex justify-between items-center py-1">
                        <span className="text-white/60 text-sm">
                          Projected Returns
                        </span>
                        <span className="text-white font-medium text-sm">
                          {property.projectedReturns}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-white/60 text-sm">
                          Min Investment
                        </span>
                        <span className="text-white font-medium text-sm">
                          {property.minInvestment}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-white/60 text-sm">
                          Overall Project Cost
                        </span>
                        <span className="text-white font-medium text-sm">
                          {property.overallProjectCost}
                        </span>
                      </div>
                    </div>

                    {/* Property Type - Subtle */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        {property.type === "residential"
                          ? "Residential"
                          : "Commercial"}
                      </span>
                      <span className="text-white/40 text-xs">
                        {property.totalToken} Tokens
                      </span>
                    </div>

                    {/* View / Invest opens the Android app */}
                    <Button
                      asChild
                      className="w-full rounded-lg border border-accent/25 bg-accent/15 py-2 font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-slate-950"
                    >
                      <Link
                        href={playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View &amp; Invest in App
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>

          {/* Show message if no properties */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">
                No {activeTab} properties available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
