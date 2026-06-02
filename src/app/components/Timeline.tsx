import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Code2, Trophy } from 'lucide-react';

const timelineItems = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Computer Science and Engineering',
    organization: 'Royal University of Phnom Penh',
    period: '2022 - 2026',
    description: 'Graduated with honors, specializing in software engineering and mobile application development.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Freelance Full-Stack Developer',
    organization: 'Self-Employed',
    period: '2023 - Present',
    description: 'Developing custom web applications and e-commerce solutions for various clients.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    type: 'project',
    icon: Code2,
    title: 'IoT & AI Projects',
    organization: 'Personal Research',
    period: '2022 - 2024',
    description: 'Built multiple IoT solutions using ESP32 and developed machine learning models for real-world applications.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    type: 'achievement',
    icon: Trophy,
    title: 'Academic Excellence Award',
    organization: 'Royal University of Phnom Penh',
    period: '2025',
    description: 'Recognized for outstanding performance in software engineering and project development.',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`}
                  />
                  <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
                    <div className={`inline-block p-3 bg-gradient-to-r ${item.color} rounded-lg mb-4`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-muted-foreground">{item.organization}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-accent">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 mt-6">
                <motion.div
                  className={`w-full h-full bg-gradient-to-r ${item.color} rounded-full`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className="w-full h-full rounded-full border-4 border-background"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(139, 92, 246, 0.4)',
                        '0 0 0 10px rgba(139, 92, 246, 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
