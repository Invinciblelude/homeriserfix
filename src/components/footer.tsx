"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube, ArrowUp } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Custom Building", href: "#services" },
    { name: "Decking & Outdoor", href: "#services" },
    { name: "Fencing & Gates", href: "#services" },
    { name: "Painting", href: "#services" },
    { name: "Maintenance", href: "#services" },
    { name: "Permitting", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  areas: [
    { name: "Sacramento", href: "#" },
    { name: "San Francisco", href: "#" },
    { name: "Oakland", href: "#" },
    { name: "Napa Valley", href: "#" },
    { name: "Sonoma", href: "#" },
    { name: "Palo Alto", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-obsidian-950 pt-24 pb-8">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass-500/30 to-transparent" />

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-brass-900/5 to-transparent" />

      <div className="container-luxury relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-3xl text-cream-100 tracking-tight">
                Home<span className="text-brass-400">Riser</span>Fix
              </span>
            </a>
            <p className="text-cream-400 leading-relaxed mb-6 max-w-sm">
              Northern California&apos;s premier craftsmen, building excellence
              one project at a time. Community-focused, youth-training, and
              committed to quality that lasts generations.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-obsidian-800/50 border border-white/5 flex items-center justify-center text-cream-400 hover:border-brass-500/50 hover:text-brass-400 hover:bg-brass-500/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-brass-400 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream-400 hover:text-brass-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-brass-400 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream-400 hover:text-brass-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-brass-400 mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream-400 hover:text-brass-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA Column */}
          <div className="lg:col-span-2 md:col-span-2 lg:col-start-11">
            <h4 className="text-xs uppercase tracking-[0.2em] text-brass-400 mb-6">
              Ready to Start?
            </h4>
            <a
              href="#contact"
              className="btn-luxury-outline text-sm py-3 px-5 mb-4 block text-center"
            >
              Get a Quote
            </a>
            <a
              href="tel:+1234567890"
              className="block text-center text-cream-400 hover:text-brass-300 transition-colors text-sm"
            >
              (123) 456-7890
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brass-500/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-cream-500">
            <span>© {new Date().getFullYear()} Home Riser Fix</span>
            <span className="hidden md:inline">•</span>
            <a
              href="#"
              className="hover:text-brass-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="#"
              className="hover:text-brass-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="hidden md:inline">•</span>
            <span>CA License #123456</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-sm text-cream-500 hover:text-brass-400 transition-colors duration-300"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

