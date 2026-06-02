import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, ShoppingCart, Shirt, Cpu, Brain, GraduationCap, Computer } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'Clothing Management System',
    description: 'A comprehensive inventory management system for clothing stores with real-time stock tracking, sales analytics, and customer management.',
    icon: Shirt,
    tags: ['PHP', 'Bootstrap', 'jQuery', 'MySQL',],
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/RunSobunma/PHP_ClosthesStoreManagementSystem',
    demo: '#',
  },
  {
    title: 'Cake Store E-Commerce',
    description: 'Full-featured e-commerce platform for a cake shop with online ordering, payment integration, and delivery tracking system.',
    icon: ShoppingCart,
    tags: [ 'Laravel','Node.js', 'Flutter', 'Blade', 'MySQL',],
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/RunSobunma?tab=stars',
    demo: '#',
  },
  {
    title: 'Computer Shop System',
    description: 'An inventory and sales management system for a computer shop, featuring product catalog, order processing, and customer relationship management.',
    icon: Computer,
    tags: ['C#', 'SQL Server'],
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/RunSobunma/CSharp-Computer-Shop-System',
    demo: '#',
  },
  {
    title: 'POS System for Cafe',
    description: 'A point-of-sale system designed for cafes, enabling efficient order taking, payment processing, and sales reporting.',
    icon: Computer,
    tags: ['C#', 'SQL Server'],
    color: 'from-yellow-500 to-orange-500',
    github: 'https://github.com/RunSobunma/CSharp-POS-System-Project',
    demo: '#',
  },
  {
    title: 'School Management System',
    description: 'A comprehensive system for managing school operations including student records, attendance, and academic performance.',
    icon: GraduationCap,
    tags: ['Flutter', 'Laravel', 'MySQL',],
    color: 'from-pink-500 to-red-500',
    github: 'https://github.com/RunSobunma/Flutter_School_Management_Information_System',
    demo: '#',
  },
  {
    title: 'Chicken Detection AI',
    description: 'Machine learning application for automated chicken detection and counting in poultry farms using computer vision and deep learning.',
    icon: Brain,
    tags: ['Python', 'TensorFlow', 'OpenCV', 'AI'],
    color: 'from-orange-500 to-red-500',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div ref={ref} className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative group"
            whileHover={{ y: -10 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
            />

            <div className="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${
                    project.color.includes('purple')
                      ? '#8b5cf6'
                      : project.color.includes('blue')
                      ? '#3b82f6'
                      : project.color.includes('green')
                      ? '#10b981'
                      : '#f97316'
                  }, transparent)`,
                }}
                animate={{
                  scale: hoveredIndex === index ? 1.5 : 1,
                  rotate: hoveredIndex === index ? 45 : 0,
                }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                <div className={`inline-block p-4 bg-gradient-to-r ${project.color} rounded-xl mb-4`}>
                  <project.icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + tagIndex * 0.05 }}
                      className="px-3 py-1 bg-muted/30 rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={18} />
                    <span className="text-sm">Code</span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg text-white`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-12"
      >
        <motion.a
          href="https://github.com/RunSobunma"
          target="_blank"
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View All Projects</span>
          <ExternalLink size={18} />
        </motion.a>
      </motion.div>
    </div>
  );
}
