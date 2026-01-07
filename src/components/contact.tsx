"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Home,
  Hammer,
  Fence,
  PaintBucket,
  Wrench,
} from "lucide-react";

const serviceTypes = [
  { id: "custom-build", label: "Custom Building", icon: Home },
  { id: "deck", label: "Decking & Outdoor", icon: Hammer },
  { id: "fence", label: "Fencing & Gates", icon: Fence },
  { id: "paint", label: "Painting", icon: PaintBucket },
  { id: "maintenance", label: "Maintenance", icon: Wrench },
];

const projectSizes = [
  { id: "small", label: "Small", description: "Under $10K" },
  { id: "medium", label: "Medium", description: "$10K - $50K" },
  { id: "large", label: "Large", description: "$50K - $150K" },
  { id: "luxury", label: "Luxury", description: "$150K+" },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@homeriserfix.com",
    href: "mailto:hello@homeriserfix.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Northern California",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 7AM - 6PM",
    href: "#",
  },
];

export function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-brass-900/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass-500/30 to-transparent" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">Get Started</span>
            <h2 className="heading-section text-cream-50 mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gold-gradient">Extraordinary</span>
            </h2>
            <p className="text-cream-400 text-lg leading-relaxed mb-10">
              Ready to transform your space? Share your vision with us, and
              we&apos;ll craft a personalized plan to bring it to life with the
              quality and care you deserve.
            </p>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group glass rounded-xl p-5 hover:bg-obsidian-800/60 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brass-500/10 border border-brass-500/30 flex items-center justify-center group-hover:bg-brass-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-brass-400" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-[0.15em] text-cream-500 block mb-1">
                        {item.label}
                      </span>
                      <span className="text-cream-200 font-medium">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-6 items-center"
            >
              {["Licensed", "Insured", "Bonded"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brass-500" />
                  <span className="text-sm text-cream-400">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-gold rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-brass-500/20 border border-brass-500/40 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-brass-400" />
                  </div>
                  <h3 className="font-display text-2xl text-cream-50 mb-3">
                    Request Received
                  </h3>
                  <p className="text-cream-400">
                    Thank you for reaching out. Our team will contact you within
                    24 hours to discuss your project.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display text-2xl text-cream-50 mb-2">
                    Request a Consultation
                  </h3>
                  <p className="text-sm text-cream-500 mb-6">
                    Fill out the form below and we&apos;ll be in touch within 24
                    hours.
                  </p>

                  {/* Service Type Selection */}
                  <div>
                    <label className="text-xs uppercase tracking-[0.15em] text-cream-400 block mb-3">
                      Service Needed
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceTypes.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setSelectedService(service.id)}
                          className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-300 ${
                            selectedService === service.id
                              ? "bg-brass-500/20 border-brass-500/50 text-brass-300"
                              : "bg-obsidian-800/30 border-white/5 text-cream-400 hover:border-brass-500/30"
                          }`}
                        >
                          <service.icon className="w-5 h-5" />
                          <span className="text-xs text-center">
                            {service.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Size */}
                  <div>
                    <label className="text-xs uppercase tracking-[0.15em] text-cream-400 block mb-3">
                      Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {projectSizes.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setSelectedSize(size.id)}
                          className={`flex flex-col items-center p-3 rounded-lg border transition-all duration-300 ${
                            selectedSize === size.id
                              ? "bg-brass-500/20 border-brass-500/50"
                              : "bg-obsidian-800/30 border-white/5 hover:border-brass-500/30"
                          }`}
                        >
                          <span
                            className={`text-sm font-medium ${
                              selectedSize === size.id
                                ? "text-brass-300"
                                : "text-cream-300"
                            }`}
                          >
                            {size.label}
                          </span>
                          <span className="text-xs text-cream-500">
                            {size.description}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-xs uppercase tracking-[0.15em] text-cream-400 block mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-white/5 text-cream-100 placeholder-cream-600 focus:outline-none focus:border-brass-500/50 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs uppercase tracking-[0.15em] text-cream-400 block mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-white/5 text-cream-100 placeholder-cream-600 focus:outline-none focus:border-brass-500/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs uppercase tracking-[0.15em] text-cream-400 block mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-white/5 text-cream-100 placeholder-cream-600 focus:outline-none focus:border-brass-500/50 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-[0.15em] text-cream-400 block mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-white/5 text-cream-100 placeholder-cream-600 focus:outline-none focus:border-brass-500/50 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-luxury-primary w-full group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Request
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>

                  <p className="text-xs text-center text-cream-600">
                    By submitting, you agree to our privacy policy. We&apos;ll
                    never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

