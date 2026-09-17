import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Mail, Sparkles } from 'lucide-react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(window.innerWidth / 15, 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.2 - dist / 750})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50 dark:opacity-40" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_35%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-primary">Software Engineer | Full Stack Developer</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 leading-[0.95]">
              Hello, I&apos;m <span className="text-gradient">Sathurjan</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-6 leading-relaxed">
              I build practical software systems, full-stack products, and AI-powered experiences that solve real-world problems.
            </p>

            <div className="mb-7 flex flex-wrap gap-2 text-sm md:text-base text-foreground/80">
              {['Software Engineering', 'Full Stack Development', 'Java | Spring Boot | React', 'AI & Machine Learning', 'Data Analytics', 'System Design'].map((tag) => (
                <span key={tag} className="tech-pill">{tag}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#portfolio">
                <Button size="lg" variant="gradient" className="rounded-full px-8 h-14 text-base group">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="glass" className="rounded-full px-8 h-14 text-base border-primary/20">
                  Contact Me
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/Sathurjanv23" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                <SiGithub className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/vijithakumarasena-sathurjan" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="mailto:sathu20030303@gmail.com" className="social-link" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <span className="ml-2 text-sm text-foreground/60">Learn → Build → Debug → Improve → Ship</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="hero-profile-shell">
              <div className="hero-orb hero-orb-one" />
              <div className="hero-orb hero-orb-two" />

              <div className="profile-card glass-card">
                <div className="flex items-center justify-between mb-5">
                  <div className="avatar-ring">
                    <span>SV</span>
                  </div>
                  <span className="status-badge"><Sparkles className="w-3.5 h-3.5" /> Available</span>
                </div>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">Profile</p>
                  <h2 className="text-2xl font-bold">Sathurjan V</h2>
                  <p className="text-sm text-foreground/65 mt-1">BSc (Hons) in Information Technology</p>
                </div>

                <div className="space-y-3 text-sm text-foreground/75">
                  <div className="mini-stat-row">
                    <span>Focus</span>
                    <strong>Full Stack & AI</strong>
                  </div>
                  <div className="mini-stat-row">
                    <span>Stack</span>
                    <strong>Java · React · Python</strong>
                  </div>
                  <div className="mini-stat-row">
                    <span>Interests</span>
                    <strong>ML · Analytics · Systems</strong>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 animate-bounce"
      >
        <span className="text-sm uppercase tracking-widest font-medium text-xs">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
