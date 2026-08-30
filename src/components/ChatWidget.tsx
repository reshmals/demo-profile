"use client";

import { useState, useRef, useEffect } from "react";
import { personalInfo } from "@/data/resume-data";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Trash2,
  Minimize2,
  Maximize2,
  ExternalLink,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  initialPrompt?: string | null;
}

export default function ChatWidget({
  isOpen,
  onClose,
  onOpen,
  initialPrompt,
}: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello! I am the AI Career Assistant for **${personalInfo.name}** (Senior Associate Technology L2 & MCIA Integration Architect).\n\nAsk me anything about her **MuleSoft & RTF migrations**, **DataWeave transformations**, **Publicis Sapient leadership**, **certifications**, or **enterprise case studies**!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    "Tell me about Reshma's MuleSoft & RTF experience",
    "Why hire Reshma as an Integration Architect?",
    "What certifications does she hold?",
    "Tell me about her work at Publicis Sapient",
    "Who built this profile?",
    "I want one like this for myself",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // If triggered with an initial prompt from navbar/command palette
  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Failed to fetch response");

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.content }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Reshma Sodanwar is an MCIA-certified Integration Architect with 10+ years of experience in API-Led connectivity and MuleSoft Runtime Fabric (RTF). Please feel free to email her directly at reshma.sodanwar@publicissapient.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: `Chat history cleared. How can I help you explore **${personalInfo.name}**'s career profile?`,
      },
    ]);
  };

  const formatMessageText = (content: string) => {
    // Basic Markdown formatting helper for bold, bullet points, and links
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      // Process markdown links [text](url)
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      const formattedParts: (string | React.ReactNode)[] = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          formattedParts.push(line.substring(lastIndex, match.index));
        }
        formattedParts.push(
          <a
            key={`${idx}-${match.index}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neural-cyan underline hover:text-white font-medium inline-flex items-center gap-1"
          >
            {match[1]} <ExternalLink className="w-2.5 h-2.5 inline" />
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        formattedParts.push(line.substring(lastIndex));
      }

      // Render bold tokens **text**
      const renderedLine = formattedParts.map((part, pIdx) => {
        if (typeof part !== "string") return part;
        const boldParts = part.split(/(\*\*.*?\*\*)/g);
        return boldParts.map((bPart, bIdx) => {
          if (bPart.startsWith("**") && bPart.endsWith("**")) {
            return (
              <strong key={bIdx} className="font-semibold text-white">
                {bPart.slice(2, -2)}
              </strong>
            );
          }
          return bPart;
        });
      });

      if (line.startsWith("• ") || line.startsWith("- ")) {
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 pl-1">
            <span className="text-neural-cyan font-bold">•</span>
            <span>{renderedLine.length ? renderedLine : line.substring(2)}</span>
          </div>
        );
      }

      if (line.trim() === "") {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="my-0.5">
          {renderedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button when closed */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-neural-cyan via-neural-purple to-neural-cyan text-neural-bg font-bold shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group"
          aria-label="Open AI Resume Assistant"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 animate-pulse text-neural-bg" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neural-green rounded-full border border-neural-bg" />
          </div>
          <div className="text-left font-mono">
            <div className="text-xs font-extrabold tracking-wider leading-none">
              TALK TO RESUME
            </div>
            <div className="text-[10px] text-neural-bg/80 font-medium leading-none mt-0.5">
              AI Assistant Online
            </div>
          </div>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col bg-neural-surface border border-neural-border shadow-2xl rounded-2xl overflow-hidden backdrop-blur-xl ${
            isExpanded
              ? "inset-4 md:inset-10"
              : "bottom-6 right-6 w-[94vw] sm:w-[420px] h-[580px] max-h-[85vh]"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-neural-card border-b border-neural-border">
            <div className="flex items-center gap-2.5">
              <div className="relative p-1.5 rounded-lg bg-neural-cyan/20 border border-neural-cyan/40">
                <Bot className="w-4 h-4 text-neural-cyan" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-neural-green rounded-full animate-ping" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  RESUME AI ASSISTANT
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-neural-cyan/20 text-neural-cyan font-mono">
                    LLaMA-3.3
                  </span>
                </h3>
                <p className="text-[10px] text-slate-400 font-mono">
                  Trained on Reshma Sodanwar&apos;s Career
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-neural-surface transition-colors"
                title="Clear Chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-neural-surface transition-colors hidden sm:block"
                title={isExpanded ? "Minimize" : "Expand"}
              >
                {isExpanded ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-neural-surface transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
            {messages.map((msg, idx) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${
                    isAssistant ? "items-start" : "items-end justify-end"
                  }`}
                >
                  {isAssistant && (
                    <div className="w-6 h-6 rounded-md bg-neural-cyan/20 border border-neural-cyan/40 flex items-center justify-center text-neural-cyan shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                      isAssistant
                        ? "bg-neural-card border border-neural-border text-slate-200 rounded-tl-sm shadow-md"
                        : "bg-gradient-to-r from-neural-cyan to-neural-purple text-neural-bg font-medium rounded-tr-sm shadow-md"
                    }`}
                  >
                    {isAssistant ? formatMessageText(msg.content) : msg.content}
                  </div>

                  {!isAssistant && (
                    <div className="w-6 h-6 rounded-md bg-neural-purple/20 border border-neural-purple/40 flex items-center justify-center text-neural-purple shrink-0 mb-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex items-center gap-2 text-neural-cyan text-xs font-mono pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-neural-cyan animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-neural-cyan animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-neural-cyan animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] text-slate-400 ml-1">Analyzing career records...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-neural-card/40 border-t border-neural-border/60 overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap text-[10px] font-mono px-2.5 py-1 rounded-full bg-neural-surface border border-neural-border text-slate-300 hover:text-neural-cyan hover:border-neural-cyan/50 hover:bg-neural-card transition-all shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-neural-card border-t border-neural-border flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about MuleSoft, projects, leadership..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={loading}
              className="flex-1 bg-neural-surface border border-neural-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-neural-cyan transition-colors"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-xl bg-neural-cyan text-neural-bg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)]"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
