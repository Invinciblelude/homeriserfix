"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Hammer,
  PaintBucket,
  Fence,
  Home,
  Wrench,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Custom Building",
    description:
      "From ground-up constructions to complete home additions, we bring architectural visions to life with precision and artistry.",
    features: ["ADUs & Guest Houses", "Room Additions", "Complete Builds"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Hammer,
    title: "Decking & Outdoor",
    description:
      "Transform your outdoor space into a sanctuary with custom decks, pergolas, and entertainment areas built to last.",
    features: ["Composite & Hardwood", "Covered Patios", "Outdoor Kitchens"],
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Fence,
    title: "Fencing & Gates",
    description:
      "Security meets sophistication. Custom fencing solutions that define your property with elegance and durability.",
    features: ["Privacy Fencing", "Automated Gates", "Custom Designs"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Painting & Finishing",
    description:
      "Expert interior and exterior painting that transforms spaces with flawless finishes and lasting color.",
    features: ["Interior & Exterior", "Cabinet Refinishing", "Specialty Coatings"],
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Comprehensive maintenance programs to protect your investment and keep your property in pristine condition.",
    features: ["Preventive Care", "Repairs", "Seasonal Services"],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: FileCheck,
    title: "Permitting",
    description:
      "Navigate complex regulations with ease. We handle all permits and compliance requirements seamlessly.",
    features: ["Plan Submission", "Code Compliance", "Inspection Coordination"],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
  },
];

export function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-900/50 to-obsidian-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass-500/20 to-transparent" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="eyebrow">Our Expertise</span>
          <h2 className="heading-section text-cream-50 mb-6">
            Services Crafted for{" "}
            <span className="text-gold-gradient">Excellence</span>
          </h2>
          <p className="text-cream-400 text-lg leading-relaxed">
            Every project is an opportunity to demonstrate our commitment to
            superior quality, meticulous attention to detail, and client
            satisfaction.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass rounded-xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/50 to-transparent" />
                <div className="absolute inset-0 bg-brass-500/0 group-hover:bg-brass-500/10 transition-colors duration-500" />

                {/* Icon */}
                <div className="absolute bottom-4 left-6">
                  <div className="w-12 h-12 rounded-lg bg-brass-500/20 backdrop-blur-sm border border-brass-500/30 flex items-center justify-center group-hover:bg-brass-500/30 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-brass-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-cream-50 mb-3 group-hover:text-brass-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-cream-500"
                    >
                      <span className="w-1 h-1 rounded-full bg-brass-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-brass-400 hover:text-brass-300 transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-brass-500/30 transition-colors duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-cream-400 mb-6">
            Have a unique project in mind? Let&apos;s discuss how we can bring
            your vision to life.
          </p>
          <a href="#contact" className="btn-luxury-outline">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

