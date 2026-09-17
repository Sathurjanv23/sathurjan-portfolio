import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">SV</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Sathurjan<span className="text-gradient"> V</span>
              </span>
            </a>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Information Technology undergraduate passionate about building practical software systems, intelligent applications, and data-driven products.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/vijithakumarasena-sathurjan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Sathurjanv23" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="mailto:sathu20030303@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                <SiX className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Focus</h4>
            <ul className="space-y-3">
              {['Full Stack Development', 'Backend Engineering', 'AI & ML', 'Data Analytics', 'Database Engineering', 'System Design'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase() === 'projects' ? 'portfolio' : link.toLowerCase() === 'skills' ? 'services' : link.toLowerCase()}`} className="text-foreground/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-foreground/60 text-sm mb-4">
              Subscribe to get the latest tech news and company updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-cyan-400 text-white"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-sm">
            © 2026 Sathurjan V. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground/50 hover:text-foreground text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-foreground/50 hover:text-foreground text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-foreground/50 hover:text-foreground text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
