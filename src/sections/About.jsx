import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-cyan to-primary-blue bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan via-primary-blue to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Image Container */}
              <div className="relative bg-gray-900 rounded-2xl p-2 border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Placeholder for profile photo */}
                  <img
                    src="/Images/prompt image.jpeg"
                    alt="Bhargav Pasupuleti"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-cyan/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm a software engineer with a love for clean code,
                innovative design, and solving real-world problems. My journey
                into tech started with a simple "Hello, World!" and has since
                evolved into a passion for building scalable and user-friendly
                applications.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether it's architecting a backend service, designing a beautiful
                UI, or optimizing database queries, I thrive on the challenges
                that come with software development. When I'm not coding, you can
                find me exploring new technologies, contributing to open-source
                projects, or enjoying a good cup of coffee.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-cyan to-primary-blue bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-gray-400 text-sm mt-1">Years Exp</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-cyan to-primary-blue bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-gray-400 text-sm mt-1">Projects</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-cyan to-primary-blue bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-400 text-sm mt-1">Technologies</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
