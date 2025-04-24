import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-100">
      <div className="container-padding mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">Ian Wainaina</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Fullstack Software Engineer
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Nainah23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kamau-wainaina-534616189"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:kamauwainaina29@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <FiMail size={24} />
            </a>
            <a
              href="tel:+254715383470"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <FiPhone size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Ian Wainaina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};