import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { FiCode, FiHeart, FiCpu } from 'react-icons/fi';

const AboutSection: React.FC = () => {
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
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-gradient">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.about.age}, {t.about.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <Card className="glass-card p-8 hover-lift transition-smooth">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/20 flex items-center justify-center mr-4">
                    <FiCode className="h-6 w-6 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">
                    Texnologiyalar
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.experience}
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card p-8 hover-lift transition-smooth">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center mr-4">
                    <FiHeart className="h-6 w-6 text-neon-purple" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">
                    Qiziqishlar
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.interests}
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Card className="glass-card p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon-green/20 flex items-center justify-center">
                  <FiCpu className="h-6 w-6 text-neon-green" />
                </div>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">
                v0.app — Asosiy loyiham
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dasturchilar uchun yaratilgan AI yordamchi — bu mening eng yaxshi ko'rdigan va 
                faxr qiladigan loyiham. Bu yerda kodlash va AI'ning kuchini birlashtiraman.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;