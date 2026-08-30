"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("INITIALIZING NEURAL RUNTIME...");

  useEffect(() => {
    const logs = [
      { p: 20, text: "LOADING INTEGRATION ARTIFACTS..." },
      { p: 45, text: "MOUNTING ANYPOINT RUNTIME FABRIC..." },
      { p: 70, text: "PARSING DATAWEAVE TRANSFORMATIONS..." },
      { p: 90, text: "SYNCHRONIZING CAREER EPOCHS..." },
      { p: 100, text: "PROFILE ONLINE." },
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < logs.length) {
        setProgress(logs[step].p);
        setCurrentText(logs[step].text);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 400);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neural-bg text-slate-100 transition-opacity duration-500">
      <div className="w-full max-w-md px-6 text-center space-y-6">
        <div className="relative flex items-center justify-center mx-auto w-20 h-20">
          <div className="absolute inset-0 rounded-full border-2 border-neural-cyan/30 animate-ping" />
          <div className="absolute inset-2 rounded-full border-2 border-t-neural-cyan border-r-transparent border-b-neural-purple border-l-transparent animate-spin" />
          <span className="font-mono text-neural-cyan text-sm font-bold">RS</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-widest text-white">
            RESHMA SODANWAR
          </h2>
          <p className="font-mono text-xs text-neural-cyan tracking-wider">
            SENIOR ASSOCIATE TECHNOLOGY L2 // MCIA ARCHITECT
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-full bg-neural-surface rounded-full h-1.5 overflow-hidden border border-neural-border">
            <div
              className="bg-gradient-to-r from-neural-cyan via-neural-purple to-neural-pink h-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between font-mono text-[10px] text-slate-400">
            <span>{currentText}</span>
            <span className="text-neural-cyan font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
