/**
 * English: landing page marketing copy (source of truth for the locale shape).
 * Text in [brackets] marks an unconfirmed answer. Those FAQ items are filtered
 * out of the page and structured data until the placeholder is replaced.
 */
export const landingEn = {
  a11y: {
    skipToContent: "Skip to content",
    home: "Revosso home",
    primaryNav: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    language: "Language",
    changeLanguage: "Change language",
    opensInNewTab: "(opens in a new tab)",
    toggleTheme: "Toggle color theme",
  },
  nav: {
    services: "Services",
    products: "Products",
    about: "About",
    careers: "Careers",
    contact: "Contact",
    cta: "Book a free call",
  },
  megaMenu: {
    label: "Products menu",
    productsTab: "Products",
    servicesTab: "Services",
    exploreAll: "Explore all products",
    close: "Close menu",
    categoriesLabel: "Product categories",
    categories: {
      all: "All products",
      business: "Business and finance",
      commerce: "Commerce",
      payments: "Payments and mobile",
      communication: "Communication",
    },
    learnMore: "Learn more",
    visitLive: "Visit live",
    subProductsLabel: "{name} products",
    servicesHeading: "What we build",
    back: "Back",
  },
  hero: {
    eyebrow: "Software company",
    title: "A software company that builds for clients, and runs its own.",
    subtitle:
      "We design, build and operate software for clients. We also run our own products: Revofin, RevoMaket, Rechajem and Revokonek. We know what it takes to keep software working after launch.",
    primaryCta: "Book a free 30-min call",
    secondaryCta: "See our products",
    showcaseCaption: "Products we run",
  },
  about: {
    eyebrow: "About",
    title: "Who is Revosso",
    body: "Revosso is a software company. We build websites, web platforms and custom software for businesses, and we operate our own products. Running them every day shapes how we build for clients.",
    clientsTitle: "We build for clients",
    clientsBody:
      "Websites, web platforms, mobile apps and integrations, designed and built for your business, then hosted and maintained if you want us to.",
    productsTitle: "We run our own products",
    productsBody:
      "Revofin, RevoMaket, Rechajem and Revokonek are ours. We build them, host them and fix them when something breaks.",
    factsLabel: "Company facts",
    facts: {
      founded: "Founded",
      team: "Team",
    },
    link: "More about us",
  },
  services: {
    eyebrow: "Services",
    title: "What we build",
    intro: "Everything software, from the first design to the servers it runs on.",
    catalog: {
      websites: { name: "Websites and landing pages", description: "Company websites and focused pages for a launch or campaign." },
      platforms: {
        name: "Web platforms and SaaS",
        description: "Web applications with accounts, data and business logic, including software you sell to your own customers.",
      },
      mobile: { name: "Mobile apps (iOS and Android)", description: "Apps for iPhone and Android phones." },
      apis: {
        name: "APIs and integrations",
        description: "APIs for your product and connections between the tools and services you already use.",
      },
      design: { name: "UI/UX design", description: "Interface and experience design for websites, platforms and apps." },
      email: { name: "Email marketing", description: "Email campaigns and the templates they are sent with." },
      hosting: {
        name: "Hosting, cloud and maintenance",
        description: "Hosting and cloud setup, plus ongoing updates and fixes after launch.",
      },
    },
    engagementTitle: "Three ways to work with us",
    youGet: "You get",
    steps: [
      {
        title: "Build",
        description: "New software designed around how your business works.",
        bullets: ["Architecture and technical design", "Web platforms and APIs", "Documentation from the start"],
        deliverables: "An architecture plan, working software and documentation.",
      },
      {
        title: "Take over",
        description: "We take responsibility for an existing system and make it reliable.",
        bullets: [
          "Audit and stabilize the codebase",
          "Fix performance and security problems",
          "Reduce technical debt step by step",
        ],
        deliverables: "An audit, a stable codebase and a modernization plan.",
      },
      {
        title: "Operate",
        description: "We host, monitor and maintain it as you grow.",
        bullets: ["Hosting and deployment", "Monitoring and incident response", "Maintenance and scaling"],
        deliverables: "One team accountable for keeping it running.",
      },
    ],
  },
  products: {
    eyebrow: "Our products",
    title: "Products we run",
    intro: "We run these ourselves. The same team takes on client work.",
    learnMore: "Learn more",
    learnMoreAbout: "Learn more about {name}",
    allProducts: "All products",
  },
  whoWeHelp: {
    eyebrow: "Who we work with",
    title: "Where clients usually start",
    items: [
      {
        title: "Starting something new",
        body: "You have an idea and need software that holds up once real customers arrive. We design it and build it properly the first time.",
        cta: "Talk about a new build",
      },
      {
        title: "Stuck with a fragile system",
        body: "The codebase is slow, brittle, or nobody on the team understands it anymore. We stabilize it without a risky rewrite.",
        cta: "Talk about a takeover",
      },
      {
        title: "Need someone to run it",
        body: "You would rather run your business than servers. We host, monitor and maintain the platform for you.",
        cta: "Talk about operations",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How we work",
    intro: "Four steps. You see working software early and often.",
    youGet: "You get",
    steps: [
      {
        title: "Discovery",
        description: "We learn your goals, constraints and current systems.",
        deliverable: "A scoped plan.",
      },
      {
        title: "Architecture",
        description: "We design the system before writing code.",
        deliverable: "A technical plan and a timeline.",
      },
      {
        title: "Build",
        description: "We ship in short iterations and demo as we go.",
        deliverable: "Working software early.",
      },
      {
        title: "Operate",
        description: "We stay on to monitor, fix and improve.",
        deliverable: "A long-term technical owner.",
      },
    ],
  },
  principles: {
    eyebrow: "Principles",
    title: "How we build",
    items: [
      {
        title: "Design first",
        description: "We work out the system before writing code, so it doesn't need a rewrite later.",
      },
      { title: "Built to grow", description: "We plan for more users and more data from the start." },
      { title: "Security in the design", description: "Security is part of the architecture, not a checklist at the end." },
      { title: "Readable code", description: "Another engineer should be able to pick it up and move quickly." },
      { title: "Performance is a requirement", description: "We measure speed and fix regressions before they ship." },
      { title: "Plan for failure", description: "Monitoring, backups and recovery are set up before launch." },
    ],
  },
  security: {
    eyebrow: "Security and policies",
    title: "Security",
    body: "Security is part of how we design, build and operate software. Access control, monitoring and backups are planned from the start, not added later.",
    link: "How we approach security",
    policiesLabel: "Policies",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions",
    items: [
      // TODO(verify): confirm the fixed-scope / ongoing engagement wording.
      {
        question: "How much does a project cost?",
        answer:
          "It depends on scope. After a free 30-minute call we propose a fixed scope or an ongoing engagement, so you know costs up front.",
      },
      {
        question: "How long does it take?",
        answer: "Focused builds typically take [range]. We give a realistic timeline after discovery.",
      },
      {
        question: "Can you take over our existing codebase?",
        answer: "Yes. We start with an audit, then stabilize and modernize it step by step instead of rewriting everything.",
      },
      {
        question: "Will we own the code?",
        answer: "[Confirm: you own the IP and source code of what we build for you.]",
      },
      // TODO(verify): confirm NDAs are signed before discovery calls.
      {
        question: "Do you sign NDAs?",
        answer: "Yes. We are happy to sign one before we discuss your project.",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes. After launch we can host, monitor and maintain the software for you.",
      },
      {
        question: "Can you work with our in-house team?",
        answer: "Yes. We can lead the work, support your engineers, or hand over to them.",
      },
      {
        question: "What happens on the free call?",
        answer: "We listen, ask questions, and tell you honestly whether we can help and how. There is no obligation.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Contact",
    title: "Talk to us",
    body: "Tell us what you are working on. We reply with clear next steps.",
    primaryCta: "Book a free 30-min call",
    formIntro: "Or send a short message.",
  },
  contactForm: {
    name: "Name",
    email: "Work email",
    need: "I need help with",
    needPlaceholder: "Select an option",
    needOptions: {
      newBuild: "New build",
      fixExisting: "Fix an existing system",
      hostingOps: "Hosting and operations",
      notSure: "Not sure yet",
    },
    message: "Message",
    messagePlaceholder: "A few lines about your project, timeline and current setup.",
    honeypot: "Leave this field empty",
    submit: "Send message",
    sending: "Sending…",
    successTitle: "Message sent",
    success: "Thanks, we got your message. We will reply by email.",
    sendAnother: "Send another message",
    error: "Something went wrong. Please try again, or email us at {email}.",
    rateLimited: "Too many attempts. Please wait a few minutes and try again.",
    validation: {
      name: "Please enter your name (at least 2 characters).",
      email: "Please enter a valid email address.",
      need: "Please choose what you need help with.",
      message: "Please write at least 10 characters.",
      messageMax: "Please keep your message under 2,000 characters.",
    },
  },
  footer: {
    tagline: "A software company. We build for clients and run our own products.",
    servicesTitle: "Services",
    companyTitle: "Company",
    legalTitle: "Legal",
    links: {
      about: "About",
      products: "Products",
      howWeWork: "How we work",
      faq: "FAQ",
      careers: "Careers",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      security: "Security",
      cookies: "Cookies",
    },
    followUs: "Follow us",
    social: {
      facebook: "Revosso on Facebook",
      instagram: "Revosso on Instagram",
      tiktok: "Revosso on TikTok",
    },
    hiring: "We're hiring.",
    hiringLink: "See open roles",
    copyright: "All rights reserved.",
  },
  productPage: {
    breadcrumb: "Products",
    status: "Live",
    visitLive: "Visit live",
    gallery: "Screenshots",
    overview: "Overview",
    whatItDoes: "What it does",
    whoFor: "Who it's for",
    subProducts: "Three products",
    builtByTitle: "Built and operated by Revosso",
    builtByBody:
      "Revosso designs, builds, hosts and maintains {name}. It runs on the same process we use for client projects.",
    ctaTitle: "Want something like this for your business?",
    ctaButton: "Talk to us",
    otherProducts: "Other products",
  },
  productsPage: {
    eyebrow: "Products",
    title: "Products we build and run",
    intro: "Four live products, built and operated by the Revosso team.",
    howTitle: "How we build and run them",
    howBody:
      "The same team designs, builds, hosts and maintains every product. What we learn running them goes into the work we do for clients.",
    seo: {
      title: "Products",
      description: "Revofin, RevoMaket, Rechajem and Revokonek: live products built and operated by Revosso.",
    },
  },
  aboutPage: {
    eyebrow: "About",
    title: "A software company that also runs its own products",
    intro:
      "Revosso is a software company. We build for clients, and we build and operate our own products.",
    storyTitle: "Two sides of one company",
    story: [
      "For clients, we design and build websites, web platforms, mobile apps and integrations, and we can host and maintain them after launch.",
      "We also run four products of our own: Revofin, RevoMaket, Rechajem and Revokonek. We are responsible for them every day, from the first design to the servers they run on.",
    ],
    sidesTitle: "How the two sides feed each other",
    sides: [
      {
        title: "Our products keep us honest",
        body: "Running live software means dealing with real users, outages and support requests. That experience goes into every client project.",
      },
      {
        title: "Client work keeps us broad",
        body: "Client projects take us into industries and problems our own products don't cover, and what we learn comes back to our products.",
      },
    ],
    factsTitle: "Company facts",
    servicesTitle: "What we build",
    careersTitle: "Work with us",
    careersBody: "We are hiring. See the roles that are open right now.",
    careersLink: "See open roles",
    contactTitle: "Start a project",
    contactBody: "Tell us what you are working on, or book a free 30-minute call.",
    contactLink: "Contact us",
    seo: {
      title: "About",
      description:
        "Revosso is a software company. We build for clients and run our own products.",
    },
  },
  careers: {
    seo: {
      title: "Careers",
      description: "Open roles at Revosso, a software company. Remote, full-time or part-time.",
    },
    eyebrow: "Careers",
    title: "Build software with Revosso",
    intro: "Join the team that builds software for clients and runs Revofin, RevoMaket, Rechajem and Revokonek.",
    seeRoles: "See open roles",
    why: {
      title: "Why Revosso",
      items: [
        {
          title: "Work on digital products",
          description: "Help build and grow Revofin, RevoMaket, Revokonek, Rechajem and custom software for clients.",
        },
        {
          title: "Contribute to real technology projects",
          description: "Take part in product, platform and infrastructure work, from marketing to engineering.",
        },
        {
          title: "Work with a growing company",
          description: "Join a team building digital products and services, and help shape how Revosso shows up in the market.",
        },
        {
          title: "Develop your skills",
          description: "Learn by shipping work that matters: strategy, content, campaigns and the systems behind them.",
        },
      ],
    },
    roles: {
      title: "Open roles",
      openRole: "Open role",
      empty: "There are no open roles right now. You can still write to us at {email}. We read every application.",
    },
    general: {
      title: "Don't see your role?",
      body: "Write to us at {email} and tell us how you could help. We read every application.",
    },
    labels: {
      department: "Department",
      location: "Location",
      employmentType: "Contract type",
      workMode: "Work mode",
      posted: "Published",
    },
    values: {
      department: {
        sales: "Sales",
        marketing: "Marketing",
      },
      location: {
        remote: "Remote",
      },
      employmentType: {
        "full-time-or-part-time": "Full-time or part-time",
      },
      workMode: {
        remote: "Remote",
      },
    },
    details: {
      back: "Careers",
      overview: "Overview",
      responsibilities: "Responsibilities",
      requirements: "What we look for",
      niceToHave: "Nice to have",
      howToApply: "How to apply",
      summary: "Role summary",
      apply: "Apply by email",
      emailLabel: "Or write to",
    },
    application: {
      subject: "Application: {title}",
      body: "Hello Revosso team,\n\nI would like to apply for the {title} role.\n\nName:\nLink to my profile or CV:\nWhy this role:\n\nThank you,",
    },
    notFound: {
      title: "Role not found",
      message: "This role is no longer open, or the link is incorrect.",
      back: "See open roles",
    },
  },
}
