import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiTensorflow, 
  SiMongodb, 
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiExpress,
  SiCplusplus,
  SiNumpy
} from 'react-icons/si';
import { DiJava, DiMysql } from 'react-icons/di';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: SiPython, color: 'orange' },
    { name: 'C++', icon: SiCplusplus, color:' #3776AB'},
    { name: 'Java', icon: DiJava, color:'red'},
    {name: 'SQL', icon : DiMysql, color: 'blue'},

    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },

    { name: 'Node.js', icon: SiNodedotjs, color: '#0fe20fff' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Express', icon: SiExpress, color: '#ffffff' },
    
    
    
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'Numpy', icon: SiNumpy, color: '#FF6F00' },


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="relative py-32 bg-black">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive set of modern technologies and frameworks I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 30px ${skill.color}40`,
                }}
                className="relative group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-gray-700"
              >
                {/* Icon */}
                <Icon 
                  className="text-5xl transition-all duration-300 group-hover:scale-110" 
                  style={{ color: skill.color }}
                />
                
                {/* Skill Name */}
                <h3 className="text-gray-200 font-semibold text-center">
                  {skill.name}
                </h3>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: skill.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies to build cutting-edge solutions 
            in web development, artificial intelligence, and machine learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
