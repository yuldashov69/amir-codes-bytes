export interface Translation {
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    buttons: {
      portfolio: string;
      v0Demo: string;
      github: string;
    };
  };
  about: {
    title: string;
    description: string;
    age: string;
    experience: string;
    interests: string;
  };
  v0Project: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    tech: string;
    buttons: {
      preview: string;
      github: string;
      demo: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    categories: {
      uiClones: string;
      miniApps: string;
      openSource: string;
    };
  };
  skills: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
}

export const translations: Record<'uz' | 'ru', Translation> = {
  uz: {
    hero: {
      greeting: "Salom 👋",
      name: "Men Amirxon",
      title: "frontend dasturchiman",
      description: "Men soddalik va qulaylikni qadrlayman. Loyiham: v0.app — dasturchilar uchun AI yordamchi.",
      buttons: {
        portfolio: "Portfolio",
        v0Demo: "v0.app Demo",
        github: "GitHub"
      }
    },
    about: {
      title: "Men haqimda",
      description: "dasturchi, 2 yillik tajriba",
      age: "18 yosh",
      experience: "React, Tailwind, JavaScript asosiy texnologiyalarim",
      interests: "Dizayn va AI bilan ishlashga qiziqaman"
    },
    v0Project: {
      title: "v0.app",
      subtitle: "Dasturchilar uchun AI yordamchi",
      description: "v0.app — bu dasturchilar uchun sun'iy intellekt yordamchisi. Kod yozishda yordam beradi, promptlar taklif qiladi, snippetlar beradi.",
      features: [
        "Kod yozishda yordam",
        "Snippetlar taklifi", 
        "Prompt generatori",
        "Qulaylik va soddalik"
      ],
      tech: "React, Tailwind, OpenAI API",
      buttons: {
        preview: "Video Demo",
        github: "GitHub",
        demo: "Jonli Demo"
      }
    },
    projects: {
      title: "Boshqa loyihalar",
      subtitle: "Tajriba va o'rganish",
      categories: {
        uiClones: "UI Clone'lar (YouTube, Spotify)",
        miniApps: "Mini ilovalar (To-do, Weather)",
        openSource: "Open-source loyihalar"
      }
    },
    skills: {
      title: "Texnologiyalar",
      subtitle: "Men ishlagan tool'lar"
    },
    contact: {
      title: "Bog'lanish",
      subtitle: "Hamkorlik uchun",
      description: "Menga yozing yoki tarmoqlarda bog'laning",
      form: {
        name: "Ismingiz",
        email: "Elektron pochta",
        message: "Xabar",
        send: "Yuborish"
      }
    }
  },
  ru: {
    hero: {
      greeting: "Привет 👋",
      name: "Я Амирхон",
      title: "фронтенд-разработчик",
      description: "Я ценю простоту и удобство. Мой проект: v0.app — AI помощник для разработчиков.",
      buttons: {
        portfolio: "Портфолио",
        v0Demo: "v0.app Demo",
        github: "GitHub"
      }
    },
    about: {
      title: "Обо мне",
      description: "разработчик, 2 года опыта",
      age: "Мне 18 лет",
      experience: "Основные технологии — React, Tailwind, JavaScript",
      interests: "Интересуюсь дизайном и искусственным интеллектом"
    },
    v0Project: {
      title: "v0.app",
      subtitle: "AI помощник для разработчиков",
      description: "v0.app — это AI помощник для разработчиков. Помогает с кодом, подсказывает сниппеты, генерирует идеи.",
      features: [
        "Помощь с кодом",
        "Готовые сниппеты",
        "Генератор идей", 
        "Простота использования"
      ],
      tech: "React, Tailwind, OpenAI API",
      buttons: {
        preview: "Видео превью",
        github: "GitHub",
        demo: "Живая демка"
      }
    },
    projects: {
      title: "Другие проекты",
      subtitle: "Опыт и обучение",
      categories: {
        uiClones: "Клоны UI (YouTube, Spotify)",
        miniApps: "Мини-приложения (To-do, Weather)",
        openSource: "Open-source проекты"
      }
    },
    skills: {
      title: "Технологии",
      subtitle: "Инструменты с которыми работаю"
    },
    contact: {
      title: "Связаться",
      subtitle: "Для сотрудничества",
      description: "Напишите мне или свяжитесь в соцсетях",
      form: {
        name: "Ваше имя",
        email: "Электронная почта",
        message: "Сообщение",
        send: "Отправить"
      }
    }
  }
};