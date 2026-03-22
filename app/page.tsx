import {
  heroData,
  aboutData,
  statsData,
  skillsData,
  projectsData,
  experienceData,
  certificationsData,
  educationData,
  publicationData,
  contactData,
  liveLinksData,
} from "@/lib/data";
import AnimatedText from "@/components/AnimatedText";
import SocialBar from "@/components/SocialBar";
import GlassCard from "@/components/GlassCard";
import SkillPill from "@/components/SkillPill";
import ProjectCard from "@/components/ProjectCard";
import TimelineEntry from "@/components/TimelineEntry";
import CertCard from "@/components/CertCard";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ContactButtons from "@/components/ContactButtons";
import SpotlightCard from "@/components/SpotlightCard";
import { ArrowRight, Download, GraduationCap, MapPin, Calendar, ExternalLink, ChevronDown, BrainCircuit, Code2, Layers } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const groupedSkills: Record<string, string[]> = {};
  skillsData.forEach((s: any) => {
    if (!groupedSkills[s.category]) groupedSkills[s.category] = [];
    groupedSkills[s.category].push(s.label);
  });

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(2,0,8,0.7) 0%, rgba(2,0,8,0.4) 40%, rgba(2,0,8,0.7) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full flex flex-col gap-8">
          
          <ScrollReveal direction="scale">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium" style={{
              border: "1px solid rgba(0,245,255,0.2)",
              backgroundColor: "rgba(0,245,255,0.06)",
              color: "var(--accent)",
              boxShadow: "0 0 12px rgba(0,245,255,0.1)",
            }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ boxShadow: "0 0 8px rgba(0,255,127,0.6)" }}></span>
              Available for opportunities
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="3d">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white m-0 leading-none">
              <AnimatedText text={heroData.name} glitch />
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl sm:text-3xl font-medium max-w-3xl leading-snug" style={{ color: "var(--muted)" }}>
              <span className="typewriter-cursor">{heroData.tagline}</span>
              <br className="hidden sm:block" />
              <span style={{ color: "var(--accent)" }}>{heroData.subheading}</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                {heroData.cta_primary} <ArrowRight size={16} />
              </a>
              <a href="/Kartavya_Baluja.pdf" download className="btn-ghost flex items-center gap-2">
                <Download size={16} /> {heroData.cta_secondary}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="mt-8 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="text-sm mb-4 font-medium" style={{ color: "var(--muted)" }}>Connect with me</p>
              <SocialBar labeled={false} />
            </div>
          </ScrollReveal>

          {/* Bouncing scroll chevron */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animation: "scrollBounce 2s ease-in-out infinite" }}>
            <ChevronDown size={28} style={{ color: "var(--accent)", opacity: 0.5, filter: "drop-shadow(0 0 6px rgba(0,245,255,0.4))" }} />
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 2. ABOUT & SKILLS SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 sm:py-32 border-t section-backdrop" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 md:mb-24">
            <ScrollReveal>
              <h2 className="heading-xl text-3xl sm:text-4xl mb-6">About Me</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 text-lg leading-relaxed space-y-6" style={{ color: "var(--muted)" }}>
                <ScrollReveal delay={0.1}>
                  <p>{aboutData.bio}</p>
                </ScrollReveal>
                {statsData.length > 0 && (
                  <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                      {statsData.map((s: any) => (
                        <div key={s.id}>
                          <p className="heading-xl text-4xl mb-1" style={{ color: "var(--accent)" }}>
                            <AnimatedCounter value={s.value} />
                          </p>
                          <p className="text-sm uppercase tracking-wider font-semibold" style={{ color: "var(--muted)" }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                )}
              </div>
              <ScrollReveal delay={0.2}>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(0,245,255,0.15)", boxShadow: "0 0 30px rgba(0,245,255,0.08)" }}>
                    {aboutData.photo_url ? (
                      <Image src={aboutData.photo_url} alt={heroData.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: "rgba(0,245,255,0.03)" }}>
                        <span className="text-8xl" style={{ fontFamily: "var(--font-orbitron)", color: "rgba(0,245,255,0.2)" }}>KB</span>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="heading-xl text-3xl sm:text-4xl">Technical Expertise</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(groupedSkills).map(([category, skillList], idx) => {
                const isAI = category.includes("Machine") || category.includes("AI");
                const isLang = category.includes("Language");
                return (
                  <ScrollReveal key={category} delay={idx * 0.1}>
                    <SpotlightCard 
                      className="p-8 h-full"
                      highlightColor={isAI ? "rgba(123, 47, 255, 0.2)" : (isLang ? "rgba(0, 245, 255, 0.15)" : "rgba(255, 0, 128, 0.15)")}
                      borderColor={isAI ? "rgba(123, 47, 255, 0.6)" : (isLang ? "rgba(0, 245, 255, 0.6)" : "rgba(255, 0, 128, 0.6)")}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                          {isAI ? <BrainCircuit size={24} className="text-[#9d4edd]" /> : (isLang ? <Code2 size={24} className="text-cyan-400" /> : <Layers size={24} className="text-pink-500" />)}
                        </div>
                        <h4 className="font-bold text-lg leading-tight uppercase tracking-wider" style={{ color: "var(--text)", fontFamily: "var(--font-space)" }}>{category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {skillList.map((s: string) => <SkillPill key={s} label={s} gold={isAI && s.includes("LLM")} />)}
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 3. EXPERIENCE SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 sm:py-32 border-t section-backdrop" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="heading-xl text-3xl sm:text-4xl">Experience</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-12">
            {experienceData.map((exp: any, i: number) => (
              <TimelineEntry key={exp.id} exp={exp} isLast={i === experienceData.length - 1} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 4. PROJECTS SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 sm:py-32 border-t section-backdrop" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 md:flex md:items-end justify-between gap-6">
              <div>
                <h2 className="heading-xl text-3xl sm:text-4xl mb-4">Selected Work</h2>
                <p className="text-lg max-w-xl" style={{ color: "var(--muted)" }}>
                  A showcase of AI/ML platforms, deep learning models, and real-time intelligent applications.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((p: any, idx: number) => (
              <ScrollReveal key={p.id} delay={idx * 0.1}>
                <ProjectCard project={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 5. LIVE LINKS SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      {liveLinksData.length > 0 && (
        <section id="live-links" className="py-24 sm:py-32 border-t section-backdrop" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal direction="left">
              <div className="mb-12 flex items-center gap-4">
                <h2 className="heading-xl text-3xl sm:text-4xl">Live Projects</h2>
                <span className="live-badge"><span className="live-dot" />PRODUCTION</span>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-6">
              {liveLinksData.map((link: any, idx: number) => (
                <ScrollReveal key={link.id} delay={idx * 0.1}>
                  <GlassCard className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:border-white/20 transition-colors">
                    <div className="flex flex-col gap-4 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-bold text-xl sm:text-2xl" style={{ fontFamily: "var(--font-space)" }}>{link.title}</h3>
                        <span className="live-badge shrink-0 mt-1"><span className="live-dot" />LIVE</span>
                      </div>
                      {link.description && <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{link.description}</p>}
                      <p className="text-sm truncate font-medium flex items-center gap-2" style={{ color: "var(--accent)" }}>
                        <ExternalLink size={14} /> {link.url}
                      </p>
                      {link.tech_stack?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {link.tech_stack.map((t: string) => <SkillPill key={t} label={t} />)}
                        </div>
                      )}
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn-primary self-start flex items-center gap-2 text-sm mt-4">
                        Visit Application
                      </a>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 6. CERTIFICATIONS SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="certifications" className="py-24 sm:py-32 border-t section-backdrop" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="heading-xl text-3xl sm:text-4xl mb-4">Certifications</h2>
              <p className="text-lg" style={{ color: "var(--muted)" }}>Professional credentials in AI, cloud, and data platforms.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((c: any, idx: number) => (
              <ScrollReveal key={c.id} delay={idx * 0.08}>
                <CertCard cert={c} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 7. EDUCATION & PUBLICATION SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="education" className="py-24 sm:py-32 border-t section-backdrop" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <ScrollReveal>
              <h2 className="heading-xl text-3xl sm:text-4xl mb-12">Education</h2>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {educationData.map((edu: any) => {
                const displayDate = edu.expected_date.includes("-") 
                  ? edu.expected_date 
                  : (edu.expected_date ? `Expected ${new Date(edu.expected_date).getFullYear()}` : "");
                
                return (
                  <ScrollReveal key={edu.id}>
                    <SpotlightCard className="p-8 h-full">
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black border border-cyan-500/30 relative overflow-hidden">
                          <div className="absolute inset-0 bg-cyan-500/20 blur-md" />
                          <GraduationCap size={28} className="text-cyan-400 relative z-10" />
                        </div>
                        <span className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="font-bold text-2xl tracking-tight mb-2" style={{ fontFamily: "var(--font-space)" }}>{edu.degree}</h3>
                      <p className="text-lg font-medium mb-6" style={{ color: "var(--accent)" }}>{edu.university}</p>
                      <div className="flex flex-wrap items-center gap-6 text-sm font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.5)" }}>
                        <span className="flex items-center gap-2"><MapPin size={16} className="text-cyan-400" />{edu.location}</span>
                        <span className="flex items-center gap-2"><Calendar size={16} className="text-cyan-400" />{displayDate}</span>
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Publication */}
          <div id="publication">
            <ScrollReveal>
              <h2 className="heading-xl text-3xl sm:text-4xl mb-12">Publication</h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} className="relative h-full">
              <SpotlightCard className="p-8 relative h-full flex flex-col justify-center" highlightColor="rgba(255, 0, 128, 0.15)" borderColor="rgba(255, 0, 128, 0.4)">
                <div className="absolute -top-8 -left-4 text-[12rem] leading-none select-none pointer-events-none opacity-[0.03] font-bold" style={{ fontFamily: "var(--font-orbitron)", color: "white" }}>"</div>
                <div className="relative z-10 flex flex-col gap-6">
                  <h3 className="font-bold text-2xl sm:text-3xl tracking-tight leading-snug" style={{ fontFamily: "var(--font-space)" }}>{publicationData.title}</h3>
                  <div className="flex flex-col gap-3 border-l-2 pl-5" style={{ borderColor: "rgba(255, 0, 128, 0.5)" }}>
                    <p className="font-semibold text-pink-400 text-lg">{publicationData.journal}</p>
                    <p className="text-sm tracking-wide font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Vol. {publicationData.volume}, No. {publicationData.issue}, pp. {publicationData.pages} · {publicationData.year}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 pt-4">
                    {publicationData.tags?.map((t: string) => <SkillPill key={t} label={t} gold={t.includes("Deep")} />)}
                  </div>
                  {publicationData.url && (
                    <a href={publicationData.url} target="_blank" rel="noopener noreferrer" className="btn-ghost self-start flex items-center gap-2 text-sm mt-4 tracking-wide">
                      Read Paper &rarr;
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 8. CONTACT SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-32 sm:py-40 border-t relative section-backdrop" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(123,47,255,0.06) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <ScrollReveal>
            <h2 className="text-5xl sm:text-7xl mb-8" style={{ fontFamily: "var(--font-orbitron)", fontWeight: 700, animation: "colorCycle 6s ease infinite" }}>Let's Talk.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl max-w-xl mx-auto mb-16" style={{ color: "var(--muted)" }}>
              Open to collaborations, opportunities, and interesting conversations in AI/ML engineering.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <ContactButtons email={contactData.email} phone={contactData.phone} />
          </ScrollReveal>

            <ScrollReveal direction="scale" delay={0.3}>
              <SocialBar />
            </ScrollReveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* FOOTER */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <footer className="py-8 text-center border-t text-sm font-medium" style={{ borderColor: "rgba(255,255,255,0.06)", color: "var(--muted)" }}>
        {contactData.footer_tagline}
      </footer>

    </main>
  );
}
