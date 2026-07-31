// Configuración de i18n siguiendo las mejores prácticas de Astro
export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    // Home section
    "home.greeting": "👋 Hello, I'm",
    "home.name": "Andrés Posada",
    "home.role": "Senior Full Stack Engineer",
    "home.description":
      "Senior Full Stack Engineer at RentingCarz Holdings. I specialize in building high-performance web applications, modern financial systems, and AI-driven platforms with clean architecture and focus on UX.",
    "home.downloadResume": "Download Resume",
    "home.yearsExperience": "Years' Experience",
    "home.projectsDone": "Projects Done",

    // Experience section
    "experience.title": "Experience",
    "experience.intro":
      "Over 7+ years in software engineering, I've designed and delivered scalable web applications, fintech infrastructure, and real-time systems across international tech companies and fast-paced environments.",
    "experience.showMore": "Show more experiences",
    "experience.showLess": "Show less",

    // WhatsApp message
    "whatsapp.message":
      "Hi Andrés! 👋 I saw your portfolio and I'm interested in connecting. Could we talk?",

    // Experience data
    "experience.rentingcarz.date": "2024 - Present",
    "experience.rentingcarz.position": "Senior Full Stack Engineer",
    "experience.rentingcarz.company": "RentingCarz Holdings",
    "experience.rentingcarz.description":
      "Leading frontend & backend development for car rental & mobility booking platforms using Vue 3, Nuxt, Node.js, and cloud integrations. Optimizing performance, checkout conversion, and system reliability.",

    "experience.momenge.date": "2024",
    "experience.momenge.position": "Software Engineer",
    "experience.momenge.company": "Momenge",
    "experience.momenge.description":
      "Developed an instant messaging application using Fastify, PostgreSQL, React Native and Socket.io. Implemented real-time event logic, multimedia handling, and account recovery systems.",

    "experience.wearedev.date": "2021 - 2024",
    "experience.wearedev.position": "Full Stack Developer",
    "experience.wearedev.company": "WeAre Dev",
    "experience.wearedev.description":
      "Designed and developed a remittance platform from scratch using Node.js, React, and PostgreSQL. Led migration of legacy systems for online payments and loan management, modernizing critical financial infrastructure.",

    "experience.osgroup.date": "2020 - 2021",
    "experience.osgroup.position": "Full Stack Developer",
    "experience.osgroup.company": "O.S Group",
    "experience.osgroup.description":
      "Built a comprehensive platform for credit management and payment processing using NestJS and Vue.js. Focused on creating secure, scalable financial solutions with robust user interfaces.",

    "experience.plmgroup.date": "2019 - 2020",
    "experience.plmgroup.position": "Web & Mobile Developer",
    "experience.plmgroup.company": "PLM Group",
    "experience.plmgroup.description":
      "Developed web and mobile applications for El Dorado Airport's official website. Integrated services for users, flights, and COVID surveys, handling high-traffic airport operations.",

    "experience.sumimedical.date": "2018 - 2019",
    "experience.sumimedical.position": "Lead Software Developer",
    "experience.sumimedical.company": "Sumimedical",
    "experience.sumimedical.description":
      "Led development of comprehensive healthcare software with patient management, inventory control, real-time chat, and multi-database integration (SQL Server, PostgreSQL, MySQL).",

    // Work/Projects section
    "work.title": "Featured Projects",
    "work.equilibrio": "Equilibrio - Personal Finance Platform",
    "work.equilibrio.description":
      "Personal finance platform featuring visual runway calculators, virtual savings pockets & PWA support. Built with Nuxt 3, Nuxt UI & Supabase for zero-cost deployment on Cloudflare Pages.",
    "work.aiTutor": "AI English Tutor Platform",
    "work.aiTutor.description":
      "Interactive AI-powered language tutor with real-time audio analysis (WebM Opus), baseline proficiency evaluation, and Anki spaced repetition algorithm.",
    "work.matchPredictions": "Realtime Sports Match Predictions",
    "work.matchPredictions.description":
      "Live sports prediction app with real-time leaderboard, user ranking analytics, Firebase RTDB integration, and secure API key management.",
    "work.remittancePlatform": "Remittance & Payment Platform",
    "work.remittancePlatform.description":
      "End-to-end remittance platform with online payment integration and loan management built with Node.js, React & PostgreSQL.",
    "work.callToAction":
      "Interested in working together or discussing a project? Let's talk!",
    "work.getInTouch": "Get In Touch",

    // Contact section
    "contact.title": "Contact",
    "contact.talk": "Let's Talk!",
    "contact.description":
      "I'm always open to discussing new projects, tech architecture, or creative opportunities. Don't hesitate to reach out.",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.location": "Location",
    "contact.socialMedia": "Follow me on social media",
    "contact.sendMessage": "Send me a message",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.formSuccess":
      "Message sent successfully! I'll get back to you soon.",
    "contact.formError":
      "Oops! Something went wrong. Please try again or contact me directly.",

    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.work": "Projects",
    "nav.contact": "Contact",

    // Footer
    "footer.copyright": "All rights reserved.",

    // Meta
    "meta.description":
      "Andrés Posada - Senior Full Stack Engineer at RentingCarz Holdings. Specialized in Vue.js, Nuxt 3, React, Node.js, and modern cloud applications.",

    // About section
    "about.hi":
      "Hi, I'm Andrés Posada, a Senior Full Stack Engineer at RentingCarz Holdings with over 7 years of experience building modern web & digital products.",
    "about.focusStart": "My focus is on delivering high-impact solutions with",
    "about.cleanCode": "clean code and robust architecture",
    "about.focusMiddle": ". I specialize in technologies like",
    "about.technologies": "Vue 3, Nuxt 3, React, Node.js, and PostgreSQL",
    "about.focusEnd": ".",
    "about.learning":
      "I constantly explore modern paradigms like AI integration, serverless edge deployments, and responsive UI frameworks.",
    "about.personal":
      "When I'm not coding, I enjoy traveling, learning about new technologies, and spending quality time with my family.",
    "about.opportunities":
      "Feel free to connect if you want to chat about software engineering, web architectures, or interesting projects.",
    "about.technologiesSection": "Key Stack & Competencies",
    "about.sectionTitle": "About Me",
    "about.frontend": "Frontend",
    "about.backend": "Backend",
    "about.database": "Database & Cloud",
    "about.tools": "Tools & AI Integrations",
  },
  es: {
    // Home section
    "home.greeting": "👋 Hola, soy",
    "home.name": "Andrés Posada",
    "home.role": "Senior Full Stack Engineer",
    "home.description":
      "Ingeniero de Software Senior en RentingCarz Holdings. Me especializo en construir aplicaciones web de alto rendimiento, plataformas financieras modernas y soluciones impulsadas por IA con arquitectura limpia y enfoque en UX.",
    "home.downloadResume": "Descargar CV",
    "home.yearsExperience": "Años de Experiencia",
    "home.projectsDone": "Proyectos Realizados",

    // Experience section
    "experience.title": "Experiencia",
    "experience.intro":
      "Durante más de 7 años en ingeniería de software, he diseñado y entregado aplicaciones web escalables, infraestructura fintech y sistemas en tiempo real para empresas tecnológicas globales.",
    "experience.showMore": "Ver más experiencias",
    "experience.showLess": "Ver menos",

    // WhatsApp message
    "whatsapp.message":
      "¡Hola Andrés! 👋 Vi tu portafolio y me interesa conectar contigo. ¿Podríamos conversar?",

    // Experience data
    "experience.rentingcarz.date": "2024 - Presente",
    "experience.rentingcarz.position": "Ingeniero de Software Senior",
    "experience.rentingcarz.company": "RentingCarz Holdings",
    "experience.rentingcarz.description":
      "Liderando el desarrollo frontend y backend de plataformas globales de reserva de autos y movilidad usando Vue 3, Nuxt, Node.js e integraciones cloud. Optimizando rendimiento, conversión en checkout y confiabilidad del sistema.",

    "experience.momenge.date": "2024",
    "experience.momenge.position": "Ingeniero de Software",
    "experience.momenge.company": "Momenge",
    "experience.momenge.description":
      "Desarrollo de aplicación de mensajería instantánea usando Fastify, PostgreSQL, React Native y Socket.io. Implementación de eventos en tiempo real y recuperación de cuentas.",

    "experience.wearedev.date": "2021 - 2024",
    "experience.wearedev.position": "Desarrollador Full Stack",
    "experience.wearedev.company": "WeAre Dev",
    "experience.wearedev.description":
      "Diseño y desarrollo de plataforma de remesas desde cero con Node.js, React y PostgreSQL. Lideré la migración de sistemas legacy para pagos en línea y gestión de préstamos.",

    "experience.osgroup.date": "2020 - 2021",
    "experience.osgroup.position": "Desarrollador Full Stack",
    "experience.osgroup.company": "O.S Group",
    "experience.osgroup.description":
      "Construcción de plataforma para gestión de créditos y procesamiento de pagos usando NestJS y Vue.js. Enfoque en seguridad y escalabilidad.",

    "experience.plmgroup.date": "2019 - 2020",
    "experience.plmgroup.position": "Desarrollador Web y Móvil",
    "experience.plmgroup.company": "PLM Group",
    "experience.plmgroup.description":
      "Desarrollo de aplicaciones web y móviles para el sitio oficial del Aeropuerto El Dorado. Integración de servicios para usuarios y vuelos en alto tráfico.",

    "experience.sumimedical.date": "2018 - 2019",
    "experience.sumimedical.position": "Desarrollador de Software Líder",
    "experience.sumimedical.company": "Sumimedical",
    "experience.sumimedical.description":
      "Liderazgo en software de salud con gestión de pacientes, inventario, chat en tiempo real e integración de múltiples bases de datos.",

    // Work/Projects section
    "work.title": "Proyectos Destacados",
    "work.equilibrio": "Equilibrio - Plataforma de Finanzas Personales",
    "work.equilibrio.description":
      "Plataforma de finanzas personales con calculadora de runway visual, bolsillos virtuales de ahorro y soporte PWA. Desarrollado con Nuxt 3, Nuxt UI y Supabase.",
    "work.aiTutor": "Tutor de Inglés con IA",
    "work.aiTutor.description":
      "Aplicación interactiva para aprendizaje de idiomas impulsada por IA con análisis de voz en tiempo real (WebM Opus), evaluación inicial y repetición espaciada Anki.",
    "work.matchPredictions": "Predicciones Deportivas en Tiempo Real",
    "work.matchPredictions.description":
      "Plataforma de predicciones deportivas en tiempo real con tabla de posiciones dinámica, Firebase RTDB y gestión segura de API Keys.",
    "work.remittancePlatform": "Plataforma de Remesas y Pagos",
    "work.remittancePlatform.description":
      "Plataforma integral de remesas con pagos en línea y gestión de préstamos. Desarrollada con Node.js, React y PostgreSQL.",
    "work.callToAction":
      "¿Interesado en conversar o trabajar juntos? ¡Hablemos de tu próximo proyecto!",
    "work.getInTouch": "Contáctame",

    // Contact section
    "contact.title": "Contacto",
    "contact.talk": "¡Hablemos!",
    "contact.description":
      "Estoy siempre abierto a discutir sobre ingeniería de software, arquitectura web o nuevas oportunidades tecnológicas.",
    "contact.email": "Correo electrónico",
    "contact.whatsapp": "WhatsApp",
    "contact.location": "Ubicación",
    "contact.socialMedia": "Sígueme en redes sociales",
    "contact.sendMessage": "Envíame un mensaje",
    "contact.name": "Nombre",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.formSuccess":
      "¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto.",
    "contact.formError":
      "¡Ups! Algo salió mal. Por favor intenta de nuevo o contáctame directamente.",

    // Navigation
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.work": "Proyectos",
    "nav.contact": "Contacto",

    // Footer
    "footer.copyright": "Todos los derechos reservados.",

    // Meta
    "meta.description":
      "Andrés Posada - Senior Full Stack Engineer en RentingCarz Holdings. Especializado en Vue.js, Nuxt 3, React, Node.js y desarrollo de aplicaciones web modernas.",

    // About section
    "about.hi":
      "Hola, soy Andrés Posada, Senior Full Stack Engineer en RentingCarz Holdings con más de 7 años de experiencia construyendo productos web y digitales modernos.",
    "about.focusStart": "Mi enfoque está en crear soluciones de alto impacto con",
    "about.cleanCode": "código limpio y arquitectura robusta",
    "about.focusMiddle": ". Me especializo en tecnologías como",
    "about.technologies": "Vue 3, Nuxt 3, React, Node.js y PostgreSQL",
    "about.focusEnd": ".",
    "about.learning":
      "Constantemente exploro paradigmas modernos como integración de IA, despliegues serverless edge y frameworks UI responsivos.",
    "about.personal":
      "Cuando no estoy programando, disfruto viajar, aprender sobre tecnología y pasar tiempo con mi familia.",
    "about.opportunities":
      "Siéntete libre de conectar si deseas hablar sobre ingeniería de software, arquitectura web o proyectos interesantes.",
    "about.technologiesSection": "Stack y Competencias Clave",
    "about.sectionTitle": "Sobre Mí",
    "about.frontend": "Frontend",
    "about.backend": "Backend",
    "about.database": "Base de Datos y Cloud",
    "about.tools": "Herramientas e Integraciones IA",
  },
} as const;
