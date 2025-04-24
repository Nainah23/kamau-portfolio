import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload, FiCoffee } from 'react-icons/fi';
import { useState } from 'react';

export const DevCardSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  // Update time every minute
  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, 60000);

  const socialLinks = [
    {
      icon: <FiGithub size={24} />,
      label: 'GitHub',
      url: 'https://github.com/Nainah23',
      color: 'bg-gray-800 hover:bg-gray-900',
    },
    {
      icon: <FiLinkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kamau-wainaina-534616189',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      url: 'mailto:kamauwainaina29@gmail.com',
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      icon: <FiPhone size={24} />,
      label: 'Call Me',
      url: 'tel:+254715383470',
      color: 'bg-green-500 hover:bg-green-600',
    },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/logo.jpg';
    link.download = 'ian-wainaina.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
    controls.start({
      rotate: isHovered ? 0 : 360,
      scale: isHovered ? 1 : 1.1,
      transition: { duration: 0.5 }
    });
  };

  return (
    <section id="dev-card" className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-200 dark:to-dark-300">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card border-2 border-primary-600 dark:border-primary-400 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary-400/20">
            <div className="bg-gradient-to-r from-primary-600 to-primary-400 p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FiCoffee className="animate-pulse" />
                <span className="font-medium">Web Developer</span>
              </div>
              <div className="bg-black/20 px-3 py-1 rounded-full text-sm">
                {currentTime}
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  className="relative group"
                  animate={controls}
                  onHoverStart={handleHover}
                  onHoverEnd={handleHover}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400 shadow-lg">
                    <img
                      src="/logo.jpg"
                      alt="Ian Wainaina"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={handleDownload}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary-600 text-white p-2 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                    title="Download profile picture"
                  >
                    <FiDownload size={18} />
                  </button>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="heading-3 mb-1">Ian Wainaina</h2>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    ✅ Currently High on Creativity
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Let's collaborate and build something amazing together! I'm available for freelance work and exciting projects.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-4 py-2 ${link.color} text-white rounded-full hover:shadow-lg transition-all duration-300`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🔍 Hire Me
                </motion.button>
                <motion.button 
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-dark-100 dark:hover:bg-dark-50 rounded-full font-medium shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigator.clipboard.writeText('kamauwainaina29@gmail.com')}
                >
                  💬 Copy Email
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};