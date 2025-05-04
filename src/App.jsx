import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight, FiDownload, FiMail, FiCheck, FiGlobe, FiLinkedin,
  FiSend, FiPhone, FiShare2, FiGithub, FiCode, FiCpu, FiLayers,
  FiGitBranch, FiTrello, FiX, FiMenu, FiAward, FiBook, FiCalendar,
  FiExternalLink, FiLayout, FiDatabase, FiDollarSign, FiTrendingUp,
  FiBriefcase, FiBookOpen, FiFileText, FiCoffee, FiTruck, FiMapPin
} from "react-icons/fi";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [language, setLanguage] = useState("es");
  const form = useRef();
  const currentYear = new Date().getFullYear();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === "es" ? "en" : "es");

  // Translation object with both languages
  const t = {
    es: {
      nav: {
        home: "Inicio",
        work: "Experiencia",
        contact: "Contacto",
        linkedin: "LinkedIn",
        language: "EN",
        menuItems: ["Inicio", "Experiencia", "Contacto"]
      },
      hero: {
        availability: "Disponible para nuevas oportunidades",
        title: "JavaScript Software Developer Jr.",
        description: "Apasionada por la automatización de procesos y el desarrollo web frontend.",
        passion: "Transformando ideas en soluciones digitales eficientes.",
        buttons: {
          experience: "Ver experiencia",
          downloadCV: "Descargar CV"
        }
      },
      experience: {
        title: "Experiencia Profesional",
        subtitle: "Mi trayectoria en tecnología y automatización",
        achievements: "Logros clave",
        impact: "Impacto",
        professionalJourney: "Más de 7 años de experiencia multidisciplinaria en tecnología, automatización y gestión"
      },
      skills: {
        title: "Habilidades",
        hardSkills: "Técnicas",
        softSkills: "Blandas",
        techStack: "Tecnologías",
        mainTech: "Principales",
        tools: "Herramientas",
        languages: "Idiomas",
        skillsList: [
          "JavaScript (ES6+)",
          "RPA (Automatización de Procesos)",
          "HTML5 & CSS3",
          "Scrum & Agile",
          "Trabajo en equipo",
          "Liderazgo",
          "Comunicación efectiva",
          "Resolución de problemas",
          "Adaptabilidad",
          "Pensamiento crítico",
          "Gestión del tiempo",
          "Empatía",
        ],
        innovativeSolutions: "Conjunto de habilidades técnicas y blandas para desarrollar soluciones innovadoras"
      },
      education: {
        title: "Educación",
        current: "En curso",
        completed: "Completado",
        degree: "Desarrollo Web Frontend",
        university: "Centro de Formación Laboral",
        highSchool: "Profesorado de Educación Física",
        school: "Universidad Nacional de La Plata"
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Tenes un proyecto en mente? ¡Hablemos!",
        name: "Nombre",
        email: "Email",
        subject: "Asunto",
        message: "Mensaje",
        placeholderName: "Tu nombre",
        placeholderEmail: "tu@email.com",
        placeholderSubject: "¿En qué puedo ayudarte?",
        placeholderMessage: "Tu mensaje aquí...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado!",
        directContact: "Contacto Directo",
        socialMedia: "Redes Sociales",
        location: "La Plata, Argentina"
      },
      footer: {
        slogan: "Automatización + Desarrollo = Soluciones Eficientes",
        copyright: "© {year} Gisella Diaz. Todos los derechos reservados.",
        designedBy: "Designed & developed by"
      }
    },
    en: {
      nav: {
        home: "Home",
        work: "Experience",
        contact: "Contact",
        linkedin: "LinkedIn",
        language: "ES",
        menuItems: ["Home", "Experience", "Contact"]
      },
      hero: {
        availability: "Available for new opportunities",
        title: "JavaScript Software Developer Jr.",
        description: "Passionate about process automation and frontend web development.",
        passion: "Transforming ideas into efficient digital solutions.",
        buttons: {
          experience: "View experience",
          downloadCV: "Download CV"
        }
      },
      experience: {
        title: "Professional Experience",
        subtitle: "My journey in technology and automation",
        achievements: "Key achievements",
        impact: "Impact",
        professionalJourney: "Over 7 years of multidisciplinary experience in technology, automation and management"
      },
      skills: {
        title: "Skills",
        hardSkills: "Technical",
        softSkills: "Soft",
        techStack: "Technologies",
        mainTech: "Main",
        tools: "Tools",
        languages: "Languages",
        skillsList: [
          "JavaScript (ES6+)",
          "RPA (Process Automation)",
          "HTML5 & CSS3",
          "Scrum & Agile",
          "Teamwork",
          "Leadership",
          "Effective communication",
          "Problem solving",
          "Adaptability",
          "Critical thinking",
          "Time management",
          "Empathy",
        ],
        innovativeSolutions: "Set of technical and soft skills to develop innovative solutions"
      },
      education: {
        title: "Education",
        current: "In progress",
        completed: "Completed",
        degree: "Frontend Web Development",
        university: "Labor Training Center",
        highSchool: "Physical Education Teaching Degree",
        school: "National University of La Plata"
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project in mind? Let's talk!",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        placeholderName: "Your name",
        placeholderEmail: "your@email.com",
        placeholderSubject: "How can I help you?",
        placeholderMessage: "Your message here...",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent!",
        directContact: "Direct Contact",
        socialMedia: "Social Media",
        location: "La Plata, Argentina"
      },
      footer: {
        slogan: "Automation + Development = Efficient Solutions",
        copyright: "© {year} Gisella Diaz. All rights reserved.",
        designedBy: "Designed & developed by"
      }
    }
  }[language];

  // Experience data with translations
  const experiences = language === "es" ? [
    {
      id: 1,
      position: "RPA Developer",
      company: "Numeria Solutions",
      period: "2024 - 2025",
      type: "Remoto (Italia & Argentina)",
      tasks: [
        "Diseño e implementación de soluciones RPA/IA para automatización de procesos.",
        "Desarrollo de bots para optimizar tareas repetitivas.",
        "Colaboración con equipos técnicos y de negocio."
      ],
      highlights: [
        "Reducción de errores operativos en un 70% mediante bots automatizados.",
        "Automatización exitosa de 5 procesos clave en áreas administrativas.",
        "Implementación de soluciones escalables con impacto directo en productividad.",
        "Integración de tecnologías RPA e IA para flujos inteligentes."
      ]
    },
    {
      id: 2,
      position: "Ejecutiva de Ventas RPA",
      company: "Numeria Solutions",
      period: "2024 - 2025",
      type: "Remoto (Italia & Argentina)",
      tasks: [
        "Asesoramiento a clientes en adopción de soluciones RPA/IA.",
        "Gestión del ciclo completo de ventas.",
        "Elaboración de propuestas personalizadas."
      ],
      highlights: [
        "Identificación de oportunidades comerciales para soluciones RPA/IA.",
        "Gestión del ciclo de ventas: desde la prospección hasta la implementación.",
        "Colaboración con equipos técnicos para garantizar soluciones alineadas al cliente.",
        "Impulso a la transformación digital y eficiencia operativa de las empresas."
      ]
    },
  ] : [
    {
      id: 1,
      position: "RPA Developer",
      company: "Numeria Solutions",
      period: "2024 - 2025",
      type: "Remote (Italy & Argentina)",
      tasks: [
        "Design and implementation of RPA/AI solutions for process automation.",
        "Development of bots to optimize repetitive tasks.",
        "Collaboration with technical and business teams."
      ],
      highlights: [
        "Reduced operational errors by 70% through automated bots.",
        "Successfully automated 5 key administrative processes.",
        "Implemented scalable solutions with direct impact on productivity.",
        "Integrated RPA and AI technologies for smart workflows."
      ]
    },
    {
      id: 2,
      position: "RPA Sales Executive",
      company: "Numeria Solutions",
      period: "2024 - 2025",
      type: "Remote (Italy & Argentina)",
      tasks: [
        "Advising clients on RPA/AI solution adoption.",
        "Full sales cycle management.",
        "Development of customized proposals."
      ],
      highlights: [
        "Identified business opportunities for RPA/AI solutions.",
        "Managed the full sales cycle: from prospecting to implementation.",
        "Collaborated with technical teams to ensure client-aligned solutions.",
        "Promoted digital transformation and operational efficiency in companies."
      ]
    },
  ];

  // Other experience data with translations
  const otherExperiences = language === "es" ? [
    {
      title: "Asistente Virtual",
      company: "KEU Mobile Home – Valencia, España",
      period: "2024",
      icon: <FiBriefcase />,
      highlights: [
        "Gestión integral de agendas con herramientas digitales",
        "Automatización de procesos con Make",
        "Administración de redes sociales y CRM"
      ]
    },
    {
      title: "Comunicaciones Jurídicas",
      company: "Estudio Dal Mare",
      period: "2023-2024",
      icon: <FiFileText />,
      highlights: [
        "Gestión de trámites ANSES/AFIP",
        "Coordinación de turnos y citaciones",
        "Redacción de documentos legales"
      ]
    },
    {
      title: "Coordinadora de Operaciones",
      company: "Mostaza S.A.",
      period: "2018-2021",
      icon: <FiCoffee />,
      highlights: [
        "Liderazgo de equipos multidisciplinarios",
        "Gestión financiera y operativa",
        "Control de calidad y servicio"
      ]
    },
    {
      title: "Gestión Logística",
      company: "Distribuidora Carozo",
      period: "2017-2018",
      icon: <FiTruck />,
      highlights: [
        "Optimización de rutas de entrega",
        "Control de inventarios preciso",
        "Coordinación con proveedores"
      ]
    },
    {
      title: "Coordinadora de Viajes",
      company: "TravelRock",
      period: "2016-2017",
      icon: <FiMapPin />,
      highlights: [
        "Planificación de viajes educativos",
        "Logística para grupos de 25+ personas",
        "Gestión de seguridad y actividades"
      ]
    }
  ] : [
    {
      title: "Virtual Assistant",
      company: "KEU Mobile Home – Valencia, Spain",
      period: "2024",
      icon: <FiBriefcase />,
      highlights: [
        "Comprehensive schedule management with digital tools",
        "Process automation with Make",
        "Social media and CRM administration"
      ]
    },
    {
      title: "Legal Communications",
      company: "Dal Mare Law Firm",
      period: "2023-2024",
      icon: <FiFileText />,
      highlights: [
        "ANSES/AFIP procedures management",
        "Appointment scheduling and coordination",
        "Legal documents drafting"
      ]
    },
    {
      title: "Operations Coordinator",
      company: "Mostaza S.A.",
      period: "2018-2021",
      icon: <FiCoffee />,
      highlights: [
        "Leadership of multidisciplinary teams",
        "Financial and operational management",
        "Quality and service control"
      ]
    },
    {
      title: "Logistics Management",
      company: "Carozo Distributors",
      period: "2017-2018",
      icon: <FiTruck />,
      highlights: [
        "Delivery route optimization",
        "Accurate inventory control",
        "Supplier coordination"
      ]
    },
    {
      title: "Travel Coordinator",
      company: "TravelRock",
      period: "2016-2017",
      icon: <FiMapPin />,
      highlights: [
        "Educational trip planning",
        "Logistics for groups of 25+ people",
        "Safety and activities management"
      ]
    }
  ];


  // Education data with translations
  const educationData = language === "es" ? [
    {
      institution: "UNLP",
      degree: "Profesorado en Educación Física",
      period: "2015-2019",
      icon: <FiBookOpen />
    },
    {
      institution: "Educación IT",
      degree: "JavaScript, Angular, Scrum",
      period: "2023",
      icon: <FiCode />
    },
    {
      institution: "Udemy",
      degree: "Desarrollo Web Frontend",
      period: "2023",
      icon: <FiLayout />
    },
    {
      institution: "Cursos Varios",
      degree: "RPA, Inteligencia Artificial, Marketing Digital",
      period: "2022-2024",
      icon: <FiAward />
    }
  ] : [
    {
      institution: "UNLP",
      degree: "Physical Education Teaching Degree",
      period: "2015-2019",
      icon: <FiBookOpen />
    },
    {
      institution: "Educación IT",
      degree: "JavaScript, Angular, Scrum",
      period: "2023",
      icon: <FiCode />
    },
    {
      institution: "Udemy",
      degree: "Frontend Web Development",
      period: "2023",
      icon: <FiLayout />
    },
    {
      institution: "Various Courses",
      degree: "RPA, Artificial Intelligence, Digital Marketing",
      period: "2022-2024",
      icon: <FiAward />
    }
  ];


  // Languages data
  const languagesData = [
    { language: language === "es" ? "Español" : "Spanish", level: language === "es" ? "Nativo" : "Native", percentage: 100 },
    { language: language === "es" ? "Italiano" : "Italian", level: language === "es" ? "Intermedio" : "Intermediate", percentage: 70 },
    { language: language === "es" ? "Inglés" : "English", level: "B2", percentage: 65 }
  ];

  // Technology icons
  const principalTechs = [
    { name: "JavaScript", icon: "/js-icon.png" },
    { name: "HTML5", icon: "/html-icon.png" },
    { name: "CSS3", icon: "/css-icon.png" },
    { name: "PHP", icon: "/php-icon.png" },
    { name: "MySQL", icon: "/mysql-icon.png" },
    { name: "MongoDB", icon: "/mongodb-icon.png" },
    { name: "RPA", icon: "/rpa-icon.png" }
  ];

  const extraTechs = [
    { name: "Angular", icon: "/angular-icon.png" },
    { name: "Scrum", icon: "/scrum-icon.png" },
    { name: "Photoshop", icon: "/photoshop-icon.png" },
    { name: "Illustrator", icon: "/illustrator-icon.png" },
    { name: "WordPress", icon: "/wordpress-icon.png" },
    { name: "HubSpot", icon: "/hubspot-icon.png" },
    { name: "Make", icon: "/make-icon.png" },
    { name: "Google Workspace", icon: "/google-icon.png" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };



  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <Toaster position="top-right" richColors />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-neutral-950/90 z-50 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur-lg shadow-sm"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo with wave effect */}
          <motion.div
            className="flex items-center gap-2"
            variants={itemVariants}
            whileHover={{
              transition: { staggerChildren: 0.1 }
            }}
          >
            <motion.div
              className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/20"
              whileHover={{
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.6 }
              }}
            >
              <span className="font-medium text-white text-xs">GD</span>
            </motion.div>
            <motion.span
              className="font-medium text-neutral-800 dark:text-neutral-200 hidden sm:block"
              variants={itemVariants}
            >
              Gisella Diaz
            </motion.span>
          </motion.div>

          {/* Desktop Navigation - Cleaner style */}
          <motion.div
            className="hidden md:flex items-center gap-1"
            variants={containerVariants}
          >
            {[t.nav.home, t.nav.work, t.nav.contact].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors rounded-lg"
                variants={itemVariants}
                custom={index}
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(249, 115, 22, 0.1)"
                }}
              >
                {item}
              </motion.a>
            ))}

            <motion.div className="h-5 w-px bg-neutral-300 dark:bg-neutral-700 mx-2" />

            <motion.a
              href="https://www.linkedin.com/in/gisella-mariel-diaz-0b524a221/"
              className="flex items-center gap-1 px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors rounded-lg"
              variants={itemVariants}
              custom={3}
              whileHover={{
                y: -2,
                backgroundColor: "rgba(249, 115, 22, 0.1)"
              }}
            >
              <span>{t.nav.linkedin}</span>
              <FiExternalLink className="text-xs" />
            </motion.a>
          </motion.div>

          {/* Mobile menu button and language switcher */}
          <motion.div
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="md:hidden text-neutral-600 dark:text-neutral-300 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>

            <motion.button
              className="hidden md:block text-xs font-medium text-neutral-600 dark:text-neutral-300 px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleLanguage}
            >
              {t.nav.language}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu - Floating card style */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-16 right-4 w-64 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden z-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col p-2">
                {t.nav.menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMenu();
                      setTimeout(() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    {item}
                  </motion.a>
                ))}

                <motion.button
                  className="px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors text-left flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: t.nav.menuItems.length * 0.05 + 0.1 }}
                  onClick={toggleLanguage}
                >
                  <span>{t.nav.language}</span>
                  <FiGlobe className="text-neutral-400" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - Professional Design */}
      <section
        id={t.nav.home.toLowerCase()}
        className="min-h-screen flex items-center px-6 relative bg-gradient-to-br from-neutral-950 to-neutral-900 overflow-hidden"
      >
        {/* Dynamic background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-orange-400/5 rotate-45 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-center">
          {/* Content column */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-orange-300 bg-orange-500/10 rounded-full border border-orange-400/20">
                <span className="w-2 h-2 rounded-full bg-orange-400 mr-2 animate-pulse"></span>
                {t.hero.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="block text-neutral-300 text-xl md:text-2xl mb-2">
                {language === "es" ? "Hola, soy" : "Hi, I'm"}
              </span>
              Gisella Mariel Diaz
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-orange-400 mb-6 font-medium"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-neutral-400 mb-8 max-w-lg leading-relaxed"
            >
              {t.hero.description}
              <span className="block mt-3 text-orange-300 font-medium">{t.hero.passion}</span>
            </motion.p>

            {/* Featured main technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-10"
            >
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "JavaScript", icon: <FiCode className="mr-1.5" /> },
                  { name: "Angular", icon: <FiLayers className="mr-1.5" /> },
                  { name: "RPA/IA", icon: <FiCpu className="mr-1.5" /> },
                  { name: "HTML/CSS", icon: <FiLayout className="mr-1.5" /> },
                  { name: "Scrum", icon: <FiGitBranch className="mr-1.5" /> },
                  { name: "MySQL", icon: <FiDatabase className="mr-1.5" /> }
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="flex items-center text-sm text-neutral-300 bg-neutral-800/50 px-3 py-2 rounded-lg border border-neutral-700"
                  >
                    {tech.icon}
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#experiencia"
                className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-medium transition-colors"
              >
                {t.hero.buttons.experience}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/CV_Gisella_Diaz.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-neutral-800 text-neutral-300 rounded-lg font-medium border border-neutral-700 hover:border-orange-400/30 transition-colors"
              >
                {t.hero.buttons.downloadCV}
                <FiDownload />
              </a>
            </motion.div>
          </div>

          {/* Graphic column */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="relative w-full h-80 bg-gradient-to-br from-neutral-800/30 to-neutral-900/50 rounded-2xl border border-neutral-700/50 overflow-hidden p-8">
              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-400/20">
                  <FiCode className="text-4xl text-orange-400/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border border-orange-400/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-orange-400 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Experience Section - Premium Design */}
      <section id={t.nav.work.toLowerCase()} className="py-28 px-6 bg-neutral-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-orange-500 filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-400 rotate-45 filter blur-3xl"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-4">{t.experience.title}</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className="text-xl text-orange-300 max-w-2xl mx-auto">
              {t.experience.professionalJourney}
            </p>
          </motion.div>

          {/* Main experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {/* Left column - RPA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-500/10 rounded-xl border border-orange-400/20 flex items-center justify-center">
                  <FiCpu className="text-2xl text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{experiences[0].position}</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-orange-400">{experiences[0].company}</span>
                    <span className="text-sm text-neutral-400">{experiences[0].period}</span>
                    <span className="text-xs text-white bg-orange-500/20 px-2 py-1 rounded-full border border-orange-400/30">
                      {experiences[0].type}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-4 pl-2">
                {experiences[0].tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1">•</span>
                    <span className="text-neutral-300">{task}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-neutral-800/50">
                <h4 className="text-sm font-medium text-orange-400 mb-4 flex items-center">
                  <FiAward className="mr-2" />
                  {t.experience.achievements}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {experiences[0].highlights.map((highlight, index) => (
                    <div key={index} className="text-sm text-neutral-300 bg-neutral-800/30 rounded-lg px-4 py-3 border border-neutral-800">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column - RPA Sales */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-500/10 rounded-xl border border-orange-400/20 flex items-center justify-center">
                  <FiDollarSign className="text-2xl text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{experiences[1].position}</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-orange-400">{experiences[1].company}</span>
                    <span className="text-sm text-neutral-400">{experiences[1].period}</span>
                    <span className="text-xs text-white bg-orange-500/20 px-2 py-1 rounded-full border border-orange-400/30">
                      {experiences[1].type}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-4 pl-2">
                {experiences[1].tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1">•</span>
                    <span className="text-neutral-300">{task}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-neutral-800/50">
                <h4 className="text-sm font-medium text-orange-400 mb-4 flex items-center">
                  <FiTrendingUp className="mr-2" />
                  {t.experience.impact}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {experiences[1].highlights && experiences[1].highlights.map((highlight, index) => (
                    <div key={index} className="text-sm text-neutral-300 bg-neutral-800/30 rounded-lg px-4 py-3 border border-neutral-800">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Other experiences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 hover:border-orange-400/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg border border-orange-400/20 flex items-center justify-center">
                    {exp.icon && React.cloneElement(exp.icon, { className: "text-orange-400 text-xl" })}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <p className="text-orange-400 text-sm">{exp.company}</p>
                  </div>
                </div>
                <span className="inline-block text-xs text-neutral-400 mb-4">{exp.period}</span>
                <ul className="space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-300 flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-24"
          >
            <h3 className="text-3xl font-bold text-white mb-12 text-center">{t.education.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 hover:border-orange-400/30 transition-all"
                >
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg border border-orange-400/20 flex items-center justify-center mb-4">
                    {edu.icon && React.cloneElement(edu.icon, { className: "text-orange-400 text-xl" })}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.institution}</h4>
                  <p className="text-orange-400 text-sm mb-2">{edu.degree}</p>
                  <span className="text-xs text-neutral-400">{edu.period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-6 bg-neutral-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-400/5 rotate-45 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-3">{t.skills.title}</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className="text-xl text-orange-300 max-w-2xl mx-auto">
              {t.skills.innovativeSolutions}
            </p>
          </motion.div>

          {/* Main skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Hard Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg border border-orange-400/20 flex items-center justify-center">
                  <FiCpu className="text-2xl text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.skills.hardSkills}</h3>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.skills.skillsList.slice(0, 6).map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FiCheck className="text-orange-400 text-xs" />
                    </div>
                    <span className="text-neutral-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg border border-orange-400/20 flex items-center justify-center">
                  <FiAward className="text-2xl text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.skills.softSkills}</h3>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.skills.skillsList.slice(6).map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FiCheck className="text-orange-400 text-xs" />
                    </div>
                    <span className="text-neutral-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <FiCode className="text-orange-400 mr-3" />
              {t.skills.techStack}
            </h3>

            {/* Main technologies */}
            <div className="mb-10">
              <h4 className="text-sm font-medium text-orange-400 mb-6 text-center">{t.skills.mainTech}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {principalTechs.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-4 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-orange-400/30 transition-all w-24"
                  >
                    <div className="w-10 h-10 mb-2 flex items-center justify-center">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs text-neutral-300 text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-sm font-medium text-orange-400 mb-6 text-center">{t.skills.tools}</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {extraTechs.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-4 py-2 bg-neutral-900/30 rounded-lg border border-neutral-800 hover:border-orange-400/30 transition-all"
                  >
                    <div className="w-5 h-5 mr-2 flex-shrink-0">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs text-neutral-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Language level */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <FiGlobe className="text-orange-400 mr-3" />
              {t.skills.languages}
            </h3>
            <div className="space-y-5">
              {languagesData.map((lang, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-neutral-300">{lang.language}</span>
                    <span className="text-orange-400 text-sm">{lang.level}</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Elegant Design */}
      <section id={t.nav.contact.toLowerCase()} className="py-20 px-4 bg-neutral-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-400/5 rotate-45 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className="text-lg text-orange-300 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact information - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <FiMail className="text-orange-400 mr-3" />
                  {t.contact.directContact}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg border border-orange-400/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <FiMail className="text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-sm text-neutral-400 mb-1">Email</h4>
                      <a
                        href="mailto:giselladia202@gmail.com"
                        className="text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        giselladia202@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg border border-orange-400/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <FiPhone className="text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-sm text-neutral-400 mb-1">{language === "es" ? "Teléfono" : "Phone"}</h4>
                      <a
                        href="tel:+5492216155290"
                        className="text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        +54 9 221 615-5290
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg border border-orange-400/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <FiCalendar className="text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-sm text-neutral-400 mb-1">{language === "es" ? "Disponibilidad" : "Availability"}</h4>
                      <p className="text-orange-400">{language === "es" ? "Lunes a Viernes, 9am - 6pm" : "Monday to Friday, 9am - 6pm"}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* LinkedIn Only */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <FiShare2 className="text-orange-400 mr-3" />
                  {language === "es" ? "Conectemos" : "Let's Connect"}
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-400 text-sm">
                    {language === "es"
                      ? "Envíame un mensaje por LinkedIn para oportunidades profesionales"
                      : "Send me a message on LinkedIn for professional opportunities"}
                  </p>
                  <a
                    href="https://www.linkedin.com/in/gisella-mariel-diaz-0b524a221/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800/50 hover:bg-orange-500/10 rounded-lg border border-neutral-700 hover:border-orange-400/30 transition-colors"
                  >
                    <FiLinkedin className="text-orange-400 text-xl" />
                    <span className="text-orange-400">{t.nav.linkedin}</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right side - Location Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all h-full">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <FiMapPin className="text-orange-400 mr-3" />
                  {t.contact.location}
                </h3>

                {/* Map Placeholder */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-neutral-800/50 border border-neutral-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiMapPin className="text-orange-400 text-4xl animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 p-3 rounded-lg border border-neutral-800">
                    <p className="text-sm text-orange-300 text-center">
                      {language === "es"
                        ? "Disponible para trabajo remoto o en La Plata, Argentina"
                        : "Available for remote work or in La Plata, Argentina"}
                    </p>
                  </div>
                </div>

                {/* Timezone Info */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg border border-orange-400/20 flex items-center justify-center flex-shrink-0">
                    <FiGlobe className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-1">{language === "es" ? "Zona horaria" : "Timezone"}</h4>
                    <p className="text-orange-400">GMT-3 (Argentina)</p>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-orange-600/20 to-orange-400/10 border border-orange-400/20 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === "es"
                    ? "¿Listo para colaborar?"
                    : "Ready to collaborate?"}
                </h3>
                <p className="text-neutral-300 mb-4">
                  {language === "es"
                    ? "Envíame un email y respondo en menos de 24 horas"
                    : "Send me an email and I'll respond within 24 hours"}
                </p>
                <a
                  href="mailto:giselladia202@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-medium transition-colors"
                >
                  <FiMail className="text-lg" />
                  {language === "es" ? "Enviar Email" : "Send Email"}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-lg text-orange-400">{t.footer.slogan}</span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="mailto:giselladia202@gmail.com"
                className="text-neutral-400 hover:text-orange-400 transition-colors duration-300"
                aria-label="Enviar email"
              >
                <FiMail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/gisella-mariel-diaz-0b524a221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>

            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-neutral-500 tracking-wider order-2 md:order-1">
                {t.footer.copyright.replace('{year}', currentYear)}
              </p>
              <p className="text-xs text-neutral-500 hover:text-orange-400 transition-colors duration-300 order-1 md:order-2">
                {t.footer.designedBy} <a href="https://kiad.dev" target="_blank" rel="noopener noreferrer" className="font-medium">KIAD</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;