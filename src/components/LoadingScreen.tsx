import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowName(true), 200);
          setTimeout(onComplete, 2000);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  const nameLetters = "ABHIJIT KALE".split('');

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb orb-purple w-96 h-96 -top-48 -left-48 animate-float-slow" />
          <div className="orb orb-cyan w-64 h-64 top-1/2 -right-32 animate-float" />
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 grid-background opacity-30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {!showName ? (
            <>
              {/* Loading Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <span className="font-display text-7xl md:text-9xl font-bold gradient-text">
                  {progress.toString().padStart(3, '0')}
                </span>
              </motion.div>

              {/* Progress Bar */}
              <div className="w-64 h-[2px] bg-muted overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-glow-cyan"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Loading Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 font-body text-sm text-muted-foreground tracking-[0.3em] uppercase"
              >
                Initializing Experience
              </motion.p>
            </>
          ) : (
            /* Name Reveal */
            <motion.div className="flex gap-1 md:gap-2 overflow-hidden">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className={`font-display text-5xl md:text-8xl font-bold ${
                    letter === ' ' ? 'w-4 md:w-8' : 'gradient-text'
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          )}
        </div>

        {/* Noise Overlay */}
        <div className="noise-overlay" />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
