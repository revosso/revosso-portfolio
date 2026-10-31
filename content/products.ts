/**
 * Revosso's own products. Features, audiences and sub-products are taken from
 * each product's live site; nothing here is invented. Brand names stay untranslated.
 */
import type { LandingLocale } from "@/lib/landing-locale"
import type { PlatformScreenshotKey } from "@/lib/platform-screenshots"

export type ProductSlug = "revofin" | "revomaket" | "rechajem" | "revokonek"

/** Mega-menu categories; labels are translated in `megaMenu.categories`. */
export const PRODUCT_CATEGORIES = ["business", "commerce", "payments", "communication"] as const
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]

type ProductCopy = {
  tagline: string
  /** Card text in the Products mega-menu (max two lines). */
  menuDescription: string
  overview: string
  /** Six items, from the live site. */
  features: string[]
  audience: string[]
  /** Empty when the product site isn't limited to one language. */
  languageNote: string
  alt: { desktop: string; mobile: string }
  seo: { title: string; description: string }
}

type SubProduct = {
  name: string
  /** Short tag label in the mega-menu. */
  tag: string
  url: string
  description: Record<LandingLocale, string>
}

export type Product = {
  slug: ProductSlug
  name: string
  url: string
  host: string
  category: ProductCategory
  /** 128x128 PNG fetched from the live site by `pnpm capture:platforms --logos`. */
  logo: string
  status: "live"
  /** BCP 47 language(s) of the live site, for structured data. */
  siteLanguage: string
  /** schema.org `applicationCategory`. */
  schemaCategory: string
  operatingSystem: string
  shots: { desktop: PlatformScreenshotKey; mobile: PlatformScreenshotKey; hero: PlatformScreenshotKey }
  subProducts?: SubProduct[]
  copy: Record<LandingLocale, ProductCopy>
}

export const PRODUCTS: readonly Product[] = [
  {
    slug: "revofin",
    name: "Revofin",
    url: "https://revofin.app",
    host: "revofin.app",
    category: "business",
    logo: "/platforms/logos/revofin.png",
    status: "live",
    siteLanguage: "pt-BR",
    schemaCategory: "BusinessApplication",
    operatingSystem: "Web",
    shots: { desktop: "revofin-desktop", mobile: "revofin-mobile", hero: "revofin-hero" },
    subProducts: [
      {
        name: "Revofin Business",
        tag: "Business",
        url: "https://revofin.app/business",
        description: {
          en: "Customers, quotes, orders, invoices, purchasing and cash in one place.",
          fr: "Clients, devis, commandes, factures, achats et trésorerie au même endroit.",
          "pt-BR": "Clientes, orçamentos, pedidos, faturas, compras e caixa em um só lugar.",
          es: "Clientes, presupuestos, pedidos, facturas, compras y caja en un solo lugar.",
        },
      },
      {
        name: "Revofin Personal",
        tag: "Personal",
        url: "https://revofin.app/personal",
        description: {
          en: "Personal finances: accounts in one place, categorized spending, monthly budgets and savings goals.",
          fr: "Finances personnelles : comptes réunis, dépenses catégorisées, budgets mensuels et objectifs d’épargne.",
          "pt-BR": "Finanças pessoais: contas em um só lugar, gastos categorizados, orçamentos mensais e metas de poupança.",
          es: "Finanzas personales: cuentas en un solo lugar, gastos categorizados, presupuestos mensuales y metas de ahorro.",
        },
      },
      {
        name: "Revo POS",
        tag: "Revo POS",
        url: "https://revofin.app/pos",
        description: {
          en: "Point of sale: search or scan products, take payment, and stock updates with each sale.",
          fr: "Point de vente : cherchez ou scannez les produits, encaissez, et le stock se met à jour à chaque vente.",
          "pt-BR": "Ponto de venda: busque ou escaneie produtos, receba, e o estoque se atualiza a cada venda.",
          es: "Punto de venta: busca o escanea productos, cobra, y el inventario se actualiza con cada venta.",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Business management for small and mid-size companies.",
        menuDescription: "Business management in one place: quotes, invoices, sales, inventory and cash flow.",
        overview:
          "Revofin connects sales, purchasing and finance for small and mid-size companies. Information flows from quote to invoice to payment without retyping. It comes as three products, Revofin Business, Revo POS and Revofin Personal, and there is a free plan.",
        features: [
          "Quotes sent as a link your client opens",
          "Quotes become orders and invoices without retyping",
          "Payments recorded on the invoice and matched to your bank, with your confirmation",
          "Customers with contacts, history and follow-ups next to each sale",
          "Purchasing and inventory: suppliers, purchase orders, receiving and low stock",
          "A cash position showing what you are owed, what you owe and what needs attention",
        ],
        audience: ["Freelancers to factories", "Shops, restaurants and service businesses"],
        languageNote: "The Revofin site is in Portuguese (Brazil).",
        alt: {
          desktop:
            "Revofin homepage in Portuguese: the headline “Tudo o que você precisa para administrar seu negócio” next to a demo dashboard with overdue invoices, revenue, expenses and profit.",
          mobile: "Revofin homepage on a phone, with sign-up buttons and a picker for the type of business.",
        },
        seo: {
          title: "Revofin: business management software",
          description:
            "Revofin connects quotes, invoices, payments, purchasing, inventory and cash flow for small and mid-size companies. Built and operated by Revosso.",
        },
      },
      fr: {
        tagline: "La gestion d’entreprise pour les petites et moyennes entreprises.",
        menuDescription: "La gestion d’entreprise au même endroit : devis, factures, ventes, stock et trésorerie.",
        overview:
          "Revofin relie les ventes, les achats et les finances des petites et moyennes entreprises. Les informations passent du devis à la facture puis au paiement sans ressaisie. Il existe en trois produits, Revofin Business, Revo POS et Revofin Personal, avec une offre gratuite.",
        features: [
          "Des devis envoyés par un lien que votre client ouvre",
          "Les devis deviennent commandes et factures sans ressaisie",
          "Paiements enregistrés sur la facture et rapprochés de votre banque, avec votre confirmation",
          "Clients avec contacts, historique et relances à côté de chaque vente",
          "Achats et stock : fournisseurs, bons de commande, réception et stock bas",
          "Une position de trésorerie : ce qu’on vous doit, ce que vous devez et ce qui demande votre attention",
        ],
        audience: ["Des indépendants aux usines", "Commerces, restaurants et entreprises de services"],
        languageNote: "Le site de Revofin est en portugais (Brésil).",
        alt: {
          desktop:
            "Page d’accueil de Revofin en portugais : le titre « Tudo o que você precisa para administrar seu negócio » à côté d’un tableau de bord de démonstration avec factures en retard, chiffre d’affaires, dépenses et bénéfice.",
          mobile: "Page d’accueil de Revofin sur téléphone, avec les boutons d’inscription et un choix du type d’activité.",
        },
        seo: {
          title: "Revofin : logiciel de gestion d’entreprise",
          description:
            "Revofin relie devis, factures, paiements, achats, stock et trésorerie pour les petites et moyennes entreprises. Construit et exploité par Revosso.",
        },
      },
      "pt-BR": {
        tagline: "Gestão empresarial para pequenas e médias empresas.",
        menuDescription: "Gestão empresarial em um só lugar: orçamentos, faturas, vendas, estoque e caixa.",
        overview:
          "O Revofin conecta vendas, compras e finanças de pequenas e médias empresas. A informação vai do orçamento à fatura e ao pagamento sem redigitar. São três produtos, Revofin Business, Revo POS e Revofin Personal, e há um plano grátis.",
        features: [
          "Orçamentos enviados por um link que o cliente abre",
          "Orçamentos viram pedidos e faturas sem redigitar",
          "Pagamentos registrados na fatura e conferidos com o banco, com a sua confirmação",
          "Clientes com contatos, histórico e acompanhamentos ao lado de cada venda",
          "Compras e estoque: fornecedores, pedidos de compra, recebimento e o que está acabando",
          "Uma posição de caixa com o que lhe devem, o que você deve e o que precisa de atenção",
        ],
        audience: ["Do autônomo à fábrica", "Lojas, restaurantes e empresas de serviços"],
        languageNote: "O site do Revofin está em português (Brasil).",
        alt: {
          desktop:
            "Página inicial do Revofin: o título “Tudo o que você precisa para administrar seu negócio” ao lado de um painel de demonstração com faturas vencidas, receita, despesas e lucro.",
          mobile: "Página inicial do Revofin no celular, com os botões de cadastro e a escolha do tipo de negócio.",
        },
        seo: {
          title: "Revofin: software de gestão empresarial",
          description:
            "O Revofin conecta orçamentos, faturas, pagamentos, compras, estoque e caixa para pequenas e médias empresas. Construído e operado pela Revosso.",
        },
      },
      es: {
        tagline: "Gestión empresarial para pequeñas y medianas empresas.",
        menuDescription: "Gestión empresarial en un solo lugar: presupuestos, facturas, ventas, inventario y flujo de caja.",
        overview:
          "Revofin conecta ventas, compras y finanzas de pequeñas y medianas empresas. La información pasa del presupuesto a la factura y al pago sin volver a escribirla. Son tres productos, Revofin Business, Revo POS y Revofin Personal, con un plan gratuito.",
        features: [
          "Presupuestos enviados por un enlace que tu cliente abre",
          "Los presupuestos se convierten en pedidos y facturas sin volver a escribir",
          "Pagos registrados en la factura y conciliados con tu banco, con tu confirmación",
          "Clientes con contactos, historial y seguimientos junto a cada venta",
          "Compras e inventario: proveedores, órdenes de compra, recepción y stock bajo",
          "Una posición de caja con lo que te deben, lo que debes y lo que necesita atención",
        ],
        audience: ["Desde autónomos hasta fábricas", "Tiendas, restaurantes y empresas de servicios"],
        languageNote: "El sitio de Revofin está en portugués (Brasil).",
        alt: {
          desktop:
            "Página de inicio de Revofin en portugués: el titular «Tudo o que você precisa para administrar seu negócio» junto a un panel de demostración con facturas vencidas, ingresos, gastos y beneficio.",
          mobile: "Página de inicio de Revofin en el móvil, con botones de registro y un selector del tipo de negocio.",
        },
        seo: {
          title: "Revofin: software de gestión empresarial",
          description:
            "Revofin conecta presupuestos, facturas, pagos, compras, inventario y caja para pequeñas y medianas empresas. Construido y operado por Revosso.",
        },
      },
    },
  },
  {
    slug: "revomaket",
    name: "RevoMaket",
    url: "https://revomaket.com",
    host: "revomaket.com",
    category: "commerce",
    logo: "/platforms/logos/revomaket.png",
    status: "live",
    siteLanguage: "en",
    schemaCategory: "ShoppingApplication",
    operatingSystem: "Web",
    shots: { desktop: "revomaket-desktop", mobile: "revomaket-mobile", hero: "revomaket-hero" },
    copy: {
      en: {
        tagline: "A global marketplace connecting buyers with independent sellers worldwide.",
        menuDescription: "A global marketplace connecting buyers with independent sellers.",
        overview:
          "RevoMaket is an online marketplace where independent sellers open a shop and buyers discover their products. Sellers pay only when they sell, and manage products, orders and earnings in one place.",
        features: [
          "Search across products, categories and sellers",
          "Browse by category, from fashion to groceries",
          "Seller storefronts that show products the way the seller wants",
          "No monthly fees for sellers: fees apply only when something sells",
          "Orders, products and sales managed from a phone or a computer",
          "Sellers set the shipping methods that work for them",
        ],
        audience: ["Independent sellers", "Online shoppers"],
        languageNote: "",
        alt: {
          desktop:
            "RevoMaket homepage: the headline “Sell. Connect. Grow.” over product photos, a search bar, and category filters below.",
          mobile: "RevoMaket homepage on a phone, with the “Explore products” button and the first category filters.",
        },
        seo: {
          title: "RevoMaket: online marketplace for independent sellers",
          description:
            "RevoMaket connects buyers with independent sellers. Sellers open a storefront and pay only when they sell. Built and operated by Revosso.",
        },
      },
      fr: {
        tagline: "Une place de marché mondiale qui relie les acheteurs à des vendeurs indépendants du monde entier.",
        menuDescription: "Une place de marché mondiale qui relie les acheteurs à des vendeurs indépendants.",
        overview:
          "RevoMaket est une place de marché en ligne où des vendeurs indépendants ouvrent une boutique et où les acheteurs découvrent leurs produits. Les vendeurs ne paient que lorsqu’ils vendent, et gèrent produits, commandes et revenus au même endroit.",
        features: [
          "Recherche parmi les produits, les catégories et les vendeurs",
          "Navigation par catégorie, de la mode à l’épicerie",
          "Des vitrines où chaque vendeur présente ses produits à sa façon",
          "Pas d’abonnement mensuel : les frais ne s’appliquent qu’en cas de vente",
          "Commandes, produits et ventes gérés depuis un téléphone ou un ordinateur",
          "Chaque vendeur choisit ses modes de livraison",
        ],
        audience: ["Vendeurs indépendants", "Acheteurs en ligne"],
        languageNote: "",
        alt: {
          desktop:
            "Page d’accueil de RevoMaket : le titre « Sell. Connect. Grow. » sur des photos de produits, une barre de recherche et des filtres de catégories.",
          mobile: "Page d’accueil de RevoMaket sur téléphone, avec le bouton « Explore products » et les premiers filtres de catégories.",
        },
        seo: {
          title: "RevoMaket : place de marché pour vendeurs indépendants",
          description:
            "RevoMaket relie les acheteurs à des vendeurs indépendants. Les vendeurs ouvrent une vitrine et ne paient que lorsqu’ils vendent. Construit et exploité par Revosso.",
        },
      },
      "pt-BR": {
        tagline: "Um marketplace global que conecta compradores a vendedores independentes do mundo todo.",
        menuDescription: "Um marketplace global que conecta compradores a vendedores independentes.",
        overview:
          "O RevoMaket é um marketplace online onde vendedores independentes abrem uma loja e compradores descobrem seus produtos. Os vendedores só pagam quando vendem e gerenciam produtos, pedidos e ganhos em um só lugar.",
        features: [
          "Busca entre produtos, categorias e vendedores",
          "Navegação por categoria, de moda a mercearia",
          "Vitrines que mostram os produtos do jeito que o vendedor quiser",
          "Sem mensalidade para vendedores: as taxas só se aplicam quando há venda",
          "Pedidos, produtos e vendas gerenciados pelo celular ou pelo computador",
          "Cada vendedor define as formas de envio que funcionam para ele",
        ],
        audience: ["Vendedores independentes", "Compradores online"],
        languageNote: "",
        alt: {
          desktop:
            "Página inicial do RevoMaket: o título “Sell. Connect. Grow.” sobre fotos de produtos, uma barra de busca e filtros de categoria.",
          mobile: "Página inicial do RevoMaket no celular, com o botão “Explore products” e os primeiros filtros de categoria.",
        },
        seo: {
          title: "RevoMaket: marketplace para vendedores independentes",
          description:
            "O RevoMaket conecta compradores a vendedores independentes. Os vendedores abrem uma vitrine e só pagam quando vendem. Construído e operado pela Revosso.",
        },
      },
      es: {
        tagline: "Un marketplace global que conecta compradores con vendedores independientes de todo el mundo.",
        menuDescription: "Un marketplace global que conecta compradores con vendedores independientes.",
        overview:
          "RevoMaket es un marketplace en línea donde vendedores independientes abren una tienda y los compradores descubren sus productos. Los vendedores solo pagan cuando venden y gestionan productos, pedidos e ingresos en un solo lugar.",
        features: [
          "Búsqueda entre productos, categorías y vendedores",
          "Navegación por categoría, de moda a alimentación",
          "Escaparates que muestran los productos como el vendedor quiera",
          "Sin cuotas mensuales: las comisiones solo se aplican cuando hay una venta",
          "Pedidos, productos y ventas gestionados desde el móvil o el ordenador",
          "Cada vendedor elige sus métodos de envío",
        ],
        audience: ["Vendedores independientes", "Compradores en línea"],
        languageNote: "",
        alt: {
          desktop:
            "Página de inicio de RevoMaket: el titular «Sell. Connect. Grow.» sobre fotos de productos, una barra de búsqueda y filtros de categoría.",
          mobile: "Página de inicio de RevoMaket en el móvil, con el botón «Explore products» y los primeros filtros de categoría.",
        },
        seo: {
          title: "RevoMaket: marketplace para vendedores independientes",
          description:
            "RevoMaket conecta compradores con vendedores independientes. Los vendedores abren un escaparate y solo pagan cuando venden. Construido y operado por Revosso.",
        },
      },
    },
  },
  {
    slug: "rechajem",
    name: "Rechajem",
    url: "https://rechajem.com",
    host: "rechajem.com",
    category: "payments",
    logo: "/platforms/logos/rechajem.png",
    status: "live",
    siteLanguage: "en",
    schemaCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android",
    shots: { desktop: "rechajem-desktop", mobile: "rechajem-mobile", hero: "rechajem-hero" },
    copy: {
      en: {
        tagline: "Mobile top-up made easy.",
        menuDescription: "Mobile top-up made easy. Airtime, data bundles, gift cards and bill payments.",
        overview:
          "Rechajem lets people send mobile credit to phones in other countries. Enter the number, choose an amount and pay, on the web or in the iOS and Android apps.",
        features: [
          "Airtime top-up for phones in other countries",
          "Data bundles",
          "Gift cards for popular stores and services",
          "Utility payments: electricity, water, TV and internet",
          "Pick a plan or enter a custom amount",
          "Apps for iOS and Android",
        ],
        audience: ["People sending credit to family abroad"],
        languageNote: "",
        alt: {
          desktop:
            "Rechajem homepage: the headline “Top-up any phone, anywhere in the world”, App Store and Google Play buttons, and a list of supported countries.",
          mobile: "Rechajem homepage on a phone, with app download buttons and country shortcuts.",
        },
        seo: {
          title: "Rechajem: mobile top-up made easy",
          description:
            "Rechajem sends airtime, data bundles and gift cards to phones in other countries, and pays utility bills. On the web, iOS and Android. Built and operated by Revosso.",
        },
      },
      fr: {
        tagline: "La recharge mobile, simplement.",
        menuDescription: "La recharge mobile, simplement. Crédit d’appel, forfaits data, cartes cadeaux et paiement de factures.",
        overview:
          "Rechajem permet d’envoyer du crédit mobile vers des téléphones à l’étranger. Saisissez le numéro, choisissez un montant et payez, sur le web ou dans les applications iOS et Android.",
        features: [
          "Recharge de crédit d’appel pour des téléphones à l’étranger",
          "Forfaits data",
          "Cartes cadeaux pour des enseignes et services connus",
          "Paiement de factures : électricité, eau, télévision et internet",
          "Un forfait au choix ou un montant libre",
          "Applications iOS et Android",
        ],
        audience: ["Personnes qui envoient du crédit à leur famille à l’étranger"],
        languageNote: "",
        alt: {
          desktop:
            "Page d’accueil de Rechajem : le titre « Top-up any phone, anywhere in the world », les boutons App Store et Google Play et une liste de pays desservis.",
          mobile: "Page d’accueil de Rechajem sur téléphone, avec les boutons de téléchargement et des raccourcis par pays.",
        },
        seo: {
          title: "Rechajem : la recharge mobile, simplement",
          description:
            "Rechajem envoie du crédit d’appel, des forfaits data et des cartes cadeaux vers l’étranger, et règle des factures. Sur le web, iOS et Android. Construit et exploité par Revosso.",
        },
      },
      "pt-BR": {
        tagline: "Recarga de celular sem complicação.",
        menuDescription: "Recarga de celular sem complicação. Créditos, pacotes de dados, gift cards e pagamento de contas.",
        overview:
          "O Rechajem permite enviar crédito de celular para telefones em outros países. Digite o número, escolha o valor e pague, na web ou nos apps para iOS e Android.",
        features: [
          "Recarga de créditos para celulares em outros países",
          "Pacotes de dados",
          "Gift cards de lojas e serviços conhecidos",
          "Pagamento de contas: luz, água, TV e internet",
          "Escolha um plano ou digite um valor",
          "Apps para iOS e Android",
        ],
        audience: ["Quem envia crédito para a família no exterior"],
        languageNote: "",
        alt: {
          desktop:
            "Página inicial do Rechajem: o título “Top-up any phone, anywhere in the world”, botões da App Store e do Google Play e uma lista de países atendidos.",
          mobile: "Página inicial do Rechajem no celular, com botões de download e atalhos por país.",
        },
        seo: {
          title: "Rechajem: recarga de celular sem complicação",
          description:
            "O Rechajem envia créditos, pacotes de dados e gift cards para outros países e paga contas. Na web, iOS e Android. Construído e operado pela Revosso.",
        },
      },
      es: {
        tagline: "Recargas móviles sin complicaciones.",
        menuDescription: "Recargas móviles sin complicaciones. Saldo, paquetes de datos, tarjetas regalo y pago de facturas.",
        overview:
          "Rechajem permite enviar saldo móvil a teléfonos en otros países. Escribe el número, elige un importe y paga, en la web o en las apps para iOS y Android.",
        features: [
          "Recarga de saldo para teléfonos en otros países",
          "Paquetes de datos",
          "Tarjetas regalo de tiendas y servicios conocidos",
          "Pago de facturas: luz, agua, televisión e internet",
          "Elige un plan o escribe un importe",
          "Apps para iOS y Android",
        ],
        audience: ["Quienes envían saldo a su familia en el extranjero"],
        languageNote: "",
        alt: {
          desktop:
            "Página de inicio de Rechajem: el titular «Top-up any phone, anywhere in the world», botones de App Store y Google Play y una lista de países disponibles.",
          mobile: "Página de inicio de Rechajem en el móvil, con botones de descarga y accesos por país.",
        },
        seo: {
          title: "Rechajem: recargas móviles sin complicaciones",
          description:
            "Rechajem envía saldo, paquetes de datos y tarjetas regalo a otros países, y paga facturas. En la web, iOS y Android. Construido y operado por Revosso.",
        },
      },
    },
  },
  {
    slug: "revokonek",
    name: "Revokonek",
    url: "https://www.revokonek.com",
    host: "revokonek.com",
    category: "communication",
    logo: "/platforms/logos/revokonek.png",
    status: "live",
    siteLanguage: "en",
    schemaCategory: "CommunicationApplication",
    operatingSystem: "Web",
    shots: { desktop: "revokonek-desktop", mobile: "revokonek-mobile", hero: "revokonek-hero" },
    copy: {
      en: {
        tagline: "A customer communication platform: every conversation in one shared inbox.",
        menuDescription: "A customer communication platform: every conversation in one shared inbox.",
        overview:
          "Revokonek brings customer conversations from different channels into one shared inbox, so support and sales teams reply from a single place. Web chat and Telegram are available today; Messenger, Instagram, WhatsApp, SMS and email are listed as coming soon.",
        features: [
          "One shared inbox for every connected channel",
          "Web chat and Telegram today, with more channels on the way",
          "Assign conversations and coordinate handoffs",
          "Full conversation history and customer context",
          "Internal notes visible only to your team",
          "Analytics on response times, volume and workload",
        ],
        audience: ["Customer support teams", "Sales teams", "Freelancers and small businesses"],
        languageNote: "",
        alt: {
          desktop:
            "Revokonek homepage: the headline “Manage every customer conversation from a single workspace” above a row of supported channels.",
          mobile: "Revokonek homepage on a phone, with the headline, channel list and “Start free” button.",
        },
        seo: {
          title: "Revokonek: customer communication platform",
          description:
            "Revokonek brings customer conversations into one shared inbox, with assignments, internal notes, history and analytics. Built and operated by Revosso.",
        },
      },
      fr: {
        tagline: "Une plateforme de communication client : toutes les conversations dans une boîte de réception partagée.",
        menuDescription: "Une plateforme de communication client : toutes les conversations dans une boîte de réception partagée.",
        overview:
          "Revokonek réunit les conversations clients de plusieurs canaux dans une seule boîte de réception partagée, pour que les équipes support et commerciales répondent depuis un seul endroit. Le chat web et Telegram sont disponibles ; Messenger, Instagram, WhatsApp, SMS et e-mail sont annoncés comme bientôt disponibles.",
        features: [
          "Une boîte de réception partagée pour tous les canaux connectés",
          "Chat web et Telegram aujourd’hui, d’autres canaux à venir",
          "Attribution des conversations et passages de relais",
          "Historique complet et contexte client",
          "Notes internes visibles uniquement par votre équipe",
          "Statistiques sur les délais de réponse, le volume et la charge",
        ],
        audience: ["Équipes de support client", "Équipes commerciales", "Indépendants et petites entreprises"],
        languageNote: "",
        alt: {
          desktop:
            "Page d’accueil de Revokonek : le titre « Manage every customer conversation from a single workspace » au-dessus d’une rangée de canaux pris en charge.",
          mobile: "Page d’accueil de Revokonek sur téléphone, avec le titre, la liste des canaux et le bouton « Start free ».",
        },
        seo: {
          title: "Revokonek : plateforme de communication client",
          description:
            "Revokonek réunit les conversations clients dans une boîte de réception partagée, avec attribution, notes internes, historique et statistiques. Construit et exploité par Revosso.",
        },
      },
      "pt-BR": {
        tagline: "Uma plataforma de comunicação com clientes: todas as conversas em uma caixa de entrada compartilhada.",
        menuDescription: "Uma plataforma de comunicação com clientes: todas as conversas em uma caixa de entrada compartilhada.",
        overview:
          "O Revokonek reúne conversas com clientes de vários canais em uma caixa de entrada compartilhada, para que as equipes de atendimento e vendas respondam de um só lugar. Chat do site e Telegram já estão disponíveis; Messenger, Instagram, WhatsApp, SMS e e-mail aparecem como em breve.",
        features: [
          "Uma caixa de entrada compartilhada para todos os canais conectados",
          "Chat do site e Telegram hoje, com mais canais a caminho",
          "Atribuição de conversas e passagem de bastão entre a equipe",
          "Histórico completo e contexto do cliente",
          "Notas internas visíveis só para a sua equipe",
          "Métricas de tempo de resposta, volume e carga",
        ],
        audience: ["Equipes de atendimento", "Equipes de vendas", "Autônomos e pequenas empresas"],
        languageNote: "",
        alt: {
          desktop:
            "Página inicial do Revokonek: o título “Manage every customer conversation from a single workspace” acima de uma fileira de canais suportados.",
          mobile: "Página inicial do Revokonek no celular, com o título, a lista de canais e o botão “Start free”.",
        },
        seo: {
          title: "Revokonek: plataforma de comunicação com clientes",
          description:
            "O Revokonek reúne as conversas com clientes em uma caixa de entrada compartilhada, com atribuições, notas internas, histórico e métricas. Construído e operado pela Revosso.",
        },
      },
      es: {
        tagline: "Una plataforma de comunicación con clientes: todas las conversaciones en una bandeja compartida.",
        menuDescription: "Una plataforma de comunicación con clientes: todas las conversaciones en una bandeja compartida.",
        overview:
          "Revokonek reúne las conversaciones con clientes de varios canales en una bandeja de entrada compartida, para que los equipos de soporte y ventas respondan desde un solo lugar. El chat web y Telegram ya están disponibles; Messenger, Instagram, WhatsApp, SMS y correo figuran como próximamente.",
        features: [
          "Una bandeja compartida para todos los canales conectados",
          "Chat web y Telegram hoy, con más canales en camino",
          "Asignación de conversaciones y traspasos entre el equipo",
          "Historial completo y contexto del cliente",
          "Notas internas visibles solo para tu equipo",
          "Métricas de tiempo de respuesta, volumen y carga",
        ],
        audience: ["Equipos de atención al cliente", "Equipos de ventas", "Autónomos y pequeñas empresas"],
        languageNote: "",
        alt: {
          desktop:
            "Página de inicio de Revokonek: el titular «Manage every customer conversation from a single workspace» sobre una fila de canales compatibles.",
          mobile: "Página de inicio de Revokonek en el móvil, con el titular, la lista de canales y el botón «Start free».",
        },
        seo: {
          title: "Revokonek: plataforma de comunicación con clientes",
          description:
            "Revokonek reúne las conversaciones con clientes en una bandeja compartida, con asignaciones, notas internas, historial y métricas. Construido y operado por Revosso.",
        },
      },
    },
  },
]

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}
