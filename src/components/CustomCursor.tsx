"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-neural-cyan ${
            isPointer ? "scale-150 bg-neural-pink" : ""
          } transition-all duration-150`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-40 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0)`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border border-neural-cyan/40 ${
            isPointer ? "scale-150 border-neural-pink/60 bg-neural-pink/10" : ""
          } transition-all duration-200`}
        />
      </div>
    </>
  );
}
