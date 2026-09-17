import { motion } from 'framer-motion';
import { Brain, Code, Globe, Cloud, Palette, GitBranch, Shield, BarChart, Database } from 'lucide-react';

const services = [
  {
    title: 'Full Stack Development',
    description: 'Building end-to-end web experiences using modern frontend and backend technologies.',
    icon: Code,
  },
  {
    title: 'Backend Engineering',
    description: 'Designing secure, scalable APIs, authentication flows, and business logic.',
    icon: Globe,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Creating intelligent applications and ML-driven workflows that assist real users.',
    icon: Brain,
  },
  {
    title: 'Data Analytics',
    description: 'Transforming raw data into meaningful insights using visualization and analysis tools.',
    icon: BarChart,
  },
  {
    title: 'Database Engineering',
    description: 'Working with MongoDB, MySQL, and PostgreSQL to model and manage production data.',
    icon: Database,
  },
  {
    title: 'System Design',
    description: 'Designing maintainable architecture and robust software systems for real-world usage.',
    icon: GitBranch,
  },
  {
    title: 'Cloud & Deployment',
    description: 'Deploying software with cloud-friendly workflows, Docker, Linux, and modern tooling.',
    icon: Cloud,
  },
  {
    title: 'Product Thinking',
    description: 'Turning user problems into buildable features, workflows, and business-aligned products.',
    icon: Palette,
  },
  {
    title: 'Problem Solving',
    description: 'Debugging, refining, and improving systems through continuous learning and iteration.',
    icon: Shield,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Core <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="text-lg text-foreground/70">
            My work spans across software engineering, intelligent applications, backend systems, analytics, and real-world product building.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass-card p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-cyan-400/20 transition-colors duration-500"></div>
              
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 border border-white/5 relative z-10 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-cyan-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
