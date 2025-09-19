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
    "home.role": "Software Engineer",
    "home.description":
      "I build web and mobile solutions using modern technologies, focusing on performance, usability, and real-world impact.",
    "home.downloadResume": "Download Resume",
    "home.yearsExperience": "Years' Experience",
    "home.projectsDone": "Projects Done",

    // Experience section
    "experience.title": "Experience",
    "experience.intro":
      "Over the past 7 years in software development, I've built scalable solutions for industries ranging from healthcare to finance, helping teams deliver reliable systems that solve real-world problems.",
    "experience.showMore": "Show more experiences",
    "experience.showLess": "Show less",

    // WhatsApp message
    "whatsapp.message":
      "Hi Andrés! 👋 I saw your portfolio and I'm interested in learning more about your development services. Could we talk?",

    // Experience data
    "experience.momenge.date": "2024 - Present",
    "experience.momenge.position": "Software Engineer",
    "experience.momenge.company": "Momenge",
    "experience.momenge.description":
      "Developing an instant messaging application using Fastify, PostgreSQL, React Native and Socket.io. Implementing real-time event logic, multimedia handling, and account recovery systems.",

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
    "work.title": "Work",
    "work.medicalSystem": "Medical Management System",
    "work.medicalSystem.description":
      "Comprehensive medical management system with patient modules, inventory control, and real-time communication. Built with NestJS, React, and PostgreSQL.",
    "work.remittancePlatform": "Remittance Platform",
    "work.remittancePlatform.description":
      "Complete remittance platform with online payment integration and loan management. Legacy system migration to modern technologies.",
    "work.messagingApp": "Messaging App",
    "work.messagingApp.description":
      "Instant messaging application with real-time features, multimedia handling, and account recovery system.",
    "work.creditSystem": "Credit Management System",
    "work.creditSystem.description":
      "Comprehensive credit management and payment processing system with robust user interfaces and advanced security.",
    "work.callToAction":
      "Interested in working together? Let's discuss your next project!",
    "work.getInTouch": "Get In Touch",

    // Contact section
    "contact.title": "Contact",
    "contact.talk": "Let's Talk!",
    "contact.description":
      "I'm always open to discussing new projects, creative opportunities, or just chatting about technology. Don't hesitate to reach out.",
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

    // Footer
    "footer.copyright": "All rights reserved.",

    // About section
    "about.hi":
      "Hi, I'm Andrés Posada, a software engineer with over 7 years of experience. I'm passionate about building great web and mobile products, from the initial idea to the final code.",
    "about.focusStart": "My focus is on solving complex problems with",
    "about.cleanCode": "clean, efficient code",
    "about.focusMiddle": ". While I specialize in technologies like",
    "about.technologies": "React, Node.js, and SQL",
    "about.focusEnd": ".",
    "about.learning":
      "I'm always eager to learn new tools to find the best solution.",
    "about.personal":
      "When I'm not coding, you can find me traveling and spending time with my family.",
    "about.opportunities":
      "I'm always open to new challenges and opportunities. Feel free to connect if you have a cool project or just want to talk about tech.",
    "about.technologiesSection": "Key Technologies & Skills",
  },
  es: {
    // Home section
    "home.greeting": "👋 Hola, soy",
    "home.name": "Andrés Posada",
    "home.role": "Ingeniero de Software",
    "home.description":
      "Construyo soluciones web y móviles usando tecnologías modernas, enfocándome en rendimiento, usabilidad e impacto real.",
    "home.downloadResume": "Descargar CV",
    "home.yearsExperience": "Años de Experiencia",
    "home.projectsDone": "Proyectos Realizados",

    // Experience section
    "experience.title": "Experiencia",
    "experience.intro":
      "Durante los últimos 7 años en desarrollo de software, he creado soluciones escalables para industrias que van desde la salud hasta las finanzas, ayudando a equipos a entregar sistemas confiables que resuelven problemas del mundo real.",
    "experience.showMore": "Ver más experiencias",
    "experience.showLess": "Ver menos",

    // WhatsApp message
    "whatsapp.message":
      "¡Hola Andrés! 👋 Vi tu portafolio y me interesa conocer más sobre tus servicios de desarrollo. ¿Podríamos conversar?",

    // Experience data
    "experience.momenge.date": "2024 - Presente",
    "experience.momenge.position": "Ingeniero de Software",
    "experience.momenge.company": "Momenge",
    "experience.momenge.description":
      "Desarrollando una aplicación de mensajería instantánea usando Fastify, PostgreSQL, React Native y Socket.io. Implementando lógica de eventos en tiempo real, manejo de multimedia y sistemas de recuperación de cuentas.",

    "experience.wearedev.date": "2021 - 2024",
    "experience.wearedev.position": "Desarrollador Full Stack",
    "experience.wearedev.company": "WeAre Dev",
    "experience.wearedev.description":
      "Diseñé y desarrollé una plataforma de remesas desde cero usando Node.js, React y PostgreSQL. Lideré la migración de sistemas legacy para pagos en línea y gestión de préstamos, modernizando infraestructura financiera crítica.",

    "experience.osgroup.date": "2020 - 2021",
    "experience.osgroup.position": "Desarrollador Full Stack",
    "experience.osgroup.company": "O.S Group",
    "experience.osgroup.description":
      "Construí una plataforma integral para gestión de créditos y procesamiento de pagos usando NestJS y Vue.js. Me enfoqué en crear soluciones financieras seguras y escalables con interfaces de usuario robustas.",

    "experience.plmgroup.date": "2019 - 2020",
    "experience.plmgroup.position": "Desarrollador Web y Móvil",
    "experience.plmgroup.company": "PLM Group",
    "experience.plmgroup.description":
      "Desarrollé aplicaciones web y móviles para el sitio web oficial del Aeropuerto El Dorado. Integré servicios para usuarios, vuelos y encuestas COVID, manejando operaciones aeroportuarias de alto tráfico.",

    "experience.sumimedical.date": "2018 - 2019",
    "experience.sumimedical.position": "Desarrollador de Software Líder",
    "experience.sumimedical.company": "Sumimedical",
    "experience.sumimedical.description":
      "Lideré el desarrollo de software integral de salud con gestión de pacientes, control de inventario, chat en tiempo real e integración de múltiples bases de datos (SQL Server, PostgreSQL, MySQL).",

    // Work/Projects section
    "work.title": "Proyectos",
    "work.medicalSystem": "Sistema de Gestión Médica",
    "work.medicalSystem.description":
      "Sistema integral de gestión médica con módulos de pacientes, control de inventario y comunicación en tiempo real. Desarrollado con NestJS, React y PostgreSQL.",
    "work.remittancePlatform": "Plataforma de Remesas",
    "work.remittancePlatform.description":
      "Plataforma completa de remesas con integración de pagos en línea y gestión de préstamos. Migración de sistemas legacy a tecnologías modernas.",
    "work.messagingApp": "Aplicación de Mensajería",
    "work.messagingApp.description":
      "Aplicación de mensajería instantánea con características en tiempo real, manejo de multimedia y sistema de recuperación de cuentas.",
    "work.creditSystem": "Sistema de Gestión de Créditos",
    "work.creditSystem.description":
      "Sistema integral de gestión de créditos y procesamiento de pagos con interfaces de usuario robustas y seguridad avanzada.",
    "work.callToAction":
      "¿Interesado en trabajar juntos? ¡Hablemos de tu próximo proyecto!",
    "work.getInTouch": "Contáctame",

    // Contact section
    "contact.title": "Contacto",
    "contact.talk": "¡Hablemos!",
    "contact.description":
      "Estoy siempre abierto a discutir nuevos proyectos, oportunidades creativas o simplemente charlar sobre tecnología. No dudes en ponerte en contacto.",
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

    // Footer
    "footer.copyright": "Todos los derechos reservados.",

    // About section
    "about.hi":
      "Hola, soy Andrés Posada, un ingeniero de software con más de 7 años de experiencia. Me apasiona construir excelentes productos web y móviles, desde la idea inicial hasta el código final.",
    "about.focusStart": "Mi enfoque está en resolver problemas complejos con",
    "about.cleanCode": "código limpio y eficiente",
    "about.focusMiddle": ". Mientras me especializo en tecnologías como",
    "about.technologies": "React, Node.js y SQL",
    "about.focusEnd": ".",
    "about.learning":
      "Siempre estoy ansioso por aprender nuevas herramientas para encontrar la mejor solución.",
    "about.personal":
      "Cuando no estoy programando, puedes encontrarme viajando y pasando tiempo con mi familia.",
    "about.opportunities":
      "Siempre estoy abierto a nuevos desafíos y oportunidades. Siéntete libre de conectarte si tienes un proyecto interesante o solo quieres hablar sobre tecnología.",
    "about.technologiesSection": "Tecnologías y Habilidades Clave",
  },
} as const;
