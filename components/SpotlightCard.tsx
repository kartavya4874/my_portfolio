"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

export default function SpotlightCard({ 
  children, 
  className = "", 
  highlightColor = "rgba(0, 245, 255, 0.12)",
  borderColor = "rgba(0, 245, 255, 0.4)"
}: { 
  children: ReactNode, 
  className?: string, 
  highlightColor?: string,
  borderColor?: string,
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${borderColor}, transparent 80%)`,
        }}
      />
      {/* Inner Mask to hide border glow inside */}
      <div className="absolute inset-[1px] rounded-2xl bg-[#030014]/95 backdrop-blur-xl transition-colors duration-500 group-hover:bg-[#030014]/80" />
      
      {/* Main Inner highlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${highlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
