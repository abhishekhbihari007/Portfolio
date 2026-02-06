"use client"

import { SplineSceneBasic } from "@/components/ui/demo";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <SplineSceneBasic />
      </motion.div>
    </div>
  );
}

