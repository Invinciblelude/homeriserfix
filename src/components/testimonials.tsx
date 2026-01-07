"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael & Sarah Chen",
    role: "Homeowners",
    location: "Napa Valley",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "From the initial consultation to the final walkthrough, every interaction exceeded our expectations. They transformed our vision into reality with precision and care that's rarely seen in this industry.",
    project: "Custom Home Build",
  },
  {
    id: 2,
    name: "Jennifer Martinez",
    role: "Property Developer",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "I've worked with many contractors over the years, but Home Riser Fix stands apart. Their attention to detail, transparent communication, and unwavering commitment to quality make them my go-to team for every project.",
    project: "Multi-Unit Renovation",
  },
  {
    id: 3,
    name: "Robert Thompson",
    role: "Architect",
    location: "Oakland",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "As an architect, I'm particular about execution. Home Riser Fix doesn't just meet specifications—they elevate them. Their craftsmanship brings designs to life in ways that consistently impress my clients.",
    project: "Collaborative Builds",
  },
  {
    id: 4,
    name: "Lisa & David Wong",
    role: "Homeowners",
    location: "Sacramento",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Our deck project was completed on time, on budget, and beyond expectations. The team was respectful, clean, and communicative throughout. We've already recommended them to three neighbors!",
    project: "Composite Deck Installation",
  },
];

export function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian-900/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brass-500/5 to-transparent" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow">Testimonials</span>
          <h2 className="heading-section text-cream-50 mb-6">
            Words From Those{" "}
            <span className="text-gold-gradient">We&apos;ve Served</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative glass-gold rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-brass-500/20" />

            {/* Content */}
            <div className="relative">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-brass-400 text-brass-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-cream-100 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brass-500/50 mb-4">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${testimonials[activeIndex].image}')`,
                      }}
                    />
                  </div>
                  <span className="font-display text-lg text-cream-50">
                    {testimonials[activeIndex].name}
                  </span>
                  <span className="text-sm text-cream-500">
                    {testimonials[activeIndex].role} •{" "}
                    {testimonials[activeIndex].location}
                  </span>
                  <span className="mt-2 px-3 py-1 text-xs uppercase tracking-[0.15em] text-brass-400 bg-brass-500/10 rounded-full">
                    {testimonials[activeIndex].project}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                className="w-10 h-10 rounded-full border border-brass-500/30 flex items-center justify-center text-brass-400 hover:border-brass-400 hover:bg-brass-500/10 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-6 bg-brass-400"
                        : "bg-brass-500/30 hover:bg-brass-500/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-brass-500/30 flex items-center justify-center text-brass-400 hover:border-brass-400 hover:bg-brass-500/10 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "4.9", label: "Google Rating" },
            { value: "500+", label: "Happy Clients" },
            { value: "100%", label: "Would Recommend" },
            { value: "15+", label: "Years Trusted" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <span className="font-display text-3xl md:text-4xl text-brass-400 block mb-1">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-cream-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

