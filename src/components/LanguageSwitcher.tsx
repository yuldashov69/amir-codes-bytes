import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="glass rounded-full p-1 flex items-center space-x-1">
        <motion.button
          onClick={() => setLanguage('uz')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'uz'
              ? 'bg-neon-blue text-background shadow-lg'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🇺🇿 UZ
        </motion.button>
        <motion.button
          onClick={() => setLanguage('ru')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'ru'
              ? 'bg-neon-blue text-background shadow-lg'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🇷🇺 RU
        </motion.button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;