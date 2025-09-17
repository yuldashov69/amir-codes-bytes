import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FiGithub, FiExternalLink, FiPlay, FiCheck, FiCpu } from 'react-icons/fi';

const V0ProjectSection: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 text-gradient">
              {t.v0Project.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.v0Project.subtitle}
            </p>
          </motion.div>

          {/* Main Project Card */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="glass-card p-8 md:p-12 hover-lift transition-smooth border-neon-blue/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <FiCpu className="h-6 w-6 text-background" />
                    </div>
                    <Badge variant="outline" className="border-neon-blue/30 text-neon-blue">
                      Flagship Project
                    </Badge>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
                    {t.v0Project.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {t.v0Project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {t.v0Project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-neon-green/20 flex items-center justify-center">
                          <FiCheck className="h-3 w-3 text-neon-green" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <p className="text-sm text-muted-foreground mb-3">Texnologiyalar:</p>
                    <p className="text-neon-blue font-medium">{t.v0Project.tech}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="gradient-primary text-background font-semibold px-6 py-3 rounded-xl transition-smooth hover-lift neon-glow-blue"
                    >
                      <FiPlay className="mr-2 h-5 w-5" />
                      {t.v0Project.buttons.preview}
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="glass-card border-neon-purple/30 hover:border-neon-purple/60 text-foreground hover:bg-neon-purple/10 px-6 py-3 rounded-xl transition-smooth hover-lift"
                    >
                      <FiExternalLink className="mr-2 h-5 w-5" />
                      {t.v0Project.buttons.demo}
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="glass-card border-neon-green/30 hover:border-neon-green/60 text-foreground hover:bg-neon-green/10 px-6 py-3 rounded-xl transition-smooth hover-lift"
                    >
                      <FiGithub className="mr-2 h-5 w-5" />
                      {t.v0Project.buttons.github}
                    </Button>
                  </div>
                </div>

                {/* Project Visual */}
                <div className="relative">
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="aspect-video bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                          <FiPlay className="h-8 w-8 text-background" />
                        </div>
                        <p className="text-lg font-medium">Demo Video</p>
                        <p className="text-sm text-muted-foreground">v0.app in action</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-neon-blue/30 blur-sm" />
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-neon-purple/30 blur-sm" />
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default V0ProjectSection;