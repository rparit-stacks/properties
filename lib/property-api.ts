import { getApiBaseUrl } from "./site-config";
import {
  properties as fallbackProperties,
  type Property,
} from "./properties";

export type { Property };

type BackendSummary = {
  id: string;
  slug?: string | null;
  name: string;
  propertyType?: string | null;
  locationDisplay?: string | null;
  city?: string | null;
  primaryImageUrl?: string | null;
  minInvestmentAmount?: number | null;
  annualRoi?: number | null;
  totalTarget?: number | null;
  totalShares?: number | null;
  status?: string | null;
};

function formatInr(amount?: number | null): string {
  if (amount == null || Number.isNaN(amount)) return "On request";
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} Lakh`;
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

function formatPercent(value?: number | null): string {
  if (value == null || Number.isNaN(value)) return "—";
  return `${Number(value).toFixed(2)}%`;
}

function mapBackendProperty(item: BackendSummary, index: number): Property {
  const type =
    item.propertyType === "RESIDENTIAL" || item.propertyType === "LAND"
      ? "residential"
      : "commercial";

  return {
    id: index + 1,
    name: item.name,
    location: item.locationDisplay || item.city || "",
    projectedReturns: formatPercent(item.annualRoi),
    minInvestment: formatInr(item.minInvestmentAmount),
    type,
    image: item.primaryImageUrl?.trim() || "/property.jpg",
    overallProjectCost: formatInr(item.totalTarget),
    totalToken: item.totalShares != null ? String(item.totalShares) : "—",
    status: item.status === "COMING_SOON" ? "Upcoming" : "Launched",
  };
}

async function loadFromBackend(init?: RequestInit): Promise<Property[] | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/public/properties`, init);
    if (!res.ok) return null;
    const data = (await res.json()) as BackendSummary[];
    if (!Array.isArray(data) || data.length === 0) return null;
    return data.map(mapBackendProperty);
  } catch {
    return null;
  }
}

/**
 * Prefer live backend catalog. If empty / unreachable, keep the site's
 * curated fallback listings (Apollo, Solar, Teakwood, etc.).
 */
export async function getWebsiteProperties(): Promise<Property[]> {
  const live = await loadFromBackend({ next: { revalidate: 300 } });
  return live ?? fallbackProperties;
}

/** Browser-safe variant for client components (same fallback behavior). */
export async function fetchWebsitePropertiesClient(): Promise<Property[]> {
  const live = await loadFromBackend({ cache: "no-store" });
  return live ?? fallbackProperties;
}

export { fallbackProperties };
