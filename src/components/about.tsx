"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Target, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We're not just contractors—we're neighbors. Every project strengthens our community bonds.",
  },
  {
    icon: Users,
    title: "Youth Training",
    description:
      "Investing in the next generation through apprenticeships and hands-on mentorship programs.",
  },
  {
    icon: Target,
    title: "Precision Focus",
    description:
      "Every measurement matters. Every detail counts. Excellence isn't optional—it's standard.",
  },
  {
    icon: Sparkles,
    title: "Lasting Quality",
    description:
      "We build for generations, using materials and techniques that stand the test of time.",
  },
];

export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass-500/20 to-transparent" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-obsidian-950/20" />
            </div>

            {/* Floating Accent Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 lg:-right-16 w-48 lg:w-64 aspect-square rounded-xl overflow-hidden border-4 border-obsidian-950 shadow-2xl hidden md:block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop')`,
                }}
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-8 -left-4 lg:-left-8 glass-gold rounded-xl p-6 hidden md:block"
            >
              <span className="font-display text-4xl text-cream-50 block">
                15+
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-brass-400">
                Years of
                <br />
                Excellence
              </span>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-4 w-8 h-px bg-brass-500/50 hidden lg:block" />
            <div className="absolute bottom-1/3 -right-4 w-8 h-px bg-brass-500/50 hidden lg:block" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">About Us</span>
            <h2 className="heading-section text-cream-50 mb-6">
              Built on <span className="text-gold-gradient">Trust</span>,
              <br />
              Driven by <span className="text-gold-gradient">Excellence</span>
            </h2>

            <div className="space-y-6 text-cream-400 leading-relaxed mb-10">
              <p>
                Home Riser Fix isn&apos;t just a company—it&apos;s a movement.
                Born from a deep commitment to our Northern California
                community, we&apos;ve grown from a small team of passionate
                craftsmen into the region&apos;s most trusted name in home
                services.
              </p>
              <p>
                What sets us apart? We believe in more than just exceptional
                work. We&apos;re building the next generation of skilled
                tradespeople through our youth training programs, creating
                opportunities while delivering unmatched quality to every
                client.
              </p>
              <p className="text-cream-300 font-medium">
                When you choose us, you&apos;re not just getting a
                contractor—you&apos;re investing in your community.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brass-500/10 border border-brass-500/30 flex items-center justify-center group-hover:bg-brass-500/20 transition-colors duration-300">
                      <value.icon className="w-5 h-5 text-brass-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-cream-100 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-cream-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

