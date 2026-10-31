/** Spanish: landing page marketing copy */

import type { LandingLocaleMessages } from "./types"

export const landingEs = {
  a11y: {
    skipToContent: "Saltar al contenido",
    home: "Inicio de Revosso",
    primaryNav: "Principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuTitle: "Menú",
    language: "Idioma",
    changeLanguage: "Cambiar idioma",
    opensInNewTab: "(se abre en una pestaña nueva)",
    toggleTheme: "Cambiar tema",
  },
  nav: {
    services: "Servicios",
    products: "Productos",
    about: "Nosotros",
    careers: "Empleo",
    contact: "Contacto",
    cta: "Reserva una llamada gratis",
  },
  megaMenu: {
    label: "Menú de productos",
    productsTab: "Productos",
    servicesTab: "Servicios",
    exploreAll: "Ver todos los productos",
    close: "Cerrar menú",
    categoriesLabel: "Categorías de productos",
    categories: {
      all: "Todos los productos",
      business: "Gestión y finanzas",
      commerce: "Comercio",
      payments: "Pagos y móvil",
      communication: "Comunicación",
    },
    learnMore: "Saber más",
    visitLive: "Visitar el sitio",
    subProductsLabel: "Productos de {name}",
    servicesHeading: "Qué construimos",
    back: "Volver",
  },
  hero: {
    eyebrow: "Empresa de software",
    title: "Una empresa de software que construye para clientes, y opera sus propios productos.",
    subtitle:
      "Diseñamos, construimos y operamos software para clientes. También operamos nuestros propios productos: Revofin, RevoMaket, Rechajem y Revokonek. Sabemos lo que hace falta para que el software siga funcionando después del lanzamiento.",
    primaryCta: "Reserva una llamada gratis de 30\u00a0min",
    secondaryCta: "Ver nuestros productos",
    showcaseCaption: "Productos que operamos",
  },
  about: {
    eyebrow: "Nosotros",
    title: "Quién es Revosso",
    body: "Revosso es una empresa de software. Construimos sitios web, plataformas web y software a medida para empresas, y operamos nuestros propios productos. Operarlos cada día define cómo construimos para nuestros clientes.",
    clientsTitle: "Construimos para clientes",
    clientsBody:
      "Sitios web, plataformas web, apps e integraciones, diseñados y construidos para tu empresa, y después alojados y mantenidos si lo necesitas.",
    productsTitle: "Operamos nuestros propios productos",
    productsBody:
      "Revofin, RevoMaket, Rechajem y Revokonek son nuestros. Los construimos, los alojamos y los arreglamos cuando algo falla.",
    factsLabel: "Datos de la empresa",
    facts: {
      founded: "Fundación",
      team: "Equipo",
    },
    link: "Más sobre nosotros",
  },
  services: {
    eyebrow: "Servicios",
    title: "Qué construimos",
    intro: "Todo lo que es software, desde el primer diseño hasta los servidores donde funciona.",
    catalog: {
      websites: {
        name: "Sitios web y landing pages",
        description: "Sitios corporativos y páginas centradas en un lanzamiento o una campaña.",
      },
      platforms: {
        name: "Plataformas web y SaaS",
        description: "Aplicaciones web con cuentas, datos y lógica de negocio, incluido software que vendes a tus propios clientes.",
      },
      mobile: { name: "Apps móviles (iOS y Android)", description: "Aplicaciones para iPhone y teléfonos Android." },
      apis: {
        name: "APIs e integraciones",
        description: "APIs para tu producto y conexiones entre las herramientas y servicios que ya usas.",
      },
      design: { name: "Diseño UI/UX", description: "Diseño de interfaz y de experiencia para sitios, plataformas y apps." },
      email: { name: "Email marketing", description: "Campañas de correo y las plantillas con las que se envían." },
      hosting: {
        name: "Alojamiento, nube y mantenimiento",
        description: "Alojamiento y configuración en la nube, más actualizaciones y correcciones después del lanzamiento.",
      },
    },
    engagementTitle: "Tres formas de trabajar con nosotros",
    youGet: "Recibes",
    steps: [
      {
        title: "Construir",
        description: "Software nuevo diseñado en torno a cómo funciona tu empresa.",
        bullets: ["Arquitectura y diseño técnico", "Plataformas web y APIs", "Documentación desde el principio"],
        deliverables: "Un plan de arquitectura, software funcionando y documentación.",
      },
      {
        title: "Asumir",
        description: "Nos hacemos cargo de un sistema existente y lo volvemos fiable.",
        bullets: [
          "Auditoría y estabilización del código",
          "Corrección de problemas de rendimiento y seguridad",
          "Reducción de la deuda técnica paso a paso",
        ],
        deliverables: "Una auditoría, un código estable y un plan de modernización.",
      },
      {
        title: "Operar",
        description: "Lo alojamos, supervisamos y mantenemos mientras creces.",
        bullets: ["Alojamiento y despliegue", "Supervisión y respuesta a incidentes", "Mantenimiento y escalado"],
        deliverables: "Un equipo responsable de que todo siga funcionando.",
      },
    ],
  },
  products: {
    eyebrow: "Nuestros productos",
    title: "Productos que operamos",
    intro: "Los operamos nosotros mismos. El mismo equipo trabaja para clientes.",
    learnMore: "Saber más",
    learnMoreAbout: "Saber más sobre {name}",
    allProducts: "Todos los productos",
  },
  whoWeHelp: {
    eyebrow: "Con quién trabajamos",
    title: "Por dónde suelen empezar los clientes",
    items: [
      {
        title: "Empezar algo nuevo",
        body: "Tienes una idea y necesitas software que aguante cuando lleguen los clientes reales. Lo diseñamos y lo construimos bien desde el principio.",
        cta: "Hablar de un proyecto nuevo",
      },
      {
        title: "Atascado con un sistema frágil",
        body: "El código es lento, inestable o ya nadie del equipo lo entiende. Lo estabilizamos sin una reescritura arriesgada.",
        cta: "Hablar de asumir el sistema",
      },
      {
        title: "Necesitas quien lo opere",
        body: "Prefieres dirigir tu negocio antes que servidores. Alojamos, supervisamos y mantenemos la plataforma por ti.",
        cta: "Hablar de operación",
      },
    ],
  },
  process: {
    eyebrow: "Proceso",
    title: "Cómo trabajamos",
    intro: "Cuatro pasos. Ves software funcionando pronto y a menudo.",
    youGet: "Recibes",
    steps: [
      {
        title: "Descubrimiento",
        description: "Entendemos tus objetivos, restricciones y sistemas actuales.",
        deliverable: "Un plan con alcance definido.",
      },
      {
        title: "Arquitectura",
        description: "Diseñamos el sistema antes de escribir código.",
        deliverable: "Un plan técnico y un calendario.",
      },
      {
        title: "Construcción",
        description: "Entregamos en ciclos cortos, con demos frecuentes.",
        deliverable: "Software funcionando pronto.",
      },
      {
        title: "Operación",
        description: "Nos quedamos para supervisar, corregir y mejorar.",
        deliverable: "Un responsable técnico a largo plazo.",
      },
    ],
  },
  principles: {
    eyebrow: "Principios",
    title: "Cómo construimos",
    items: [
      {
        title: "Primero el diseño",
        description: "Pensamos el sistema antes de escribir código, para no tener que reescribirlo después.",
      },
      { title: "Preparado para crecer", description: "Planificamos más usuarios y más datos desde el principio." },
      {
        title: "Seguridad en el diseño",
        description: "La seguridad forma parte de la arquitectura, no de una lista final.",
      },
      { title: "Código legible", description: "Otro ingeniero debe poder retomarlo y avanzar rápido." },
      {
        title: "El rendimiento es un requisito",
        description: "Medimos la velocidad y corregimos regresiones antes de publicar.",
      },
      {
        title: "Planificar los fallos",
        description: "Supervisión, copias de seguridad y recuperación listas antes del lanzamiento.",
      },
    ],
  },
  security: {
    eyebrow: "Seguridad y políticas",
    title: "Seguridad",
    body: "La seguridad forma parte de cómo diseñamos, construimos y operamos software. Control de acceso, supervisión y copias de seguridad se planifican desde el principio, no se añaden después.",
    link: "Cómo abordamos la seguridad",
    policiesLabel: "Políticas",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas",
    items: [
      {
        question: "¿Cuánto cuesta un proyecto?",
        answer:
          "Depende del alcance. Tras una llamada gratuita de 30 minutos proponemos un alcance cerrado o una colaboración continua, para que conozcas los costes de antemano.",
      },
      {
        question: "¿Cuánto tiempo lleva?",
        answer: "Los proyectos acotados suelen llevar [plazo]. Damos un calendario realista después del descubrimiento.",
      },
      {
        question: "¿Podéis haceros cargo de nuestro código actual?",
        answer: "Sí. Empezamos con una auditoría y luego estabilizamos y modernizamos paso a paso, en lugar de reescribirlo todo.",
      },
      {
        question: "¿Seremos dueños del código?",
        answer: "[Confirmar: eres dueño de la PI y del código fuente de lo que construimos para ti.]",
      },
      {
        question: "¿Firmáis acuerdos de confidencialidad?",
        answer: "Sí. Firmamos un NDA antes de hablar de tu proyecto, si lo prefieres.",
      },
      {
        question: "¿Ofrecéis soporte continuo?",
        answer: "Sí. Después del lanzamiento podemos alojar, supervisar y mantener el software por ti.",
      },
      {
        question: "¿Podéis trabajar con nuestro equipo interno?",
        answer: "Sí. Podemos liderar el trabajo, apoyar a tus ingenieros o pasarles el relevo.",
      },
      {
        question: "¿Qué pasa en la llamada gratuita?",
        answer: "Escuchamos, hacemos preguntas y te decimos con honestidad si podemos ayudarte y cómo. Sin compromiso.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Contacto",
    title: "Hablemos",
    body: "Cuéntanos en qué estás trabajando. Respondemos con próximos pasos claros.",
    primaryCta: "Reserva una llamada gratis de 30\u00a0min",
    formIntro: "O envíanos un mensaje corto.",
  },
  contactForm: {
    name: "Nombre",
    email: "Correo de trabajo",
    need: "Necesito ayuda con",
    needPlaceholder: "Selecciona una opción",
    needOptions: {
      newBuild: "Un proyecto nuevo",
      fixExisting: "Un sistema existente",
      hostingOps: "Alojamiento y operación",
      notSure: "Aún no lo sé",
    },
    message: "Mensaje",
    messagePlaceholder: "Unas líneas sobre tu proyecto, plazos y configuración actual.",
    honeypot: "Deja este campo vacío",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    successTitle: "Mensaje enviado",
    success: "Gracias, hemos recibido tu mensaje. Te responderemos por correo.",
    sendAnother: "Enviar otro mensaje",
    error: "Algo salió mal. Inténtalo de nuevo o escríbenos a {email}.",
    rateLimited: "Demasiados intentos. Espera unos minutos y vuelve a intentarlo.",
    validation: {
      name: "Escribe tu nombre (al menos 2 caracteres).",
      email: "Escribe un correo válido.",
      need: "Elige con qué necesitas ayuda.",
      message: "Escribe al menos 10 caracteres.",
      messageMax: "Tu mensaje debe tener menos de 2000 caracteres.",
    },
  },
  footer: {
    tagline: "Empresa de software. Construimos para clientes y operamos nuestros propios productos.",
    servicesTitle: "Servicios",
    companyTitle: "Empresa",
    legalTitle: "Legal",
    links: {
      about: "Nosotros",
      products: "Productos",
      howWeWork: "Cómo trabajamos",
      faq: "Preguntas frecuentes",
      careers: "Empleo",
      contact: "Contacto",
      privacy: "Privacidad",
      terms: "Términos",
      security: "Seguridad",
      cookies: "Cookies",
    },
    followUs: "Síguenos",
    social: {
      facebook: "Revosso en Facebook",
      instagram: "Revosso en Instagram",
      tiktok: "Revosso en TikTok",
    },
    hiring: "Estamos contratando.",
    hiringLink: "Ver vacantes",
    copyright: "Todos los derechos reservados.",
  },
  productPage: {
    breadcrumb: "Productos",
    status: "En línea",
    visitLive: "Visitar el sitio",
    gallery: "Capturas de pantalla",
    overview: "Descripción",
    whatItDoes: "Qué hace",
    whoFor: "Para quién",
    subProducts: "Tres productos",
    builtByTitle: "Construido y operado por Revosso",
    builtByBody:
      "Revosso diseña, construye, aloja y mantiene {name}, con el mismo proceso que usamos en los proyectos de clientes.",
    ctaTitle: "¿Quieres algo así para tu empresa?",
    ctaButton: "Habla con nosotros",
    otherProducts: "Otros productos",
  },
  productsPage: {
    eyebrow: "Productos",
    title: "Productos que construimos y operamos",
    intro: "Cuatro productos en funcionamiento, construidos y operados por el equipo de Revosso.",
    howTitle: "Cómo los construimos y operamos",
    howBody:
      "El mismo equipo diseña, construye, aloja y mantiene cada producto. Lo que aprendemos operándolos va al trabajo que hacemos para clientes.",
    seo: {
      title: "Productos",
      description: "Revofin, RevoMaket, Rechajem y Revokonek: productos en funcionamiento, construidos y operados por Revosso.",
    },
  },
  aboutPage: {
    eyebrow: "Nosotros",
    title: "Una empresa de software que también opera sus propios productos",
    intro:
      "Revosso es una empresa de software. Construimos para clientes, y construimos y operamos nuestros propios productos.",
    storyTitle: "Dos caras de una misma empresa",
    story: [
      "Para clientes, diseñamos y construimos sitios web, plataformas web, apps e integraciones, y podemos alojarlos y mantenerlos después del lanzamiento.",
      "También operamos cuatro productos propios: Revofin, RevoMaket, Rechajem y Revokonek. Somos responsables de ellos cada día, desde el primer diseño hasta los servidores donde funcionan.",
    ],
    sidesTitle: "Cómo se alimentan las dos caras",
    sides: [
      {
        title: "Nuestros productos nos mantienen honestos",
        body: "Operar software en producción significa lidiar con usuarios reales, caídas y solicitudes de soporte. Esa experiencia llega a cada proyecto de cliente.",
      },
      {
        title: "El trabajo con clientes nos amplía",
        body: "Los proyectos de clientes nos llevan a sectores y problemas que nuestros productos no cubren, y lo que aprendemos vuelve a nuestros productos.",
      },
    ],
    factsTitle: "Datos de la empresa",
    servicesTitle: "Qué construimos",
    careersTitle: "Trabaja con nosotros",
    careersBody: "Estamos contratando. Mira las vacantes abiertas ahora.",
    careersLink: "Ver vacantes",
    contactTitle: "Empieza un proyecto",
    contactBody: "Cuéntanos en qué estás trabajando, o reserva una llamada gratis de 30 minutos.",
    contactLink: "Contáctanos",
    seo: {
      title: "Nosotros",
      description:
        "Revosso es una empresa de software. Construimos para clientes y operamos nuestros propios productos.",
    },
  },
  careers: {
    seo: {
      title: "Empleo",
      description: "Puestos abiertos en Revosso, empresa de software. En remoto, jornada completa o parcial.",
    },
    eyebrow: "Empleo",
    title: "Construye software con Revosso",
    intro: "Únete al equipo que construye software para clientes y opera Revofin, RevoMaket, Rechajem y Revokonek.",
    seeRoles: "Ver puestos abiertos",
    why: {
      title: "Por qué Revosso",
      items: [
        {
          title: "Trabaja en productos digitales",
          description: "Ayuda a construir y hacer crecer Revofin, RevoMaket, Revokonek, Rechajem y software a medida para clientes.",
        },
        {
          title: "Contribuye a proyectos tecnológicos reales",
          description: "Participa en el trabajo de producto, plataforma e infraestructura, del marketing a la ingeniería.",
        },
        {
          title: "Trabaja en una empresa en crecimiento",
          description: "Únete a un equipo que construye productos y servicios digitales y ayuda a definir cómo se presenta Revosso en el mercado.",
        },
        {
          title: "Desarrolla tus habilidades",
          description: "Aprende entregando trabajo que importa: estrategia, contenido, campañas y los sistemas que hay detrás.",
        },
      ],
    },
    roles: {
      title: "Puestos abiertos",
      openRole: "Ver puesto",
      empty: "No hay puestos abiertos en este momento. Aun así, puedes escribirnos a {email}. Leemos todas las candidaturas.",
    },
    general: {
      title: "¿No ves tu puesto?",
      body: "Escríbenos a {email} y cuéntanos cómo podrías ayudar. Leemos todas las candidaturas.",
    },
    labels: {
      department: "Departamento",
      location: "Ubicación",
      employmentType: "Tipo de contrato",
      workMode: "Modalidad",
      posted: "Publicado el",
    },
    values: {
      department: {
        sales: "Ventas",
        marketing: "Marketing",
      },
      location: {
        remote: "En remoto",
      },
      employmentType: {
        "full-time-or-part-time": "Jornada completa o parcial",
      },
      workMode: {
        remote: "En remoto",
      },
    },
    details: {
      back: "Empleo",
      overview: "Descripción",
      responsibilities: "Responsabilidades",
      requirements: "Qué buscamos",
      niceToHave: "Valorable",
      howToApply: "Cómo postularse",
      summary: "Resumen del puesto",
      apply: "Postularse por correo",
      emailLabel: "O escribe a",
    },
    application: {
      subject: "Candidatura: {title}",
      body: "Hola, equipo de Revosso:\n\nMe gustaría postularme al puesto de {title}.\n\nNombre:\nEnlace a mi perfil o CV:\nPor qué este puesto:\n\nGracias,",
    },
    notFound: {
      title: "Puesto no encontrado",
      message: "Este puesto ya no está abierto o el enlace es incorrecto.",
      back: "Ver puestos abiertos",
    },
  },
} satisfies LandingLocaleMessages
