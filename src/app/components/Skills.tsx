import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const skills = [
  { name: 'PHP', level: 90, color: 'from-purple-500 to-purple-700', category: 'Backend' },
  { name: 'Laravel', level: 85, color: 'from-red-500 to-red-700', category: 'Backend' },
  { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-700', category: 'Frontend' },
  { name: 'Node.js', level: 82, color: 'from-green-500 to-green-700', category: 'Backend' },
  { name: 'React', level: 85, color: 'from-blue-500 to-blue-700', category: 'Frontend' },
  { name: 'Flutter', level: 80, color: 'from-cyan-500 to-cyan-700', category: 'Mobile' },
  { name: 'MySQL', level: 87, color: 'from-orange-500 to-orange-700', category: 'Database' },
  { name: 'MongoDB', level: 78, color: 'from-green-600 to-green-800', category: 'Database' },
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database'];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <div ref={ref} className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8" />

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white border-primary'
                  : 'bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
            <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>

              <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>

              <div className="mt-2 text-xs text-muted-foreground">{skill.category}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="inline-block p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Also Familiar With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Git', 'Docker', 'REST APIs', 'IoT', 'AI/ML', 'Tailwind CSS', 'Bootstrap', 'Firebase'].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 + 1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm"
                  whileHover={{ scale: 1.1, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
