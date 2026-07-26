import {
  TrendingUp,
  Building,
  Users,
  Globe,
  MapPin,
  DollarSign,
  Shield,
  Landmark,
  Star,
  Receipt,
} from "lucide-react";

export default function DubaiRealEstateSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "India’s Economy Drives Success",
      description: "Strong economy fuels real estate growth.",
    },
    {
      icon: Building,
      title: "Policy Powers Fractional Boom",
      description: "Reforms make property investing safer.",
    },
    {
      icon: Users,
      title: "Urban Growth Sparks Demand",
      description: "City expansion boosts shared ownership.",
    },
    {
      icon: Globe,
      title: "Business Hubs Attract Investors",
      description: "Prime locations welcome global buyers.",
    },
    {
      icon: DollarSign,
      title: "High Yields Set Apart",
      description: "Steady, strong returns for investors.",
    },
    {
      icon: MapPin,
      title: "Top Cities, Growth Zones",
      description: "Key markets show rising potential.",
    },
    {
      icon: Shield,
      title: "Secure, Transparent Investments",
      description: "Regulated platforms build investor trust.",
    },
    {
      icon: Star,
      title: "Global Investors Choose India",
      description: "Worldwide backing for fractional assets.",
    },
    {
      icon: Landmark,
      title: "Premium Properties, Small Shares",
      description: "Big dreams via small investments.",
    },
    {
      icon: Receipt,
      title: "Easy Start, Tax Perks",
      description: "Simple entry with tax benefits.",
    },
  ];

  return (
    <section className="section-shine relative py-16 md:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{ backgroundImage: "url('/lux.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Market Edge</span>
          <h2 className="section-heading mt-5">
            Why India’s Fractional Real Estate is Outperforming Global Markets
          </h2>
          <div className="gold-rule mt-6" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-panel flex items-start gap-4 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/15">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
