"use client";

import { personalInfo, domains } from "@/data/resume-data";
import { GraduationCap, MapPin, Mail, Layers, ShieldCheck, Cpu, Database, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const architecturalPillars = [
    {
      title: "API-Led Connectivity",
      desc: "Architecting decoupled 3-tier System, Process, and Experience APIs on MuleSoft Anypoint Platform for high maintainability and reuse.",
      icon: <Layers className="w-5 h-5 text-neural-cyan" />,
    },
    {
      title: "Containerized Cloud & RTF",
      desc: "Expert in migrating on-prem workloads to MuleSoft Runtime Fabric (RTF) container clusters, optimizing Anypoint CLI automation and resource limits.",
      icon: <Cpu className="w-5 h-5 text-neural-purple" />,
    },
    {
      title: "Resilient Data Transformation",
      desc: "Designing high-throughput DataWeave 2.0 mapping engines transforming complex legacy XML structures to modern standardized JSON APIs.",
      icon: <Database className="w-5 h-5 text-neural-green" />,
    },
    {
      title: "Security & Automated CI/CD",
      desc: "Remediating Nexus vulnerability scans, establishing automated MUnit suites, and deploying via Azure DevOps & Jenkins pipelines.",
      icon: <ShieldCheck className="w-5 h-5 text-neural-amber" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-neural-surface/40 border-t border-neural-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <span className="cyber-badge">SYSTEM OVERVIEW</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-gradient">Reshma Sodanwar</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            A decade of engineering leadership delivering mission-critical integration solutions and cloud migrations for global Fortune 500 enterprises.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Summary Card & Education */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bio Card */}
            <div className="glass-card p-6 rounded-2xl space-y-4 border border-neural-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-neural-cyan/30 via-neural-purple/30 to-neural-pink/20 border border-neural-cyan/50 flex items-center justify-center font-mono font-bold text-xl text-white shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                  RS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-neural-cyan">Senior Associate Technology L2</p>
                  <p className="text-xs text-slate-400">Publicis Sapient (Pune Office)</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {personalInfo.summary}
              </p>

              <div className="pt-3 border-t border-neural-border/60 flex flex-col gap-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neural-cyan shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-neural-purple shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-neural-cyan hover:underline truncate">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-card p-6 rounded-2xl border border-neural-border space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neural-purple/20 border border-neural-purple/40 text-neural-purple">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Academic Foundation</h4>
                  <p className="text-xs text-slate-400">Premier Technological Institute</p>
                </div>
              </div>

              <div className="space-y-1 pl-1">
                <p className="text-sm font-semibold text-slate-100">
                  Bachelor of Engineering (Computer Science & Engineering)
                </p>
                <p className="text-xs font-mono text-neural-cyan">
                  Veermata Jijabai Technological Institute (VJTI), Mumbai University (2005)
                </p>
                <p className="text-xs text-slate-400 pt-1">
                  Rigorous computer science curriculum emphasizing distributed systems, algorithm design, data engineering, and scalable architecture.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Industry Domains & Architecture Principles */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Architecture Principles Grid */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-neural-cyan font-mono text-sm">//</span> Core Architectural Competencies
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {architecturalPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-xl border border-neural-border space-y-2 hover:border-neural-cyan/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      {pillar.icon}
                      <h4 className="text-sm font-bold text-slate-100">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Domains Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-neural-purple font-mono text-sm">//</span> Industry Sectors & Business Domains
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {domains.map((dom, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-neural-card/70 border border-neural-border/80 flex items-center gap-3 hover:border-neural-purple/50 transition-colors"
                  >
                    <span className="text-xl">{dom.icon}</span>
                    <span className="text-xs font-medium text-slate-200 leading-tight">
                      {dom.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Leadership Note */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-neural-cyan/10 via-neural-purple/10 to-transparent border border-neural-cyan/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neural-cyan shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <p className="font-semibold text-slate-100">Team Leadership & Engineering Governance</p>
                <p className="text-slate-300 leading-relaxed">
                  Actively led integration squads of 5+ developers, establishing best-in-class RAML API specifications, automated MUnit quality gates, and structured coaching to drive zero-defect production releases.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
