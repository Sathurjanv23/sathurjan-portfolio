import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'ReqTrace AI',
    description: 'AI-powered requirement analysis and traceability platform with project dashboards, requirement management, and authentication flows.',
    tech: ['Java', 'Spring Boot', 'MongoDB', 'React', 'AI'],
  },
  {
    title: 'IWS.LK',
    description: 'AI-powered workforce intelligence platform designed to connect clients with skilled service providers using role-based access and matching features.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'MongoDB'],
  },
  {
    title: 'CRMS',
    description: 'Change Requirement Management System for software change requests with Kanban workflows, notifications, and JWT-based role access.',
    tech: ['Java', 'Spring Boot', 'Next.js', 'React', 'MongoDB', 'JWT'],
  },
  {
    title: 'IPL Cricket Analytics',
    description: 'Interactive analytics platform built from IPL datasets using Python data science and visualization libraries.',
    tech: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Streamlit', 'Scikit-learn'],
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-foreground/70">
              A selection of the real-world systems and platforms I have built and contributed to across AI, full stack, and analytics use cases.
            </p>
          </div>
          <a href="#contact">
            <Button variant="outline" className="glass border-primary/30 rounded-full whitespace-nowrap">
              Let's Collaborate
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card rounded-2xl p-6 flex flex-col h-full hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {product.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
              
              <Button variant="ghost" className="w-full justify-between hover:bg-primary/10 hover:text-primary group -ml-2">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
