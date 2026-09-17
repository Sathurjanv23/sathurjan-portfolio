import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black/40 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-foreground/70">
            I'm interested in opportunities related to software engineering, full stack development, backend engineering, AI/ML, and data analytics. Let's connect and build something meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:sathu20030303@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium mb-1">Email</p>
                    <p className="text-lg text-foreground group-hover:text-primary transition-colors">sathu20030303@gmail.com</p>
                  </div>
                </a>

                <a href="https://github.com/Sathurjanv23" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium mb-1">GitHub</p>
                    <p className="text-lg text-foreground group-hover:text-primary transition-colors">github.com/Sathurjanv23</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/vijithakumarasena-sathurjan" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium mb-1">LinkedIn</p>
                    <p className="text-lg text-foreground group-hover:text-primary transition-colors">linkedin.com/in/vijithakumarasena-sathurjan</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden relative glass border-white/10 group">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10 flex items-center justify-center">
                <Button variant="outline" className="glass border-white/20 backdrop-blur-xl">View on Maps</Button>
              </div>
              <div className="absolute inset-0 opacity-30" style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232563eb\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}></div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Full Name</label>
                  <Input 
                    required 
                    value={formState.name} 
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="bg-black/20 border-white/10 h-12 rounded-xl focus-visible:ring-cyan-400" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Email Address</label>
                  <Input 
                    required 
                    type="email" 
                    value={formState.email} 
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="bg-black/20 border-white/10 h-12 rounded-xl focus-visible:ring-cyan-400" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Subject</label>
                <Input 
                  required 
                  value={formState.subject} 
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                  className="bg-black/20 border-white/10 h-12 rounded-xl focus-visible:ring-cyan-400" 
                  placeholder="Project Inquiry" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <Textarea 
                  required 
                  value={formState.message} 
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="bg-black/20 border-white/10 min-h-[150px] rounded-xl resize-none focus-visible:ring-cyan-400 pt-3" 
                  placeholder="Tell us about your project..." 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                variant="gradient" 
                className="w-full h-14 rounded-xl text-base mt-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
