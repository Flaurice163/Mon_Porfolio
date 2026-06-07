export type Language = 'fr' | 'en';

export const copy = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      process: 'Processus',
      caseStudies: 'Études',
      pricing: 'Forfaits',
      testimonials: 'Avis',
      faq: 'FAQ',
      clients: 'Clients',
      about: 'À propos',
      experiences: 'Expériences',
      projects: 'Projets',
      contact: 'Contact',
      language: 'EN',
    },
    hero: {
      tag: 'Fullstack & Design',
      title: ['Bonjour,', 'je suis', 'FFlaur'],
      description: 'Je conçois des sites web modernes, des applications fullstack et des visuels marketing qui renforcent l’image de marque et l’engagement client.',
      bullets: [
        'Construction d’interfaces performantes et responsive.',
        'Développement d’APIs fiables avec Django et Python.',
        'Design visuel, branding et supports marketing créatifs.',
      ],
      contact: 'Contactez-moi',
      services: 'Voir mes services',
      cv: 'Télécharger mon CV',
    },
    services: [
      { title: 'Frontend', description: 'Interfaces modernes en React, Tailwind et UX fluide.' },
      { title: 'Backend', description: 'APIs Django robustes et traitement des données.' },
      { title: 'Design', description: 'Visuels professionnels avec Photoshop et Canva.' },
    ],
    about: {
      title: 'À propos',
      cards: [
        { title: 'Développement Frontend', description: 'Création d’interfaces web réactives et modernes avec React et Tailwind CSS.' },
        { title: 'Développement Backend', description: 'Construction d’APIs robustes avec Django et gestion de données performante.' },
        { title: 'Design UI/UX & Contenu', description: 'Design visuel professionnel, création de contenus marketing et optimisation de l’expérience utilisateur.' },
      ],
    },
    experiences: {
      title: 'Expériences',
    },
    projects: {
      title: 'Mes Projets',
      demo: 'Demo',
      github: 'GitHub',
    },
    testimonials: {
      title: 'Avis clients',
      items: [
        {
          name: 'Lucie Martin',
          role: 'Fondatrice, Bold Agency',
          quote: 'Travail rapide, design élégant et communication claire. J’ai adoré le résultat final.',
        },
        {
          name: 'Rayan Andrian',
          role: 'CEO, Archystore',
          quote: 'Un accompagnement professionnel sur toute la partie front-end et branding.',
        },
        {
          name: 'Sofia Ranaivo',
          role: 'Directrice Marketing',
          quote: 'Les visuels et l’UX ont vraiment aidé à augmenter l’engagement sur notre site.',
        },
      ],
    },
    process: {
      title: 'Processus',
      description: 'Un projet réussi commence par une méthode claire : écoute, conception, développement et livraison.',
      steps: [
        { number: '01', title: 'Découverte', description: 'Brief client, analyse des objectifs et audit de l’existant pour définir la meilleure approche.' },
        { number: '02', title: 'Prototype', description: 'Maquettes et parcours utilisateur validés avant le développement pour garantir un design efficace.' },
        { number: '03', title: 'Construction', description: 'Développement fullstack organisé, optimisation performance et tests qualité réguliers.' },
        { number: '04', title: 'Lancement', description: 'Déploiement, suivi et ajustements pour assurer un lancement fluide et un produit opérationnel.' },
      ],
    },
    caseStudies: {
      title: 'Études de cas',
      description: 'Quelques réalisations récentes avec résultats concrets et impact mesurable.',
      items: [
        {
          theme: 'E-commerce',
          title: 'Boutique en ligne premium',
          description: 'Refonte d’un site marchand pour améliorer l’expérience d’achat et augmenter le taux de conversion.',
          result: '+28% de ventes en ligne et parcours utilisateur simplifié.',
        },
        {
          theme: 'Réservation',
          title: 'Application de réservation',
          description: 'Solution web complète pour gérer les rendez-vous et automatiser les notifications clients.',
          result: 'Meilleure gestion du planning et réduction des annulations.',
        },
        {
          theme: 'Marketing',
          title: 'Campagne visuelle impactante',
          description: 'Création de supports marketing destinés aux réseaux sociaux et aux publicités digitales.',
          result: 'Visibilité renforcée et engagement social nettement amélioré.',
        },
      ],
    },
    pricing: {
      title: 'Forfaits',
      description: 'Des offres simples et transparentes adaptées aux besoins des créateurs, entrepreneurs et startups.',
      cta: 'Contactez-moi',
      plans: [
        {
          name: 'Découverte',
          subtitle: 'Idéal pour les premiers projets',
          badge: 'Starter',
          price: '350K Ar',
          features: ['Landing page personnalisée', 'Design responsive', 'Mise en ligne rapide'],
        },
        {
          name: 'Croissance',
          subtitle: 'Pour les sites business complets',
          badge: 'Pro',
          price: '500K Ar',
          features: ['Site multi-pages', 'Intégration formulaire', 'Optimisation SEO de base'],
        },
        {
          name: 'Premium',
          subtitle: 'Solution sur mesure haute performance',
          badge: 'Top',
          price: 'À partir de 700K Ar',
          features: ['Application web complète', 'Branding et design avancé', 'Support et maintenance'],
        },
      ],
    },
    faq: {
      title: 'FAQ',
      description: 'Questions fréquentes pour mieux comprendre mon mode de travail et mes engagements.',
      items: [
        { question: 'Quel est le délai moyen pour un projet ?', answer: 'En général, un site simple se lance en 2 à 4 semaines selon le périmètre et les validations.' },
        { question: 'Puis-je demander des modifications après livraison ?', answer: 'Oui, je propose un suivi post-lancement et des ajustements selon les besoins.' },
        { question: 'Utilisez-vous des outils modernes ?', answer: 'Je travaille avec React, Tailwind, Django et des outils de design pour garantir une livraison professionnelle.' },
        { question: 'Comment se passe la facturation ?', answer: 'Je propose un acompte au démarrage et un solde à la livraison, avec devis clair et transparent.' },
      ],
    },
    clients: {
      title: 'Clients & partenaires',
      description: 'Des collaborations avec des marques ambitieuses et des équipes motivées.',
      items: [
        { name: 'Archystore', description: 'Solution de gestion pour le retail et l’expérience utilisateur.' },
        { name: 'Bold Agency', description: 'Accompagnement marketing et refonte de l’identité digitale.' },
        { name: 'BALISHOP', description: 'Création de visuels publicitaires et supports de communication.' },
        { name: 'Startup Lab', description: 'Accompagnement produit pour une plateforme SaaS innovante.' },
        { name: 'BrandLab', description: 'Positionnement et design de marque pour entreprises créatives.' },
      ],
    },
    contact: {
      title: 'Services & Contact',
      description: 'Découvrez mes offres de services web et design. Contactez-moi pour un projet personnalisé et une solution professionnelle.',
      methods: ['Email', 'WhatsApp', 'Localisation'],
      servicesTitle: 'Services proposés',
      services: [
        'Sites vitrines et e-commerce',
        'Applications React + Django',
        'Design UI/UX et supports marketing',
        'Création de visuels Photoshop / Canva',
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      process: 'Process',
      caseStudies: 'Cases',
      pricing: 'Pricing',
      testimonials: 'Reviews',
      faq: 'FAQ',
      clients: 'Clients',
      about: 'About',
      experiences: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      language: 'FR',
    },
    hero: {
      tag: 'Fullstack & Design',
      title: ['Hello,', 'I am', 'FFlaur'],
      description: 'I build modern websites, fullstack applications and marketing visuals that strengthen brand image and customer engagement.',
      bullets: [
        'Create fast, responsive user interfaces.',
        'Build reliable APIs with Django and Python.',
        'Design visual branding and marketing assets.',
      ],
      contact: 'Contact me',
      services: 'View my services',
      cv: 'Download my CV',
    },
    services: [
      { title: 'Frontend', description: 'Modern interfaces with React, Tailwind and smooth UX.' },
      { title: 'Backend', description: 'Robust Django APIs and data handling.' },
      { title: 'Design', description: 'Professional visuals with Photoshop and Canva.' },
    ],
    about: {
      title: 'About',
      cards: [
        { title: 'Frontend Development', description: 'Create reactive, modern web interfaces with React and Tailwind CSS.' },
        { title: 'Backend Development', description: 'Build robust APIs with Django and efficient data management.' },
        { title: 'UI/UX & Content Design', description: 'Professional visual design, marketing content creation and user experience optimization.' },
      ],
    },
    experiences: {
      title: 'Experience',
    },
    projects: {
      title: 'Projects',
      demo: 'Demo',
      github: 'GitHub',
    },
    testimonials: {
      title: 'Client reviews',
      items: [
        {
          name: 'Lucie Martin',
          role: 'Founder, Bold Agency',
          quote: 'Fast work, elegant design and clear communication. I loved the final result.',
        },
        {
          name: 'Rayan Andrian',
          role: 'CEO, Archystore',
          quote: 'Professional support across front-end and branding.',
        },
        {
          name: 'Sofia Ranaivo',
          role: 'Marketing Director',
          quote: 'The visuals and UX really helped increase engagement on our site.',
        },
      ],
    },
    process: {
      title: 'Process',
      description: 'A successful project starts with a clear method: discovery, design, development and launch.',
      steps: [
        { number: '01', title: 'Discovery', description: 'Client briefing, goals analysis and audit of the existing experience to define the best approach.' },
        { number: '02', title: 'Prototype', description: 'Mockups and user flows validated before development to ensure an effective design.' },
        { number: '03', title: 'Build', description: 'Organized fullstack development, performance optimization and regular quality checks.' },
        { number: '04', title: 'Launch', description: 'Deployment, follow-up and adjustments to ensure a smooth launch and an operational product.' },
      ],
    },
    caseStudies: {
      title: 'Case studies',
      description: 'Recent achievements with measurable impact and concrete results.',
      items: [
        {
          theme: 'E-commerce',
          title: 'Premium online store',
          description: 'Redesign of a commerce site to improve shopping experience and increase conversion.',
          result: '+28% online sales and a simplified user journey.',
        },
        {
          theme: 'Booking',
          title: 'Reservation app',
          description: 'Complete web solution to manage appointments and automate client notifications.',
          result: 'Better schedule management and fewer cancellations.',
        },
        {
          theme: 'Marketing',
          title: 'Impactful visual campaign',
          description: 'Creation of marketing assets for social networks and digital ads.',
          result: 'Stronger visibility and significantly higher engagement.',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      description: 'Simple, transparent packages designed for creators, entrepreneurs and startups.',
      cta: 'Contact me',
      plans: [
        {
          name: 'Discovery',
          subtitle: 'Perfect for first projects',
          badge: 'Starter',
          price: '350K Ar',
          features: ['Custom landing page', 'Responsive design', 'Fast launch'],
        },
        {
          name: 'Growth',
          subtitle: 'For complete business sites',
          badge: 'Pro',
          price: '500K Ar',
          features: ['Multi-page website', 'Form integration', 'Basic SEO optimization'],
        },
        {
          name: 'Premium',
          subtitle: 'High-performance custom solution',
          badge: 'Top',
          price: 'From 700K Ar',
          features: ['Complete web application', 'Advanced branding and design', 'Support and maintenance'],
        },
      ],
    },
    faq: {
      title: 'FAQ',
      description: 'Frequently asked questions to help you understand my process and commitments.',
      items: [
        { question: 'What is the average project timeline?', answer: 'Typically a simple site launches in 2 to 4 weeks depending on scope and approvals.' },
        { question: 'Can I request changes after delivery?', answer: 'Yes, I offer post-launch support and adjustments based on your needs.' },
        { question: 'Do you use modern tools?', answer: 'I work with React, Tailwind, Django and design tools to ensure a professional delivery.' },
        { question: 'How does billing work?', answer: 'I offer a deposit at the start and a balance at delivery, with a clear and transparent quote.' },
      ],
    },
    clients: {
      title: 'Clients & partners',
      description: 'Collaborations with ambitious brands and motivated teams.',
      items: [
        { name: 'Archystore', description: 'Retail management solution and improved user experience.' },
        { name: 'Bold Agency', description: 'Marketing support and digital identity redesign.' },
        { name: 'BALISHOP', description: 'Advertising visuals and communication assets creation.' },
        { name: 'Startup Lab', description: 'Product support for an innovative SaaS platform.' },
        { name: 'BrandLab', description: 'Brand positioning and design for creative businesses.' },
      ],
    },
    contact: {
      title: 'Services & Contact',
      description: 'Discover my web and design service offerings. Contact me for a personalized project and professional solution.',
      methods: ['Email', 'WhatsApp', 'Location'],
      servicesTitle: 'Offered services',
      services: [
        'Showcase and e-commerce websites',
        'React + Django applications',
        'UI/UX design and marketing assets',
        'Photoshop / Canva visual creation',
      ],
    },
  },
};
