import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const positions = [
  { title: 'Senior AI Engineer', location: 'Remote', type: 'Full-time', dept: 'Engineering' },
  { title: 'Full-Stack Developer', location: 'New York / Remote', type: 'Full-time', dept: 'Engineering' },
  { title: 'DevOps Engineer', location: 'Remote', type: 'Full-time', dept: 'Infrastructure' },
  { title: 'UI/UX Designer', location: 'London / Remote', type: 'Full-time', dept: 'Design' },
];

const benefits = [
  'Remote-first Culture', 'Competitive Salary', 'Health Insurance', 
  'Learning Budget', 'Flexible Hours', 'Stock Options'
];

export function Careers() {
  return (
    <section id="careers" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Build with <span className="text-gradient">Purpose</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              I enjoy collaborating with ambitious teams to build intelligent digital experiences and practical systems that create real value.
            </p>
            
            <h4 className="font-bold text-lg mb-4 text-foreground">Why join us?</h4>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-sm text-foreground/80 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-4">
            {positions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">{job.dept}</div>
                  <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Actively Hiring</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="shrink-0 rounded-full border border-white/10 group-hover:bg-white/10">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
