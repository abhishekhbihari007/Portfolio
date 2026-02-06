"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function PortfolioCover() {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for a cleaner, fixed transition
  const textVariants = {
    initial: (i: number) => ({
      opacity: 0,
      y: i * 20,
      x: i * 10,
      scale: 0.9,
    }),
    animate: (i: number) => ({
      opacity: i === 0 ? 1 : Math.abs(i) === 1 ? 0.25 : 0.08,
      y: i * 60,  
      x: i * 40,  
      scale: 1,
      transition: {
        duration: 1,
        delay: Math.abs(i) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hover: (i: number) => ({
      y: i * 70, 
      x: i * 45, 
      opacity: i === 0 ? 1 : Math.abs(i) === 1 ? 0.35 : 0.12,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }),
  };

  const layers = [2, 1, 0, -1, -2];

  return (
    <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden cursor-default">
      {/* Background: Dark metallic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-[#0d0d0d] z-0" />
      
      {/* Main Text Container */}
      <motion.div
        className="relative flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial="initial"
        animate={isHovered ? "hover" : "animate"}
      >
        {layers.map((i) => {
          const shade =
            i === 0 ? "text-[#f6f6f6]" : Math.abs(i) === 1 ? "text-[#7a7a7a]" : "text-[#3e3e3e]";
          const shadow = i === 0 ? "drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" : "";

          return (
          <motion.h1
            key={i}
            custom={i}
            variants={textVariants}
            className={`
              ${i === 0 ? "relative z-20" : "absolute select-none pointer-events-none z-10"}
              text-[clamp(4rem,18vw,20rem)] font-black leading-none tracking-tighter
                ${shade}
                ${shadow}
            `}
            style={{
              filter: `blur(${Math.abs(i) * 1.2}px)`,
            }}
            >
            portfolio
          </motion.h1>
        );
        })}
      </motion.div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay bg-[radial-gradient(circle_at_center,#1b1c1f,transparent_40%)]"></div>
    </section>
  );
}
