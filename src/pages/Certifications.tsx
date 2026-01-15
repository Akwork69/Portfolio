import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

const certifications = [
  {
    id: 1,
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: 'December 2024',
    credentialId: 'META-REACT-2024-AK',
    description: 'Advanced React concepts including hooks, context API, performance optimization, and best practices.',
    skills: ['React', 'Hooks', 'Context API', 'Performance'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'TypeScript Fundamentals',
    issuer: 'Microsoft',
    date: 'November 2024',
    credentialId: 'MS-TS-2024-AK',
    description: 'Comprehensive TypeScript training covering type systems, generics, and enterprise-grade development.',
    skills: ['TypeScript', 'Generics', 'Type Safety', 'OOP'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Advanced CSS & Animations',
    issuer: 'Frontend Masters',
    date: 'October 2024',
    credentialId: 'FEM-CSS-2024-AK',
    description: 'Deep dive into modern CSS features, animations, and creating performant animated interfaces.',
    skills: ['CSS3', 'Animations', 'Grid', 'Flexbox'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Web Performance Optimization',
    issuer: 'Google',
    date: 'September 2024',
    credentialId: 'GGL-WPO-2024-AK',
    description: 'Techniques for optimizing web performance, Core Web Vitals, and delivering fast user experiences.',
    skills: ['Performance', 'Core Web Vitals', 'Optimization', 'Lighthouse'],
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 5,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    date: 'August 2024',
    credentialId: 'CRS-UIUX-2024-AK',
    description: 'Principles of user interface and experience design, prototyping, and user research methodologies.',
    skills: ['UI Design', 'UX Research', 'Prototyping', 'Figma'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Git & GitHub Mastery',
    issuer: 'Udemy',
    date: 'July 2024',
    credentialId: 'UDM-GIT-2024-AK',
    description: 'Version control expertise with Git, collaborative workflows, and GitHub best practices.',
    skills: ['Git', 'GitHub', 'CI/CD', 'Collaboration'],
    color: 'from-gray-500 to-slate-500',
  },
];

const Certifications = () => {
  return (
    <main className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="orb orb-purple w-[500px] h-[500px] top-1/4 -left-64 opacity-25" />
        <div className="orb orb-cyan w-[400px] h-[400px] -bottom-32 right-0 opacity-20" />
        <div className="grid-background opacity-10 absolute inset-0" />
      </div>

      {/* Header */}
      <section className="section-container py-20">
        <AnimatedSection>
          <motion.p className="font-body text-sm text-secondary tracking-[0.3em] uppercase mb-4">
            Credentials
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Certifications</span>
            <br />
            <span className="text-foreground">& Achievements</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mt-6">
            Continuous learning is at the core of my journey. Here are some of the certifications I've earned along the way.
          </p>
        </AnimatedSection>
      </section>

      {/* Certifications Grid */}
      <section className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-intense rounded-2xl overflow-hidden h-full flex flex-col hover:glow-purple transition-all duration-500">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Icon & Issuer */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} bg-opacity-10`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-body text-xs">{cert.date}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:gradient-text transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="font-heading text-sm text-secondary mb-4">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-md bg-muted/50 font-body text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID */}
                  <div className="pt-4 border-t border-border/30">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs text-muted-foreground">
                        ID: {cert.credentialId}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 glass rounded-full"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="section-container py-20">
        <AnimatedSection>
          <div className="glass-intense rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-glow-cyan/5" />
            
            <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="font-display text-5xl font-bold gradient-text">6+</span>
                <p className="font-body text-muted-foreground mt-2">Certifications Earned</p>
              </div>
              <div>
                <span className="font-display text-5xl font-bold gradient-text">100+</span>
                <p className="font-body text-muted-foreground mt-2">Hours of Learning</p>
              </div>
              <div>
                <span className="font-display text-5xl font-bold gradient-text">∞</span>
                <p className="font-body text-muted-foreground mt-2">Commitment to Growth</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
};

export default Certifications;
