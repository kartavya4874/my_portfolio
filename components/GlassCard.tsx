"use client";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
}

export default function GlassCard({ children, glow = true, className = "", ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        glow
          ? {
              boxShadow: "0 0 30px rgba(0,245,255,0.08), 0 0 60px rgba(123,47,255,0.04)",
              borderColor: "rgba(0,245,255,0.15)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }
          : undefined
      }
      className={`glass-card overflow-hidden relative ${className}`}
      transition={{ duration: 0.4 }}
      {...(props as any)}
    >
      {/* Background Dot Texture */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none mix-blend-screen transition-opacity duration-700"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "16px 16px"
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
}
