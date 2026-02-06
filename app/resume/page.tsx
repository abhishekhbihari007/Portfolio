"use client";

import { motion } from "framer-motion";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import { Timeline } from "@/components/ui/timeline";
import { ErrorBoundary } from "@/components/error-boundary";
import { timelineData } from "@/config/timeline-data";
import { initGA, trackPageView } from "@/lib/analytics";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    initGA();
    trackPageView("/resume");
  }, []);
  // Use `timelineData` from config (imported above). Removed stray inline array that caused a syntax error.

  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-black relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <NavBarDemo />
        <div id="main-content" className="relative z-10">
          <div className="mb-8 pt-8 px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          <Timeline data={timelineData} />
        </div>
      </main>
    </ErrorBoundary>
  );
}
