import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding bg-light-100 dark:bg-dark-100">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="heading-2 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a solution-driven Fullstack Software Engineer with a strong foundation in Economics
                and Statistics from Kenyatta University. Currently enhancing my skills through software
                engineering training at ALX-AFRICA.
              </p>
              <p>
                My expertise lies in building scalable web applications using modern technologies like
                React, Java, Node.js, and Flutter. I'm passionate about delivering user-centered
                digital solutions that solve real-world problems.
              </p>
              <p>
                With fluency in English and Kiswahili, and conversational Japanese, I bring a global
                perspective to my work. I excel in both leadership and collaborative environments,
                always striving to create impactful solutions.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="heading-4 mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="card hover:shadow-md">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React, Flutter, HTML, CSS
                  </p>
                </div>
                <div className="card hover:shadow-md">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Java, Node.js, Python
                  </p>
                </div>
                <div className="card hover:shadow-md">
                  <h4 className="font-semibold mb-2">Database</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    MongoDB, PostgreSQL, MySQL
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/logo.jpg"
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};