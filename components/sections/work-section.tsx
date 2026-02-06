"use client";

import { motion } from "framer-motion";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { workExperiences } from "@/config/work-experience";

const workTestimonials = workExperiences.map(exp => ({
  quote: exp.quote,
  name: exp.name,
  designation: exp.designation,
  src: exp.src,
}));

export function WorkSection() {
  return (
    <div className="max-w-6xl mx-auto relative pl-4 lg:pl-20">
      <SectionBackgroundShapes variant="minimal" className="absolute inset-0 -z-10 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
      </motion.div>

      <CircularTestimonials
        testimonials={workTestimonials}
        autoplay
        colors={{
          name: "#f8fafc",
          designation: "#cbd5f5",
          testimony: "#d1d5db",
          arrowBackground: "#0f172a",
          arrowForeground: "#f8f8ff",
          arrowHoverBackground: "#38bdf8",
        }}
        fontSizes={{
          name: "2.5rem",
          designation: "1.05rem",
          quote: "1.3rem",
        }}
      />
    </div>
  );
}

