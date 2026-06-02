import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '15+', Icon: Award },
  { label: 'Technologies', value: '10+', Icon: Briefcase },
  { label: 'Fresh Graduate', value: '2026', Icon: GraduationCap },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="container mx-auto px-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> and{' '}
              <span className="text-secondary font-semibold">Mobile App Developer</span> who recently
              graduated with a strong foundation in modern web and mobile technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development has equipped me with expertise in building scalable
              web applications using <span className="text-accent font-semibold">PHP, Laravel, Node.js ,React.js</span>,
              and creating cross-platform mobile applications with{' '}
              <span className="text-accent font-semibold">Flutter</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm particularly interested in creating innovative solutions that combine web technologies
              with IoT and AI, as demonstrated in my projects involving ESP32 microcontrollers and
              machine learning applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <stat.Icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
            <GraduationCap className="text-primary mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Education</h3>
            <p className="text-muted-foreground mb-2">
              Bachelor's Degree in Computer Science
            </p>
            <p className="text-sm text-muted-foreground/80">2022 - 2026</p>
            <p className="text-muted-foreground mt-3">
              Focused on software engineering, mobile development, and modern web technologies
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
            <Briefcase className="text-secondary mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Experience</h3>
            <p className="text-muted-foreground mb-2">
              Freelance Developer & Personal Projects
            </p>
            <p className="text-sm text-muted-foreground/80">2025 - Present</p>
            <p className="text-muted-foreground mt-3">
              Building full-stack applications, e-commerce platforms, and IoT solutions
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
