"use client";
import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const isMobile = w < 768;
    // Optimization: drastically reduce particle count to maintain 60FPS
    const baseCount = isMobile ? 150 : 400;
    const PARTICLE_COUNT = baseCount; // Use baseCount for particle count
    const CONNECTION_DIST = isMobile ? 100 : 150;
    const MOUSE_RADIUS = isMobile ? 100 : 200;

    // Particles
    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number;
      baseX: number; baseY: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      particles.push({
        x, y, baseX: x, baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    // Energy streams
    interface StreamPoint { x: number; y: number; progress: number; speed: number; }
    interface Stream {
      points: { x: number; y: number }[];
      packets: StreamPoint[];
      r: number; g: number; b: number;
      life: number;
      maxLife: number;
    }
    const streamColors = [
      { r: 0, g: 245, b: 255 }, // Cyan
      { r: 123, g: 47, b: 255 }, // Purple
      { r: 255, g: 0, b: 128 }, // Pink
    ];
    const streams: Stream[] = [];

    function createStream(): Stream {
      const pts = [];
      const startX = Math.random() * w;
      const startY = Math.random() * h;
      for (let i = 0; i < 4; i++) {
        pts.push({
          x: startX + (Math.random() - 0.5) * w * 0.6,
          y: startY + (Math.random() - 0.5) * h * 0.6,
        });
      }
      const packets: StreamPoint[] = [];
      for (let i = 0; i < 3; i++) {
        packets.push({ x: 0, y: 0, progress: Math.random(), speed: 0.002 + Math.random() * 0.003 });
      }
      const colorObj = streamColors[Math.floor(Math.random() * streamColors.length)];
      return {
        points: pts,
        packets,
        r: colorObj.r, g: colorObj.g, b: colorObj.b,
        life: 0,
        maxLife: 300 + Math.random() * 400,
      };
    }

    for (let i = 0; i < (isMobile ? 4 : 8); i++) streams.push(createStream());

    // Nebula blobs
    interface Nebula { x: number; y: number; radius: number; color: string; vx: number; vy: number; phase: number; }
    const nebulae: Nebula[] = [
      { x: w * 0.2, y: h * 0.3, radius: 300, color: "rgba(123,47,255,0.04)", vx: 0.15, vy: 0.08, phase: 0 },
      { x: w * 0.7, y: h * 0.6, radius: 350, color: "rgba(0,80,100,0.04)", vx: -0.1, vy: 0.12, phase: 1 },
      { x: w * 0.5, y: h * 0.2, radius: 280, color: "rgba(10,10,60,0.06)", vx: 0.08, vy: -0.1, phase: 2 },
      { x: w * 0.3, y: h * 0.8, radius: 320, color: "rgba(255,0,128,0.02)", vx: -0.12, vy: -0.06, phase: 3 },
    ];

    // Synaptic fire
    interface SynapticRay { x1: number; y1: number; x2: number; y2: number; life: number; maxLife: number; }
    const rays: SynapticRay[] = [];
    let rayTimer = 0;

    // Grid
    const gridSpeed = 0.3;
    let gridOffset = 0;

    // Bezier helper
    function bezierPoint(t: number, p0: { x: number; y: number }, p1: { x: number; y: number }, p2: { x: number; y: number }, p3: { x: number; y: number }) {
      const u = 1 - t;
      return {
        x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
        y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
      };
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // Fill background
      ctx.fillStyle = "#020008";
      ctx.fillRect(0, 0, w, h);

      // Nebula blobs
      nebulae.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += 0.005;
        const pulse = 1 + Math.sin(n.phase) * 0.15;
        if (n.x < -n.radius || n.x > w + n.radius) n.vx *= -1;
        if (n.y < -n.radius || n.y > h + n.radius) n.vy *= -1;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * pulse);
        grad.addColorStop(0, n.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(n.x - n.radius * pulse, n.y - n.radius * pulse, n.radius * 2 * pulse, n.radius * 2 * pulse);
      });

      // Grid
      if (!isMobile) {
        gridOffset = (gridOffset + gridSpeed) % 40;
        ctx.strokeStyle = "rgba(0,245,255,0.03)";
        ctx.lineWidth = 0.5;
        const gridY = h * 0.75;
        for (let x = 0; x < w; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, gridY);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = gridY; y < h; y += 40) {
          const adjustedY = y + gridOffset;
          if (adjustedY > h) continue;
          ctx.beginPath();
          ctx.moveTo(0, adjustedY);
          ctx.lineTo(w, adjustedY);
          ctx.stroke();
          // Glow at intersections
          for (let x = 0; x < w; x += 40) {
            ctx.fillStyle = "rgba(0,245,255,0.06)";
            ctx.fillRect(x - 1, adjustedY - 1, 2, 2);
          }
        }
      }

      // Particles + connections
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Mouse repulsion
        const dmx = p.x - mx;
        const dmy = p.y - my;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < MOUSE_RADIUS && distMouse > 0) {
          const force = (MOUSE_RADIUS - distMouse) / MOUSE_RADIUS;
          p.x += (dmx / distMouse) * force * 3;
          p.y += (dmy / distMouse) * force * 3;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,255,${0.3 + p.size * 0.2})`;
        ctx.fill();

        // Connections (check only nearby particles for performance)
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          if (connections > 5) break; // Optimization: max 5 lines per particle to prevent GPU overdraw

          const p2 = particles[j];
          const dx = p.x - p2.x;
          // Quick bounding box check before expensive distance calc
          if (Math.abs(dx) > CONNECTION_DIST) continue;
          const dy = p.y - p2.y;
          if (Math.abs(dy) > CONNECTION_DIST) continue;

          const dist = dx * dx + dy * dy;
          if (dist < CONNECTION_DIST * CONNECTION_DIST) {
            connections++;
            const alpha = 1 - Math.sqrt(dist) / CONNECTION_DIST;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(123,47,255,${alpha * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Energy streams
      streams.forEach((stream, idx) => {
        stream.life++;
        if (stream.life > stream.maxLife) {
          streams[idx] = createStream();
          return;
        }
        const fadeIn = Math.min(stream.life / 60, 1);
        const fadeOut = Math.min((stream.maxLife - stream.life) / 60, 1);
        const alpha = fadeIn * fadeOut;

        if (stream.points.length >= 4) {
          // Draw stream path
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${stream.r}, ${stream.g}, ${stream.b}, ${alpha * 0.08})`;
          ctx.lineWidth = 1;
          for (let t = 0; t <= 1; t += 0.02) {
            const pt = bezierPoint(t, stream.points[0], stream.points[1], stream.points[2], stream.points[3]);
            t === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y);
          }
          ctx.stroke();

          // Draw packets
          stream.packets.forEach((packet) => {
            packet.progress += packet.speed;
            if (packet.progress > 1) packet.progress = 0;
            const pt = bezierPoint(packet.progress, stream.points[0], stream.points[1], stream.points[2], stream.points[3]);
            packet.x = pt.x;
            packet.y = pt.y;
            const grad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 6);
            grad.addColorStop(0, `rgba(${stream.r}, ${stream.g}, ${stream.b}, ${alpha * 0.8})`);
            grad.addColorStop(1, "transparent");

            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgb(${stream.r}, ${stream.g}, ${stream.b})`;
            ctx.globalAlpha = alpha * 0.8;
            ctx.fill();
            ctx.globalAlpha = 1;
          });
        }
      });

      // Synaptic rays
      rayTimer++;
      if (rayTimer > 120 + Math.random() * 60) {
        rayTimer = 0;
        const angle = Math.random() * Math.PI * 2;
        const len = Math.max(w, h) * 1.5;
        const cx = Math.random() * w;
        const cy = Math.random() * h;
        rays.push({
          x1: cx - Math.cos(angle) * len / 2,
          y1: cy - Math.sin(angle) * len / 2,
          x2: cx + Math.cos(angle) * len / 2,
          y2: cy + Math.sin(angle) * len / 2,
          life: 0,
          maxLife: 18,
        });
      }

      for (let i = rays.length - 1; i >= 0; i--) {
        const ray = rays[i];
        ray.life++;
        if (ray.life > ray.maxLife) { rays.splice(i, 1); continue; }
        const alpha = 1 - ray.life / ray.maxLife;
        ctx.beginPath();
        ctx.moveTo(ray.x1, ray.y1);
        ctx.lineTo(ray.x2, ray.y2);
        ctx.strokeStyle = `rgba(0,245,255,${alpha * 0.15})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      {/* Static fallback for reduced-motion */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(123,47,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,245,255,0.05) 0%, transparent 60%), #020008",
        }}
        aria-hidden="true"
      />
    </>
  );
}
