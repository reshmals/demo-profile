"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/resume-data";
import { MessageSquare, Menu, X, Sparkles, Terminal, FileText } from "lucide-react";

interface NavbarProps {
  onOpenChat: () => void;
}

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Timeline", href: "#experience" },
    { label: "Skill DNA", href: "#skill-dna" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-neural-bg/85 backdrop-blur-md border-b border-neural-border/80 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neural-cyan/20 to-neural-purple/20 border border-neural-cyan/40 flex items-center justify-center font-mono font-bold text-neural-cyan text-sm group-hover:border-neural-cyan transition-all group-hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]">
            RS
          </div>
          <div>
            <span className="font-bold text-white tracking-wide text-sm sm:text-base group-hover:text-neural-cyan transition-colors">
              {personalInfo.name}
            </span>
            <span className="hidden sm:block text-[10px] font-mono text-slate-400 tracking-wider">
              MCIA ARCHITECT // SAPIENT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-neural-surface/60 border border-neural-border/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-neural-cyan hover:bg-neural-card/80 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick AI Chat Trigger */}
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-neural-cyan/15 to-neural-purple/20 border border-neural-cyan/50 text-white text-xs font-medium hover:border-neural-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all active:scale-95"
            title="Ask AI Resume Assistant"
          >
            <Sparkles className="w-3.5 h-3.5 text-neural-cyan animate-pulse" />
            <span className="hidden sm:inline">Ask Resume AI</span>
            <span className="sm:hidden font-mono text-[11px]">AI Chat</span>
          </button>

          {/* Quick Command Palette Info */}
          <div className="hidden xl:flex items-center gap-1 px-2.5 py-1 rounded-md bg-neural-surface border border-neural-border text-[10px] font-mono text-slate-400">
            <span>Press</span>
            <kbd className="px-1 py-0.5 rounded bg-neural-bg border border-neural-border text-slate-300">
              Ctrl+K
            </kbd>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neural-surface border border-neural-border text-slate-300 lg:hidden hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neural-surface/95 border-b border-neural-border backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-neural-cyan hover:bg-neural-card rounded-md font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-neural-border flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neural-cyan/15 border border-neural-cyan text-neural-cyan text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              Ask Reshma&apos;s Resume AI
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
