import { motion } from 'motion/react';
import { Code2, Database, Smartphone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import profilePic from '../../assets/images/profile.png';

const techIcons = [
  { Icon: Code2, delay: 0, x: -100, y: -50 },
  { Icon: Database, delay: 0.2, x: 100, y: -80 },
  { Icon: Smartphone, delay: 0.4, x: -120, y: 80 },
  { Icon: Code2, delay: 0.6, x: 120, y: 60 },
];

const socialLinks = {
  Telegram: 'https://t.me/Buunmaa',
  github: 'https://github.com/RunSobunma',
  linkedin: 'https://www.linkedin.com/in/run-sobunma-753018343',
};

export default function Hero() {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      {techIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          initial={{ opacity: 0, x, y, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [x, x + 20, x],
            y: [y, y - 20, y],
            scale: 1,
            rotate: [0, 360],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay },
            x: { duration: 4, repeat: Infinity, delay },
            y: { duration: 4, repeat: Infinity, delay },
            scale: { duration: 0.5, delay },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
        >
          <Icon size={48} className="text-primary" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
<motion.div
  className="relative w-50 h-50 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1"
  animate={{
    boxShadow: [
      '0 0 20px rgba(139, 92, 246, 0.5)',
      '0 0 60px rgba(139, 92, 246, 0.8)',
      '0 0 20px rgba(139, 92, 246, 0.5)',
    ],
  }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
    <img
      src={profilePic}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Name Badge */}
<motion.div
  className="
    absolute
    -bottom-3
    -right-25
    sm:-right-30
    px-5
    py-2
    rounded-2xl
    rounded-tl-none
    bg-slate-900/80
    backdrop-blur-xl
    border border-primary/30
    shadow-[0_0_20px_rgba(139,92,246,0.3)]
  "
  animate={{
  opacity: 1,
  x: 0,
  y: [0, -5, 0],
}}
transition={{
  delay: 0.5,
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
}}
whileHover={{
  scale: 1.08,
  rotate: -2,
  boxShadow: "0 0 35px rgba(139,92,246,0.6)",
}}
>
  <p className="text-sm text-muted-foreground">
    Hi, I'm
  </p>
  <h3 className="font-bold text-white tracking-wide ">
    Run Sobunma
  </h3>
</motion.div>
</motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building modern web & mobile applications
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Specializing in PHP, JavaScript, Flutter & React
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            onClick={handleScrollToProjects}
            className="group relative px-8 py-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 font-medium text-white">
              View Projects
            </span>
          </motion.button>

          <motion.button
            onClick={handleScrollToContact}
            className="group relative px-8 py-3 border-2 border-primary rounded-lg overflow-hidden backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 font-medium text-foreground group-hover:text-white transition-colors">
              Contact Me
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { Icon: FaGithub, href: socialLinks.github },
            { Icon: FaLinkedin, href: socialLinks.linkedin },
            { Icon: FaTelegram, href: socialLinks.Telegram },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={24} className="text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
