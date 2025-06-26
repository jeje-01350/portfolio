'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    "Développement Full-Stack",
    "Architecture d'applications",
    "UI/UX Design",
    "Gestion de projets",
    "Optimisation performance",
    "Sécurité web"
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Master 2 Ingénierie du Web",
      detail: "ESGI Lyon"
    },
    {
      icon: MapPin,
      title: "Localisation",
      description: "Chambéry, France",
      detail: "Disponible en remote"
    },
    {
      icon: Calendar,
      title: "Expérience",
      description: "3+ années",
      detail: "Projets web innovants"
    },
    {
      icon: Award,
      title: "Spécialité",
      description: "Applications modernes",
      detail: "Performance & UX"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">À propos de moi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image & Info */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">JR</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Jérémy Rossi</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">Développeur Full-Stack</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700"
                  >
                    <highlight.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{highlight.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{highlight.description}</p>
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">{highlight.detail}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Passionné par l'innovation technologique
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Je suis un développeur full-stack passionné par le développement web moderne. 
                  Actuellement en formation à l'ESGI Lyon pour devenir développeur full-stack en Master 2 
                  Ingénierie du Web, je me spécialise dans la création d'applications performantes et 
                  d'expériences utilisateur exceptionnelles.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Mon approche combine créativité et rigueur technique pour transformer des idées 
                  complexes en solutions digitales élégantes. Je suis constamment à la recherche 
                  de nouvelles technologies et méthodologies pour améliorer mes compétences.
                </p>
              </div>

              {/* Skills Grid */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Mes domaines d'expertise
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Collaborons ensemble
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 