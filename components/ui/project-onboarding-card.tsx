"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProjectOnboardingCardProps {
  className?: string;
  imageSrc: string;
  avatarSrc?: string;
  avatarFallback: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
}

const ProjectOnboardingCard = React.forwardRef<HTMLDivElement, ProjectOnboardingCardProps>(
  (
    {
      className,
      imageSrc,
      avatarSrc,
      avatarFallback,
      title,
      description,
      githubUrl,
      liveUrl,
      techStack = [],
    },
    ref
  ) => {
    const FADE_UP_ANIMATION_VARIANTS = {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className={cn(
          "w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-lg backdrop-blur-lg",
          className
        )}
        ref={ref}
        
      >
        {/* Project Image */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative aspect-video overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        <div className="space-y-6 p-6">
          {/* Title and Description */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-2">
            <h3 className="font-bold text-xl text-white text-left">{title}</h3>
            <p className="text-neutral-400 text-sm text-left line-clamp-2">{description}</p>
          </motion.div>

          {/* Tech Stack / Info Section (Replacing Avatar Upload) */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 ring-1 ring-white/10">
                <AvatarImage src={avatarSrc} alt={title} />
                <AvatarFallback className="bg-blue-500 text-white text-[10px]">{avatarFallback}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-medium text-xs text-white">Technologies</p>
                <p className="text-[10px] text-neutral-500 truncate max-w-[120px]">
                  {techStack.join(", ")}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {githubUrl && (
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-white/10 hover:bg-white/10" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 text-white" />
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-white/10 hover:bg-white/10" asChild>
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
          
          {/* Action Button (Replacing Input and Submit) */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <Button className="w-full bg-[#0033ff] hover:bg-[#0026cc] text-white rounded-full font-bold h-11" asChild>
              <a href={liveUrl || githubUrl || "#"} target="_blank" rel="noopener noreferrer">
                View Project Details
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

ProjectOnboardingCard.displayName = "ProjectOnboardingCard";

export { ProjectOnboardingCard };

