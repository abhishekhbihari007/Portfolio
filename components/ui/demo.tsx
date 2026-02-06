'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
 
export function SplineSceneBasic() {
  return (
    <div className="w-full h-[600px] relative">
      <Card className="w-full h-full bg-transparent relative overflow-hidden border-0">
        
        <div className="flex h-full relative z-10">
          {/* Left content - Hero Text */}
          <div className="flex-1 p-8 relative z-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                  Abhishekh Bihari
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-neutral-400 font-semibold mb-4">
                Full Stack Developer
              </h2>
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-lg mb-6">
                Full Stack Developer & Freelancer specializing in building end-to-end web applications. Skilled in frontend (React, TypeScript), backend (Node.js, APIs), and cloud technologies. Available for freelance projects and consulting opportunities.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Link
                  href="mailto:abhishekhbihari07@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/abhishekhbihari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href="https://github.com/abhishekhbihari007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right content - Robot */}
          <div className="flex-1 relative z-20">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

