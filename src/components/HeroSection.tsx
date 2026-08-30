"use client";

import { useEffect, useState } from "react";
import { personalInfo, stats } from "@/data/resume-data";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Code2, Server, Download, Mail, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  onOpenChat: (initialPrompt?: string) => void;
}

export default function HeroSection({ onOpenChat }: HeroSectionProps) {
  const titles = [
    "MuleSoft Certified Integration Architect (MCIA)",
    "Senior Associate Technology L2 @ Publicis Sapient",
    "Runtime Fabric (RTF) & Cloud Migration Specialist",
    "API-Led Connectivity & DataWeave 2.0 Expert",
    "Enterprise iPaaS Architect (Dell Boomi & Workato)",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-neural-bg bg-grid-pattern">
      {/* Background Neural Canvas */}
      <NeuralNetworkCanvas />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neural-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-neural-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neural-surface/80 border border-neural-border shadow-inner text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-neural-green animate-pulse" />
            <span className="text-neural-cyan font-semibold">10+ YEARS EXPERIENCE</span>
            <span className="text-slate-500">•</span>
            <span>PUBLICIS SAPIENT PUNE</span>
            <span className="text-slate-500">•</span>
            <span className="text-neural-purple">MCIA CERTIFIED</span>
          </div>

          {/* Main Name & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              {personalInfo.name}
            </h1>

            {/* Rotating Title */}
            <div className="h-10 sm:h-12 flex items-center justify-center">
              <p
                className={`text-base sm:text-2xl font-mono font-medium text-gradient transition-all duration-300 ${
                  fade ? "opacity-100 transform-none" : "opacity-0 translate-y-2"
                }`}
              >
                &gt; {titles[titleIndex]}
              </p>
            </div>
          </div>

          {/* Value Proposition Description */}
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-light">
            Architecting high-availability <span className="text-white font-medium">API-led connectivity</span>,{" "}
            <span className="text-neural-cyan font-medium">MuleSoft Runtime Fabric (RTF)</span> migrations, and hybrid iPaaS solutions for global enterprises including{" "}
            <span className="text-slate-100 font-medium">Sunbelt Rentals, City National Bank, Waters Tech, and GlenCore</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onOpenChat("Tell me about Reshma's integration architecture and leadership background.")}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-neural-cyan to-neural-purple text-neural-bg font-bold text-sm hover:opacity-95 shadow-[0_0_25px_rgba(0,212,255,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-neural-bg" />
              <span>Talk to My Resume (AI)</span>
            </button>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neural-surface/80 border border-neural-border text-white text-sm font-medium hover:border-neural-cyan/60 hover:bg-neural-card transition-all"
            >
              <span>Explore Career Epochs</span>
              <ArrowRight className="w-4 h-4 text-neural-cyan" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-neural-surface/50 border border-neural-border/60 text-slate-300 text-sm hover:text-white hover:border-neural-border transition-all"
            >
              <Code2 className="w-4 h-4 text-neural-purple" />
              <span>Enterprise Projects</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-xl text-center flex flex-col items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neural-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white group-hover:text-neural-cyan transition-colors">
                  {item.value}
                </span>
                <span className="text-xs text-slate-400 font-medium mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Enterprise Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 py-1 px-3 rounded-md bg-neural-surface/50 border border-neural-border">
              <Server className="w-3.5 h-3.5 text-neural-cyan" />
              Publicis Sapient Lead
            </span>
            <span className="flex items-center gap-1.5 py-1 px-3 rounded-md bg-neural-surface/50 border border-neural-border">
              <ShieldCheck className="w-3.5 h-3.5 text-neural-green" />
              MCIA Certified (2023)
            </span>
            <span className="flex items-center gap-1.5 py-1 px-3 rounded-md bg-neural-surface/50 border border-neural-border">
              <Cpu className="w-3.5 h-3.5 text-neural-purple" />
              Dell Boomi & Workato
            </span>
            <span className="flex items-center gap-1.5 py-1 px-3 rounded-md bg-neural-surface/50 border border-neural-border">
              🏛️ VJTI Mumbai (B.E. 2005)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
