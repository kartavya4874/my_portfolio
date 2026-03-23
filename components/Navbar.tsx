"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ScrollProgress from "./ScrollProgress";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#education", label: "Education" },
  { href: "#publication", label: "Publication" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    links.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed z-[100] transition-all duration-500 left-1/2 -translate-x-1/2 ${
          scrolled ? "top-4" : "top-6"
        } w-[90%] max-w-max`}
      >
        <nav 
          className="flex items-center justify-between lg:justify-center gap-4 lg:gap-6 px-4 py-2.5 rounded-full"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6 px-2">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              const isContact = l.href === "#contact";
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleClick(e, l.href)}
                    className={`transition-all duration-300 ${
                      isContact 
                        ? "bg-white text-black px-5 py-2 rounded-full flex items-center gap-2 hover:opacity-90 font-medium" 
                        : "text-sm hover:text-white"
                    }`}
                    style={!isContact ? {
                      color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                      fontWeight: isActive ? 500 : 400,
                    } : {}}
                  >
                    {l.label}
                    {isContact && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-full transition-colors text-white/80 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu - fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 z-[90] overflow-y-auto"
            style={{ background: "rgba(2,0,8,0.98)", backdropFilter: "blur(24px)", paddingBottom: "2rem" }}
          >
            <ul className="flex flex-col items-center flex-1 min-h-full justify-center gap-2 px-6 py-12">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="w-full max-w-[280px]"
                >
                  <a
                    href={l.href}
                    onClick={(e) => handleClick(e, l.href)}
                    className="block w-full text-center px-6 py-4 rounded-2xl text-xl font-medium transition-all"
                    style={{
                      color: activeSection === l.href ? "var(--accent)" : "var(--muted)",
                      background: activeSection === l.href ? "rgba(0,245,255,0.06)" : "transparent",
                      border: activeSection === l.href ? "1px solid rgba(0,245,255,0.15)" : "1px solid transparent",
                      fontFamily: "var(--font-space)",
                      boxShadow: activeSection === l.href ? "0 0 20px rgba(0,245,255,0.05)" : "none",
                    }}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}
