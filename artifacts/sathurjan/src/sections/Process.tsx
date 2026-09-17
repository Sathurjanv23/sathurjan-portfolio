import { motion } from 'framer-motion';
import { Search, PenTool, LayoutTemplate, Terminal, ShieldCheck, Rocket, Headphones } from 'lucide-react';

const steps = [
  { id: '01', title: 'Discovery', description: 'Understanding your business goals, requirements, and technical constraints.', icon: Search },
  { id: '02', title: 'Planning', description: 'Architecting the solution, defining tech stack, and creating milestones.', icon: PenTool },
  { id: '03', title: 'Design', description: 'Crafting intuitive UI/UX and finalizing the visual design system.', icon: LayoutTemplate },
  { id: '04', title: 'Development', description: 'Agile engineering with clean, scalable, and well-documented code.', icon: Terminal },
  { id: '05', title: 'Testing', description: 'Rigorous QA, automated testing, and security vulnerability scanning.', icon: ShieldCheck },
  { id: '06', title: 'Deployment', description: 'Seamless cloud deployment, CI/CD pipeline setup, and go-live.', icon: Rocket },
  { id: '07', title: 'Support', description: 'Continuous monitoring, maintenance, and scalable feature updates.', icon: Headphones },
];

export function Process() {
  return (
    <section className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-foreground/70">
            A proven, transparent methodology that guarantees quality delivery on time, every time.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-[28px] md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full glass border-primary/50 flex items-center justify-center z-10 bg-background">
                    <step.icon className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Content Box */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors">
                      <span className="text-primary font-mono text-sm font-bold mb-2 block">STEP {step.id}</span>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
