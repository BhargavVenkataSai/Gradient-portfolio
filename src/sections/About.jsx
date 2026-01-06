import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-32">
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

        {/* Content Grid - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Photo - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan via-primary-blue to-purple-600 rounded-full blur-3xl opacity-40" />
              
              {/* Image Container */}
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-primary-cyan/30 shadow-2xl">
                  <img
                    src="/Images/prompt image.jpeg"
                    alt="Bhargav Pasupuleti"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm a software engineer with a love for clean code, innovative design, and solving real-world problems. My journey into tech started with a simple "Hello, World!" and has since evolved into a passion for building scalable and user-friendly applications.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether it's architecting a backend service, designing a beautiful UI, or optimizing database queries, I thrive on the challenges that come with software development. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;