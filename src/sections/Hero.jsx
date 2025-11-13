import React from 'react';
import { motion } from 'framer-motion';
import LiquidEther from '../components/LiquidEther';
import GradientText from '../components/GradientText';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther 
          colors={['#40ffaa', '#4079ff', '#a040ff']}
          resolution={0.25}
          mouseForce={30}
          cursorSize={80}
          iterationsPoisson={16}
          iterationsViscous={16}
          autoSpeed={0.3}
          autoIntensity={1.5}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32"
      >
        <div className="flex flex-col items-center justify-center text-center">
          {/* Name with Gradient Text */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <GradientText>Bhargav Pasupuleti</GradientText>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-4"
          >
            Python Full-stack Developer / AI-ML Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Building intelligent and scalable digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(64, 255, 170, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-cyan to-primary-blue text-black font-semibold rounded-lg shadow-lg hover:shadow-primary-cyan/50 transition-all duration-300"
            >
              View Projects
            </motion.button>

            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary-cyan text-primary-cyan font-semibold rounded-lg hover:bg-primary-cyan/10 transition-all duration-300 text-center"
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-cyan/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-primary-cyan rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
