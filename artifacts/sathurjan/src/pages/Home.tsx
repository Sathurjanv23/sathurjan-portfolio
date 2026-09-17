import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Products } from '@/sections/Products';
import { Technologies } from '@/sections/Technologies';
import { Portfolio } from '@/sections/Portfolio';
import { Process } from '@/sections/Process';
import { Testimonials } from '@/sections/Testimonials';
import { Pricing } from '@/sections/Pricing';
import { Careers } from '@/sections/Careers';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { FloatingElements } from '@/components/FloatingElements';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback to clear loading screen just in case
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <Technologies />
          <Portfolio />
          <Process />
          <Testimonials />
          <Pricing />
          <Careers />
          <Contact />
        </main>
        <Footer />
        <FloatingElements />
      </div>
    </>
  );
}
