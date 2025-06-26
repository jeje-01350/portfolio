'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Brain, Briefcase, FileText } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Situatio",
      description: "Plateforme de librairie de test psychométrique permettant aux professionnels de la psychologie de gérer et administrer des tests avec une interface moderne et intuitive.",
      icon: Brain,
      technologies: ["React", "Node.js", "MongoDB"],
      features: [
        "Interface utilisateur moderne",
        "Gestion d'état optimisée",
        "Tests psychométriques interactifs",
        "Dashboard analytique"
      ],
      color: "from-blue-500 to-purple-600",
      delay: 0
    },
    {
      id: 2,
      title: "Services",
      description: "Plateforme de gestion de services freelance avec automatisation IA, permettant d'optimiser la gestion des projets et des clients.",
      icon: Briefcase,
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "Node.js", "MongoDB", "N8N"],
      features: [
        "Interface utilisateur moderne",
        "Automatisation des services avec IA",
        "Gestion de projets avancée",
        "Intégration N8N pour workflows"
      ],
      color: "from-green-500 to-teal-600",
      delay: 0.2
    },
    {
      id: 3,
      title: "Sensei CV Extractor",
      description: "Application intelligente de gestion de CV avec extraction automatique de données, facilitant le processus de recrutement.",
      icon: FileText,
      technologies: ["React", "Node.js", "MongoDB"],
      features: [
        "Interface intuitive",
        "Extraction de données automatique",
        "Analyse intelligente des CV",
        "Système de matching"
      ],
      color: "from-orange-500 to-red-600",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Mes Projets</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Découvrez quelques-uns de mes projets les plus significatifs, alliant innovation technologique et solutions pratiques
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-r ${project.color} text-white relative`}>
                  <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
                    <div className="w-full h-full bg-white/10 rounded-full"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 uppercase tracking-wide">
                      Fonctionnalités clés
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <Code className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Intéressé par mes projets ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Découvrez plus de détails sur mes réalisations ou discutons de votre prochain projet ensemble.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Commencer un projet
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </motion.a>
                <motion.a
                  href="https://github.com/jeje-01350"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Voir sur GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 