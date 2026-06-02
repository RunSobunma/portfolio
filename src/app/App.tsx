import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  // const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative h-screen bg-background text-foreground overflow-x-hidden pt-[env(safe-area-inset-top)]">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="experience" className="py-20">
          <Timeline />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/50 backdrop-blur-sm bg-card/30">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2026 Portfolio. Built with React, Tailwind CSS, and Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
