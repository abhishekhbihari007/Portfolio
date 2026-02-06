// Analytics utility functions
// Supports Google Analytics 4 (GA4) and other analytics providers

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    return;
  }

  // Load Google Analytics script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(script2);
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    return;
  }

  if (window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    return;
  }

  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track social link clicks
export const trackSocialClick = (platform: string) => {
  trackEvent("click", "social", platform);
};

// Track navigation clicks
export const trackNavigation = (section: string) => {
  trackEvent("click", "navigation", section);
};

// Track project views
export const trackProjectView = (projectName: string) => {
  trackEvent("view", "project", projectName);
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}
