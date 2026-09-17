import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 glass-card rounded-2xl border-gradient">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-foreground/70 font-medium text-center">
        {label}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Building <span className="text-gradient">real systems</span> <br /> with practical engineering.
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              I believe the best way to learn software engineering is by building real systems, solving problems, and continuously improving. My work focuses on creating solutions that are practical, scalable, and useful in the real world.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              My main interests are full stack development, backend engineering, AI and machine learning, data analytics, database engineering, system design, and cloud deployment. I enjoy taking ideas from concept to implementation and shipping them with confidence.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Full Stack Development', 'Backend Engineering', 'AI & ML', 'Data Analytics', 'Database Engineering', 'System Design', 'Cloud & Deployment'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full text-sm font-medium glass border-primary/20 text-foreground/90">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Counter end={8} suffix="+" label="Core Technologies" />
            <Counter end={4} suffix="+" label="Featured Projects" />
            <Counter end={3} suffix="+" label="Major Domains" />
            <Counter end={1} suffix="" label="Continuous Learning Mindset" />
          </div>
        </div>
      </div>
    </section>
  );
}
