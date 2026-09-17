import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit before removing
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050A14] text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.5)] mb-8"
        >
          <span className="text-white font-bold text-3xl tracking-tighter">SV</span>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold tracking-tight mb-8 flex"
        >
          Sathurjan<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"> V</span>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
