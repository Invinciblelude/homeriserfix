"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Hillside Estate",
    category: "Custom Build",
    location: "Napa Valley",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    description:
      "A stunning 4,500 sq ft hillside residence featuring floor-to-ceiling windows, custom millwork, and seamless indoor-outdoor living spaces.",
  },
  {
    id: 2,
    title: "Craftsman Deck Revival",
    category: "Decking",
    location: "Sacramento",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Complete deck restoration using premium composite decking with integrated lighting and custom built-in seating.",
  },
  {
    id: 3,
    title: "Victorian Fence & Gate",
    category: "Fencing",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Historically-inspired wrought iron fencing with automated entry gate, preserving the home's Victorian character.",
  },
  {
    id: 4,
    title: "Luxury ADU Suite",
    category: "Custom Build",
    location: "Palo Alto",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    description:
      "A 750 sq ft accessory dwelling unit with premium finishes, full kitchen, and spa-like bathroom.",
  },
  {
    id: 5,
    title: "Executive Home Office",
    category: "Renovation",
    location: "Oakland",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    description:
      "Garage-to-office conversion featuring custom cabinetry, soundproofing, and integrated technology solutions.",
  },
  {
    id: 6,
    title: "Outdoor Entertainment Oasis",
    category: "Outdoor Living",
    location: "Sonoma",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Complete outdoor kitchen, covered pavilion, and fire pit area designed for year-round entertaining.",
  },
];

const categories = [
  "All",
  "Custom Build",
  "Decking",
  "Fencing",
  "Renovation",
  "Outdoor Living",
];

export function Portfolio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const goToNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-obsidian-900/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,149,74,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
        >
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="heading-section text-cream-50">
              A Legacy of{" "}
              <span className="text-gold-gradient">Excellence</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 rounded-full
                  ${
                    selectedCategory === category
                      ? "bg-brass-500 text-obsidian-950"
                      : "bg-obsidian-800/50 text-cream-400 hover:bg-obsidian-700/50 hover:text-cream-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={false}
                    className="transform transition-transform duration-500 group-hover:-translate-y-2"
                  >
                    <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-brass-400 bg-brass-500/10 border border-brass-500/30 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl text-cream-50 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-cream-400">{project.location}</p>
                  </motion.div>

                  {/* View Button */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-brass-500/20 backdrop-blur-sm border border-brass-500/40 flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-brass-400" />
                    </div>
                  </div>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-brass-500/40 transition-colors duration-500" />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-luxury-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-950/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-obsidian-800/80 text-cream-200 hover:text-cream-50 hover:bg-obsidian-700/80 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 lg:left-8 w-12 h-12 flex items-center justify-center rounded-full bg-obsidian-800/80 text-cream-200 hover:text-cream-50 hover:bg-obsidian-700/80 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {currentIndex < filteredProjects.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 lg:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-obsidian-800/80 text-cream-200 hover:text-cream-50 hover:bg-obsidian-700/80 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${selectedProject.image}')`,
                    }}
                  />
                </div>

                {/* Details */}
                <motion.div
                  key={`details-${selectedProject.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center lg:text-left"
                >
                  <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brass-400 bg-brass-500/10 border border-brass-500/30 rounded-full mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display text-3xl lg:text-4xl text-cream-50 mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-brass-400 mb-6">
                    {selectedProject.location}
                  </p>
                  <p className="text-cream-400 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <a href="#contact" className="btn-luxury-primary">
                    Start Similar Project
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

