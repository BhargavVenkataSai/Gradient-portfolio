import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaUniversity, FaAward } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'SRM Univerisyt,Amatavati',
      location: 'Neerukonda, Mangalgiri, Andhra Pradesh',
      period: '2021 - 2025',
      achievements: [
        'Specialized in Big Data Analytics',
        'Completed capstone project on AI-powered medical diagnosis system',
        'Presented a research paper on AI-powered medical diagnosis system',
        
      ],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Bhashyam Vishwakarma',
      location: 'Guntur, Andhra Pradesh',
      period: '2019 - 2021',
      gradient: 'from-cyan-400 to-blue-500',
    },
  ];

  const certifications = [
    {
      name: 'Problem Solving',
      issuer: 'HackerRank',
      date: '2023',
      icon: FaAward,
    },
    {
      name: 'Complete Python BootCamp with Josh perian ',
      issuer: 'Udemy',
      date: '2023',
      icon: FaAward,
    },
    {
      name: 'AWS Cloud Essenstial',
      issuer: 'Amazon Web Services',
      date: '2025',
      icon: FaAward,
    },
    {
      name: 'Generative AI Professional',
      issuer: 'Oracle',
      date: '2025',
      icon: FaAward,
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="education" className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
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
              Education & Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
            >
              {/* Gradient Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient} rounded-t-2xl`} />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <FaGraduationCap className="text-3xl text-primary-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-cyan transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                          <FaUniversity className="text-primary-blue" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-purple-500" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* GPA Badge */}
                {edu.gpa && (
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-cyan to-primary-blue px-4 py-2 rounded-full">
                      <FaAward className="text-black" />
                      <span className="text-black font-semibold">{edu.gpa}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="space-y-2 ml-12">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-primary-cyan mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan/0 via-primary-cyan/5 to-primary-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-primary-cyan to-primary-blue bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-cyan to-primary-blue flex items-center justify-center">
                        <Icon className="text-black text-xl" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-primary-cyan transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                      <p className="text-gray-500 text-xs">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
