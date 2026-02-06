"use client";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import ASMRStaticBackground from "@/components/ui/asmr-background";
import { PortfolioCover } from "@/components/sections/portfolio-cover-section";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SocialLinks } from "@/components/ui/social-links";
import { ErrorBoundary } from "@/components/error-boundary";
import { useEffect, useState } from "react";
import { socialLinks } from "@/config/social-links";
import { initGA, trackPageView } from "@/lib/analytics";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize analytics
    initGA();
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const checkNavbarVisibility = () => {
      const portfolioCover = document.querySelector('section:first-of-type');
      const currentHash = window.location.hash;
      const hasHash = Boolean(currentHash && currentHash !== '#' && currentHash !== '');
      
      if (hasHash) {
        // Always show navbar when there's a hash (section navigation)
        setShowNavbar(true);
        return;
      }

      if (portfolioCover) {
        const rect = portfolioCover.getBoundingClientRect();
        // Show navbar when portfolio cover is scrolled past
        const isPastCover = window.scrollY > rect.height + 50; // Add small buffer
        setShowNavbar(isPastCover);
      } else {
        // If no portfolio cover found, always show navbar
        setShowNavbar(true);
      }
    };

    const handleScroll = () => {
      checkNavbarVisibility();
    };

    const handleHashChange = () => {
      // Immediately show navbar when hash changes
      setShowNavbar(true);
      // Also check after scroll completes
      setTimeout(checkNavbarVisibility, 200);
    };

    // Check initial state - also check for hash on load
    if (window.location.hash && window.location.hash !== '#') {
      setShowNavbar(true);
    } else {
      checkNavbarVisibility();
    }

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Listen to hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Listen for popstate (browser back/forward)
    window.addEventListener('popstate', handleHashChange);
    
    // Also check after a short delay to catch programmatic scrolls
    const timeoutId = setTimeout(checkNavbarVisibility, 500);
    
    // Set loading to false after initial render
    setIsLoading(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      clearTimeout(timeoutId);
    };
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </main>
    );
  }

  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-black relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <SocialLinks links={socialLinks} floatingButtonColor="bg-slate-700" />
      {showNavbar && <NavBarDemo />}
      <div id="main-content" className="relative z-10">
        {/* Portfolio Cover Section - No navbar here */}
        <PortfolioCover />
        
        {/* Hero Section with 3D Interactive */}
        <section id="home" className="min-h-screen flex items-center justify-center py-16">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4">
          <SkillsSection />
        </section>

        {/* Work/Experience Section */}
        <section id="experience" className="py-16 px-4">
          <WorkSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <ProjectsSection />
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4">
          <EducationSection />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 px-4">
          <CertificationsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4">
          <ContactSection />
        </section>
      </div>
    </main>
    </ErrorBoundary>
  );
}
