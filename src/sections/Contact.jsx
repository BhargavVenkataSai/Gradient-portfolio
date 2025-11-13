import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: '#ffffff',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077B5',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      color: '#EA4335',
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://leetcode.com/yourusername',
      color: '#FFA116',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-black">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 30px ${link.color}40`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group"
                >
                  <Icon 
                    className="text-4xl transition-all duration-300 group-hover:scale-110" 
                    style={{ color: link.color }}
                  />
                  <span className="text-gray-300 font-medium">{link.name}</span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(64, 255, 170, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-cyan to-primary-blue text-black font-semibold rounded-lg shadow-lg hover:shadow-primary-cyan/50 transition-all duration-300"
            >
              <FaEnvelope />
              Send me an email
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bhargav Pasupuleti. Built with React, Vite, and Tailwind CSS.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed with passion for creating intelligent digital experiences.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
