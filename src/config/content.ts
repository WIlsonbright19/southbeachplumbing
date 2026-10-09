/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  tag: "Plumbing" | "AC & HVAC";
  description: string;
}

export interface ProcessItem {
  num: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  author: string;
  text: string;
  location: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ClimateTipItem {
  num: string;
  title: string;
  description: string;
}

export interface CommercialItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ContentData {
  nav: {
    services: string;
    howItWorks: string;
    reviews: string;
    areas: string;
    faq: string;
  };
  buttons: {
    call: string;
    quote: string;
    requestThis: string;
    submitQuote: string;
    submitting: string;
    viewGoogleReviews: string;
    close: string;
    menu: string;
  };
  hero: {
    badgeLeft: string;
    badgeRight: string;
    headline: string;
    description: string;
    pills: [string, string, string];
  };
  about: {
    label: string;
    paragraph: string;
    meta: [
      { label: string; value: string },
      { label: string; value: string },
      { label: string; value: string }
    ];
  };
  services: {
    label: string;
    headline: string;
    subtitle: string;
    quoteLink: string;
    items: ServiceItem[];
  };
  process: {
    label: string;
    headline: string;
    items: ProcessItem[];
  };
  reviews: {
    label: string;
    headline: string;
    googleLink: string;
    featured: ReviewItem;
    items: ReviewItem[];
  };
  areas: {
    label: string;
    headline: string;
    description: string;
    emergencyNotice: string;
  };
  faq: {
    label: string;
    headline: string;
    items: FaqItem[];
  };
  climate: {
    label: string;
    headline: string;
    description: string;
    items: ClimateTipItem[];
  };
  commercial: {
    label: string;
    headline: string;
    description: string;
    ctaText: string;
    items: CommercialItem[];
  };
  stats: {
    label: string;
    headline: string;
    items: StatItem[];
  };
  form: {
    label: string;
    headline: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    errors: {
      name: string;
      phone: string;
      service: string;
    };
    successMessage: string;
    sendAnother: string;
  };
  ctaCard: {
    headline: string;
    description: string;
    phonePrompt: string;
  };
  footer: {
    rights: string;
    backToTop: string;
    hours: string;
  };
}

export const content: {
  en: ContentData;
  es: ContentData;
} = {
  en: {
    nav: {
      services: "Services",
      howItWorks: "How it works",
      reviews: "Reviews",
      areas: "Areas",
      faq: "FAQ",
    },
    buttons: {
      call: "Call",
      quote: "Get a free quote",
      requestThis: "Request this",
      submitQuote: "Get a free quote",
      submitting: "Submitting...",
      viewGoogleReviews: "View verified reviews on Google Maps",
      close: "Close menu",
      menu: "Open menu",
    },
    hero: {
      badgeLeft: "Plumber & HVAC in Miami, FL",
      badgeRight: "Emergency service 24/7",
      headline: "Plumbing and AC, fixed fast.",
      description: "Miami plumbing and HVAC pros, here day or night. Se habla español.",
      pills: ["24/7 emergency", "FL licensed plumbing", "Plumbing + HVAC"],
    },
    about: {
      label: "About us",
      paragraph:
        "South Beach Plumbing and HVAC takes care of plumbing and AC for homes across Miami. Drains, leaks, water heaters and cooling, fixed fast, any hour of the day.",
      meta: [
        { label: "Based in", value: "Miami, Florida" },
        { label: "Emergency service", value: "24/7" },
        { label: "Languages", value: "English, Spanish" },
      ],
    },
    services: {
      label: "Services",
      headline: "What we do.",
      subtitle: "Plumbing and AC, one call.",
      quoteLink: "Get a free quote",
      items: [
        {
          id: "emergency-plumbing",
          num: "01",
          title: "Emergency plumbing",
          tag: "Plumbing",
          description: "Burst pipes and urgent leaks. Call any hour, any day.",
        },
        {
          id: "drain-sewer",
          num: "02",
          title: "Drain & sewer cleaning",
          tag: "Plumbing",
          description: "Clogs, backups and sewer lines cleared with jetting and camera inspection.",
        },
        {
          id: "leak-detection",
          num: "03",
          title: "Leak detection & pipe repair",
          tag: "Plumbing",
          description: "Find hidden leaks and repair or replace damaged pipes.",
        },
        {
          id: "water-heaters",
          num: "04",
          title: "Water heaters",
          tag: "Plumbing",
          description: "Water heater installation and replacement.",
        },
        {
          id: "fixtures-installations",
          num: "05",
          title: "Fixtures & installations",
          tag: "Plumbing",
          description: "Faucets, toilets, showers and garbage disposals repaired or installed.",
        },
        {
          id: "ac-installation",
          num: "06",
          title: "AC & HVAC installation",
          tag: "AC & HVAC",
          description: "New AC and HVAC systems installed by professionals.",
        },
        {
          id: "ac-repair",
          num: "07",
          title: "AC & HVAC repair",
          tag: "AC & HVAC",
          description: "Fast diagnosis and repair when the cooling stops.",
        },
        {
          id: "maintenance",
          num: "08",
          title: "Maintenance",
          tag: "AC & HVAC",
          description: "Regular tune-ups to keep your system running efficiently.",
        },
      ],
    },
    process: {
      label: "How it works",
      headline: "Three steps.",
      items: [
        {
          num: "01",
          title: "Call or message us",
          description: "Reach our Miami team anytime; we respond immediately for urgent home needs.",
        },
        {
          num: "02",
          title: "We diagnose and explain the fix",
          description: "Direct inspection with upfront diagnosis and clear repair solutions before starting.",
        },
        {
          num: "03",
          title: "Fixed, tested, cleaned up",
          description: "Work completed promptly, fully checked, and your home space left completely clean.",
        },
      ],
    },
    reviews: {
      label: "Reviews",
      headline: "What neighbors say.",
      googleLink: "View on Google Maps",
      featured: {
        author: "Carlos M.",
        text:
          "Called on a Sunday night when our main line backed up and our central AC stopped cooling. They arrived within 45 minutes, cleared the blockage cleanly, and diagnosed the AC capacitor on the spot. Professional, bilingual, and honest upfront pricing.",
        location: "Miami, FL (Flagami)",
        category: "Emergency Plumbing & A/C",
      },
      items: [
        {
          author: "Elena R.",
          text:
            "Our central air shut down during a 92-degree August afternoon. The technician explained why the condensate line triggered the safety switch and cleared it thoroughly. Cooling was restored in under an hour.",
          location: "South Miami, FL",
          category: "AC System Repair",
        },
        {
          author: "David S.",
          text:
            "Had a hidden pipe leak behind our bathroom wall causing dampness. They pinpointed the exact break without tearing up unnecessary drywall and replaced the copper line cleanly. Fast emergency response.",
          location: "Flagami, FL",
          category: "Leak Detection & Pipe Repair",
        },
        {
          author: "Maria G.",
          text:
            "Our water heater began leaking in our utility room. South Beach Plumbing provided a same-day replacement, hauled away the old unit, and tested all water connections thoroughly. Outstanding local service.",
          location: "Miami-Dade County, FL",
          category: "Water Heater Replacement",
        },
      ],
    },
    areas: {
      label: "Areas",
      headline: "Where we work.",
      description: "Providing on-demand plumbing and cooling service across Miami-Dade County neighborhoods.",
      emergencyNotice: "Emergency service available 24/7 across all listed areas.",
    },
    faq: {
      label: "FAQ",
      headline: "Common questions.",
      items: [
        {
          question: "How quickly can a technician respond for an emergency in Miami?",
          answer:
            "We provide 24/7 on-demand dispatch across Miami-Dade County for urgent leaks, burst pipes, and sudden AC shutdowns.",
        },
        {
          question: "Do you inspect and explain the fix before beginning work?",
          answer:
            "Yes. We assess the issue thoroughly on site and clearly communicate the necessary repair and diagnostic steps.",
        },
        {
          question: "What areas of Miami-Dade County do you cover?",
          answer:
            "We serve Miami, South Miami, Flagami, and the surrounding Miami-Dade communities day and night.",
        },
        {
          question: "Are bilingual technicians available?",
          answer:
            "Yes. Our team speaks both English and Spanish for seamless communication with all Miami homeowners.",
        },
      ],
    },
    climate: {
      label: "Miami climate guide",
      headline: "South Florida home care.",
      description:
        "Miami's intense tropical humidity and storm seasons require proactive attention for cooling and plumbing systems.",
      items: [
        {
          num: "01",
          title: "AC condensate drain line care",
          description:
            "Continuous Miami humidity produces heavy condensation. Clearing drain lines prevents water overflow and system shutoffs.",
        },
        {
          num: "02",
          title: "Heavy rain & storm drain clearing",
          description:
            "Tropical downpours can overwhelm clogged outdoor lines. Routine drain clearing prevents yard flooding and backups.",
        },
        {
          num: "03",
          title: "Coastal air & outdoor unit check",
          description:
            "South Florida salt breeze accelerates exterior wear. Regular tune-ups help maintain optimal cooling performance.",
        },
      ],
    },
    commercial: {
      label: "Commercial & property services",
      headline: "Property solutions.",
      description:
        "Reliable plumbing and HVAC solutions for residential rentals, retail spaces, and offices throughout Miami.",
      ctaText: "Request property service",
      items: [
        {
          title: "Condo & multi-family units",
          description:
            "Direct assistance for tenant emergencies, water heater replacements, and central AC repairs.",
        },
        {
          title: "Retail & office facilities",
          description:
            "Rapid cooling recovery and restroom plumbing maintenance to keep commercial spaces operating smoothly.",
        },
        {
          title: "Landlords & property managers",
          description:
            "Clear communication, scheduled diagnostic visits, and prompt dispatch across Miami-Dade.",
        },
      ],
    },
    stats: {
      label: "Operational facts",
      headline: "Service readiness.",
      items: [
        {
          value: "24/7",
          label: "Emergency service",
          description: "Direct dispatch available day and night across Miami-Dade",
        },
        {
          value: "2",
          label: "Languages spoken",
          description: "Seamless coordination in English and Spanish",
        },
        {
          value: "1",
          label: "Unified team",
          description: "Complete care for both plumbing and air conditioning",
        },
        {
          value: "FL",
          label: "Licensed plumbing",
          description: "Certified plumbing license #CFC1428669",
        },
      ],
    },
    form: {
      label: "Request a quote",
      headline: "Get a free quote.",
      description: "Direct dispatch and quote inquiries for plumbing and HVAC services in Miami.",
      nameLabel: "Your name",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Phone number",
      phonePlaceholder: "(305) 000-0000",
      serviceLabel: "Service needed",
      servicePlaceholder: "Select a service",
      messageLabel: "Details or emergency notes",
      messagePlaceholder: "Describe your leak, drain, cooling issue, or requested work...",
      errors: {
        name: "Please enter your name.",
        phone: "Please enter a valid phone number.",
        service: "Please select a service.",
      },
      successMessage: "Thank you. Your quote request was received. We will call you shortly.",
      sendAnother: "Send another request",
    },
    ctaCard: {
      headline: "Need plumbing or AC service right now?",
      description: "Call directly for immediate dispatch and prompt assistance anywhere in Miami.",
      phonePrompt: "Direct dispatch line:",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
      hours: "Available 24 hours / 7 days",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      howItWorks: "Cómo trabajamos",
      reviews: "Reseñas",
      areas: "Zonas",
      faq: "Preguntas",
    },
    buttons: {
      call: "Llamar",
      quote: "Pedir cotización gratis",
      requestThis: "Solicitar este servicio",
      submitQuote: "Pedir cotización gratis",
      submitting: "Enviando...",
      viewGoogleReviews: "Ver reseñas verificadas en Google Maps",
      close: "Cerrar menú",
      menu: "Abrir menú",
    },
    hero: {
      badgeLeft: "Plomero y A/C en Miami, FL",
      badgeRight: "Emergencias 24/7",
      headline: "Plomería y A/C, rápido.",
      description: "Atención rápida y profesional en Miami, 24/7.",
      pills: ["Emergencias 24/7", "Licencia FL de plomería", "Plomería + A/C"],
    },
    about: {
      label: "Sobre nosotros",
      paragraph:
        "South Beach Plumbing and HVAC se encarga de la plomería y el aire acondicionado para hogares en todo Miami. Drenajes, fugas, calentadores y climatización, resueltos con rapidez a cualquier hora del día.",
      meta: [
        { label: "Ubicación", value: "Miami, Florida" },
        { label: "Servicio de emergencia", value: "24/7" },
        { label: "Idiomas", value: "English, Spanish" },
      ],
    },
    services: {
      label: "Servicios",
      headline: "Lo que hacemos.",
      subtitle: "Plomería y A/C, una sola llamada.",
      quoteLink: "Pedir cotización gratis",
      items: [
        {
          id: "emergency-plumbing",
          num: "01",
          title: "Plomería de emergencia",
          tag: "Plumbing",
          description: "Tuberías rotas y fugas urgentes. Llame a cualquier hora, cualquier día.",
        },
        {
          id: "drain-sewer",
          num: "02",
          title: "Limpieza de drenajes y alcantarillado",
          tag: "Plumbing",
          description: "Taponamientos y tuberías despejadas con hidrojetting e inspección por cámara.",
        },
        {
          id: "leak-detection",
          num: "03",
          title: "Detección de fugas y tuberías",
          tag: "Plumbing",
          description: "Localización de fugas ocultas y reparación de tuberías averiadas.",
        },
        {
          id: "water-heaters",
          num: "04",
          title: "Calentadores de agua",
          tag: "Plumbing",
          description: "Instalación y reemplazo completo de calentadores de agua.",
        },
        {
          id: "fixtures-installations",
          num: "05",
          title: "Grifería e instalaciones",
          tag: "Plumbing",
          description: "Llaves, inodoros, duchas y trituradores reparados o instalados.",
        },
        {
          id: "ac-installation",
          num: "06",
          title: "Instalación de AC y HVAC",
          tag: "AC & HVAC",
          description: "Nuevos sistemas de A/C y climatización instalados por profesionales.",
        },
        {
          id: "ac-repair",
          num: "07",
          title: "Reparación de AC y HVAC",
          tag: "AC & HVAC",
          description: "Diagnóstico rápido y reparación en cuanto falla el enfriamiento.",
        },
        {
          id: "maintenance",
          num: "08",
          title: "Mantenimiento preventivo",
          tag: "AC & HVAC",
          description: "Puestas a punto periódicas para que su sistema rinda con eficiencia.",
        },
      ],
    },
    process: {
      label: "Cómo trabajamos",
      headline: "Tres pasos.",
      items: [
        {
          num: "01",
          title: "Llámenos o envíenos un mensaje",
          description: "Contáctenos a cualquier hora; respondemos de inmediato ante emergencias en Miami.",
        },
        {
          num: "02",
          title: "Diagnosticamos y explicamos la solución",
          description: "Evaluación clara del problema con opciones y recomendaciones directas antes de comenzar.",
        },
        {
          num: "03",
          title: "Reparado, probado y todo limpio",
          description: "Trabajo terminado con precisión, inspeccionado minuciosamente y área impecable.",
        },
      ],
    },
    reviews: {
      label: "Reseñas",
      headline: "Lo que dicen los vecinos.",
      googleLink: "Ver en Google Maps",
      featured: {
        author: "Carlos M.",
        text:
          "Llamé un domingo por la noche cuando la línea principal comenzó a desbordarse y el aire acondicionado central dejó de enfriar. Llegaron en menos de 45 minutos, despejaron el tapón limpiamente y diagnosticaron el capacitor del A/C al instante. Profesionales, bilingües y con precio claro desde el inicio.",
        location: "Miami, FL (Flagami)",
        category: "Plomería y A/C de Emergencia",
      },
      items: [
        {
          author: "Elena R.",
          text:
            "Nuestro aire central se detuvo en una tarde de 92 grados en agosto. El técnico nos explicó con exactitud por qué la línea del condensador activó el sensor de seguridad y la despejó por completo. El enfriamiento volvió en menos de una hora.",
          location: "South Miami, FL",
          category: "Reparación de Aire Acondicionado",
        },
        {
          author: "David S.",
          text:
            "Teníamos una fuga oculta detrás de la pared del baño que provocaba humedad. Localizaron la rotura sin romper paneles de yeso innecesarios y cambiaron la tubería con total limpieza. Respuesta de emergencia sumamente rápida.",
          location: "Flagami, FL",
          category: "Detección de Fugas y Tuberías",
        },
        {
          author: "Maria G.",
          text:
            "Nuestro calentador empezó a gotear en el cuarto de servicio. South Beach Plumbing instaló el reemplazo esa misma tarde, retiró la unidad vieja y probó todas las conexiones con gran detalle. Excelente servicio local.",
          location: "Miami-Dade County, FL",
          category: "Reemplazo de Calentador",
        },
      ],
    },
    areas: {
      label: "Zonas",
      headline: "Dónde trabajamos.",
      description: "Servicio inmediato de plomería y refrigeración en todas las áreas del condado de Miami-Dade.",
      emergencyNotice: "Atención de emergencias 24/7 en todas las zonas indicadas.",
    },
    faq: {
      label: "Preguntas frecuentes",
      headline: "Dudas habituales.",
      items: [
        {
          question: "¿Con qué rapidez atienden una emergencia en Miami?",
          answer:
            "Ofrecemos despacho de emergencia las 24 horas en todo el condado de Miami-Dade para fugas graves y fallas de refrigeración.",
        },
        {
          question: "¿Revisan y explican la solución antes de iniciar el trabajo?",
          answer:
            "Sí. Evaluamos el problema detalladamente en el lugar y explicamos con total claridad el diagnóstico y los pasos necesarios.",
        },
        {
          question: "¿Qué zonas del condado de Miami-Dade cubren?",
          answer:
            "Atendemos Miami, South Miami, Flagami y las comunidades vecinas de Miami-Dade durante el día y la noche.",
        },
        {
          question: "¿Cuentan con técnicos bilingües?",
          answer:
            "Sí. Nuestro equipo se comunica con fluidez en español e inglés para atender a todos los hogares de Miami.",
        },
      ],
    },
    climate: {
      label: "Guía para el clima de Miami",
      headline: "Cuidado del hogar en el sur de Florida.",
      description:
        "La intensa humedad tropical de Miami y la temporada de lluvias exigen atención preventiva en plomería y climatización.",
      items: [
        {
          num: "01",
          title: "Drenaje del condensador de A/C",
          description:
            "La alta humedad de Miami genera condensación continua. Limpiar la línea de drenaje evita desbordes y apagados automáticos.",
        },
        {
          num: "02",
          title: "Despeje de drenajes para lluvias torrenciales",
          description:
            "Las tormentas tropicales pueden sobrecargar desagües obstruidos. Mantenerlos despejados evita acumulaciones e inundaciones.",
        },
        {
          num: "03",
          title: "Ambiente costero y unidad exterior",
          description:
            "La brisa marina y el calor de Florida exigen revisiones periódicas para conservar el máximo rendimiento del sistema.",
        },
      ],
    },
    commercial: {
      label: "Servicios comerciales y de propiedades",
      headline: "Soluciones para propiedades.",
      description:
        "Atención confiable de plomería y aire acondicionado para alquileres, locales comerciales y oficinas en todo Miami.",
      ctaText: "Solicitar servicio para propiedades",
      items: [
        {
          title: "Condominios y unidades multifamiliares",
          description:
            "Atención directa para emergencias de inquilinos, reemplazo de calentadores y reparación de aire central.",
        },
        {
          title: "Locales comerciales y oficinas",
          description:
            "Recuperación rápida de refrigeración y mantenimiento de plomería para mantener su negocio funcionando.",
        },
        {
          title: "Propietarios y administradores",
          description:
            "Comunicación fluida, visitas diagnósticas programadas y despacho prioritario en todo Miami-Dade.",
        },
      ],
    },
    stats: {
      label: "Datos operativos",
      headline: "Disponibilidad del servicio.",
      items: [
        {
          value: "24/7",
          label: "Servicio de emergencia",
          description: "Despacho directo disponible día y noche en Miami-Dade",
        },
        {
          value: "2",
          label: "Idiomas fluidos",
          description: "Atención y coordinación fluida en español e inglés",
        },
        {
          value: "1",
          label: "Equipo integral",
          description: "Atención completa tanto en plomería como en climatización",
        },
        {
          value: "FL",
          label: "Plomería certificada",
          description: "Licencia de plomería estatal #CFC1428669",
        },
      ],
    },
    form: {
      label: "Solicitar cotización",
      headline: "Pedir cotización gratis.",
      description: "Atención directa y consultas de presupuesto para plomería y climatización en Miami.",
      nameLabel: "Su nombre",
      namePlaceholder: "Ingrese su nombre completo",
      phoneLabel: "Número de teléfono",
      phonePlaceholder: "(305) 000-0000",
      serviceLabel: "Servicio requerido",
      servicePlaceholder: "Seleccione un servicio",
      messageLabel: "Detalles o notas de emergencia",
      messagePlaceholder: "Describa la fuga, drenaje, problema de enfriamiento o trabajo requerido...",
      errors: {
        name: "Por favor ingrese su nombre.",
        phone: "Por favor ingrese un número de teléfono válido.",
        service: "Por favor seleccione un servicio.",
      },
      successMessage: "Muchas gracias. Recibimos su solicitud. Le llamaremos a la brevedad.",
      sendAnother: "Enviar otra solicitud",
    },
    ctaCard: {
      headline: "¿Necesita plomería o aire acondicionado ahora mismo?",
      description: "Llame a nuestro equipo directamente para atención y despacho inmediato en Miami.",
      phonePrompt: "Línea de atención directa:",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
      hours: "Disponible las 24 horas / 7 días",
    },
  },
};
