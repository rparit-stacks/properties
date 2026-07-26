import Image from "next/image";

export default function ExpertPanelSection() {
  const experts = [
    {
      name: "Sanjay Saxena",
      title: "Digital Finance Advisor & MSME Advocate",
      company: "Visionary leader in India’s digital payments ecosystem",
      image: "/expert/sanjay.png",
      bio: "Chartered Accountant and financial executive who helped shape India’s digital payments landscape through leadership roles at NPCI, UIDAI and Paytm Payments Bank.",
      expertise: [
        "Fintech Leadership",
        "Digital Payments Innovation",
        "MSME Growth & Policy",
      ],
    },
    {
      name: "Priyanshu Khare",
      title: "High Court Advocate – Property & Land Disputes",
      company: "High Court Advocate – Civil & Property Matters",
      image: "/expert/priyanshu.png",
      bio: "Experienced High Court Advocate specialising in land and property disputes, providing clear guidance on complex title and ownership issues.",
      expertise: [
        "Property & Land Disputes",
        "Civil Litigation",
        "Title & Ownership Matters",
      ],
    },
    {
      name: "Shashikant Lasar",
      title: "Real Estate Advisor & Asset Management Expert",
      company: "Real Estate Advisory & Asset Management – Indore",
      image: "/expert/Shashikant%20.png",
      bio: "Seasoned Indore-based real estate professional helping clients with property advisory, asset management and portfolio-driven real estate solutions.",
      expertise: [
        "Real Estate Advisory",
        "Asset & Portfolio Management",
        "Investment Planning",
      ],
    },
    {
      name: "Rohit Parit",
      title: "Technology Consultant & Backend Systems Architect",
      company: "Java & Spring Boot | Scalable Backend Systems",
      image: "/expert/rohit.png",
      bio: "Backend systems architect focused on secure, scalable Java & Spring Boot platforms for fintech, payments and real-time applications.",
      expertise: [
        "Java & Spring Boot Architecture",
        "Fintech & Payment Systems",
        "Scalable Backend & Security (JWT, RBAC, Kafka)",
      ],
    },
  ];

  return (
    <section className="section-shine py-16 md:py-20">
      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Advisors</span>
          <h2 className="section-heading mt-5">Our Expert Panel</h2>
          <div className="gold-rule mt-6 mb-6" />
          <p className="section-subheading">
            Meet the industry leaders and specialists who guide MiniLands&apos;
            vision and ensure excellence in real estate crowdfunding innovation.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert, index) => (
            <div key={index} className="group">
              <div className="glass-panel h-full p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-accent/30 shadow-lg transition-colors duration-300 group-hover:border-accent md:h-36 md:w-36">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="mb-1 text-lg font-semibold text-white">
                    {expert.name}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-accent">
                    {expert.title}
                  </p>
                  <p className="mb-4 text-xs text-slate-400">{expert.company}</p>

                  <p className="mb-4 text-sm leading-relaxed text-slate-300">
                    {expert.bio}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {expert.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-panel mx-auto max-w-4xl p-8 shadow-panel">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Collective Expertise
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              Our expert panel brings together over 60 years of combined
              experience in real estate, fintech, regulatory compliance, and
              blockchain technology. Together, they ensure MiniLands delivers
              innovative, secure, and compliant investment opportunities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-accent text-2xl font-bold">60+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-bold">150+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-bold">$2B+</div>
                <div className="text-gray-400 text-sm">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-bold">25+</div>
                <div className="text-gray-400 text-sm">Industry Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
