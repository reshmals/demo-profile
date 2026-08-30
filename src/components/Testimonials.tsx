"use client";

import { testimonials } from "@/data/resume-data";
import { Quote, UserCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-neural-surface/30 border-t border-neural-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <span className="cyber-badge">PEER REVIEWS // ENDORSEMENTS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Colleague &amp; Leadership <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Feedback from engineering leaders, solutions architects, and project partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-neural-border flex flex-col justify-between space-y-6 hover:border-neural-cyan/40 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-neural-cyan/40" />
                <p className="text-sm text-slate-200 leading-relaxed italic font-light">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neural-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neural-cyan/20 to-neural-purple/30 border border-neural-cyan/40 flex items-center justify-center font-mono font-bold text-xs text-neural-cyan">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs font-mono text-neural-purple">{t.relationship}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
