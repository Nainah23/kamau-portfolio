import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'In Progress' | 'Complete';
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      title: 'GOLIS Balanced Scorecard',
      description: 'A performance tracking web application for organizations to monitor goals and KPIs across organizational, departmental, and individual levels.',
      technologies: ['React', 'Java'],
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
    },
    {
      title: 'Online Web-Based Exam Proctoring Platform',
      description: 'A seamless exam interface with integrated proctoring logic and secure user authentication to facilitate remote invigilation and assessment integrity.',
      technologies: ['React', 'Java'],
      status: 'Complete',
      liveUrl: 'https://rodela.co.ke',
      image: 'https://images.pexels.com/photos/4219101/pexels-photo-4219101.jpeg',
    },
    {
      title: 'Welfare Application',
      description: 'A savings and loan management platform enabling employees to save monthly and apply for loans based on their contributions.',
      technologies: ['React', 'Flutter', 'Java'],
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
    },
    {
      title: 'ISO 27001 Process Automation Tool',
      description: 'Automated and streamlined ISO 27001 compliance procedures for corporate clients, improving audit readiness and reducing manual oversight.',
      technologies: ['React', 'Java'],
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-light-100 dark:bg-dark-100">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-center mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group hover:shadow-lg"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </div>
                </div>

                <h3 className="heading-4 mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <FiGithub className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};