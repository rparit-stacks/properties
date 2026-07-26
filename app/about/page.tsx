import Image from 'next/image';
import ContactSection from '@/components/contact-section';

export default function AboutUsPage() {
  return (
    <div className="bg-transparent">
      {/* Hero-style intro similar to home */}
      <section className="section-shine py-16 md:py-20">
        <div className="container relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="eyebrow">About Minilands</span>
            <h1 className="section-heading leading-tight">
              Making Real Estate Investing Simple, Accessible &amp; Transparent
            </h1>
            <p className="section-subheading">
              Minilands is built to help everyday Indians own a share of high-quality real estate.
              Through fractional ownership, we turn premium residential properties into simple,
              digital investment opportunities—so you can start small and grow steadily.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/20 to-sky-500/10 shadow-glow">
              <Image
                src="/mail.google.jpg"
                alt="Minilands fractional co-ownership"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / How it helps (short, from home tone) */}
      <section className="section-shine py-16">
        <div className="container relative mx-auto max-w-5xl space-y-10 px-4">
          <div className="space-y-4 text-center">
            <h2 className="section-heading">Why Minilands Exists</h2>
            <p className="section-subheading mx-auto max-w-3xl">
              Traditionally, real estate has been reserved for the wealthy—high ticket sizes,
              complex paperwork, and long lock-ins. Minilands changes this by letting you invest
              from as low as ₹1 lakh in curated, professionally managed residential properties.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="glass-panel space-y-2 p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Start Small</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Invest with accessible ticket sizes instead of blocking huge capital in a single flat or plot.
              </p>
            </div>
            <div className="glass-panel space-y-2 p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Earn Smart</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Benefit from rental income and long-term appreciation while our team handles management and tenants.
              </p>
            </div>
            <div className="glass-panel space-y-2 p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Stay Informed</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Track your investments digitally with full transparency on returns, documents, and exit timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keep same contact form as home */}
      <ContactSection />
    </div>
  );
}
