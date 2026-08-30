"use client";

import { useState } from "react";
import { skillCategories } from "@/data/resume-data";
import { Cpu, Layers, Sparkles, Filter } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? skillCategories.filter((cat) => cat.name === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="py-20 bg-neural-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <span className="cyber-badge">TECH STACK // CAPABILITIES</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical &amp; Architectural <span className="text-gradient">Skill Matrix</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Specialized competencies honed across a decade of enterprise integration, cloud migration, and backend engineering.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
              activeCategory === null
                ? "bg-neural-cyan text-neural-bg font-bold shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                : "bg-neural-surface border border-neural-border text-slate-300 hover:text-white"
            }`}
          >
            ALL CAPABILITIES ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono flex items-center gap-2 transition-all ${
                activeCategory === category.name
                  ? "bg-neural-purple text-white font-bold shadow-[0_0_15px_rgba(129,140,248,0.4)]"
                  : "bg-neural-surface border border-neural-border text-slate-300 hover:text-white"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={category.name}
              className="glass-card p-6 rounded-2xl border border-neural-border space-y-4 hover:border-neural-cyan/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner accent glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: category.color }}
              />

              <div className="flex items-center justify-between border-b border-neural-border/60 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-neural-cyan transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: category.color }}
                />
              </div>

              {/* Skills Tag Cloud */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-neural-surface/80 border border-neural-border/70 text-slate-200 hover:text-white hover:border-neural-cyan/60 hover:bg-neural-card transition-all cursor-default flex items-center gap-1.5"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Spotlight Box */}
        <div className="mt-10 p-6 rounded-2xl glass-card border border-neural-border/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-white font-mono flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-neural-cyan" />
              SPECIALIZED SPOTLIGHT: ANYPOINT RUNTIME FABRIC &amp; DATAWEAVE
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              Engineered end-to-end containerized deployments on RTF clusters with automated CI/CD pipelines in Azure DevOps, Anypoint CLI audit scripting, and DataWeave transformations handling high-throughput XML/JSON message transformations.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="cyber-badge text-neural-green border-neural-green/40 bg-neural-green/10">
              MCIA Certified
            </span>
            <span className="cyber-badge text-neural-purple border-neural-purple/40 bg-neural-purple/10">
              Dell Boomi Certified
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
