"use client"

import { motion } from "framer-motion";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";

export function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto relative pl-4 lg:pl-20">
      <SectionBackgroundShapes variant="minimal" className="absolute inset-0 -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
      >
        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          I&apos;m a passionate Full Stack Developer and Freelancer with hands-on experience building end-to-end web applications. I specialize in creating modern, scalable solutions that span from beautiful user interfaces to robust backend systems and cloud infrastructure.
        </p>
        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          Throughout my internships at Bioresearch Community, Zidio Development, and other organizations, I&apos;ve worked on real-world projects including college websites, learning portals, and collaboration platforms. I&apos;m skilled in frontend technologies (React.js, TypeScript, Tailwind CSS), backend development (Node.js, REST APIs, databases), and cloud platforms (Vercel, Render, Google Cloud).
        </p>
        <p className="text-lg text-neutral-300 leading-relaxed">
          I&apos;m available for freelance projects, consulting opportunities, and full-time positions. Whether you need a complete web application, API development, cloud deployment, or UI/UX improvements, I&apos;m here to help bring your vision to life with clean, maintainable code and modern best practices.
        </p>
      </motion.div>
    </div>
  );
}

