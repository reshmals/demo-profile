"use client";

import { useState } from "react";
import { featuredProjects } from "@/data/resume-data";
import { Briefcase, CheckCircle2, Code2, ArrowUpRight, Zap } from "lucide-react";

export default function ProjectShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const domains = ["All", ...Array.from(new Set(featuredProjects.map((p) => p.domain)))];

  const filteredProjects =
    selectedFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.domain === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-neural-surface/40 border-t border-neural-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <span className="cyber-badge">ENTERPRISE CASE STUDIES // DELIVERIES</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient">Client Projects</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Selected mission-critical integration initiatives engineered for global industry leaders across multiple sectors.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedFilter(dom)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedFilter === dom
                  ? "bg-neural-cyan text-neural-bg font-bold shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                  : "bg-neural-surface border border-neural-border text-slate-300 hover:text-white"
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-neural-border flex flex-col justify-between space-y-4 hover:border-neural-cyan/50 hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)] transition-all duration-300 group"
            >
              <div className="space-y-3">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold"
                    style={{
                      backgroundColor: `${project.domainColor}20`,
                      color: project.domainColor,
                      border: `1px solid ${project.domainColor}40`,
                    }}
                  >
                    {project.domain}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {project.client.split("(")[0].trim()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-neural-cyan transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Impact Box */}
                <div className="p-3 rounded-xl bg-neural-bg/80 border border-neural-border/70 flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-neural-cyan shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase text-neural-cyan font-bold tracking-wider">
                      Business Impact &amp; Architecture:
                    </span>
                    <p className="text-xs text-slate-200 leading-snug">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-3 border-t border-neural-border/50 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-neural-surface border border-neural-border/60 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
