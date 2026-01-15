import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Animation & Motion',
    skills: [
      { name: 'Framer Motion', level: 85 },
      { name: 'GSAP', level: 80 },
      { name: 'CSS Animations', level: 88 },
      { name: 'Three.js', level: 65 },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 75 },
      { name: 'Vite', level: 88 },
    ],
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'Responsive Design', level: 95 },
      { name: 'Performance Optimization', level: 80 },
      { name: 'Accessibility (a11y)', level: 78 },
      { name: 'UI/UX Principles', level: 82 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.skill-bar-fill').forEach((bar) => {
        const width = bar.getAttribute('data-width') || '0';
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${width}%`,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="orb orb-cyan w-[500px] h-[500px] top-0 right-0 opacity-20" />
        <div className="orb orb-pink w-[400px] h-[400px] bottom-0 left-0 opacity-15" />
        <div className="grid-background opacity-10 absolute inset-0" />
      </div>

      {/* Header */}
      <section className="section-container py-20">
        <AnimatedSection>
          <motion.p className="font-body text-sm text-secondary tracking-[0.3em] uppercase mb-4">
            My Expertise
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Skills &</span>
            <br />
            <span className="text-foreground">Technologies</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mt-6">
            A comprehensive toolkit of modern technologies and methodologies that I use to bring digital visions to life.
          </p>
        </AnimatedSection>
      </section>

      {/* Skills Grid */}
      <section className="section-container py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
              <div className="glass-intense rounded-2xl p-8 h-full hover:glow-purple transition-all duration-500">
                <h2 className="font-display text-2xl font-bold mb-8 gradient-text">
                  {category.title}
                </h2>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-heading text-sm font-medium">{skill.name}</span>
                        <span className="font-body text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="skill-bar-fill h-full bg-gradient-to-r from-secondary to-glow-cyan rounded-full"
                          data-width={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Tech Stack Icons */}
      <section className="section-container py-20">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Technologies I Love
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'TypeScript', 'Tailwind', 'Framer', 'GSAP', 'Vite', 'Git', 'Figma'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass px-8 py-4 rounded-full font-heading text-sm font-medium hover:glow-purple transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Learning Section */}
      <section className="section-container py-20">
        <AnimatedSection>
          <div className="glass-intense rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-glow-cyan/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Always Learning
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Currently exploring advanced animation techniques, 3D web experiences, and performance optimization strategies. 
                The learning never stops!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {['Three.js', 'WebGL', 'Next.js', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-secondary/30 text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
};

export default Skills;
