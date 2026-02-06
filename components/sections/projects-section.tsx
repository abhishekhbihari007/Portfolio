"use client"

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ProjectOnboardingCard } from "@/components/ui/project-onboarding-card";

const projectImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
];

const projects = [
  {
    name: "ICIAET",
    description: "Modern web application built with HTML and deployed on Vercel.",
    techStack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Fully responsive web application with modern UI/UX design.",
      "Deployed and live on Vercel platform.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/iciaet",
    liveUrl: "https://iciaet.vercel.app",
  },
  {
    name: "Agriculture Thermal Monitoring",
    description: "Monitoring different parameters using thermal cameras in multilayer farming system.",
    techStack: ["TypeScript", "React", "Next.js"],
    highlights: [
      "Built comprehensive monitoring system for agricultural applications.",
      "Implemented thermal camera integration for parameter tracking.",
      "Full-stack application with modern TypeScript architecture.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/Agriculture-Thermal-Monitoring",
    liveUrl: "https://agriculture-thermal-monitoring.vercel.app",
  },
  {
    name: "ProLearn",
    description: "Learning portal platform developed during internship at Bioresearch Community.",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    highlights: [
      "Developed as part of internship at Bioresearch Community.",
      "Full-featured learning management system.",
      "Integrated REST APIs and responsive UI components.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/ProLearn",
    liveUrl: "https://prolearn.org.in/",
  },
  {
    name: "IGT College Website",
    description: "College website platform developed during internship.",
    techStack: ["TypeScript", "React", "Next.js"],
    highlights: [
      "Contributed to IGT college website during Bioresearch Community internship.",
      "Built reusable UI components and integrated REST APIs.",
      "Collaborated with backend teams using Agile practices.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/IGT",
    liveUrl: "https://igteu.in/",
  },
  {
    name: "AI Teacher React App",
    description: "React frontend for AI-based learning assistant with interactive chat interface.",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Built complete frontend: responsive chat UI, message rendering.",
      "Prepared mock API hooks and state management.",
      "Interactive AI-powered learning interface.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/ai-teacher-react",
    liveUrl: "https://ai-teacher-react.vercel.app",
  },
  {
    name: "Netflix Clone",
    description: "Static front-end clone showcasing modern UI patterns and animations.",
    techStack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Implemented pixel-perfect layout replicating Netflix homepage.",
      "Added hover-based animations and movie preview transitions.",
      "Responsive design with modern CSS techniques.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/BharatIntern_project3_Netflixclone",
    liveUrl: "https://bharat-intern-project3-netflixclone.vercel.app",
  },
  {
    name: "Zido Project",
    description: "Real-time collaboration platform utility web app.",
    techStack: ["JavaScript", "HTML", "CSS", "WebSockets"],
    highlights: [
      "Developed frontend focusing on real-time user interactions.",
      "Integrated real-time features and modular code structure.",
      "Built during Zidio Development internship.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/ZidoProject",
    liveUrl: "https://zido-project.vercel.app",
  },
  {
    name: "Regulus Publication",
    description: "Publication platform web application.",
    techStack: ["JavaScript", "React"],
    highlights: [
      "Modern web application for publication management.",
      "Responsive design and user-friendly interface.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/regulusPublication",
    liveUrl: "https://regulus-publication.vercel.app",
  },
  {
    name: "AgroTherm Monitor",
    description: "Agricultural thermal monitoring system.",
    techStack: ["TypeScript", "React", "Next.js"],
    highlights: [
      "Thermal monitoring solution for agricultural applications.",
      "Modern TypeScript-based architecture.",
    ],
    githubUrl: "https://github.com/abhishekhbihari007/AgroTherm-Monitor",
    liveUrl: "https://agro-therm-monitor.vercel.app",
  },
];

export function ProjectsSection() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectOnboardingCard
            key={index}
            imageSrc={projectImages[index % projectImages.length]}
            title={project.name}
            description={project.description}
            avatarFallback={project.name[0]}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}

