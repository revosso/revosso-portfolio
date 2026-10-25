/**
 * Open roles. Shared fields live once per role; everything a visitor reads is
 * translated per locale. A published role must have copy in every locale
 * (enforced by `jobs.test.ts`), so no English shows on translated pages.
 *
 * To add a role: copy an entry, give it a unique `slug`, set `published: true`.
 * To hide one: `published: false`. To close one: `status: "closed"`.
 * Don't invent salary, deadlines, benefits or locations; leave them out.
 */
import type { LandingLocale } from "@/lib/landing-locale"

/** Address applications go to. Every role uses it unless it sets its own. */
export const CAREERS_EMAIL = "contact@revosso.com"

export type JobDepartment = "sales" | "marketing"
export type JobLocation = "remote"
export type JobEmploymentType = "full-time-or-part-time"
export type JobWorkMode = "remote"

type JobCopy = {
  title: string
  summary: string
  overview: string[]
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  howToApply: string
  seo: { title: string; description: string }
}

export type Job = {
  slug: string
  status: "open" | "closed"
  published: boolean
  department: JobDepartment
  location: JobLocation
  employmentType: JobEmploymentType
  workMode: JobWorkMode
  /** ISO date. */
  datePosted: string
  dateModified?: string
  /** ISO date; sent to search engines as `validThrough` when set. */
  applicationDeadline?: string
  applicationEmail?: string
  copy: Record<LandingLocale, JobCopy>
}

export const JOBS: readonly Job[] = [
  {
    slug: "business-development-representative",
    status: "open",
    published: true,
    department: "sales",
    location: "remote",
    employmentType: "full-time-or-part-time",
    workMode: "remote",
    datePosted: "2026-09-19",
    copy: {
      en: {
        title: "Business Development Representative",
        summary: "Prospect potential customers, qualify leads, and help turn interest in Revosso products into real conversations.",
        overview: [
          "Help Revosso reach businesses that need digital products, software platforms and infrastructure they can rely on.",
          "This role focuses on lead generation, prospecting, sales development and customer acquisition. You will find the right companies, open conversations, and make sure promising leads get a clear look at Revosso: Revofin, RevoMaket, Revokonek, Rechajem, custom software and hosting.",
        ],
        responsibilities: [
          "Prospect potential customers who may need Revosso products or custom software.",
          "Identify qualified leads for Revofin, RevoMaket, Revokonek, Rechajem and custom development.",
          "Contact prospects and present Revosso solutions clearly.",
          "Schedule product demos with the right people.",
          "Follow up with prospects and keep conversations moving.",
          "Help convert qualified prospects into customers.",
          "Maintain a structured sales pipeline.",
          "Gather customer feedback and share it with the product team.",
        ],
        requirements: [
          "Comfortable reaching out to people you do not already know.",
          "Clear written and spoken communication.",
          "Ability to keep a simple pipeline of conversations organized.",
        ],
        niceToHave: [
          "Experience in sales development, lead generation or customer-facing work.",
          "Familiarity with digital products, software or B2B services.",
        ],
        howToApply:
          "Send an email with the role title in the subject line and a short note about how you can help Revosso reach new customers.",
        seo: {
          title: "Business Development Representative",
          description: "Prospect potential customers and help grow Revosso through structured sales development. Remote.",
        },
      },
      fr: {
        title: "Chargé de développement commercial",
        summary:
          "Prospecter des clients potentiels, qualifier les leads et transformer l’intérêt pour les produits Revosso en vraies conversations.",
        overview: [
          "Aidez Revosso à atteindre les entreprises qui ont besoin de produits numériques, de plateformes logicielles et d’une infrastructure fiable.",
          "Ce poste porte sur la génération de leads, la prospection, le développement commercial et l’acquisition de clients. Vous trouverez les bonnes entreprises, ouvrirez les conversations et veillerez à ce que les leads prometteurs découvrent clairement Revosso : Revofin, RevoMaket, Revokonek, Rechajem, le développement sur mesure et l’hébergement.",
        ],
        responsibilities: [
          "Prospecter des clients potentiels qui pourraient avoir besoin des produits Revosso ou de logiciels sur mesure.",
          "Identifier des leads qualifiés pour Revofin, RevoMaket, Revokonek, Rechajem et le développement sur mesure.",
          "Contacter les prospects et présenter clairement les solutions Revosso.",
          "Planifier des démonstrations produit avec les bons interlocuteurs.",
          "Relancer les prospects et faire avancer les échanges.",
          "Aider à convertir les prospects qualifiés en clients.",
          "Tenir un pipeline commercial structuré.",
          "Recueillir les retours clients et les partager avec l’équipe produit.",
        ],
        requirements: [
          "À l’aise pour contacter des personnes que vous ne connaissez pas.",
          "Communication claire, à l’écrit comme à l’oral.",
          "Capacité à tenir un pipeline de conversations simple et organisé.",
        ],
        niceToHave: [
          "Expérience en développement commercial, génération de leads ou relation client.",
          "Connaissance des produits numériques, du logiciel ou des services B2B.",
        ],
        howToApply:
          "Envoyez un e-mail avec l’intitulé du poste en objet et quelques lignes sur la manière dont vous pouvez aider Revosso à trouver de nouveaux clients.",
        seo: {
          title: "Chargé de développement commercial",
          description: "Prospectez des clients potentiels et aidez Revosso à grandir grâce à un développement commercial structuré. À distance.",
        },
      },
      "pt-BR": {
        title: "Representante de Desenvolvimento de Negócios",
        summary:
          "Prospectar clientes em potencial, qualificar leads e transformar o interesse pelos produtos da Revosso em conversas reais.",
        overview: [
          "Ajude a Revosso a chegar às empresas que precisam de produtos digitais, plataformas de software e infraestrutura confiável.",
          "Esta vaga é focada em geração de leads, prospecção, desenvolvimento de vendas e aquisição de clientes. Você vai encontrar as empresas certas, abrir conversas e garantir que leads promissores conheçam bem a Revosso: Revofin, RevoMaket, Revokonek, Rechajem, software sob medida e hospedagem.",
        ],
        responsibilities: [
          "Prospectar clientes em potencial que possam precisar dos produtos da Revosso ou de software sob medida.",
          "Identificar leads qualificados para Revofin, RevoMaket, Revokonek, Rechajem e desenvolvimento sob medida.",
          "Entrar em contato com prospects e apresentar as soluções da Revosso com clareza.",
          "Agendar demonstrações de produto com as pessoas certas.",
          "Fazer follow-up com os prospects e manter as conversas avançando.",
          "Ajudar a converter prospects qualificados em clientes.",
          "Manter um pipeline de vendas estruturado.",
          "Coletar feedback de clientes e compartilhá-lo com a equipe de produto.",
        ],
        requirements: [
          "Facilidade para abordar pessoas que você ainda não conhece.",
          "Comunicação clara, escrita e falada.",
          "Capacidade de manter um pipeline simples de conversas organizado.",
        ],
        niceToHave: [
          "Experiência em desenvolvimento de vendas, geração de leads ou atendimento a clientes.",
          "Familiaridade com produtos digitais, software ou serviços B2B.",
        ],
        howToApply:
          "Envie um e-mail com o nome da vaga no assunto e algumas linhas sobre como você pode ajudar a Revosso a conquistar novos clientes.",
        seo: {
          title: "Representante de Desenvolvimento de Negócios",
          description: "Prospecte clientes em potencial e ajude a Revosso a crescer com um desenvolvimento de vendas estruturado. Remoto.",
        },
      },
      es: {
        title: "Representante de Desarrollo de Negocio",
        summary:
          "Prospectar clientes potenciales, calificar leads y convertir el interés por los productos de Revosso en conversaciones reales.",
        overview: [
          "Ayuda a Revosso a llegar a las empresas que necesitan productos digitales, plataformas de software e infraestructura fiable.",
          "Este puesto se centra en la generación de leads, la prospección, el desarrollo de ventas y la captación de clientes. Encontrarás las empresas adecuadas, abrirás conversaciones y te asegurarás de que los leads prometedores conozcan bien Revosso: Revofin, RevoMaket, Revokonek, Rechajem, software a medida y alojamiento.",
        ],
        responsibilities: [
          "Prospectar clientes potenciales que puedan necesitar los productos de Revosso o software a medida.",
          "Identificar leads calificados para Revofin, RevoMaket, Revokonek, Rechajem y desarrollo a medida.",
          "Contactar con prospectos y presentar las soluciones de Revosso con claridad.",
          "Programar demostraciones de producto con las personas adecuadas.",
          "Hacer seguimiento a los prospectos y mantener las conversaciones en marcha.",
          "Ayudar a convertir prospectos calificados en clientes.",
          "Mantener un pipeline de ventas estructurado.",
          "Recoger las opiniones de los clientes y compartirlas con el equipo de producto.",
        ],
        requirements: [
          "Te sientes cómodo contactando a personas que aún no conoces.",
          "Comunicación clara, por escrito y de palabra.",
          "Capacidad para mantener organizado un pipeline sencillo de conversaciones.",
        ],
        niceToHave: [
          "Experiencia en desarrollo de ventas, generación de leads o atención al cliente.",
          "Familiaridad con productos digitales, software o servicios B2B.",
        ],
        howToApply:
          "Envía un correo con el nombre del puesto en el asunto y unas líneas sobre cómo puedes ayudar a Revosso a conseguir nuevos clientes.",
        seo: {
          title: "Representante de Desarrollo de Negocio",
          description: "Prospecta clientes potenciales y ayuda a Revosso a crecer con un desarrollo de ventas estructurado. En remoto.",
        },
      },
    },
  },
  {
    slug: "marketing-growth-specialist",
    status: "open",
    published: true,
    department: "marketing",
    location: "remote",
    employmentType: "full-time-or-part-time",
    workMode: "remote",
    datePosted: "2026-09-19",
    copy: {
      en: {
        title: "Marketing & Growth Specialist",
        summary: "Increase awareness of Revosso and its products through campaigns, content, SEO and inbound lead generation.",
        overview: [
          "Help more people find Revosso and understand the products we actually ship.",
          "This role focuses on marketing, growth, content, SEO, lead generation and brand awareness. You will tell a clearer story about Revofin, RevoMaket, Revokonek, Rechajem and the custom software and infrastructure work behind them, then measure whether that work brings in the right attention.",
        ],
        responsibilities: [
          "Increase Revosso brand awareness as a technology company building real products.",
          "Create and coordinate marketing campaigns.",
          "Manage content across relevant channels.",
          "Support SEO and organic growth.",
          "Generate inbound leads.",
          "Create marketing materials for Revofin, RevoMaket, Revokonek, Rechajem and custom software services.",
          "Analyze campaign performance and share what is working.",
          "Work closely with the sales and product teams.",
        ],
        requirements: [
          "Experience creating content, campaigns or other marketing work.",
          "Comfort working with sales and product teammates.",
          "Ability to look at campaign results and say what is working.",
        ],
        niceToHave: [
          "Experience with SEO or inbound lead generation.",
          "Experience marketing software products or technology services.",
        ],
        howToApply:
          "Send an email with the role title in the subject line and a short note about how you would grow awareness of Revosso and its products.",
        seo: {
          title: "Marketing & Growth Specialist",
          description: "Help grow awareness of Revosso and its products: Revofin, RevoMaket, Revokonek and Rechajem. Remote.",
        },
      },
      fr: {
        title: "Spécialiste marketing et croissance",
        summary:
          "Faire connaître Revosso et ses produits grâce aux campagnes, au contenu, au SEO et à la génération de leads entrants.",
        overview: [
          "Aidez davantage de personnes à découvrir Revosso et à comprendre les produits que nous livrons réellement.",
          "Ce poste porte sur le marketing, la croissance, le contenu, le SEO, la génération de leads et la notoriété de la marque. Vous raconterez plus clairement l’histoire de Revofin, RevoMaket, Revokonek, Rechajem et du travail de logiciel sur mesure et d’infrastructure qui les soutient, puis vous mesurerez si ce travail attire la bonne attention.",
        ],
        responsibilities: [
          "Renforcer la notoriété de Revosso comme entreprise technologique qui construit de vrais produits.",
          "Créer et coordonner des campagnes marketing.",
          "Gérer le contenu sur les canaux pertinents.",
          "Soutenir le SEO et la croissance organique.",
          "Générer des leads entrants.",
          "Créer des supports marketing pour Revofin, RevoMaket, Revokonek, Rechajem et les services de logiciel sur mesure.",
          "Analyser la performance des campagnes et partager ce qui fonctionne.",
          "Travailler en lien étroit avec les équipes commerciales et produit.",
        ],
        requirements: [
          "Expérience dans la création de contenu, de campagnes ou d’autres actions marketing.",
          "À l’aise pour travailler avec les équipes commerciales et produit.",
          "Capacité à lire les résultats d’une campagne et à dire ce qui fonctionne.",
        ],
        niceToHave: [
          "Expérience en SEO ou en génération de leads entrants.",
          "Expérience du marketing de produits logiciels ou de services technologiques.",
        ],
        howToApply:
          "Envoyez un e-mail avec l’intitulé du poste en objet et quelques lignes sur la façon dont vous feriez connaître Revosso et ses produits.",
        seo: {
          title: "Spécialiste marketing et croissance",
          description: "Faites connaître Revosso et ses produits : Revofin, RevoMaket, Revokonek et Rechajem. À distance.",
        },
      },
      "pt-BR": {
        title: "Especialista em Marketing e Crescimento",
        summary:
          "Aumentar o reconhecimento da Revosso e de seus produtos com campanhas, conteúdo, SEO e geração de leads inbound.",
        overview: [
          "Ajude mais pessoas a encontrar a Revosso e a entender os produtos que realmente entregamos.",
          "Esta vaga é focada em marketing, crescimento, conteúdo, SEO, geração de leads e reconhecimento de marca. Você vai contar uma história mais clara sobre Revofin, RevoMaket, Revokonek, Rechajem e o trabalho de software sob medida e infraestrutura por trás deles, e depois medir se esse trabalho atrai a atenção certa.",
        ],
        responsibilities: [
          "Aumentar o reconhecimento da marca Revosso como empresa de tecnologia que constrói produtos reais.",
          "Criar e coordenar campanhas de marketing.",
          "Gerenciar conteúdo nos canais relevantes.",
          "Apoiar SEO e crescimento orgânico.",
          "Gerar leads inbound.",
          "Criar materiais de marketing para Revofin, RevoMaket, Revokonek, Rechajem e serviços de software sob medida.",
          "Analisar o desempenho das campanhas e compartilhar o que está funcionando.",
          "Trabalhar de perto com as equipes de vendas e de produto.",
        ],
        requirements: [
          "Experiência criando conteúdo, campanhas ou outros trabalhos de marketing.",
          "Facilidade para trabalhar com colegas de vendas e de produto.",
          "Capacidade de olhar os resultados de uma campanha e dizer o que está funcionando.",
        ],
        niceToHave: [
          "Experiência com SEO ou geração de leads inbound.",
          "Experiência com marketing de produtos de software ou serviços de tecnologia.",
        ],
        howToApply:
          "Envie um e-mail com o nome da vaga no assunto e algumas linhas sobre como você aumentaria o reconhecimento da Revosso e de seus produtos.",
        seo: {
          title: "Especialista em Marketing e Crescimento",
          description: "Ajude a tornar a Revosso e seus produtos mais conhecidos: Revofin, RevoMaket, Revokonek e Rechajem. Remoto.",
        },
      },
      es: {
        title: "Especialista en Marketing y Crecimiento",
        summary:
          "Dar a conocer Revosso y sus productos con campañas, contenido, SEO y generación de leads entrantes.",
        overview: [
          "Ayuda a que más personas encuentren Revosso y entiendan los productos que realmente lanzamos.",
          "Este puesto se centra en marketing, crecimiento, contenido, SEO, generación de leads y notoriedad de marca. Contarás con más claridad la historia de Revofin, RevoMaket, Revokonek, Rechajem y del trabajo de software a medida e infraestructura que hay detrás, y medirás si ese trabajo atrae la atención adecuada.",
        ],
        responsibilities: [
          "Aumentar la notoriedad de Revosso como empresa tecnológica que construye productos reales.",
          "Crear y coordinar campañas de marketing.",
          "Gestionar el contenido en los canales relevantes.",
          "Apoyar el SEO y el crecimiento orgánico.",
          "Generar leads entrantes.",
          "Crear materiales de marketing para Revofin, RevoMaket, Revokonek, Rechajem y los servicios de software a medida.",
          "Analizar el rendimiento de las campañas y compartir lo que funciona.",
          "Trabajar de cerca con los equipos de ventas y de producto.",
        ],
        requirements: [
          "Experiencia creando contenido, campañas u otro trabajo de marketing.",
          "Comodidad trabajando con compañeros de ventas y de producto.",
          "Capacidad para revisar los resultados de una campaña y decir qué funciona.",
        ],
        niceToHave: [
          "Experiencia en SEO o generación de leads entrantes.",
          "Experiencia en marketing de productos de software o servicios tecnológicos.",
        ],
        howToApply:
          "Envía un correo con el nombre del puesto en el asunto y unas líneas sobre cómo darías a conocer Revosso y sus productos.",
        seo: {
          title: "Especialista en Marketing y Crecimiento",
          description: "Ayuda a dar a conocer Revosso y sus productos: Revofin, RevoMaket, Revokonek y Rechajem. En remoto.",
        },
      },
    },
  },
  {
    slug: "partnerships-product-sales-representative",
    status: "open",
    published: true,
    department: "sales",
    location: "remote",
    employmentType: "full-time-or-part-time",
    workMode: "remote",
    datePosted: "2026-09-19",
    copy: {
      en: {
        title: "Partnerships & Product Sales Representative",
        summary: "Represent Revosso to customers and partners, demonstrate products, and develop commercial relationships.",
        overview: [
          "Help customers and partners understand which Revosso product actually fits their work.",
          "This role sits at the intersection of partnerships, product sales, business relationships, product demonstrations and commercial development. You will spend time with people who already have a problem (payments, commerce, connectivity, transfers or custom software) and show them how Revosso can help, without overselling what we do not yet offer.",
        ],
        responsibilities: [
          "Represent Revosso to potential customers and partners.",
          "Present Revosso products and solutions, including Revofin, RevoMaket, Revokonek, Rechajem and custom software.",
          "Identify partnership opportunities with businesses and organizations.",
          "Build relationships that can lead to referrals and joint work.",
          "Generate referrals and commercial opportunities.",
          "Demonstrate Revosso products in a practical, accurate way.",
          "Help customers understand which Revosso solution fits their needs.",
          "Support commercial negotiations and follow-ups.",
        ],
        requirements: [
          "Comfortable presenting products to businesses and answering practical questions.",
          "Ability to listen and match a customer need to a Revosso product or service.",
          "Follow-through on conversations, demos and next steps.",
        ],
        niceToHave: [
          "Experience in partnerships, account management or product sales.",
          "Familiarity with payments, commerce, connectivity or custom software.",
        ],
        howToApply:
          "Send an email with the role title in the subject line and a short note about the customers or partners you want to work with.",
        seo: {
          title: "Partnerships & Product Sales Representative",
          description: "Represent Revosso products to customers and partners and help develop commercial relationships. Remote.",
        },
      },
      fr: {
        title: "Chargé des partenariats et des ventes produit",
        summary:
          "Représenter Revosso auprès des clients et des partenaires, présenter les produits et développer les relations commerciales.",
        overview: [
          "Aidez les clients et les partenaires à comprendre quel produit Revosso correspond vraiment à leur activité.",
          "Ce poste se situe à la croisée des partenariats, de la vente de produits, des relations d’affaires, des démonstrations et du développement commercial. Vous passerez du temps avec des personnes qui ont déjà un problème (paiements, commerce, connectivité, transferts ou logiciel sur mesure) et vous leur montrerez comment Revosso peut aider, sans promettre ce que nous ne proposons pas encore.",
        ],
        responsibilities: [
          "Représenter Revosso auprès de clients et de partenaires potentiels.",
          "Présenter les produits et solutions Revosso, dont Revofin, RevoMaket, Revokonek, Rechajem et le logiciel sur mesure.",
          "Identifier des opportunités de partenariat avec des entreprises et des organisations.",
          "Construire des relations qui peuvent mener à des recommandations et à des projets communs.",
          "Générer des recommandations et des opportunités commerciales.",
          "Présenter les produits Revosso de manière concrète et exacte.",
          "Aider les clients à comprendre quelle solution Revosso répond à leurs besoins.",
          "Accompagner les négociations commerciales et les relances.",
        ],
        requirements: [
          "À l’aise pour présenter des produits à des entreprises et répondre à des questions concrètes.",
          "Capacité à écouter et à relier un besoin client à un produit ou un service Revosso.",
          "Suivi rigoureux des échanges, des démonstrations et des prochaines étapes.",
        ],
        niceToHave: [
          "Expérience en partenariats, gestion de comptes ou vente de produits.",
          "Connaissance des paiements, du commerce, de la connectivité ou du logiciel sur mesure.",
        ],
        howToApply:
          "Envoyez un e-mail avec l’intitulé du poste en objet et quelques lignes sur les clients ou partenaires avec lesquels vous voulez travailler.",
        seo: {
          title: "Chargé des partenariats et des ventes produit",
          description: "Représentez les produits Revosso auprès des clients et partenaires et développez les relations commerciales. À distance.",
        },
      },
      "pt-BR": {
        title: "Representante de Parcerias e Vendas de Produtos",
        summary:
          "Representar a Revosso junto a clientes e parceiros, demonstrar produtos e desenvolver relações comerciais.",
        overview: [
          "Ajude clientes e parceiros a entender qual produto da Revosso realmente se encaixa no trabalho deles.",
          "Esta vaga fica entre parcerias, venda de produtos, relacionamento comercial, demonstrações e desenvolvimento de negócios. Você vai passar tempo com pessoas que já têm um problema (pagamentos, comércio, conectividade, transferências ou software sob medida) e mostrar como a Revosso pode ajudar, sem prometer o que ainda não oferecemos.",
        ],
        responsibilities: [
          "Representar a Revosso junto a clientes e parceiros em potencial.",
          "Apresentar os produtos e soluções da Revosso, incluindo Revofin, RevoMaket, Revokonek, Rechajem e software sob medida.",
          "Identificar oportunidades de parceria com empresas e organizações.",
          "Construir relacionamentos que possam gerar indicações e trabalhos em conjunto.",
          "Gerar indicações e oportunidades comerciais.",
          "Demonstrar os produtos da Revosso de forma prática e precisa.",
          "Ajudar os clientes a entender qual solução da Revosso atende às suas necessidades.",
          "Apoiar negociações comerciais e follow-ups.",
        ],
        requirements: [
          "Facilidade para apresentar produtos a empresas e responder a perguntas práticas.",
          "Capacidade de ouvir e relacionar a necessidade do cliente a um produto ou serviço da Revosso.",
          "Constância no acompanhamento de conversas, demonstrações e próximos passos.",
        ],
        niceToHave: [
          "Experiência em parcerias, gestão de contas ou venda de produtos.",
          "Familiaridade com pagamentos, comércio, conectividade ou software sob medida.",
        ],
        howToApply:
          "Envie um e-mail com o nome da vaga no assunto e algumas linhas sobre os clientes ou parceiros com quem você quer trabalhar.",
        seo: {
          title: "Representante de Parcerias e Vendas de Produtos",
          description: "Represente os produtos da Revosso junto a clientes e parceiros e ajude a desenvolver relações comerciais. Remoto.",
        },
      },
      es: {
        title: "Representante de Alianzas y Ventas de Producto",
        summary:
          "Representar a Revosso ante clientes y socios, hacer demostraciones de producto y desarrollar relaciones comerciales.",
        overview: [
          "Ayuda a clientes y socios a entender qué producto de Revosso encaja de verdad con su trabajo.",
          "Este puesto está entre las alianzas, la venta de producto, las relaciones comerciales, las demostraciones y el desarrollo de negocio. Pasarás tiempo con personas que ya tienen un problema (pagos, comercio, conectividad, transferencias o software a medida) y les mostrarás cómo puede ayudar Revosso, sin prometer lo que todavía no ofrecemos.",
        ],
        responsibilities: [
          "Representar a Revosso ante clientes y socios potenciales.",
          "Presentar los productos y soluciones de Revosso, incluidos Revofin, RevoMaket, Revokonek, Rechajem y el software a medida.",
          "Identificar oportunidades de alianza con empresas y organizaciones.",
          "Construir relaciones que puedan generar recomendaciones y trabajo conjunto.",
          "Generar recomendaciones y oportunidades comerciales.",
          "Demostrar los productos de Revosso de forma práctica y precisa.",
          "Ayudar a los clientes a entender qué solución de Revosso se ajusta a sus necesidades.",
          "Apoyar las negociaciones comerciales y los seguimientos.",
        ],
        requirements: [
          "Te sientes cómodo presentando productos a empresas y respondiendo preguntas prácticas.",
          "Capacidad para escuchar y relacionar una necesidad del cliente con un producto o servicio de Revosso.",
          "Constancia en el seguimiento de conversaciones, demostraciones y próximos pasos.",
        ],
        niceToHave: [
          "Experiencia en alianzas, gestión de cuentas o venta de producto.",
          "Familiaridad con pagos, comercio, conectividad o software a medida.",
        ],
        howToApply:
          "Envía un correo con el nombre del puesto en el asunto y unas líneas sobre los clientes o socios con los que quieres trabajar.",
        seo: {
          title: "Representante de Alianzas y Ventas de Producto",
          description: "Representa los productos de Revosso ante clientes y socios y ayuda a desarrollar relaciones comerciales. En remoto.",
        },
      },
    },
  },
]
