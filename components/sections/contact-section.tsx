"use client"

import React from 'react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  socialLinks?: Array<{ id: string; name: string; iconSrc: string; href: string }>;
  backgroundImageSrc?: string;
  onSubmit?: (data: any) => void;
}

const defaultSocialLinks = [
  { id: '1', name: 'X', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/x.svg', href: '#x' },
  { id: '2', name: 'Instagram', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg', href: '#instagram' },
  { id: '3', name: 'LinkedIn', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg', href: '#linkedin' },
];

export function ContactSection({
  title = "We can turn your dream project into reality",
  mainMessage = "Let's talk! 👋",
  contactEmail = "abhishekhbihari07@gmail.com",
  socialLinks = defaultSocialLinks,
  backgroundImageSrc = "https://images.unsplash.com/photo-1742273330004-ef9c9d228530?auto=format&fit=crop&q=80&w=2000",
  onSubmit,
}: ContactSectionProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    projectType: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '', projectType: [] });
  };

  const projectTypeOptions = [
    'Website', 'Mobile App', 'Web App', 'E-Commerce',
    'Brand Identity', '3D & Animation', 'Social Media Marketing',
    'Brand Strategy & Consulting', 'Other'
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <SectionBackgroundShapes variant="dense" className="absolute inset-0 opacity-30" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6 md:p-12 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl">
          
          {/* Left Side: Title */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter">
              {title}
            </h2>
            <div className="space-y-4">
              <p className="text-neutral-500 uppercase tracking-widest text-sm font-bold">Mail me at</p>
              <a 
                href={`mailto:${contactEmail}`} 
                className="text-2xl md:text-3xl font-bold text-blue-500 hover:text-blue-400 transition-colors"
              >
                {contactEmail}
              </a>
              <div className="flex items-center gap-4 pt-4">
                {socialLinks.map((link) => (
                  <Button 
                    key={link.id} 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <img src={link.iconSrc} alt={link.name} className="h-4 w-4 invert" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-8">{mainMessage}</h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-neutral-400 ml-1">Your name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Abhishekh Bihari" 
                    className="bg-white/5 border-white/10 text-white rounded-xl h-12 focus:ring-blue-500/50"
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-neutral-400 ml-1">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="email@example.com" 
                    className="bg-white/5 border-white/10 text-white rounded-xl h-12 focus:ring-blue-500/50"
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-neutral-400 ml-1">Your project idea...</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your vision..."
                  className="min-h-[120px] bg-white/5 border-white/10 text-white rounded-xl p-4 focus:ring-blue-500/50"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-4">
                <p className="text-neutral-400 text-sm font-medium ml-1">I&apos;m looking for...</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {projectTypeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-3 group">
                      <Checkbox
                        id={option.replace(/\s/g, '-').toLowerCase()}
                        checked={formData.projectType.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                        className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label 
                        htmlFor={option.replace(/\s/g, '-').toLowerCase()} 
                        className="text-xs text-neutral-400 font-medium cursor-pointer group-hover:text-white transition-colors"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-14 text-lg font-bold shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all">
                Send a message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
