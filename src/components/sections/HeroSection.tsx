import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-white/90 dark:bg-dark-200/90" />
      
      <div className="container-padding mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="heading-1 mb-6">
            Hi, I'm{' '}
            <span className="text-primary-600 dark:text-primary-400">
              Ian Wainaina
            </span>
          </h1>
          
          <p className="body-large max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            A passionate Fullstack Software Engineer specializing in React, Java, Node.js, and Flutter.
            Building scalable solutions that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="button-primary cursor-pointer"
            >
              Get in Touch
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="button-secondary cursor-pointer"
            >
              View My Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <FiArrowDown className="animate-bounce-slow text-primary-600 dark:text-primary-400" size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};