import Image from "next/image";

export default function MeetVisionarySection() {
  return (
    <section className="section-shine py-16 md:py-20">
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Leadership</span>
          <h2 className="section-heading mt-5">Meet Our Visionary</h2>
          <div className="gold-rule mt-6" />
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
          <div className="relative aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-2xl border border-accent/20 shadow-glow shadow-panel">
            <Image
              src="/0.jpg"
              alt="Founder Shashikant Lasar"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 800px"
              priority
            />
          </div>

          <div className="w-full space-y-5 text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <Image src="/logo.png" alt="MiniLands Logo" width={32} height={32} />
              <span className="text-lg font-semibold text-white">
                Mini<span className="text-accent">Lands</span>
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.18em] text-accent/90">
                Founder&apos;s Vision – Shashikant Lasar
              </p>
              <h3 className="text-2xl font-semibold leading-snug text-white md:text-3xl">
                Founder, MiniLands &amp; Lasar Real World Assets Pvt. Ltd.
              </h3>
            </div>

            <div className="glass-panel p-5 shadow-panel md:p-6">
              <p className="whitespace-pre-line text-center text-sm leading-relaxed text-slate-200 md:text-base">
                {`"My dream has always been to make property investment accessible to everyone—not just to the wealthy elite. Traditionally, it is the rich who invest in real estate and benefit from capital appreciation. I want this opportunity to reach people from lower-income groups as well.\n\nImagine a world where even a housewife, with her careful savings, can confidently invest in premium, A-grade properties. Imagine making high-quality real estate accessible to every individual, regardless of their financial background.\n\nMiniLands is the platform that will make this possible. Through our fractional real estate model, we are building a future where anyone can enter the property market with ease—completely digital, fully transparent, with simple entry and simple exit.\n\nWe are here to create a new era of inclusive wealth-building through real estate. This is not just a business—it's a mission to empower the everyday investor.\n\nWelcome to MiniLands. Mini Steps Major Gains."`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
