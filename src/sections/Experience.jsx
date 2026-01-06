import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'Python Developer intern',
      company: 'Morphius AI',
      location: 'Remote',
      period: 'Aug 2025 - Present',
      description: [
        'Developed and maintained a AI-contact-fetcher using full-stack web applications',
        'Implemented with Django, React, Node.js, MongoDb, RESTful APIs and integrated third-party services to enhance functionality',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Optimized application performance and improved code quality through code reviews',
      ],
      gradient: 'from-primary-cyan to-primary-blue',
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="experience" className="relative py-32">
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
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-cyan via-primary-blue to-purple-500" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
                  >
                    {/* Gradient Top Border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient} rounded-t-2xl`} />

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-cyan transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                          <FaBriefcase className="text-primary-cyan" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-primary-blue" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-purple-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-primary-cyan mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan/0 via-primary-cyan/5 to-primary-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0 w-12">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} shadow-lg shadow-primary-cyan/50`}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
