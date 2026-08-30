"use client";

import { personalInfo } from "@/data/resume-data";
import { Mail, Linkedin, Github, ExternalLink, Sparkles, MessageCircle, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neural-bg border-t border-neural-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-neural-cyan/5 to-transparent pointer-events-none" />

      {/* WhatsApp Community Lead CTA Banner */}
      <div className="border-b border-neural-border/80 bg-gradient-to-r from-neural-cyan/10 via-neural-purple/10 to-neural-cyan/10 py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neural-cyan animate-pulse" />
              Want an AI-Powered Digital Profile Like This?
            </h3>
            <p className="text-xs text-slate-300">
              Transform your resume into an interactive, AI-driven portfolio with embedded career intelligence.
            </p>
          </div>

          <a
            href="https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neural-green text-neural-bg font-bold text-xs hover:bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all shrink-0 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Join WhatsApp Community</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neural-cyan/30 to-neural-purple/30 border border-neural-cyan/50 flex items-center justify-center font-mono font-bold text-neural-cyan text-sm">
                RS
              </div>
              <span className="font-bold text-lg text-white">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Senior Associate Technology L2 &amp; MuleSoft Certified Integration Architect (MCIA) with 10+ years architecting resilient API-led enterprise solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neural-surface border border-neural-border text-slate-400 hover:text-neural-cyan hover:border-neural-cyan transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neural-surface border border-neural-border text-slate-400 hover:text-neural-cyan hover:border-neural-cyan transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-neural-surface border border-neural-border text-slate-400 hover:text-neural-cyan hover:border-neural-cyan transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-neural-cyan uppercase tracking-wider">
              Profile Sections
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About &amp; VJTI Education</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Integration Skills Matrix</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Career Epochs Timeline</a></li>
              <li><a href="#skill-dna" className="hover:text-white transition-colors">Skill DNA &amp; Topology</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Enterprise Client Projects</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">MCIA &amp; Boomi Certifications</a></li>
            </ul>
          </div>

          {/* Col 3: Intelligence & Attribution */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-neural-purple uppercase tracking-wider">
              Platform &amp; AI
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                Powered by Next.js 15, Tailwind CSS, Canvas Neural Visualizer, and embedded AI Resume Assistant.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.intelliforge.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neural-cyan hover:underline"
                >
                  <span>Built by IntelliForge AI</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neural-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.intelliforge.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-neural-cyan transition-colors"
            >
              IntelliForge AI
            </a>
            <span>•</span>
            <a
              href="https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neural-green hover:underline flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              Build Your Profile
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
