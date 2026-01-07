"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play, Award, Clock, Shield } from "lucide-react";
import { useState } from "react";

const stats = [
  { icon: Award, value: "15+", label: "Years Excellence" },
  { icon: Clock, value: "500+", label: "Projects Completed" },
  { icon: Shield, value: "100%", label: "Satisfaction Rate" },
];

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* Video Background Placeholder - In production, use actual video */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-950/80 to-obsidian-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/90 via-transparent to-obsidian-950/90" />
        {/* Subtle gold accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brass-900/10 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-brass-500/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-brass-500/20 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 left-20 w-24 h-px bg-gradient-to-r from-transparent via-brass-500/20 to-transparent hidden lg:block" />

      {/* Main Content */}
      <div className="relative z-10 container-luxury text-center pt-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="eyebrow inline-flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-brass-500/50" />
          Northern California&apos;s Premier Craftsmen
          <span className="w-8 h-px bg-brass-500/50" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-display text-cream-50 mb-6"
        >
          <span className="block">Craftsmanship</span>
          <span className="block mt-2">
            Beyond{" "}
            <span className="text-gold-gradient italic">Expectation</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-cream-400 text-lg md:text-xl font-light leading-relaxed mb-12"
        >
          We don&apos;t just build—we create legacies. From custom homes to
          exquisite renovations, every detail reflects our commitment to
          timeless quality and unparalleled service.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <a href="#contact" className="btn-luxury-primary group">
            <span className="relative z-10">Schedule Consultation</span>
          </a>
          <button
            onClick={() => setIsVideoPlaying(true)}
            className="btn-luxury-outline group flex items-center gap-3"
          >
            <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-brass-500/50 group-hover:border-brass-400 group-hover:bg-brass-500/10 transition-all duration-300">
              <Play className="w-4 h-4 ml-0.5 text-brass-400" />
            </span>
            <span>Watch Our Story</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <stat.icon className="w-5 h-5 text-brass-500 mb-3" />
              <span className="font-display text-4xl md:text-5xl text-cream-50 mb-1">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-cream-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream-500">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-brass-500" />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-950/95 backdrop-blur-xl p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl aspect-video bg-obsidian-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center text-cream-400">
              <p className="text-center">
                Video placeholder
                <br />
                <span className="text-sm text-cream-500">
                  Add your company video here
                </span>
              </p>
            </div>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-obsidian-800/80 text-cream-200 hover:text-cream-50 hover:bg-obsidian-700/80 transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

