"use client"

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = {
  school: "IILM University, Greater Noida",
  degree: "B.Tech in Computer Science",
  year: "2022 - 2026",
};

export function EducationSection() {
  return (
    <div className="max-w-4xl mx-auto pl-4 lg:pl-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-8 h-8 text-white" />
          <h3 className="text-2xl font-bold text-white">{education.school}</h3>
        </div>
        <p className="text-xl text-neutral-300 mb-4">{education.degree}</p>
        <div className="flex items-center gap-2 text-neutral-400">
          <Calendar className="w-5 h-5" />
          <span>{education.year}</span>
        </div>
      </motion.div>
    </div>
  );
}

