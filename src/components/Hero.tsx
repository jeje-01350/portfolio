'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Code, Rocket, Zap } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 md:pt-0 pb-28 md:pb-10">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              variants={iconVariants}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-float"
              style={{ animationDelay: '0s' }}
            >
              <Code className="w-8 h-8 text-blue-600" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-float"
              style={{ animationDelay: '2s' }}
            >
              <Rocket className="w-8 h-8 text-purple-600" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-float"
              style={{ animationDelay: '4s' }}
            >
              <Zap className="w-8 h-8 text-primary-600" />
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Jérémy Rossi</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
          >
            Développeur Full-Stack
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionné par le développement web, je crée des applications modernes et performantes. 
            Actuellement en Master 2 IW à l'ESGI Lyon, je transforme vos idées en solutions digitales innovantes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center"
            >
              Voir mes projets
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.div>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center justify-center"
            >
              Me contacter
            </motion.a>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Disponible - Chambéry, France
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-0 right-0 mx-auto flex flex-col items-center"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2">Découvrir</span>
          <ChevronDown className="block md:hidden" size={20} />
          <ChevronDown className="hidden md:block" size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
} 