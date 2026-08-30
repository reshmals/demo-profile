"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  pulseSpeed: number;
}

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const colors = ["#00d4ff", "#818cf8", "#34d399", "#f472b6"];
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 75);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
        baseRadius: Math.random() * 2 + 1.5,
        color,
        pulseSpeed: Math.random() * 0.05 + 0.02,
      });
    }

    let mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          const force = (1 - mDist / mouse.radius) * 2;
          node.x += (mdx / mDist) * force;
          node.y += (mdy / mDist) * force;

          // Connect to mouse
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.4 * (1 - mDist / mouse.radius)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        const pulse = Math.sin(time + i) * 0.6 + 1;
        const currentRadius = node.baseRadius * pulse;

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
