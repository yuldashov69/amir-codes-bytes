import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiGithub, FiExternalLink, FiCode, FiSmartphone, FiGlobe } from 'react-icons/fi';

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const projectCategories = [
    {
      icon: FiCode,
      title: t.projects.categories.uiClones,
      color: 'neon-blue',
      projects: ['YouTube Clone', 'Spotify Interface', 'Netflix UI']
    },
    {
      icon: FiSmartphone,
      title: t.projects.categories.miniApps,
      color: 'neon-purple',
      projects: ['Task Manager', 'Weather App', 'Calculator']
    },
    {
      icon: FiGlobe,
      title: t.projects.categories.openSource,
      color: 'neon-green',
      projects: ['React Components', 'Utility Library', 'Design System']
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-gradient">
              {t.projects.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.projects.subtitle}
            </p>
          </motion.div>

          {/* Project Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="glass-card p-8 hover-lift transition-smooth h-full group">
                    <div className="text-center">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-${category.color}/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-8 w-8 text-${category.color}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-poppins font-semibold mb-4">
                        {category.title}
                      </h3>

                      {/* Project List */}
                      <div className="space-y-3 mb-6">
                        {category.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="flex items-center justify-between p-3 glass rounded-lg">
                            <span className="text-sm font-medium">{project}</span>
                            <div className="flex gap-2">
                              <FiGithub className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                              <FiExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Badge */}
                      <Badge 
                        variant="outline" 
                        className={`border-${category.color}/30 text-${category.color}`}
                      >
                        {category.projects.length} loyiha
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-poppins font-semibold mb-4">
                Ko'proq loyihalar GitHub'da
              </h3>
              <p className="text-muted-foreground mb-6">
                Barcha open-source loyihalarim va kod namunalarim GitHub profilimda mavjud
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass-card border-neon-blue/30 hover:border-neon-blue/60 text-foreground hover:bg-neon-blue/10 rounded-xl transition-smooth hover-lift"
                >
                  <FiGithub className="h-5 w-5" />
                  GitHub'da ko'rish
                </a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;