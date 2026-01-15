import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.querySelectorAll('.char'),
          {
            y: 100,
            opacity: 0,
            rotateX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.03,
            ease: 'power4.out',
            delay: 0.5,
          }
        );
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: 'power3.out' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const title = 'ABHIJIT KALE';
  const tagline = 'Crafting Digital Futures Through Code & Creativity';

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="orb orb-purple w-[600px] h-[600px] -top-48 -left-48 opacity-40 animate-float-slow" />
          <div className="orb orb-cyan w-[400px] h-[400px] top-1/3 -right-32 opacity-30 animate-float" />
          <div className="orb orb-pink w-[300px] h-[300px] bottom-0 left-1/3 opacity-20 animate-float-slow" />
        </motion.div>

        {/* Grid */}
        <div className="absolute inset-0 grid-background opacity-20" />

        {/* 3D Geometric Shape */}
        <motion.div
          animate={{ 
            rotateY: 360,
            rotateX: 360,
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
          style={{ perspective: 1000 }}
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-secondary/20 animate-spin-slow" />
          
          {/* Middle Ring */}
          <motion.div 
            animate={{ rotateZ: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-12 rounded-full border border-glow-cyan/20"
          />
          
          {/* Inner Ring */}
          <motion.div 
            animate={{ rotateZ: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-24 rounded-full border border-glow-pink/20"
          />

          {/* Center Glow */}
          <div className="absolute inset-1/3 rounded-full bg-gradient-radial from-secondary/20 to-transparent blur-2xl" />

          {/* Floating Dots */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-secondary"
              style={{
                top: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                left: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ y }}
        className="relative z-10 text-center px-4"
      >
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-sm md:text-base text-muted-foreground tracking-[0.4em] uppercase mb-6"
        >
          Frontend Developer
        </motion.p>

        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 overflow-hidden"
          style={{ perspective: 1000 }}
        >
          {title.split('').map((char, index) => (
            <span
              key={index}
              className={`char inline-block ${char === ' ' ? 'w-4 md:w-8' : 'gradient-text text-glow'}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p 
          ref={subtitleRef}
          className="font-heading text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0"
        >
          {tagline}
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton>
            <Link to="/contact">
              <button className="group relative px-8 py-4 rounded-full font-body font-medium text-primary-foreground overflow-hidden transition-all duration-300">
                {/* Gradient Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-glow-cyan opacity-100 group-hover:opacity-90 transition-opacity" />
                
                {/* Glow Effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-secondary to-glow-cyan" />
                
                {/* Text */}
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link to="/projects">
              <button className="group relative px-8 py-4 rounded-full font-body font-medium overflow-hidden glass-intense hover:glow-purple transition-all duration-300">
                <span className="relative z-10">View Projects</span>
              </button>
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-secondary"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </motion.section>
  );
};

export default HeroSection;
