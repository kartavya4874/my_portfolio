"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  watermark?: string;
  highlightColor?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  watermark,
  highlightColor = "var(--accent)"
}: SectionHeaderProps) {
  const displayWatermark = (watermark || title).toUpperCase();

  return (
    <div className="relative mb-16 md:mb-24 w-full overflow-visible">
      <ScrollReveal direction="scale" delay={0.1}>
        <div 
          className="absolute -top-8 sm:-top-16 -left-4 sm:-left-8 text-[5rem] sm:text-[8rem] md:text-[10rem] font-black opacity-[0.03] pointer-events-none select-none whitespace-nowrap overflow-hidden w-[150%]"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {displayWatermark}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="relative z-10 flex items-center gap-6 w-full">
          <h2 className="heading-xl text-3xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-500 pb-2">
            {title}
          </h2>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            className="h-px flex-1 origin-left mt-2"
            style={{ 
              background: `linear-gradient(to right, ${highlightColor}, transparent)`,
              boxShadow: `0 0 20px ${highlightColor}` 
            }}
          />
        </div>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-base sm:text-lg max-w-2xl font-medium" 
            style={{ color: "var(--muted)" }}
          >
            {subtitle}
          </motion.p>
        )}
      </ScrollReveal>
    </div>
  );
}
