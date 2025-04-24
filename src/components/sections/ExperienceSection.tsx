import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

export const ExperienceSection = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Fullstack Engineer",
      company: "Rodela TechHouse",
      date: "Jan 2025 - Present",
      description: "Spearheaded the development of multiple enterprise-level applications using React, Java, and Flutter.",
      icon: <FiBriefcase />,
    },
    {
      title: "Backend Developer Intern",
      company: "HNG Internship",
      date: "June 2024 - Present",
      description: "Collaborated with pan-African teams to build a learning platform using AI for homework assistance and grading.",
      icon: <FiBriefcase />,
    },
    {
      title: "BSc. Economics and Statistics",
      company: "Kenyatta University",
      date: "Sep 2019 - 2024",
      description: "Predicted Grade: Second Class Honours (Upper Division)",
      icon: <FiBook />,
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-200">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-center mb-12">Experience & Education</h2>

          <VerticalTimeline lineColor={theme === 'dark' ? '#1E293B' : '#E2E8F0'}>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: theme === 'dark' ? '#1E293B' : '#FFFFFF',
                  color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
                  boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${theme === 'dark' ? '#1E293B' : '#FFFFFF'}`,
                }}
                date={experience.date}
                iconStyle={{
                  background: theme === 'dark' ? '#312E81' : '#4F46E5',
                  color: '#FFFFFF',
                }}
                icon={experience.icon}
              >
                <h3 className="heading-4 mb-1">{experience.title}</h3>
                <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {experience.company}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
};