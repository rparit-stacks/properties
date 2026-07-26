"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Home } from "lucide-react";
import {
  fallbackProperties,
  fetchWebsitePropertiesClient,
  type Property,
} from "@/lib/property-api";
import { getPlayStoreUrl } from "@/lib/site-config";

export default function PropertiesPage() {
  const playStoreUrl = getPlayStoreUrl();
  const [properties, setProperties] = useState<Property[]>(fallbackProperties);

  useEffect(() => {
    let cancelled = false;
    fetchWebsitePropertiesClient().then((list) => {
      if (!cancelled) setProperties(list);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const residentialProperties = properties.filter((p) => p.type === "residential");
  const commercialProperties = properties.filter((p) => p.type === "commercial");

  const renderPropertyCards = (propertyList: Property[]) => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {propertyList.map((property, index) => (
        <div
          key={`${property.id}-${property.name}`}
          className="glass-panel group overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-glow"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative h-40 overflow-hidden">
            <Image
              src={
                property.image ||
                "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
              }
              alt={property.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="space-y-3 p-4">
            <div>
              <h3 className="mb-1 line-clamp-1 text-lg font-semibold leading-tight text-white">
                {property.name}
              </h3>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-white/50" />
                <span className="text-xs text-white/60">{property.location}</span>
              </div>
            </div>

            <div className="space-y-2 rounded-lg bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Min Investment</span>
                <span className="text-sm font-semibold text-white">{property.minInvestment}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Overall Project Cost</span>
                <span className="text-sm font-semibold text-white">
                  {property.overallProjectCost}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Total Tokens</span>
                <span className="text-sm font-semibold text-white">{property.totalToken}</span>
              </div>
            </div>

            <Button
              asChild
              className="w-full rounded-lg border border-accent/25 bg-accent/15 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-slate-950"
            >
              <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                View &amp; Invest in App
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="bg-background">
        <div className="container mx-auto max-w-7xl px-4 pb-6 pt-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Our Projects</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Discover premium real estate investment opportunities with guaranteed returns
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        {residentialProperties.length > 0 && (
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <Home className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold text-white">Residential Properties</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            {renderPropertyCards(residentialProperties)}
          </div>
        )}

        {commercialProperties.length > 0 && (
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Building className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold text-white">Commercial Properties</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            {renderPropertyCards(commercialProperties)}
          </div>
        )}
      </div>
    </div>
  );
}
