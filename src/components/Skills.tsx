'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Palette, Settings, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "Angular", level: 70 },
        { name: "Vue.js", level: 65 }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Symfony", level: 70 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Bases de données",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "Supabase", level: 65 }
      ]
    },
    {
      icon: Palette,
      title: "Design & UI",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "CSS3/SASS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Material-UI", level: 70 }
      ]
    },
    {
      icon: Settings,
      title: "DevOps & Outils",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "GitHub Actions", level: 65 }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              <span className="gradient-text">Mes Compétences</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des applications web modernes et performantes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full relative"
                        >
                          <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-md transform translate-x-1"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Apprentissage Continu
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Toujours en veille technologique pour découvrir les dernières innovations
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Code de Qualité
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Respect des bonnes pratiques et des standards de développement
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Outils Modernes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Utilisation d'outils de développement performants et adaptés
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 