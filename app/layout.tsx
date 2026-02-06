import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Abhishekh Bihari - Full Stack Developer Portfolio",
    template: "%s | Abhishekh Bihari",
  },
  description: "Full Stack Developer and Freelancer specializing in React.js, TypeScript, Node.js, and cloud platforms. Building modern, scalable web applications with clean code and best practices.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Freelancer",
  ],
  authors: [{ name: "Abhishekh Bihari" }],
  creator: "Abhishekh Bihari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekhbihari.vercel.app",
    siteName: "Abhishekh Bihari Portfolio",
    title: "Abhishekh Bihari - Full Stack Developer Portfolio",
    description: "Full Stack Developer and Freelancer specializing in React.js, TypeScript, Node.js, and cloud platforms.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishekh Bihari - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishekh Bihari - Full Stack Developer Portfolio",
    description: "Full Stack Developer and Freelancer specializing in React.js, TypeScript, Node.js, and cloud platforms.",
    images: ["/og-image.jpg"],
    creator: "@abhishekh_bihari",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  other: {
    "preconnect": "https://prod.spline.design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
