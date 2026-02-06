import React from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const timelineData: TimelineEntry[] = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-300 dark:text-neutral-300 text-xs md:text-sm font-normal mb-8">
          Built and launched multiple web applications and contributed to various projects
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Project Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Project Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Project Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Project Image</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-300 dark:text-neutral-300 text-xs md:text-sm font-normal mb-8">
          Started my journey as a Full Stack Developer, working on various projects and learning new technologies.
        </p>
        <p className="text-neutral-300 dark:text-neutral-300 text-xs md:text-sm font-normal mb-8">
          Gained experience in React.js, TypeScript, Node.js, and cloud platforms while working on real-world applications.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Project Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Project Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Project Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Project Image</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <div>
        <p className="text-neutral-300 dark:text-neutral-300 text-xs md:text-sm font-normal mb-4">
          Completed my education and started building projects
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Bachelor&apos;s Degree
          </div>
          <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Full Stack Development Certification
          </div>
          <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Cloud Platform Certifications
          </div>
          <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Multiple Project Completions
          </div>
          <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Open Source Contributions
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Achievement Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Achievement Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Achievement Image</span>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Achievement Image</span>
          </div>
        </div>
      </div>
    ),
  },
];
