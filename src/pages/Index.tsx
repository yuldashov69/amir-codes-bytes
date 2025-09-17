// Amirxon's Modern Portfolio

import React from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import V0ProjectSection from '@/components/sections/V0ProjectSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <LanguageSwitcher />
      
      <main>
        <HeroSection />
        <AboutSection />
        <V0ProjectSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Amirxon. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
