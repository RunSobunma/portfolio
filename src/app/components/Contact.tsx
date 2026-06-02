import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import successSoundRef from '../../assets/sounds/success_notification.mp3';
import errorSoundRef from '../../assets/sounds/error_notification.mp3';




const contactInfo = [
  { icon: Mail, label: 'Email', value: 'runsobunma10@gmail.com', href: 'mailto:runsobunma10@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+855 (096) 416-6767', href: 'tel:+855964166767' },
  { icon: MapPin, label: 'Location', value: 'Boeng Tumpun, Stueng MeanChey, Phnom Penh', href: 'https://maps.app.goo.gl/1Cbk9hunWKMcJt729' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/RunSobunma', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/run-sobunma-753018343', label: 'LinkedIn' },
  { icon: FaTelegram, href: 'https://t.me/Buunmaa', label: 'Telegram' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const abstractApiKey = import.meta.env.VITE_ABSTRACT_API_KEY;
  const [isFakeEmail, setIsFakeEmail] = useState(false); // Set to true to simulate a fake email

const verifyEmail = async (email: string) => {
  const response = await fetch(
    `https://emailreputation.abstractapi.com/v1/?api_key=${abstractApiKey}&email=${email}`
  );

  const data = await response.json();

  return (
    data.email_deliverability?.status === "deliverable" &&
    data.email_deliverability?.is_smtp_valid === true
  );
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);
  setSubmitStatus("idle");

  const isValid = await verifyEmail(formData.email);

  if (!isValid) {
    setIsFakeEmail(true);
    new Audio(errorSoundRef).play();
    setSubmitStatus("error");
    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
    return;
  }else{
    setIsFakeEmail(false);
  }

  try {

    await emailjs.send(
      emailjsServiceId,
      emailjsTemplateId,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      emailjsPublicKey
    );

    new Audio(successSoundRef).play();

    setSubmitStatus("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    new Audio(errorSoundRef).play();
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div ref={ref} className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target='_blank'
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary transition-colors group"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className="p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary transition-colors group"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="relative p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-primary/20"
            animate={{
              boxShadow: [
                '0 0 20px rgba(139, 92, 246, 0.1)',
                '0 0 40px rgba(139, 92, 246, 0.2)',
                '0 0 20px rgba(139, 92, 246, 0.1)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h4 className="text-xl font-bold mb-2">Available for Work</h4>
            <p className="text-muted-foreground">
              I'm currently open to new opportunities and exciting projects. Let's create something amazing together!
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={
            submitStatus === 'success'
              ? {
                  opacity: 1,
                  x: 0,
                  scale: [1, 1.02, 1],
                }
              : isInView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {}
          }
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  className="fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl bg-green-500 text-white shadow-xl"
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  className="fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl bg-red-500 text-white shadow-xl"
                >
                  {isFakeEmail ? '❌ invalid email' : '❌ Failed to send message!'}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Run Sobunma"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 ">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="runsobunma@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                disabled={isSubmitting}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                disabled={isSubmitting}
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              <>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                >
                  ✓
                </motion.span>
                Message Sent
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
