import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiTensorflow, 
  SiMongodb,
  SiExpress,
  SiTailwindcss
} from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'AI Tutor',
      description: 'An intelligent tutoring system powered by machine learning that provides personalized learning experiences and adaptive content recommendations.',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
      ],
      github: 'https://github.com/yourusername/ai-tutor',
      demo: 'https://ai-tutor-demo.com',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'NeuroScan AI',
      description: 'Advanced medical imaging analysis platform using deep learning for early detection and diagnosis of neurological conditions.',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'React', icon: SiReact },
        { name: 'MongoDB', icon: SiMongodb },
      ],
      github: 'https://github.com/BhargavVenkataSai/-NeuroScan-AI',
      demo: 'https://neuroscan-demo.com',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Food Delivery App',
      description: 'Full-stack food delivery platform with real-time order tracking, payment integration, and restaurant management dashboard.',
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
      github: 'https://github.com/yourusername/food-delivery',
      demo: 'https://food-delivery-demo.com',
      gradient: 'from-green-500 to-emerald-600',
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

  const cardVariants = {
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
    <section id="projects" className="relative py-32 bg-gradient-to-b from-black to-gray-900">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in AI/ML and full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700"
                      >
                        <Icon className="text-sm text-primary-cyan" />
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex-1 justify-center"
                  >
                    <FaGithub />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(64, 255, 170, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-cyan to-primary-blue text-black rounded-lg font-medium transition-all flex-1 justify-center"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan/0 via-primary-cyan/5 to-primary-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
