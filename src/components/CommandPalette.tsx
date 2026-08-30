"use client";

import { useEffect, useState } from "react";
import { Search, Sparkles, Briefcase, Award, Cpu, User, MessageSquare, ExternalLink, X } from "lucide-react";

interface CommandPaletteProps {
  onOpenChat: (initialPrompt?: string) => void;
}

export default function CommandPalette({ onOpenChat }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    {
      id: "ai-mule",
      category: "AI Resume Assistant",
      icon: <Sparkles className="w-4 h-4 text-neural-cyan" />,
      label: "Ask AI about Reshma's MuleSoft & RTF Experience",
      action: () => {
        setIsOpen(false);
        onOpenChat("Tell me about Reshma's MuleSoft and RTF experience.");
      },
    },
    {
      id: "ai-lead",
      category: "AI Resume Assistant",
      icon: <Sparkles className="w-4 h-4 text-neural-purple" />,
      label: "Ask AI: Why hire Reshma as an Integration Architect?",
      action: () => {
        setIsOpen(false);
        onOpenChat("Why should an enterprise hire Reshma as an Integration Architect?");
      },
    },
    {
      id: "nav-about",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-slate-400" />,
      label: "Jump to About & Education (VJTI Mumbai)",
      action: () => {
        setIsOpen(false);
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-skills",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-slate-400" />,
      label: "Jump to Skill Matrix & iPaaS Ecosystem",
      action: () => {
        setIsOpen(false);
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-experience",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-slate-400" />,
      label: "Jump to Career Epochs & Publicis Sapient Timeline",
      action: () => {
        setIsOpen(false);
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-projects",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-slate-400" />,
      label: "Jump to Featured Enterprise Projects",
      action: () => {
        setIsOpen(false);
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-certs",
      category: "Navigation",
      icon: <Award className="w-4 h-4 text-slate-400" />,
      label: "Jump to Certifications (MCIA, Boomi, Workato, MCD)",
      action: () => {
        setIsOpen(false);
        document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "external-whatsapp",
      category: "IntelliForge",
      icon: <ExternalLink className="w-4 h-4 text-neural-green" />,
      label: "Want a profile like this? Join WhatsApp Group",
      action: () => {
        setIsOpen(false);
        window.open("https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t", "_blank");
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl bg-neural-surface border border-neural-border rounded-xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-neural-border bg-neural-card/50">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or ask a question... (ESC to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-slate-500 font-mono"
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-neural-border/30">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-slate-400 text-sm">
              <p>No matching commands found.</p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenChat(query);
                }}
                className="mt-3 inline-flex items-center gap-2 text-xs text-neural-cyan hover:underline"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Ask AI chat: &ldquo;{query}&rdquo;
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredCommands.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm hover:bg-neural-card hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-neural-bg border border-neural-border group-hover:border-neural-cyan/40">
                      {cmd.icon}
                    </div>
                    <span>{cmd.label}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {cmd.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-neural-bg/80 border-t border-neural-border text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or enter</span>
          <span className="flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 rounded bg-neural-surface border border-neural-border text-[10px]">
              ESC
            </kbd>{" "}
            to close
          </span>
        </div>
      </div>
    </div>
  );
}
