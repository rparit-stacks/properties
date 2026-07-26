"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Salama Bawazeer",
      role: "Student Investor",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      text: "I am a student and I can't purchase a property on my own, so I invested from my savings and now I own part of the property, the value of which increases over time and gives me a monthly rental income. I am excited to see the profit from the sale.",
      rating: 5,
    },
    {
      id: 2,
      name: "Bushra Bawazeer",
      role: "Professional Investor",
      image: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg",
      text: "Trust in MiniLands and invest is the simplicity of the investment process, transparency in information and transactions, and their constant availability, 24 hours a day to answer any question, even if it is simple.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ahmed Al Mansouri",
      role: "Business Owner",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      text: "MiniLands has revolutionized my investment strategy. The platform's transparency and professional management have given me confidence in real estate investing. The returns have exceeded my expectations.",
      rating: 5,
    },
    {
      id: 4,
      name: "Fatima Al Zahra",
      role: "Working Professional",
      image: "https://images.pexels.com/photos/1181528/pexels-photo-1181528.jpeg",
      text: "As a working professional, I appreciate how MiniLands handles everything for me. From property selection to rental management, they've made real estate investment truly passive and profitable.",
      rating: 5,
    },
    {
      id: 5,
      name: "Omar Hassan",
      role: "First-time Investor",
      image: "https://images.pexels.com/photos/1181530/pexels-photo-1181530.jpeg",
      text: "The minimum investment amount made it possible for me to start my real estate journey. Now I have a diversified portfolio and steady rental income. MiniLands's expertise is unmatched.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const current = testimonials[currentTestimonial];

  return (
    <section className="section-shine py-16 md:py-20">
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-heading mt-5">Hear from Our Satisfied Investors</h2>
          <div className="gold-rule mt-6" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="glass-panel relative overflow-hidden p-8 shadow-panel md:p-12">
            <Quote className="absolute right-6 top-6 h-16 w-16 text-accent/20" />

            <div
              key={currentTestimonial}
              className={`transition-all duration-500 ease-in-out ${
                isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:items-start">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-accent/30 bg-slate-800">
                  <Image src={current.image} alt={current.name} fill className="object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="mb-1 text-xl font-bold text-white">{current.name}</h4>
                  <p className="mb-3 text-slate-400">{current.role}</p>
                  <div className="flex items-center justify-center gap-1 md:justify-start">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-center text-lg italic leading-relaxed text-slate-300 md:text-left">
                &ldquo;{current.text}&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              onClick={prevTestimonial}
              disabled={isAnimating}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-white/20 bg-slate-950/60 text-white hover:border-accent hover:bg-accent hover:text-slate-950"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => {
                    if (!isAnimating && index !== currentTestimonial) {
                      setIsAnimating(true);
                      setCurrentTestimonial(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "w-8 bg-accent"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              disabled={isAnimating}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-white/20 bg-slate-950/60 text-white hover:border-accent hover:bg-accent hover:text-slate-950"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              {currentTestimonial + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
