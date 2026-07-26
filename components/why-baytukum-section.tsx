import {
  DollarSign,
  Users,
  Smartphone,
  Eye,
  TrendingUp,
  Shield,
  Banknote,
  BarChart3,
  PieChart,
} from "lucide-react";

export default function WhyBaytukumSection() {
  const advantages = [
    {
      icon: DollarSign,
      title: "Low Investment, Big Opportunities",
      description: "Start with just Rs. 10L , accessible to all.",
    },
    {
      icon: Users,
      title: "Professionally Managed Properties",
      description: "Experts handle selection, leasing, and maintenance.",
    },
    {
      icon: Smartphone,
      title: "Fully Digital, Seamless Experience",
      description: "Track and manage investments anytime, anywhere.",
    },
    {
      icon: Eye,
      title: "Transparent, Hassle-Free Process",
      description: "Clear, honest updates on every investment step.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Returns, Steady Growth",
      description: "Earn rental income plus capital appreciation.",
    },
    {
      icon: Shield,
      title: "Safe, Secure Investment Platform",
      description: "Top-tier security for your peace of mind.",
    },
    {
      icon: Banknote,
      title: "Effortless Passive Income",
      description: "Earn without dealing with property hassles.",
    },
    {
      icon: BarChart3,
      title: "Long-Term Wealth Creation",
      description: "Benefit from rising real estate values over time.",
    },
    {
      icon: PieChart,
      title: "Diversify Easily, Minimize Risk",
      description: "Build a multi-property portfolio with small amounts.",
    },
  ];

  return (
    <section className="section-shine py-16 md:py-20">
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Why MiniLands</span>
          <h2 className="section-heading mt-5">Why Invest with MiniLands?</h2>
          <p className="mt-4 text-lg font-medium text-accent">
            Secure, transparent, and professionally managed for steady growth.
          </p>
          <div className="gold-rule mt-6" />
          <p className="section-subheading mt-6">
            Step into India’s booming real estate market with fractional
            ownership—affordable, hassle-free, and built for long-term wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="glass-panel group p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-slate-950">
                <advantage.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{advantage.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
