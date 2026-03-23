"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SkillPill from "./SkillPill";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  year: number;
  tech_stack: string[];
  github_url: string;
  live_url: string;
  thumbnail_url: string;
  is_featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, year, tech_stack, github_url, live_url, is_featured } = project;
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 150, damping: 25 });

  function handleMouse(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      className={`neon-border-card glass-card p-6 flex flex-col gap-4 ${is_featured ? "md:col-span-2" : ""}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          {is_featured && (
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-inter)", textShadow: "0 0 10px rgba(255,183,0,0.4)" }}
            >
              ★ Featured
            </span>
          )}
          <h3
            className="font-space font-bold text-lg leading-tight"
            style={{ color: "var(--text)", fontFamily: "var(--font-space)" }}
          >
            {title}
          </h3>
        </div>
        <span
          className="text-xs shrink-0 mt-1"
          style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}
        >
          {year}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
        {description}
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-2">
        {tech_stack?.map((t) => (
          <SkillPill key={t} label={t} />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 pt-3 mt-auto border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        {github_url && (
          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm py-2.5 px-5 rounded-lg font-medium transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--muted)",
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
            }}
          >
            <Github size={15} />
            Source Code
          </a>
        )}
        {live_url && (
          <a
            href={live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm py-2.5 px-5 rounded-lg font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(123,47,255,0.15))",
              border: "1px solid rgba(0,245,255,0.3)",
              color: "var(--accent)",
              boxShadow: "0 0 12px rgba(0,245,255,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,245,255,0.25)";
              e.currentTarget.style.borderColor = "rgba(0,245,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 12px rgba(0,245,255,0.1)";
              e.currentTarget.style.borderColor = "rgba(0,245,255,0.3)";
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ boxShadow: "0 0 6px rgba(0,255,127,0.5)" }} />
            <ExternalLink size={15} />
            Live Link
          </a>
        )}
      </div>
    </motion.div>
  );
}
