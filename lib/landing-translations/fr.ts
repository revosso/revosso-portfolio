/** French: landing page marketing copy */

import type { LandingLocaleMessages } from "./types"

export const landingFr = {
  a11y: {
    skipToContent: "Aller au contenu",
    home: "Accueil Revosso",
    primaryNav: "Principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menuTitle: "Menu",
    language: "Langue",
    changeLanguage: "Changer de langue",
    opensInNewTab: "(s’ouvre dans un nouvel onglet)",
    toggleTheme: "Changer de thème",
  },
  nav: {
    services: "Services",
    products: "Produits",
    about: "À propos",
    careers: "Carrières",
    contact: "Contact",
    cta: "Réserver un appel gratuit",
  },
  megaMenu: {
    label: "Menu des produits",
    productsTab: "Produits",
    servicesTab: "Services",
    exploreAll: "Voir tous les produits",
    close: "Fermer le menu",
    categoriesLabel: "Catégories de produits",
    categories: {
      all: "Tous les produits",
      business: "Gestion et finance",
      commerce: "Commerce",
      payments: "Paiements et mobile",
      communication: "Communication",
    },
    learnMore: "En savoir plus",
    visitLive: "Voir le site",
    subProductsLabel: "Produits {name}",
    servicesHeading: "Ce que nous construisons",
    back: "Retour",
  },
  hero: {
    eyebrow: "Agence digitale et éditeur de logiciels",
    title: "Une agence digitale qui construit des logiciels, et exploite les siens.",
    subtitle:
      "Nous concevons, construisons et exploitons des logiciels pour nos clients. Nous exploitons aussi nos propres produits : Revofin, RevoMaket, Rechajem et Revokonek. Nous savons ce qu’il faut pour qu’un logiciel continue de fonctionner après son lancement.",
    primaryCta: "Réserver un appel gratuit de 30\u00a0min",
    secondaryCta: "Voir nos produits",
    showcaseCaption: "Les produits que nous exploitons",
  },
  about: {
    eyebrow: "À propos",
    title: "Qui est Revosso",
    body: "Revosso est une entreprise technologique. Nous travaillons avec les entreprises comme agence digitale, en construisant des sites web, des plateformes web et des logiciels, et nous exploitons nos propres produits. Les faire tourner chaque jour façonne notre manière de construire pour nos clients.",
    clientsTitle: "Nous construisons pour nos clients",
    clientsBody:
      "Sites web, plateformes web, applications mobiles et intégrations, conçus et construits pour votre entreprise, puis hébergés et maintenus si vous le souhaitez.",
    productsTitle: "Nous exploitons nos propres produits",
    productsBody:
      "Revofin, RevoMaket, Rechajem et Revokonek nous appartiennent. Nous les construisons, les hébergeons et les réparons quand quelque chose casse.",
    factsLabel: "L’entreprise en bref",
    facts: {
      founded: "Création",
      team: "Équipe",
    },
    link: "En savoir plus sur nous",
  },
  services: {
    eyebrow: "Services",
    title: "Ce que nous construisons",
    intro: "Tout ce qui touche au logiciel, de la première maquette aux serveurs qui le font tourner.",
    catalog: {
      websites: {
        name: "Sites web et landing pages",
        description: "Sites d’entreprise et pages dédiées à un lancement ou une campagne.",
      },
      platforms: {
        name: "Plateformes web et SaaS",
        description: "Applications web avec comptes, données et logique métier, y compris des logiciels que vous vendez à vos clients.",
      },
      mobile: { name: "Applications mobiles (iOS et Android)", description: "Applications pour iPhone et téléphones Android." },
      apis: {
        name: "API et intégrations",
        description: "Des API pour votre produit et des connexions entre les outils et services que vous utilisez déjà.",
      },
      design: { name: "Design UI/UX", description: "Conception d’interfaces et d’expériences pour sites, plateformes et applications." },
      email: { name: "E-mail marketing", description: "Campagnes e-mail et modèles utilisés pour les envoyer." },
      hosting: {
        name: "Hébergement, cloud et maintenance",
        description: "Hébergement et configuration cloud, puis mises à jour et corrections après le lancement.",
      },
    },
    engagementTitle: "Trois façons de travailler avec nous",
    youGet: "Vous obtenez",
    steps: [
      {
        title: "Construire",
        description: "Un nouveau logiciel conçu autour du fonctionnement de votre entreprise.",
        bullets: ["Architecture et conception technique", "Plateformes web et API", "Documentation dès le départ"],
        deliverables: "Un plan d’architecture, un logiciel qui fonctionne et sa documentation.",
      },
      {
        title: "Reprendre",
        description: "Nous prenons en charge un système existant et le rendons fiable.",
        bullets: [
          "Audit et stabilisation du code",
          "Correction des problèmes de performance et de sécurité",
          "Réduction progressive de la dette technique",
        ],
        deliverables: "Un audit, un code stabilisé et un plan de modernisation.",
      },
      {
        title: "Exploiter",
        description: "Nous l’hébergeons, le surveillons et le maintenons pendant votre croissance.",
        bullets: ["Hébergement et déploiement", "Supervision et gestion des incidents", "Maintenance et montée en charge"],
        deliverables: "Une seule équipe responsable de son bon fonctionnement.",
      },
    ],
  },
  products: {
    eyebrow: "Nos produits",
    title: "Les produits que nous exploitons",
    intro: "Nous les exploitons nous-mêmes. La même équipe travaille pour nos clients.",
    learnMore: "En savoir plus",
    learnMoreAbout: "En savoir plus sur {name}",
    allProducts: "Tous les produits",
  },
  whoWeHelp: {
    eyebrow: "Avec qui nous travaillons",
    title: "Par où nos clients commencent",
    items: [
      {
        title: "Un nouveau projet",
        body: "Vous avez une idée et il vous faut un logiciel qui tienne quand les vrais clients arrivent. Nous le concevons et le construisons correctement dès le départ.",
        cta: "Parler d’un nouveau projet",
      },
      {
        title: "Un système fragile",
        body: "Le code est lent, instable, ou plus personne dans l’équipe ne le comprend. Nous le stabilisons sans réécriture risquée.",
        cta: "Parler d’une reprise",
      },
      {
        title: "Quelqu’un pour l’exploiter",
        body: "Vous préférez gérer votre entreprise plutôt que des serveurs. Nous hébergeons, surveillons et maintenons la plateforme pour vous.",
        cta: "Parler d’exploitation",
      },
    ],
  },
  process: {
    eyebrow: "Méthode",
    title: "Notre méthode",
    intro: "Quatre étapes. Vous voyez un logiciel qui fonctionne tôt et souvent.",
    youGet: "Vous obtenez",
    steps: [
      {
        title: "Découverte",
        description: "Nous comprenons vos objectifs, vos contraintes et vos systèmes actuels.",
        deliverable: "Un plan cadré.",
      },
      {
        title: "Architecture",
        description: "Nous concevons le système avant d’écrire le code.",
        deliverable: "Un plan technique et un calendrier.",
      },
      {
        title: "Développement",
        description: "Nous livrons par courtes itérations, avec des démos régulières.",
        deliverable: "Un logiciel qui fonctionne tôt.",
      },
      {
        title: "Exploitation",
        description: "Nous restons pour surveiller, corriger et améliorer.",
        deliverable: "Un responsable technique sur la durée.",
      },
    ],
  },
  principles: {
    eyebrow: "Principes",
    title: "Notre façon de construire",
    items: [
      {
        title: "La conception d’abord",
        description: "Nous pensons le système avant d’écrire le code, pour éviter une réécriture plus tard.",
      },
      { title: "Prévu pour grandir", description: "Nous anticipons plus d’utilisateurs et plus de données dès le départ." },
      {
        title: "La sécurité dans la conception",
        description: "La sécurité fait partie de l’architecture, pas d’une liste de contrôle finale.",
      },
      { title: "Un code lisible", description: "Un autre ingénieur doit pouvoir le reprendre et avancer vite." },
      {
        title: "La performance comme exigence",
        description: "Nous mesurons la vitesse et corrigeons les régressions avant la mise en ligne.",
      },
      {
        title: "Prévoir les pannes",
        description: "Supervision, sauvegardes et reprise sont en place avant le lancement.",
      },
    ],
  },
  security: {
    eyebrow: "Sécurité et politiques",
    title: "Sécurité",
    body: "La sécurité fait partie de notre façon de concevoir, construire et exploiter les logiciels. Contrôle d’accès, supervision et sauvegardes sont prévus dès le départ, pas ajoutés après coup.",
    link: "Notre approche de la sécurité",
    policiesLabel: "Politiques",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions",
    items: [
      {
        question: "Combien coûte un projet ?",
        answer:
          "Cela dépend du périmètre. Après un appel gratuit de 30 minutes, nous proposons un périmètre fixe ou un accompagnement continu, pour que vous connaissiez les coûts à l’avance.",
      },
      {
        question: "Combien de temps cela prend-il ?",
        answer: "Un projet ciblé prend généralement [durée]. Nous donnons un calendrier réaliste après la découverte.",
      },
      {
        question: "Pouvez-vous reprendre notre code existant ?",
        answer: "Oui. Nous commençons par un audit, puis nous stabilisons et modernisons étape par étape au lieu de tout réécrire.",
      },
      {
        question: "Serons-nous propriétaires du code ?",
        answer: "[À confirmer : vous êtes propriétaire de la PI et du code source de ce que nous construisons pour vous.]",
      },
      {
        question: "Signez-vous des accords de confidentialité ?",
        answer: "Oui. Nous signons volontiers un NDA avant de parler de votre projet.",
      },
      {
        question: "Assurez-vous un suivi après le lancement ?",
        answer: "Oui. Après le lancement, nous pouvons héberger, surveiller et maintenir le logiciel pour vous.",
      },
      {
        question: "Pouvez-vous travailler avec notre équipe interne ?",
        answer: "Oui. Nous pouvons piloter le travail, épauler vos ingénieurs ou leur passer le relais.",
      },
      {
        question: "Que se passe-t-il pendant l’appel gratuit ?",
        answer: "Nous écoutons, posons des questions et vous disons honnêtement si nous pouvons vous aider, et comment. Sans engagement.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Contact",
    title: "Parlons-en",
    body: "Dites-nous sur quoi vous travaillez. Nous répondons avec des étapes concrètes.",
    primaryCta: "Réserver un appel gratuit de 30\u00a0min",
    formIntro: "Ou envoyez-nous un court message.",
  },
  contactForm: {
    name: "Nom",
    email: "E-mail professionnel",
    need: "J’ai besoin d’aide pour",
    needPlaceholder: "Choisissez une option",
    needOptions: {
      newBuild: "Un nouveau projet",
      fixExisting: "Un système existant à reprendre",
      hostingOps: "Hébergement et exploitation",
      notSure: "Je ne sais pas encore",
    },
    message: "Message",
    messagePlaceholder: "Quelques lignes sur votre projet, vos délais et votre configuration actuelle.",
    honeypot: "Laissez ce champ vide",
    submit: "Envoyer le message",
    sending: "Envoi…",
    successTitle: "Message envoyé",
    success: "Merci, nous avons bien reçu votre message. Nous vous répondrons par e-mail.",
    sendAnother: "Envoyer un autre message",
    error: "Une erreur s’est produite. Réessayez, ou écrivez-nous à {email}.",
    rateLimited: "Trop de tentatives. Patientez quelques minutes avant de réessayer.",
    validation: {
      name: "Indiquez votre nom (au moins 2 caractères).",
      email: "Indiquez une adresse e-mail valide.",
      need: "Choisissez le type d’aide dont vous avez besoin.",
      message: "Écrivez au moins 10 caractères.",
      messageMax: "Votre message doit faire moins de 2 000 caractères.",
    },
  },
  footer: {
    tagline: "Agence digitale et éditeur de logiciels. Nous construisons pour nos clients et exploitons nos propres produits.",
    servicesTitle: "Services",
    companyTitle: "Entreprise",
    legalTitle: "Mentions légales",
    links: {
      about: "À propos",
      products: "Produits",
      howWeWork: "Notre méthode",
      faq: "FAQ",
      careers: "Carrières",
      contact: "Contact",
      privacy: "Confidentialité",
      terms: "Conditions",
      security: "Sécurité",
      cookies: "Cookies",
    },
    followUs: "Suivez-nous",
    social: {
      facebook: "Revosso sur Facebook",
      instagram: "Revosso sur Instagram",
      tiktok: "Revosso sur TikTok",
    },
    hiring: "Nous recrutons.",
    hiringLink: "Voir les postes ouverts",
    copyright: "Tous droits réservés.",
  },
  productPage: {
    breadcrumb: "Produits",
    status: "En ligne",
    visitLive: "Voir le site",
    gallery: "Captures d’écran",
    overview: "Présentation",
    whatItDoes: "Ce qu’il fait",
    whoFor: "Pour qui",
    subProducts: "Trois produits",
    builtByTitle: "Construit et exploité par Revosso",
    builtByBody:
      "Revosso conçoit, construit, héberge et maintient {name}, avec la même méthode que pour les projets de nos clients.",
    ctaTitle: "Vous voulez quelque chose de semblable pour votre entreprise ?",
    ctaButton: "Parlons-en",
    otherProducts: "Autres produits",
  },
  productsPage: {
    eyebrow: "Produits",
    title: "Les produits que nous construisons et exploitons",
    intro: "Quatre produits en ligne, construits et exploités par l’équipe Revosso.",
    howTitle: "Comment nous les construisons et les exploitons",
    howBody:
      "La même équipe conçoit, construit, héberge et maintient chaque produit. Ce que nous apprenons en les exploitant nourrit le travail que nous faisons pour nos clients.",
    seo: {
      title: "Produits",
      description: "Revofin, RevoMaket, Rechajem et Revokonek : des produits en ligne construits et exploités par Revosso.",
    },
  },
  aboutPage: {
    eyebrow: "À propos",
    title: "Une agence digitale qui exploite aussi ses propres produits",
    intro:
      "Revosso est une entreprise technologique. Nous construisons des logiciels pour nos clients, et nous construisons et exploitons nos propres produits.",
    storyTitle: "Deux facettes d’une même entreprise",
    story: [
      "Comme agence digitale, nous concevons et construisons des sites web, des plateformes web, des applications mobiles et des intégrations pour les entreprises, et nous pouvons les héberger et les maintenir après le lancement.",
      "Nous exploitons aussi quatre produits à nous : Revofin, RevoMaket, Rechajem et Revokonek. Nous en sommes responsables chaque jour, de la première maquette aux serveurs qui les font tourner.",
    ],
    sidesTitle: "Comment les deux facettes se nourrissent",
    sides: [
      {
        title: "Nos produits nous gardent honnêtes",
        body: "Exploiter un logiciel en ligne, c’est gérer de vrais utilisateurs, des pannes et des demandes de support. Cette expérience nourrit chaque projet client.",
      },
      {
        title: "Le travail client nous ouvre",
        body: "Les projets clients nous emmènent vers des secteurs et des problèmes que nos produits ne couvrent pas, et ce que nous apprenons revient à nos produits.",
      },
    ],
    factsTitle: "L’entreprise en bref",
    servicesTitle: "Ce que nous construisons",
    careersTitle: "Travailler avec nous",
    careersBody: "Nous recrutons. Découvrez les postes ouverts en ce moment.",
    careersLink: "Voir les postes ouverts",
    contactTitle: "Lancer un projet",
    contactBody: "Dites-nous sur quoi vous travaillez, ou réservez un appel gratuit de 30 minutes.",
    contactLink: "Nous contacter",
    seo: {
      title: "À propos",
      description:
        "Revosso est une agence digitale et un éditeur de logiciels. Nous construisons des logiciels pour nos clients et exploitons nos propres produits.",
    },
  },
  careers: {
    seo: {
      title: "Carrières",
      description: "Postes ouverts chez Revosso, agence digitale et éditeur de logiciels. À distance, temps plein ou partiel.",
    },
    eyebrow: "Carrières",
    title: "Construisez des logiciels avec Revosso",
    intro: "Rejoignez l’équipe qui construit des logiciels pour ses clients et exploite Revofin, RevoMaket, Rechajem et Revokonek.",
    seeRoles: "Voir les postes ouverts",
    why: {
      title: "Pourquoi Revosso",
      items: [
        {
          title: "Travailler sur des produits numériques",
          description: "Aidez à construire et faire grandir Revofin, RevoMaket, Revokonek, Rechajem et des logiciels sur mesure pour nos clients.",
        },
        {
          title: "Contribuer à de vrais projets technologiques",
          description: "Participez au travail sur les produits, les plateformes et l’infrastructure, du marketing à l’ingénierie.",
        },
        {
          title: "Rejoindre une entreprise en croissance",
          description: "Rejoignez une équipe qui construit des produits et services numériques, et aidez à façonner l’image de Revosso sur le marché.",
        },
        {
          title: "Développer vos compétences",
          description: "Apprenez en livrant un travail qui compte : stratégie, contenu, campagnes et les systèmes qui les soutiennent.",
        },
      ],
    },
    roles: {
      title: "Postes ouverts",
      openRole: "Voir le poste",
      empty: "Aucun poste n’est ouvert pour le moment. Vous pouvez quand même nous écrire à {email}. Nous lisons chaque candidature.",
    },
    general: {
      title: "Vous ne trouvez pas votre poste ?",
      body: "Écrivez-nous à {email} et dites-nous comment vous pourriez aider. Nous lisons chaque candidature.",
    },
    labels: {
      department: "Département",
      location: "Lieu",
      employmentType: "Type de contrat",
      workMode: "Mode de travail",
      posted: "Publié le",
    },
    values: {
      department: {
        sales: "Ventes",
        marketing: "Marketing",
      },
      location: {
        remote: "À distance",
      },
      employmentType: {
        "full-time-or-part-time": "Temps plein ou temps partiel",
      },
      workMode: {
        remote: "À distance",
      },
    },
    details: {
      back: "Carrières",
      overview: "Présentation",
      responsibilities: "Responsabilités",
      requirements: "Ce que nous recherchons",
      niceToHave: "Atouts",
      howToApply: "Comment postuler",
      summary: "Résumé du poste",
      apply: "Postuler par e-mail",
      emailLabel: "Ou écrivez à",
    },
    application: {
      subject: "Candidature : {title}",
      body: "Bonjour l’équipe Revosso,\n\nJe souhaite postuler au poste de {title}.\n\nNom :\nLien vers mon profil ou mon CV :\nPourquoi ce poste :\n\nMerci,",
    },
    notFound: {
      title: "Poste introuvable",
      message: "Ce poste n’est plus ouvert, ou le lien est incorrect.",
      back: "Voir les postes ouverts",
    },
  },
} satisfies LandingLocaleMessages
