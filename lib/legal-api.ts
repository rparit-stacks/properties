import { getApiBaseUrl } from "./site-config";

export type LegalPolicyPublic = {
  type: string;
  version: string;
  title: string;
  body: string;
  publishedAt?: string | null;
  updatedAt?: string | null;
};

export type LegalPolicySlug = "privacy" | "terms" | "refund";

export async function fetchPublishedLegalPolicy(
  slug: LegalPolicySlug,
): Promise<LegalPolicyPublic | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/legal/policies/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as LegalPolicyPublic;
  } catch {
    return null;
  }
}
