'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Award, Users, TrendingUp, Shield, ChevronRight } from 'lucide-react';

type Expert = {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  bio: string;
  fullBio: string;
  expertise: string[];
  achievements: string[];
  education: string;
  experience: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
};

interface ExpertModalProps {
  expert: Expert;
  onClose: () => void;
}

export default function ExpertPanelPage() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  const experts: Expert[] = [
    {
      id: 1,
      name: "Sanjay Saxena",
      title: "Digital Finance Advisor & MSME Advocate",
      company: "Visionary leader in India’s digital payments ecosystem",
      image: "/expert/sanjay.png",
      bio: "Chartered Accountant and financial executive who helped shape India’s digital payments landscape through leadership roles at NPCI, UIDAI and Paytm Payments Bank.",
      fullBio:
        "Sanjay Saxena is a visionary financial executive and Chartered Accountant with a defining role in shaping India’s digital payments ecosystem. As a founding member and former CFO of institutions such as NPCI and UIDAI, and a key leader at Paytm Payments Bank, he has been instrumental in driving national-scale initiatives including UPI, RuPay and FASTag. His work has transformed how India transacts digitally and strengthened the financial infrastructure for millions of individuals and MSMEs across the country.",
      expertise: [
        "Fintech Leadership",
        "Digital Payments Innovation",
        "MSME Growth & Policy",
      ],
      achievements: [
        "Founding leadership roles at NPCI, UIDAI and Paytm Payments Bank",
        "Instrumental in rollout of UPI, RuPay and FASTag in India",
        "Advisor to MSMEs on digital finance adoption and growth",
      ],
      education: "Chartered Accountant (CA)",
      experience: "20+ years",
      email: "",
      linkedin: "",
      twitter: "",
    },
    {
      id: 2,
      name: "Priyanshu Khare",
      title: "High Court Advocate – Property & Land Disputes",
      company: "High Court Advocate – Civil & Property Matters",
      image: "/expert/priyanshu.png",
      bio: "Experienced High Court Advocate specialising in land and property disputes, providing clear legal guidance on complex title and ownership issues.",
      fullBio:
        "Priyanshu Khare is an experienced High Court Advocate specialising in land and property dispute matters. Known for providing clear, practical legal guidance on complex title, ownership and civil litigation cases, he represents clients before civil courts and the High Court with a detail-oriented approach and strong courtroom presence. Priyanshu focuses on ensuring fair resolutions and robust protection of property rights with integrity and professionalism.",
      expertise: [
        "Property & Land Disputes",
        "Civil Litigation",
        "Title & Ownership Matters",
      ],
      achievements: [
        "Handled numerous complex land and property dispute cases",
        "Trusted advisor on title and ownership verification",
        "Recognised for clear, client-centric legal counsel",
      ],
      education: "LL.B, Advocate – High Court",
      experience: "10+ years",
      email: "",
      linkedin: "",
      twitter: "",
    },
    {
      id: 3,
      name: "Shashikant Lasar",
      title: "Real Estate Advisor & Asset Management Expert",
      company: "Real Estate Advisory & Asset Management – Indore",
      image: "/expert/Shashikant%20.png",
      bio: "Seasoned real estate professional from Indore helping investors with property advisory, asset management and portfolio-driven real estate solutions.",
      fullBio:
        "Shashikant Lasar is a seasoned real estate professional with over eight years of experience in the Indore market. He specialises in property advisory, asset management and portfolio-driven real estate solutions, helping clients take informed investment decisions and manage their property assets efficiently. Through strategic and data-backed planning, Shashikant focuses on optimising personal financial portfolios via carefully curated real estate opportunities.",
      expertise: [
        "Real Estate Advisory",
        "Asset & Portfolio Management",
        "Investment Planning",
      ],
      achievements: [
        "Advised on numerous residential and commercial transactions in Indore",
        "Helps investors build long-term, goal-based real estate portfolios",
        "Known for practical, data-backed investment recommendations",
      ],
      education: "Real Estate & Asset Management Professional",
      experience: "8+ years",
      email: "",
      linkedin: "",
      twitter: "",
    },
    {
      id: 4,
      name: "Rohit Parit",
      title: "Technology Consultant & Backend Systems Architect",
      company: "Java & Spring Boot | Scalable Backend Systems",
      image: "/expert/rohit.png",
      bio: "Results-driven technology expert specialising in Java-based backend systems, secure APIs and scalable platforms for fintech, payments and service-based products.",
      fullBio:
        "Rohit Parit is a results-driven technology consultant and backend systems architect specialising in Java-based backend systems and full-stack application development. He has experience building secure, scalable and high-performance platforms for fintech, payments and service-based products, including enterprise-grade systems, banking migrations, payment integrations and real-time applications. Known for strong system design, API architecture and security-first development, Rohit works extensively with Spring Boot, microservices and Kafka-driven architectures to turn business vision into reliable technology solutions.",
      expertise: [
        "Java & Spring Boot Architecture",
        "Fintech & Payment Systems",
        "Scalable Backend & Security (JWT, RBAC, Kafka)",
      ],
      achievements: [
        "Designed and implemented secure, scalable Java/Spring Boot backends for fintech and payment platforms",
        "Led backend development for enterprise banking migrations and payment integrations",
        "Specialises in microservices, Kafka and security-first (JWT, RBAC) architecture design",
      ],
      education: "B.C.A/M.C.A (Backend Engineering Focus)",
      experience: "5+ years",
      email: "",
      linkedin: "",
      twitter: "",
    },
  ];

  const stats = [
    { icon: Users, value: "60+", label: "Years Combined Experience" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: TrendingUp, value: "$2B+", label: "Assets Under Management" },
    { icon: Shield, value: "25+", label: "Industry Awards" }
  ];

  const ExpertModal = ({ expert, onClose }: ExpertModalProps) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-6">
              <Image
                src={expert.image}
                alt={expert.name}
                width={100}
                height={100}
                className="rounded-full border-2 border-accent"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{expert.name}</h3>
                <p className="text-accent font-medium">{expert.title}</p>
                <p className="text-gray-400">{expert.company}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-xl font-semibold text-white mb-4">Biography</h4>
              <p className="text-gray-300 leading-relaxed mb-6">{expert.fullBio}</p>

              <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
              <ul className="space-y-2 mb-6">
                {expert.achievements.map((achievement: string, index: number) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Details</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white ml-2">{expert.experience}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Education:</span>
                    <span className="text-white ml-2">{expert.education}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((area: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero + Stats */}
      <section className="pt-10 md:pt-12 pb-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Expert
              <span className="text-accent"> Panel</span>
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Meet the industry leaders and specialists who guide MiniLands' vision and ensure excellence
              in real estate crowdfunding innovation.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10">
                  <stat.icon className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300" size={48} />
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Rows - Alternating Layout */}
      <section className="pb-16 px-4">
        <div className="container max-w-7xl mx-auto">
              <div className="space-y-16">
            {experts.map((expert, index) => (
              <div key={expert.id} className="group">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Image Section */}
                      <div className={`relative ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                        <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-2xl">
                          <Image
                            src={expert.image}
                            alt={expert.name}
                            fill
                            className="object-cover rounded-2xl border-2 border-white/20 group-hover:border-accent/50 transition-all duration-300"
                          />
                        </div>
                      </div>
                  </div>

                      {/* Details Section */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {expert.name}
                      </h2>
                      <p className="text-accent font-semibold text-lg mb-1">
                        {expert.title}
                      </p>
                      <p className="text-gray-400 mb-6">{expert.company}</p>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {expert.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {expert.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-accent/20 text-accent text-sm rounded-full border border-accent/30 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Experience & Education */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-1">Experience</h4>
                        <p className="text-gray-400 text-sm">{expert.experience}</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-1">Education</h4>
                        <p className="text-gray-400 text-sm">{expert.education}</p>
                      </div>
                    </div>

                      {/* Action Button */}
                      <button
                        onClick={() => setSelectedExpert(expert)}
                        className="bg-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                      >
                        View Full Profile
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Collective Expertise Section */}
      <section className="py-16 px-4 border-t border-white/20">
        <div className="container max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Collective Expertise & Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                Our expert panel brings together over 60 years of combined experience in real estate,
                fintech, regulatory compliance, and blockchain technology. Together, they ensure MiniLands
                delivers innovative, secure, and compliant investment opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Strategic Oversight</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our experts provide strategic guidance on market opportunities, risk assessment,
                  and innovation roadmaps. They ensure every investment opportunity meets the highest
                  standards of due diligence and market viability.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Technology Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Leveraging cutting-edge blockchain technology and fintech solutions, our panel
                  drives technological innovation that makes real estate investment more accessible,
                  transparent, and efficient for all participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Connect with Our Experts
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Have questions about our investment strategies or want to learn more about our approach?
            Our expert panel is available for consultation and guidance.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center bg-accent text-black px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Expert Modal */}
      {selectedExpert && (
        <ExpertModal
          expert={selectedExpert}
          onClose={() => setSelectedExpert(null)}
        />
      )}
    </div>
  );
}
