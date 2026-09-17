import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const highlights = [
  {
    title: 'CRMS',
    subtitle: 'Software Engineering Project',
    content: 'Built a full-stack change request management system using Spring Boot, Next.js, and MongoDB with RBAC for Client, Company, and Admin workflows.',
    rating: 5,
  },
  {
    title: 'EduSmart AI',
    subtitle: 'Student Performance Analytics',
    content: 'Developed ML models for academic risk prediction, score forecasting, anomaly detection, and behavior analysis with FastAPI and Scikit-learn.',
    rating: 5,
  },
  {
    title: 'MedAssist AI X',
    subtitle: 'Healthcare Intelligence Platform',
    content: 'Built a secure AI-powered healthcare OS with patient, doctor, and admin portals using RAG, OCR, Ollama, Redis, AWS S3, and Docker.',
    rating: 5,
  },
  {
    title: 'Recognition',
    subtitle: 'Certifications & achievements',
    content: 'Top 20 at CryptX 2.0, finalist in CodeRally 7.0 and JPura Xtreme 3.0, Postman API Fundamentals Student Expert, and top performer in multiple competitions.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Project <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Real work, practical systems, and performance milestones from my software engineering, AI, and data projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              
              <p className="text-foreground/80 text-lg leading-relaxed mb-8 italic">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {item.title.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-foreground/60">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
