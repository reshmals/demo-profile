"use client";

import { useState } from "react";
import { experience } from "@/data/resume-data";
import { Briefcase, Calendar, ChevronRight, Activity, Award, Code, CheckCircle } from "lucide-react";

export default function ExperienceTimeline() {
  const [selectedEpoch, setSelectedEpoch] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-neural-surface/30 border-t border-neural-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <span className="cyber-badge">TRAINING RUNS // CAREER TIMELINE</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Career Epochs &amp; <span className="text-gradient">Engineering Trajectory</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            A chronological timeline of enterprise leadership, complex migrations, and integration milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-neural-border/80 ml-4 md:ml-32 space-y-12">
          {experience.map((item) => {
            const isSelected = selectedEpoch === item.epoch;

            return (
              <div
                key={item.epoch}
                className="relative pl-6 md:pl-10 group"
              >
                {/* Timeline Node Icon */}
                <div
                  className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-neural-surface border-2 flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: item.domainColor,
                    boxShadow: `0 0 12px ${item.domainColor}55`,
                  }}
                >
                  E{item.epoch}
                </div>

                {/* Left Timestamp Label (Desktop) */}
                <div className="hidden md:block absolute -left-32 top-2 w-24 text-right">
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {item.period.split("–")[0].trim()}
                  </span>
                </div>

                {/* Main Epoch Card */}
                <div
                  className={`glass-card p-6 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? "border-neural-cyan shadow-[0_0_30px_rgba(0,212,255,0.15)]"
                      : "border-neural-border group-hover:border-neural-cyan/50"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-neural-border/60">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold"
                          style={{
                            backgroundColor: `${item.domainColor}20`,
                            color: item.domainColor,
                            border: `1px solid ${item.domainColor}40`,
                          }}
                        >
                          EPOCH {item.epoch} — {item.phase}
                        </span>
                        <span className="text-xs text-slate-400 font-mono md:hidden flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-neural-cyan transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-neural-cyan" />
                        <span className="text-white font-semibold">{item.company}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-xs text-slate-400 font-mono">{item.companyType}</span>
                      </p>
                    </div>

                    {/* Neural Metrics (Accuracy & Loss) */}
                    <div className="flex items-center gap-3 bg-neural-bg/80 border border-neural-border px-3 py-1.5 rounded-lg text-xs font-mono shrink-0">
                      <div className="flex items-center gap-1 text-neural-green">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Acc: {item.accuracy}%</span>
                      </div>
                      <span className="text-slate-600">|</span>
                      <div className="text-slate-400">
                        <span>Loss: {item.loss.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Period badge desktop */}
                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="hidden md:flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-neural-cyan" />
                      {item.period}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Domain: <span className="text-slate-200">{item.domain}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 pt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="space-y-2 pt-3">
                    <h4 className="text-xs font-mono font-semibold text-neural-cyan uppercase tracking-wider">
                      Key Deliverables &amp; Architectural Impact:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-neural-cyan shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 mt-2 border-t border-neural-border/50 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] font-mono text-slate-400 mr-2 flex items-center gap-1">
                      <Code className="w-3 h-3 text-neural-purple" />
                      Stack:
                    </span>
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-neural-surface border border-neural-border text-slate-300 hover:text-white hover:border-neural-cyan/50 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
