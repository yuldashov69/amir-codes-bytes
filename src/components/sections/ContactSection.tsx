import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FiMail, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ContactSection: React.FC = () => {
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

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com', color: 'neon-blue' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'neon-purple' },
    { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com', color: 'neon-green' },
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
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              {t.contact.subtitle}
            </p>
            <p className="text-muted-foreground">
              {t.contact.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-neon-blue/20 flex items-center justify-center">
                    <FiMail className="h-5 w-5 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">
                    Xabar yuborish
                  </h3>
                </div>

                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder={t.contact.form.name}
                      className="glass-card border-border/50 focus:border-neon-blue/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder={t.contact.form.email}
                      className="glass-card border-border/50 focus:border-neon-blue/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder={t.contact.form.message}
                      rows={4}
                      className="glass-card border-border/50 focus:border-neon-blue/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full gradient-primary text-background font-semibold py-3 rounded-xl transition-smooth hover-lift neon-glow-blue"
                  >
                    <FiSend className="mr-2 h-5 w-5" />
                    {t.contact.form.send}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Direct Contact */}
              <Card className="glass-card p-8">
                <h3 className="text-xl font-poppins font-semibold mb-6">
                  To'g'ridan-to'g'ri bog'lanish
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-neon-blue/5 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-neon-blue/20 flex items-center justify-center">
                      <FiMail className="h-5 w-5 text-neon-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">amirxon@example.com</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="glass-card p-8">
                <h3 className="text-xl font-poppins font-semibold mb-6">
                  Ijtimoiy tarmoqlar
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-4 glass rounded-xl hover:bg-${social.color}/5 transition-all hover-lift group`}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-${social.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className={`h-5 w-5 text-${social.color}`} />
                        </div>
                        <div>
                          <p className="font-medium">{social.label}</p>
                          <p className="text-sm text-muted-foreground">@amirxon</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>

              {/* Availability */}
              <Card className="glass-card p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                  <span className="text-neon-green font-medium">Mavjud</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Yangi loyihalar va hamkorlik uchun ochiq
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;