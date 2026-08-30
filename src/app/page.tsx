"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillDNA from "@/components/SkillDNA";
import ProjectShowcase from "@/components/ProjectShowcase";
import CertificationsSection from "@/components/CertificationsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialPrompt, setChatInitialPrompt] = useState<string | null>(null);

  const handleOpenChat = (prompt?: string) => {
    if (prompt) {
      setChatInitialPrompt(prompt);
    }
    setIsChatOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-neural-bg text-slate-100 selection:bg-neural-cyan/30 selection:text-neural-cyan overflow-x-hidden">
      {/* Intro Boot Loader Screen */}
      <LoadingScreen />

      {/* Interactive Cursor Follower */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette onOpenChat={handleOpenChat} />

      {/* Glassmorphic Navbar */}
      <Navbar onOpenChat={() => handleOpenChat()} />

      {/* Hero Section with Neural Network Visualizer */}
      <HeroSection onOpenChat={handleOpenChat} />

      {/* System Overview & VJTI Mumbai Education */}
      <AboutSection />

      {/* Skill Matrix & iPaaS Ecosystem */}
      <SkillsSection />

      {/* Chronological Career Epochs & Publicis Sapient Timeline */}
      <ExperienceTimeline />

      {/* Skill DNA Topology Graph & Proficiency Progressions */}
      <SkillDNA />

      {/* Enterprise Case Studies & Projects */}
      <ProjectShowcase />

      {/* Professional Certifications & Degrees */}
      <CertificationsSection />

      {/* Colleague & Leadership Endorsements */}
      <Testimonials />

      {/* Footer with IntelliForge Attribution & WhatsApp Community Link */}
      <Footer />

      {/* Embedded Resume AI Chatbot Widget */}
      <ChatWidget
        isOpen={isChatOpen}
        onOpen={() => handleOpenChat()}
        onClose={() => setIsChatOpen(false)}
        initialPrompt={chatInitialPrompt}
      />
    </main>
  );
}
