import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        className="container mx-auto px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-2xl md:text-3xl">{t.hero.greeting}</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6"
        >
          {t.hero.name}{' '}
          <span className="text-gradient">{t.hero.title}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="hero-button group bg-neon-blue hover:bg-neon-blue/90 text-background font-semibold px-8 py-4 rounded-xl transition-smooth hover-lift neon-glow-blue"
          >
            {t.hero.buttons.portfolio}
            <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              className="glass-card border-neon-purple/30 hover:border-neon-purple/60 text-foreground hover:bg-neon-purple/10 px-6 py-4 rounded-xl transition-smooth hover-lift"
            >
              <FiExternalLink className="mr-2 h-5 w-5" />
              {t.hero.buttons.v0Demo}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass-card border-neon-green/30 hover:border-neon-green/60 text-foreground hover:bg-neon-green/10 px-6 py-4 rounded-xl transition-smooth hover-lift"
            >
              <FiGithub className="mr-2 h-5 w-5" />
              {t.hero.buttons.github}
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-neon-blue/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-neon-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;