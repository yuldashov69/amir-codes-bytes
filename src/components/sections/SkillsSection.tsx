import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const skills = [
    { name: 'HTML5', level: 95, color: 'neon-blue' },
    { name: 'CSS3', level: 90, color: 'neon-purple' },
    { name: 'JavaScript', level: 85, color: 'neon-green' },
    { name: 'React', level: 80, color: 'neon-blue' },
    { name: 'Tailwind CSS', level: 90, color: 'neon-purple' },
    { name: 'Git', level: 75, color: 'neon-green' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-gradient">
              {t.skills.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.skills.subtitle}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card p-6 hover-lift transition-smooth group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-poppins font-semibold">
                      {skill.name}
                    </h3>
                    <span className={`text-${skill.color} font-medium`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="glass-card p-8">
              <h3 className="text-xl font-poppins font-semibold mb-4">
                O'rganayotgan texnologiyalar
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['TypeScript', 'Node.js', 'Next.js', 'GraphQL', 'Docker'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 glass rounded-full text-sm border border-neon-blue/20 hover:border-neon-blue/40 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;