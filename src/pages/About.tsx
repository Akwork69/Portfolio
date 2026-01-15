import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Dedication" },
    { number: "∞", label: "Curiosity" },
  ];

  return (
    <main ref={sectionRef} className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="orb orb-purple w-[500px] h-[500px] top-1/4 -left-64 opacity-30" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-1/4 -right-48 opacity-20" />
        <div className="grid-background opacity-10 absolute inset-0" />
      </div>

      {/* Hero Section */}
      <section className="section-container py-20">
        <AnimatedSection>
          <motion.p className="font-body text-sm text-secondary tracking-[0.3em] uppercase mb-4">
            About Me
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="gradient-text">Hello, I'm</span>
            <br />
            <span className="text-foreground">Abhijit Kale</span>
          </h1>
        </AnimatedSection>

        <div className="about-content grid lg:grid-cols-2 gap-16 mt-16">
          {/* Left Column - Image */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-intense">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-glow-cyan/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/Profile2.png" alt="Profile" />
                  {/* <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-glow-cyan flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-primary-foreground">AK</span>
                  </div> */}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-intense px-6 py-4 rounded-xl"
              >
                <p className="font-body text-sm text-muted-foreground">
                  Available for
                </p>
                <p className="font-heading text-lg font-semibold gradient-text">
                  Freelance Work
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <AnimatedSection delay={0.3}>
              <p className="about-text font-body text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Frontend Developer at the beginning of an
                exciting journey into the world of web development. My
                fascination with creating beautiful, interactive digital
                experiences drives me to constantly learn and push the
                boundaries of what's possible on the web.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="about-text font-body text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in modern technologies like React,
                TypeScript, and Tailwind CSS, I specialize in building
                responsive, performant, and visually stunning applications. I
                believe that great design is not just about aesthetics—it's
                about creating seamless experiences that users love.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <p className="about-text font-body text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest design
                trends, contributing to open-source projects, or experimenting
                with new animation libraries. I'm always eager to take on new
                challenges and collaborate with teams that share my passion for
                excellence.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container py-20">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-intense p-8 rounded-2xl text-center hover:glow-purple transition-all duration-300"
              >
                <span className="font-display text-4xl md:text-5xl font-bold gradient-text">
                  {stat.number}
                </span>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Philosophy Section */}
      <section className="section-container py-20">
        <AnimatedSection>
          <div className="glass-intense rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-glow-cyan/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                My Philosophy
              </h2>
              <p className="font-heading text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                "Code is poetry in motion. Every line I write is a step towards
                creating experiences that inspire, engage, and leave a lasting
                impression."
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
};

export default About;
