"use client";
import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/kartavya-baluja-214ba1256",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.4)",
  },
  {
    id: "github",
    label: "GitHub",
    icon: Github,
    href: "https://github.com/kartavya4874",
    color: "#e8e8ff",
    glow: "rgba(232,232,255,0.3)",
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    href: "mailto:kartavyabaluja453@gmail.com",
    color: "#00f5ff",
    glow: "rgba(0,245,255,0.4)",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9138414874"}`,
    color: "#25D366",
    glow: "rgba(37,211,102,0.4)",
  },
];

interface SocialBarProps {
  labeled?: boolean;
}

export default function SocialBar({ labeled = false }: SocialBarProps) {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, s: typeof socials[0]) => {
    if (s.id === "email") {
      e.preventDefault();
      navigator.clipboard.writeText(s.href.replace("mailto:", ""));
      toast.success("Email copied to clipboard!");
      window.location.href = s.href;
    }
  };

  return (
    <div className={`flex items-center ${labeled ? "flex-wrap gap-3" : "gap-2"}`}>
      {socials.map((s, i) => (
        <motion.a
          key={s.id}
          href={s.href}
          target={s.href.startsWith("mailto") || s.href.startsWith("tel") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          onClick={(e) => handleEmailClick(e, s)}
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.1,
          }}
          whileHover={{
            scale: 1.1,
            y: -3,
            boxShadow: `0 0 20px ${s.glow}`,
            borderColor: s.color,
          }}
          className={`flex items-center gap-2 transition-all ${labeled
              ? "px-5 py-3 rounded-xl text-sm font-medium"
              : "p-2.5 rounded-xl"
            }`}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: labeled ? "var(--text)" : s.color,
            backdropFilter: "blur(8px)",
          }}
          aria-label={s.label}
        >
          <s.icon size={labeled ? 18 : 16} style={{ color: s.color }} />
          {labeled && <span>{s.label}</span>}
        </motion.a>
      ))}
    </div>
  );
}
