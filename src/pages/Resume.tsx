import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';
import MagneticButton from '../components/MagneticButton';

const Resume = () => {
  return (
    <main className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="orb orb-purple w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-25" />
        <div className="orb orb-cyan w-[300px] h-[300px] bottom-0 right-0 opacity-20" />
        <div className="grid-background opacity-10 absolute inset-0" />
      </div>

      {/* Header */}
      <section className="section-container py-20">
        <AnimatedSection>
          <motion.p className="font-body text-sm text-secondary tracking-[0.3em] uppercase mb-4">
            Download
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">My Resume</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mt-6">
            Get a comprehensive overview of my skills, experience, and qualifications.
          </p>
        </AnimatedSection>
      </section>

      {/* Resume Preview */}
      <section className="section-container py-12">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {/* Resume Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-intense rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-glow-cyan" />
              
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-glow-cyan flex items-center justify-center">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">Abhijit Kale</h2>
                    <p className="font-body text-muted-foreground">Frontend Developer Resume</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-full glass font-body text-sm">
                    PDF Format
                  </span>
                  <span className="px-4 py-2 rounded-full glass font-body text-sm">
                    Updated 2024
                  </span>
                </div>
              </div>

              {/* Resume Preview Content */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-secondary mb-3">EXPERIENCE SUMMARY</h3>
                    <ul className="space-y-2 font-body text-sm text-muted-foreground">
                      <li>• Frontend Development with React & TypeScript</li>
                      <li>• UI/UX Design Implementation</li>
                      <li>• Animation & Motion Design (GSAP, Framer Motion)</li>
                      <li>• Responsive & Mobile-First Development</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-secondary mb-3">EDUCATION</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Bachelor's in Computer Science
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-secondary mb-3">KEY SKILLS</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Git'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-muted/50 font-body text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-secondary mb-3">CERTIFICATIONS</h3>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li>• React Developer - Meta</li>
                      <li>• TypeScript Fundamentals - Microsoft</li>
                      <li>• Web Performance - Google</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-glow-cyan font-body font-medium text-primary-foreground flex items-center gap-3"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </motion.button>
                </MagneticButton>

                <MagneticButton>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-full glass-intense font-body font-medium flex items-center gap-3 hover:glow-purple transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    View Full Resume
                  </motion.button>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Additional Info */}
      <section className="section-container py-20">
        <AnimatedSection>
          <div className="glass-intense rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-glow-cyan/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Format?
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-8">
                If you need my resume in a different format or have specific requirements, 
                feel free to reach out and I'll be happy to accommodate.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 rounded-full glass font-body font-medium"
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
};

export default Resume;
