"use client";

import { useState } from "react";
import { graphNodes, projectConnections, skillJourney } from "@/data/resume-data";
import { Network, TrendingUp, GitBranch, ArrowRight, Layers } from "lucide-react";

export default function SkillDNA() {
  const [selectedNode, setSelectedNode] = useState<string | null>("Sapient");

  const activeNodeDetails = graphNodes.find((n) => n.id === selectedNode);
  const activeConnections = projectConnections.filter(
    (c) => c.from === selectedNode || c.to === selectedNode
  );

  return (
    <section id="skill-dna" className="py-20 bg-neural-bg border-t border-neural-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <span className="cyber-badge">CAREER GRAPH // SKILL FLOW</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skill DNA &amp; <span className="text-gradient">Knowledge Graph</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Interactive visualization of shared competencies across career nodes and historical skill proficiency progression.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Career Node Graph */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-neural-border space-y-4">
              <div className="flex items-center justify-between border-b border-neural-border/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <Network className="w-5 h-5 text-neural-cyan" />
                  <h3 className="text-base font-bold text-white">Career Topology Nodes</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Click a node to inspect</span>
              </div>

              {/* Nodes Selection Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {graphNodes.map((node) => {
                  const isSelected = selectedNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? "bg-neural-card border-neural-cyan shadow-[0_0_15px_rgba(0,212,255,0.25)] ring-1 ring-neural-cyan"
                          : "bg-neural-surface/60 border-neural-border hover:border-neural-cyan/40 hover:bg-neural-card/80"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{node.id}</span>
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: node.color }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 mt-2">
                        {node.years}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Node Details & Connected Edges */}
              {activeNodeDetails && (
                <div className="p-4 rounded-xl bg-neural-surface/90 border border-neural-border/80 space-y-3 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: activeNodeDetails.color }}
                      />
                      <h4 className="text-sm font-bold text-white">{activeNodeDetails.domain}</h4>
                    </div>
                    <span className="text-xs font-mono text-neural-cyan">
                      Weight: {activeNodeDetails.size}/5
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-neural-border/60">
                    <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5 text-neural-purple" />
                      Cross-Node Skill Transfers:
                    </p>
                    <div className="space-y-2">
                      {activeConnections.map((conn, idx) => {
                        const targetNode = conn.from === selectedNode ? conn.to : conn.from;
                        return (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-neural-bg/80 border border-neural-border/60 text-xs flex flex-col gap-1.5"
                          >
                            <div className="flex items-center justify-between font-mono text-[11px]">
                              <span className="text-slate-300 flex items-center gap-1">
                                {selectedNode} <ArrowRight className="w-3 h-3 text-neural-cyan" /> {targetNode}
                              </span>
                              <span className="text-neural-green">Link Strength: {conn.strength}/8</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {conn.sharedSkills.map((sk) => (
                                <span
                                  key={sk}
                                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neural-card text-neural-cyan"
                                >
                                  {sk}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Skill Journey Progression Bars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-neural-border space-y-6">
              <div className="flex items-center justify-between border-b border-neural-border/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-neural-green" />
                  <h3 className="text-base font-bold text-white">Skill Trajectory &amp; Mastery Growth</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Proficiency Index (0-100)</span>
              </div>

              <div className="space-y-5">
                {skillJourney.map((journey) => {
                  const latestMilestone = journey.milestones[journey.milestones.length - 1];

                  return (
                    <div key={journey.skill} className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{journey.skill}</span>
                        <span className="font-mono text-neural-cyan font-bold">
                          {latestMilestone.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-neural-surface rounded-full h-2 overflow-hidden border border-neural-border">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${latestMilestone.level}%`,
                            backgroundColor: journey.color,
                            boxShadow: `0 0 10px ${journey.color}66`,
                          }}
                        />
                      </div>

                      {/* Milestones timeline */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-0.5">
                        {journey.milestones.map((m, idx) => (
                          <span key={idx} className="flex items-center gap-1">
                            <span>{m.company} ({m.year})</span>
                            <span className="text-slate-500">[{m.level}%]</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 rounded-xl bg-neural-surface/60 border border-neural-border/70 flex items-center gap-3 text-xs text-slate-400">
                <Layers className="w-4 h-4 text-neural-cyan shrink-0" />
                <span>
                  Proficiency indices derived from enterprise architectural scope, team size guided, and production incident resistance.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
