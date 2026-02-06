"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Briefcase,
  FileText,
  Home,
  User,
  Mail,
} from "lucide-react";
import { useMemo, useState } from "react";

const NAV_ITEMS = [
  { title: "home", href: "/#home", icon: Home },
  { title: "about", href: "/#about", icon: User },
  { title: "projects", href: "/#projects", icon: Briefcase },
  { title: "resume", href: "/resume", icon: FileText },
  { title: "contact", href: "/#contact", icon: Mail },
];

export function DockNav() {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const tooltip = useMemo(() => {
    return hovered ? hovered.toUpperCase() : "";
  }, [hovered]);

  return (
    <nav className="fixed top-5 right-6 z-50" aria-label="Main navigation">
      <div className="flex items-center gap-4 rounded-full border border-white/20 bg-black/80 px-4 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isHovered = hovered === item.title;
          return (
            <div key={item.title} className="relative group">
              {isHovered && (
                <div 
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  role="tooltip"
                  aria-live="polite"
                >
                  <span className="rounded-full border border-neutral-700 bg-black/90 px-3 py-1 text-[11px] font-semibold tracking-widest text-neutral-200 shadow-lg">
                    {item.title.toUpperCase()}
                  </span>
                </div>
              )}
              <Link
                href={item.href}
                scroll={false}
                aria-label={`Navigate to ${item.title} section`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                onMouseEnter={() => setHovered(item.title)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(item.title)}
                onBlur={() => setHovered(null)}
                onClick={(event) => {
                  if (item.href.includes("#")) {
                    event.preventDefault();
                    const hash = item.href.split("#")[1];
                    
                    // Immediately show navbar when clicking a section link
                    window.dispatchEvent(new Event('hashchange'));
                    
                    // If we're not on the home page, navigate to home first
                    if (pathname !== "/") {
                      router.push(`/#${hash}`);
                      // Wait for navigation, then scroll
                      setTimeout(() => {
                        const element = document.querySelector(`#${hash}`);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                          // Update URL hash and trigger events
                          window.history.replaceState(null, '', `#${hash}`);
                          window.dispatchEvent(new Event('hashchange'));
                          window.dispatchEvent(new Event('scroll'));
                        }
                      }, 300);
                    } else {
                      // If we're already on home page, update hash and scroll
                      window.history.replaceState(null, '', `#${hash}`);
                      window.dispatchEvent(new Event('hashchange'));
                      
                      const element = document.querySelector(`#${hash}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                        // Trigger events after scroll completes
                        setTimeout(() => {
                          window.dispatchEvent(new Event('scroll'));
                        }, 100);
                      }
                    }
                  }
                  // For regular links (like /resume), let Next.js handle navigation
                }}
              >
                <Icon className="h-5 w-5" />
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

