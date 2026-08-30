"use client";

import { certifications } from "@/data/resume-data";
import { Award, ShieldCheck, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-neural-bg border-t border-neural-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <span className="cyber-badge">VERIFIED CREDENTIALS // ARCHITECTURE</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional <span className="text-gradient">Certifications &amp; Degrees</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Certified architectural expertise across premier enterprise integration platforms and academic engineering background.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const isDegree = cert.title.includes("Bachelor of Engineering");

            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border flex flex-col justify-between space-y-4 hover:shadow-[0_10px_30px_rgba(129,140,248,0.15)] transition-all duration-300 group ${
                  cert.isCurrent
                    ? "border-neural-border hover:border-neural-cyan/60"
                    : "border-neural-border/70 hover:border-neural-purple/50"
                }`}
              >
                <div className="space-y-3">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-neural-surface border border-neural-border group-hover:border-neural-cyan/50 transition-colors">
                      {isDegree ? (
                        <GraduationCap className="w-5 h-5 text-neural-purple" />
                      ) : (
                        <Award className="w-5 h-5 text-neural-cyan" />
                      )}
                    </div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-neural-surface border border-neural-border text-slate-300">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-neural-cyan transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-neural-purple mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>

                {/* Badge Status */}
                <div className="pt-3 border-t border-neural-border/50 flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-neural-green">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {cert.isCurrent ? "Active Enterprise Credential" : "Verified Degree"}
                  </span>
                  <span className="text-slate-500">
                    {isDegree ? "Mumbai Univ" : "Certified"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
