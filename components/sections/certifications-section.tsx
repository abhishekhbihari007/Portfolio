"use client"

import { motion } from "framer-motion";
import { Award, Calendar, Building2 } from "lucide-react";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";

const certifications = [
  {
    name: "Generative AI Foundations",
    issuer: "upGrad (with Microsoft)",
    date: "Jul 2025",
    tags: ["Prompt Engineering", "AI Content Creation"],
  },
  {
    name: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google",
    date: "Jul 2025",
  },
  {
    name: "Software Engineering Job Simulation",
    issuer: "Accenture Nordics (Forage)",
    date: "Jun 2025",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    date: "Jun 2025",
    tags: ["Data Modeling", "Tableau"],
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Sep 2024",
  },
  {
    name: "Employability Essentials",
    issuer: "IILM University",
    date: "Jul 2025",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Mar 2023",
  },
  {
    name: "How to Become Highly Paid Hacker",
    issuer: "HackingFlix",
    date: "Jan 2023",
  },
  {
    name: "Fundamentals of the C Language",
    issuer: "Infosys Springboard",
    date: "Dec 2022",
  },
  {
    name: "NCC 'B' Certificate",
    issuer: "National Cadet Corps",
    date: "2025",
  },
];

export function CertificationsSection() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <SectionBackgroundShapes variant="default" className="absolute inset-0 -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-3">
              <Award className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
            {cert.tags && cert.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                {cert.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

