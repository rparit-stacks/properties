import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as lucideReact from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: lucideReact.Search,
      title: "High-Quality, Vetted Assets",
      description:
        "Minilands curates premium real estate across India, carefully selected for rental yield and capital growth.",
    },
    {
      number: "02",
      icon: lucideReact.FileText,
      title: "Total Investment Transparency",
      description:
        "You receive full access to property details, legal documents, financials, and risk reports with complete clarity.",
    },
    {
      number: "03",
      icon: lucideReact.CreditCard,
      title: "Secure, Investor-Friendly Onboarding",
      description:
        "Minilands offers a secure, seamless, digital onboarding process to make investing simple and fully transparent.",
    },
    {
      number: "04",
      icon: lucideReact.Home,
      title: "End-to-End Acquisition Support",
      description:
        "Minilands manages legal formalities, due diligence, and ownership transfer, ensuring a smooth, hassle-free acquisition process.",
    },
    {
      number: "05",
      icon: lucideReact.Settings,
      title: "Professional Asset Management",
      description:
        "Experienced professionals handle tenant management, property maintenance, and daily operations to ensure optimal rental performance..",
    },
    {
      number: "06",
      icon: lucideReact.DollarSign,
      title: "Consistent, Timely Returns",
      description:
        "Rental payouts are calculated accurately, credited directly to your account, and fully transparent for all investors.",
    },
    {
      number: "07",
      icon: lucideReact.TrendingUp,
      title: "Maximized Exit Value ",
      description:
        "Minilands ensures profitable, timely exits by strategically positioning your asset for maximum market value..",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-white/20 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How does MiniLands work?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            High-Quality, Vetted Assets
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-12 md:space-y-24">
          {/* Curved connecting path - show only on md+ for better mobile UX */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 800 1800"
          >
            <path
              d="M420 50 Q620 150 420 250 Q220 350 488 450 Q620 550 420 650 Q220 750 420 850 Q620 950 420 1050 Q220 1150 420 1250 Q620 1350 420 1450 Q220 1550 420 1650"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              className="opacity-60"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fecc57" />
                <stop offset="50%" stopColor="#fecc57" />
                <stop offset="100%" stopColor="#fecc57" />
              </linearGradient>
            </defs>
          </svg>

          {/* Start / End dots only on md+ */}
          <div className="absolute left-1/2 top-12 z-10 hidden h-4 w-4 -translate-x-1 rounded-full bg-accent md:block"></div>
          <div className="absolute bottom-12 left-1/2 z-10 hidden h-4 w-4 -translate-x-1 rounded-full bg-accent md:block"></div>

          <div className="relative z-20 space-y-10 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex items-center ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  } justify-center`}
                >
                  <div
                    className={`flex w-full max-w-lg items-stretch gap-4 md:gap-8 md:items-center ${
                      isEven ? "" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Step number - Changed from green to accent color */}
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-accent text-xl font-bold text-background shadow-lg md:h-16 md:w-16">
                      {step.number}
                    </div>

                    {/* Content card */}
                    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4 shadow-xl md:p-6">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background md:h-12 md:w-12">
                          <step.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-semibold text-gray-900 md:text-xl">
                            {step.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/#contact">
            <Button className="bg-accent text-background hover:bg-accent/90 font-semibold px-8 py-3 text-lg">
              Sign Up for Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
