"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";

const items = [
  {
    id: "01",
    title: "Who am I?",
    content:
      "I'm Abhishekh Bihari — a Full Stack Developer and Freelancer dedicated to crafting high-performance, user-centric digital solutions that are robust, scalable, and visually compelling.",
  },
  {
    id: "02",
    title: "My Specialization",
    content:
      "I specialize in building end-to-end web applications using the modern stack: React, Next.js, and TypeScript on the frontend, with Node.js and scalable database architectures on the backend.",
  },
  {
    id: "03",
    title: "Professional Experience",
    content:
      "I've honed my skills through impactful internships at organizations like Bioresearch Community and Zidio Development, where I contributed to large-scale platforms, college websites, and real-time collaboration tools.",
  },
  {
    id: "04",
    title: "My Creative Approach",
    content:
      "For me, development is more than just code — it's about solving real-world problems. I focus on clean architecture, intuitive UI/UX, and seamless performance in every project I undertake.",
  },
  {
    id: "05",
    title: "Continuous Innovation",
    content:
      "I am deeply inspired by the evolution of AI and cloud technologies. I constantly integrate modern tools like Vertex AI and Google Cloud to push the boundaries of what's possible in digital experiences.",
  },
  {
    id: "06",
    title: "Let's Collaborate",
    content:
      "Whether you're a startup looking for a MVP or a brand seeking a complete digital overhaul, I'm always open to new challenges. Reach out via email or connect with me on social platforms.",
  },
];

export function FAQSection() {
  return (
    <div className="max-w-4xl mx-auto relative py-20 px-4 lg:pl-20">
      <SectionBackgroundShapes variant="minimal" className="absolute inset-0 -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-tighter uppercase">Insights</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
      </motion.div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {items.map((item) => (
          <AccordionItem 
            value={item.id} 
            key={item.id} 
            className="border-b border-white/10 last:border-0 group overflow-hidden"
          >
            <AccordionTrigger className="text-left py-8 duration-300 hover:no-underline cursor-pointer data-[state=open]:text-blue-500 [&>svg]:hidden">
              <div className="flex flex-1 items-start gap-6 md:gap-12">
                <span className="text-xs font-mono text-neutral-500 mt-2">{item.id}</span>
                <h3 className="uppercase text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter transition-all duration-300 group-hover:pl-4">
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-neutral-400 text-lg md:text-xl leading-relaxed pb-8 pl-12 md:pl-24 max-w-2xl">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

