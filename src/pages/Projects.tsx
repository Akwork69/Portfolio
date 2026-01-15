import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    title: 'NeoVerse Dashboard',
    description: 'A futuristic analytics dashboard with real-time data visualization, dark mode aesthetics, and smooth micro-interactions.',
    longDescription: 'Built from scratch with React and TypeScript, this dashboard features interactive charts, glassmorphism design elements, and seamless dark mode integration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    category: 'Web App',
    color: 'from-purple-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Quantum UI Kit',
    description: 'A comprehensive component library with 50+ reusable components featuring advanced animations and accessibility features.',
    longDescription: 'Designed for scalability and customization, this UI kit includes buttons, cards, modals, and complex form elements with Framer Motion animations.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Storybook', 'Framer Motion', 'CSS Modules'],
    category: 'Component Library',
    color: 'from-pink-500 to-purple-500',
  },
  {
    id: 3,
    title: 'EcoTrack Mobile',
    description: 'An eco-friendly lifestyle tracker with gamification elements and beautiful data visualizations.',
    longDescription: 'Track your carbon footprint, earn badges, and compete with friends. Features smooth animations and an intuitive mobile-first design.',
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=800&auto=format&fit=crop&q=60',
    tech: ['React Native', 'TypeScript', 'Redux', 'D3.js'],
    category: 'Mobile App',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    title: 'SynthWave Portfolio',
    description: 'A retro-futuristic portfolio template with neon aesthetics, parallax effects, and GSAP animations.',
    longDescription: 'Inspired by 80s synthwave aesthetics, this template features gradient overlays, animated grid backgrounds, and smooth scroll-triggered animations.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'GSAP', 'Three.js', 'Styled Components'],
    category: 'Template',
    color: 'from-fuchsia-500 to-orange-500',
  },
  {
    id: 5,
    title: 'ArtFlow Gallery',
    description: 'An immersive digital art gallery with 3D room navigation and interactive artwork displays.',
    longDescription: 'Experience art in a new dimension with WebGL-powered 3D environments, ambient audio, and gesture-based navigation.',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&auto=format&fit=crop&q=60',
    tech: ['Three.js', 'React', 'WebGL', 'Howler.js'],
    category: '3D Experience',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'TaskFlow Pro',
    description: 'A productivity app with Kanban boards, time tracking, and team collaboration features.',
    longDescription: 'Streamline your workflow with drag-and-drop task management, real-time updates, and beautiful dark mode UI.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    category: 'Productivity',
    color: 'from-blue-500 to-cyan-500',
  },
];

const categories = ['All', 'Web App', 'Component Library', 'Mobile App', 'Template', '3D Experience', 'Productivity'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="orb orb-purple w-[600px] h-[600px] -top-48 -right-48 opacity-25" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 left-0 opacity-20" />
        <div className="grid-background opacity-10 absolute inset-0" />
      </div>

      {/* Header */}
      <section className="section-container py-20">
        <AnimatedSection>
          <motion.p className="font-body text-sm text-secondary tracking-[0.3em] uppercase mb-4">
            My Work
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Featured</span>
            <br />
            <span className="text-foreground">Projects</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mt-6">
            A collection of projects that showcase my skills in frontend development, animation, and user experience design.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-3 mt-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-secondary to-glow-cyan text-primary-foreground'
                    : 'glass hover:glass-intense'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Grid */}
      <section className="section-container py-12">
        <motion.div 
          layout 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="glass-intense rounded-2xl overflow-hidden h-full flex flex-col hover:glow-purple transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass px-3 py-1 rounded-full font-body text-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 glass-intense rounded-full"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 glass-intense rounded-full"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-muted/50 font-body text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details */}
                <div className="px-6 pb-6">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 font-body text-sm text-secondary hover:text-foreground transition-colors"
                  >
                    View Case Study
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-20">
        <AnimatedSection>
          <div className="glass-intense rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-glow-cyan/10" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Have a Project in Mind?
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-8">
                I'm always excited to work on new and challenging projects. Let's create something amazing together!
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-glow-cyan font-body font-medium text-primary-foreground"
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
