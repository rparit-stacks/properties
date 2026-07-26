"use client";

import { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPropertyById } from "@/lib/properties";
import { getPlayStoreUrl } from "@/lib/site-config";

interface PropertyDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const router = useRouter();
  const { id } = use(params);
  const propertyId = Number(id);
  const property = getPropertyById(propertyId);
  const playStoreUrl = getPlayStoreUrl();

  useEffect(() => {
    if (!property) {
      router.replace("/properties");
    }
  }, [property, router]);

  if (!property) return null;

  return (
    <div className="bg-background text-white">
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            className="px-0 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <Link href="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="relative h-64 w-full overflow-hidden rounded-xl border border-white/10 md:h-80 lg:h-[420px]">
            <Image src={property.image} alt={property.name} fill className="object-cover" />
          </div>

          <div className="space-y-5">
            <div>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">{property.name}</h1>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4" />
                <span>{property.location || "Location to be announced"}</span>
              </div>
              <p className="mt-3 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {property.type === "residential" ? "Residential" : "Commercial"} Project
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1 rounded-lg bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">Project Return / ROI</p>
                <p className="text-lg font-semibold">{property.projectedReturns}</p>
              </div>
              <div className="space-y-1 rounded-lg bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">Minimum Investment</p>
                <p className="text-lg font-semibold">{property.minInvestment}</p>
              </div>
              <div className="space-y-1 rounded-lg bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">Overall Project Cost</p>
                <p className="text-lg font-semibold">{property.overallProjectCost}</p>
              </div>
              <div className="space-y-1 rounded-lg bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">Total Tokens</p>
                <p className="text-lg font-semibold">{property.totalToken}</p>
              </div>
            </div>

            <div className="rounded-lg bg-white/5 p-4">
              <h2 className="mb-2 text-base font-semibold">Why invest in this project?</h2>
              <p className="text-sm text-white/70">
                This project is curated as part of our exclusive portfolio, focusing on strong
                potential returns, strategic location advantages and structured token-based entry so
                you can participate with smaller ticket sizes while accessing large,
                institutional-grade opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild className="flex-1 bg-accent text-black hover:bg-accent/90">
                <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                  Invest in App
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-white/30 text-white hover:bg-white/10"
              >
                <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                  Download App
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
