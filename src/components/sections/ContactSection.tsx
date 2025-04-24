import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';

export const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [state, handleSubmit] = useForm("manoyzpl");

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-white dark:bg-dark-200">
        <div className="container-padding mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-4">Thank You! 🎉</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Your message has been received. I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-200">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-2 text-center mb-8">Get in Touch</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="button-primary w-full md:w-auto"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};