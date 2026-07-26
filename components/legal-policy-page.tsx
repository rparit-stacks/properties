import Link from "next/link";
import { fetchPublishedLegalPolicy, type LegalPolicySlug } from "@/lib/legal-api";

type Props = {
  slug: LegalPolicySlug;
  fallbackTitle: string;
  subtitle: string;
};

export default async function LegalPolicyPage({ slug, fallbackTitle, subtitle }: Props) {
  const policy = await fetchPublishedLegalPolicy(slug);

  const paragraphs =
    policy?.body
      ?.split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean) ?? [];

  return (
    <div>
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Legal
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {policy?.title || fallbackTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
            {policy?.version ? <span>Version: {policy.version}</span> : null}
            {policy?.publishedAt ? (
              <>
                <span aria-hidden="true">•</span>
                <span>
                  Published:{" "}
                  {new Date(policy.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {!policy ? (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-sm leading-7 text-amber-100">
            <p className="font-semibold text-white">{fallbackTitle} temporarily unavailable</p>
            <p className="mt-2">
              We could not load the latest document from our servers. Please try again shortly, or
              email{" "}
              <a href="mailto:help.minilands@gmail.com" className="text-accent hover:underline">
                help.minilands@gmail.com
              </a>
              .
            </p>
          </div>
        ) : (
          <article className="space-y-6 text-base leading-7 text-gray-300">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
              <p className="font-medium text-white">Related policies</p>
              <div className="flex flex-wrap gap-3">
                {slug !== "privacy" && (
                  <Link href="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </Link>
                )}
                {slug !== "terms" && (
                  <Link href="/terms" className="text-accent hover:underline">
                    Terms & Conditions
                  </Link>
                )}
                {slug !== "refund" && (
                  <Link href="/refund" className="text-accent hover:underline">
                    Refund Policy
                  </Link>
                )}
                <Link href="/account-deletion" className="text-accent hover:underline">
                  Account deletion
                </Link>
              </div>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
