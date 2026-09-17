import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const portfolioImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1558494949cc1b9bf2ff7a5fd1d4fdbb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
];

const portfolioItems = [
  {
    id: 1,
    title: 'CRMS',
    category: 'Full Stack',
    subtitle: 'Change Request Management System',
    image: portfolioImages[0],
  },
  {
    id: 2,
    title: 'EduSmart AI',
    category: 'AI & ML',
    subtitle: 'Student Performance Analytics & Early Warning System',
    image: portfolioImages[1],
  },
  {
    id: 3,
    title: 'MedAssist AI X',
    category: 'Healthcare',
    subtitle: 'AI-powered healthcare operating system',
    image: portfolioImages[2],
  },
  {
    id: 4,
    title: 'ML Analytics Pipeline',
    category: 'Data Science',
    subtitle: 'Classification, regression, anomaly detection, and forecasting models',
    image: portfolioImages[3],
  },
  {
    id: 5,
    title: 'Secure API Platform',
    category: 'Security',
    subtitle: 'JWT-based auth, RBAC, and API authorization systems',
    image: portfolioImages[4],
  },
  {
    id: 6,
    title: 'System Design & DevOps',
    category: 'Full Stack',
    subtitle: 'Spring Boot, Next.js, Docker, GitHub Actions, and deployment workflows',
    image: portfolioImages[5],
  },
];

const categories = ['All', 'Full Stack', 'AI & ML', 'Healthcare', 'Data Science', 'Security'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Selected work across software engineering, AI, data science, and secure full-stack product development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                  : 'glass border-white/10 hover:border-primary/50 text-foreground/70 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden glass-card aspect-[4/3] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black z-0"></div>

                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-20"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 z-30">
                  <span className="text-cyan-400 text-sm font-medium mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{item.subtitle}</p>
                  <Button variant="gradient" className="w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
