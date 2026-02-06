"use client";

import { cn } from "@/lib/utils";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Globe,
  MapPin,
  TrendingUp,
  Video,
} from "lucide-react";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

const experienceItems: BentoItem[] = [
  {
    title: "Bioresearch Community",
    meta: "Sep '25 - Jan '26",
    description:
      "Frontend Developer Intern building scalable portals (ProLearn, IGT) with React, TypeScript, and Tailwind.",
    icon: <Briefcase className="w-5 h-5 text-amber-400" />,
    status: "Frontend Intern",
    tags: ["React", "TypeScript", "Tailwind"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "AI Teacher React App",
    meta: "Jul '25 - Sep '25",
    description:
      "Crafted interactive learning experiences with React, state management, and delightful chat UI animations.",
    icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
    status: "Product Focus",
    tags: ["UI", "Animations"],
  },
  {
    title: "Zidio Development",
    meta: "Jun '25 - Sep '25",
    description:
      "Full-stack development on realtime collaboration utilities, improved architecture, and code quality.",
    icon: <Video className="w-5 h-5 text-purple-400" />,
    status: "Full Stack",
    tags: ["Node.js", "APIs"],
  },
  {
    title: "SmartBridge Indonesia",
    meta: "Jul '25 - Sep '25",
    description:
      "Google Cloud Generative AI intern exploring Vertex AI, prompt design, and cloud deployment best practices.",
    icon: <Globe className="w-5 h-5 text-sky-400" />,
    status: "AI Research",
    tags: ["Vertex AI", "Cloud"],
  },
  {
    title: "Cognifyz Technologies",
    meta: "Jul '25 - Aug '25",
    description:
      "Frontend craftsmanship with HTML/CSS/JavaScript, debugging, and iterative UI refinements.",
    icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
    tags: ["UI", "Debugging"],
  },
  {
    title: "Bharat Interns",
    meta: "Aug '23 - Sep '23",
    description:
      "Web Development intern delivering responsive multi-page layouts and polished frontend experiences.",
    icon: <MapPin className="w-5 h-5 text-amber-500" />,
    tags: ["Responsive", "Projects"],
  },
];

function BentoGrid({ items = experienceItems }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 max-w-6xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300",
            "hover:bg-white/10 hover:shadow-[0_20px_45px_rgba(10,10,10,0.35)]",
            "hover:-translate-y-1 will-change-transform",
            item.colSpan || "col-span-1",
            item.colSpan === 2 ? "md:col-span-2" : "",
            {
              "shadow-[0_20px_45px_rgba(10,10,10,0.45)] -translate-y-1":
                item.hasPersistentHover,
            }
          )}
        >
          <div
            className={cn(
              "absolute inset-0 rounded-3xl pointer-events-none",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-70",
              "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:6px_6px]"
            )}
          />

          <div className="relative flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 text-white transition-colors duration-300">
                {item.icon}
              </div>
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full border border-white/20 text-white/70"
              >
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-white text-lg tracking-tight">
                {item.title}
                <span className="ml-2 text-xs text-white/40 font-normal">
                  {item.meta}
                </span>
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2 text-xs text-white/60">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-xl bg-white/10 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.cta || "Explore →"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { BentoGrid, experienceItems };
