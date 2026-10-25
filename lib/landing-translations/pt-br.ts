/** Brazilian Portuguese: landing page marketing copy */

import type { LandingLocaleMessages } from "./types"

export const landingPtBR = {
  a11y: {
    skipToContent: "Pular para o conteúdo",
    home: "Página inicial da Revosso",
    primaryNav: "Principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menuTitle: "Menu",
    language: "Idioma",
    changeLanguage: "Mudar idioma",
    opensInNewTab: "(abre em uma nova aba)",
    toggleTheme: "Alternar tema",
  },
  nav: {
    services: "Serviços",
    products: "Produtos",
    about: "Sobre",
    careers: "Carreiras",
    contact: "Contato",
    cta: "Agende uma conversa grátis",
  },
  megaMenu: {
    label: "Menu de produtos",
    productsTab: "Produtos",
    servicesTab: "Serviços",
    exploreAll: "Ver todos os produtos",
    close: "Fechar menu",
    categoriesLabel: "Categorias de produtos",
    categories: {
      all: "Todos os produtos",
      business: "Gestão e finanças",
      commerce: "Comércio",
      payments: "Pagamentos e celular",
      communication: "Comunicação",
    },
    learnMore: "Saiba mais",
    visitLive: "Visitar o site",
    subProductsLabel: "Produtos {name}",
    servicesHeading: "O que construímos",
    back: "Voltar",
  },
  hero: {
    eyebrow: "Agência digital e empresa de software",
    title: "Uma agência digital que constrói software, e opera o próprio.",
    subtitle:
      "Desenhamos, construímos e operamos software para clientes. Também operamos nossos próprios produtos: Revofin, RevoMaket, Rechajem e Revokonek. Sabemos o que é preciso para manter um software funcionando depois do lançamento.",
    primaryCta: "Agende uma conversa grátis de 30\u00a0min",
    secondaryCta: "Ver nossos produtos",
    showcaseCaption: "Produtos que operamos",
  },
  about: {
    eyebrow: "Sobre",
    title: "Quem é a Revosso",
    body: "A Revosso é uma empresa de tecnologia registrada no Brasil. Trabalhamos com empresas como agência digital, construindo sites, plataformas web e software, e operamos nossos próprios produtos. Operá-los todos os dias molda a forma como construímos para os clientes.",
    clientsTitle: "Construímos para clientes",
    clientsBody:
      "Sites, plataformas web, apps e integrações, desenhados e construídos para a sua empresa, e depois hospedados e mantidos se você quiser.",
    productsTitle: "Operamos nossos próprios produtos",
    productsBody:
      "Revofin, RevoMaket, Rechajem e Revokonek são nossos. Nós os construímos, hospedamos e corrigimos quando algo quebra.",
    factsLabel: "Dados da empresa",
    facts: {
      legalEntity: "Razão social",
      registration: "CNPJ",
      founded: "Fundação",
      team: "Equipe",
      locations: "Localização",
    },
    link: "Saiba mais sobre nós",
  },
  services: {
    eyebrow: "Serviços",
    title: "O que construímos",
    intro: "Tudo de software, do primeiro desenho aos servidores onde ele roda.",
    catalog: {
      websites: { name: "Sites e landing pages", description: "Sites institucionais e páginas focadas em um lançamento ou campanha." },
      platforms: {
        name: "Plataformas web e SaaS",
        description: "Aplicações web com contas, dados e regras de negócio, incluindo software que você vende para os seus clientes.",
      },
      mobile: { name: "Apps (iOS e Android)", description: "Aplicativos para iPhone e celulares Android." },
      apis: {
        name: "APIs e integrações",
        description: "APIs para o seu produto e conexões entre as ferramentas e serviços que você já usa.",
      },
      design: { name: "Design UI/UX", description: "Design de interface e de experiência para sites, plataformas e apps." },
      email: { name: "E-mail marketing", description: "Campanhas de e-mail e os modelos usados para enviá-las." },
      hosting: {
        name: "Hospedagem, nuvem e manutenção",
        description: "Hospedagem e configuração em nuvem, além de atualizações e correções depois do lançamento.",
      },
    },
    engagementTitle: "Três formas de trabalhar com a gente",
    youGet: "Você recebe",
    steps: [
      {
        title: "Construir",
        description: "Software novo, desenhado em torno de como a sua empresa funciona.",
        bullets: ["Arquitetura e desenho técnico", "Plataformas web e APIs", "Documentação desde o início"],
        deliverables: "Um plano de arquitetura, software funcionando e documentação.",
      },
      {
        title: "Assumir",
        description: "Assumimos a responsabilidade por um sistema existente e o tornamos confiável.",
        bullets: [
          "Auditoria e estabilização do código",
          "Correção de problemas de desempenho e segurança",
          "Redução da dívida técnica passo a passo",
        ],
        deliverables: "Uma auditoria, um código estável e um plano de modernização.",
      },
      {
        title: "Operar",
        description: "Hospedamos, monitoramos e mantemos o sistema enquanto você cresce.",
        bullets: ["Hospedagem e deploy", "Monitoramento e resposta a incidentes", "Manutenção e escala"],
        deliverables: "Uma equipe responsável por manter tudo funcionando.",
      },
    ],
  },
  products: {
    eyebrow: "Nossos produtos",
    title: "Produtos que operamos",
    intro: "Nós mesmos operamos estes produtos. A mesma equipe atende clientes.",
    learnMore: "Saiba mais",
    learnMoreAbout: "Saiba mais sobre {name}",
    allProducts: "Todos os produtos",
  },
  whoWeHelp: {
    eyebrow: "Com quem trabalhamos",
    title: "Por onde os clientes costumam começar",
    items: [
      {
        title: "Começando algo novo",
        body: "Você tem uma ideia e precisa de um software que aguente quando os clientes reais chegarem. Nós desenhamos e construímos direito desde o início.",
        cta: "Falar sobre um projeto novo",
      },
      {
        title: "Preso a um sistema frágil",
        body: "O código é lento, instável ou ninguém na equipe o entende mais. Nós o estabilizamos sem uma reescrita arriscada.",
        cta: "Falar sobre assumir o sistema",
      },
      {
        title: "Precisa de alguém para operar",
        body: "Você prefere cuidar do negócio a cuidar de servidores. Nós hospedamos, monitoramos e mantemos a plataforma.",
        cta: "Falar sobre operação",
      },
    ],
  },
  process: {
    eyebrow: "Processo",
    title: "Como trabalhamos",
    intro: "Quatro etapas. Você vê software funcionando cedo e com frequência.",
    youGet: "Você recebe",
    steps: [
      {
        title: "Descoberta",
        description: "Entendemos seus objetivos, restrições e sistemas atuais.",
        deliverable: "Um plano com escopo definido.",
      },
      {
        title: "Arquitetura",
        description: "Desenhamos o sistema antes de escrever código.",
        deliverable: "Um plano técnico e um cronograma.",
      },
      {
        title: "Construção",
        description: "Entregamos em ciclos curtos, com demonstrações frequentes.",
        deliverable: "Software funcionando cedo.",
      },
      {
        title: "Operação",
        description: "Ficamos para monitorar, corrigir e melhorar.",
        deliverable: "Um responsável técnico de longo prazo.",
      },
    ],
  },
  principles: {
    eyebrow: "Princípios",
    title: "Como construímos",
    items: [
      {
        title: "Desenho primeiro",
        description: "Pensamos o sistema antes de escrever código, para não precisar reescrevê-lo depois.",
      },
      { title: "Feito para crescer", description: "Planejamos mais usuários e mais dados desde o início." },
      {
        title: "Segurança no desenho",
        description: "Segurança faz parte da arquitetura, não de uma checklist no final.",
      },
      { title: "Código legível", description: "Outro engenheiro precisa conseguir assumir e avançar rápido." },
      {
        title: "Desempenho é requisito",
        description: "Medimos a velocidade e corrigimos regressões antes de publicar.",
      },
      {
        title: "Planejar para falhas",
        description: "Monitoramento, backups e recuperação ficam prontos antes do lançamento.",
      },
    ],
  },
  security: {
    eyebrow: "Segurança e empresa",
    title: "Segurança",
    body: "Segurança faz parte de como desenhamos, construímos e operamos software. Controle de acesso, monitoramento e backups são planejados desde o início, não adicionados depois.",
    link: "Como tratamos a segurança",
    company: {
      title: "Operado pela Revosso LTDA",
      body: "A Revosso LTDA é a nossa empresa registrada no Brasil e a operadora do Revofin.",
      legalNameLabel: "Razão social",
      registrationLabel: "Registro",
      policiesLabel: "Políticas",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas",
    items: [
      {
        question: "Quanto custa um projeto?",
        answer:
          "Depende do escopo. Depois de uma conversa gratuita de 30 minutos, propomos um escopo fechado ou uma parceria contínua, para que você conheça os custos com antecedência.",
      },
      {
        question: "Quanto tempo leva?",
        answer: "Projetos focados costumam levar [prazo]. Damos um cronograma realista depois da descoberta.",
      },
      {
        question: "Vocês podem assumir nosso código existente?",
        answer: "Sim. Começamos com uma auditoria e depois estabilizamos e modernizamos passo a passo, em vez de reescrever tudo.",
      },
      {
        question: "O código será nosso?",
        answer: "[Confirmar: vocês são donos da PI e do código-fonte do que construímos.]",
      },
      {
        question: "Vocês assinam NDA?",
        answer: "Sim. Assinamos um NDA antes de conversar sobre o seu projeto, se você preferir.",
      },
      {
        question: "Vocês oferecem suporte contínuo?",
        answer: "Sim. Depois do lançamento, podemos hospedar, monitorar e manter o software para você.",
      },
      {
        question: "Vocês trabalham com a nossa equipe interna?",
        answer: "Sim. Podemos liderar o trabalho, apoiar seus engenheiros ou passar o bastão para eles.",
      },
      {
        question: "O que acontece na conversa gratuita?",
        answer: "Ouvimos, fazemos perguntas e dizemos com honestidade se podemos ajudar, e como. Sem compromisso.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Contato",
    title: "Fale com a gente",
    body: "Conte no que você está trabalhando. Respondemos com próximos passos claros.",
    primaryCta: "Agende uma conversa grátis de 30\u00a0min",
    formIntro: "Ou envie uma mensagem curta.",
  },
  contactForm: {
    name: "Nome",
    email: "E-mail profissional",
    need: "Preciso de ajuda com",
    needPlaceholder: "Selecione uma opção",
    needOptions: {
      newBuild: "Um projeto novo",
      fixExisting: "Um sistema existente",
      hostingOps: "Hospedagem e operação",
      notSure: "Ainda não sei",
    },
    message: "Mensagem",
    messagePlaceholder: "Algumas linhas sobre o seu projeto, prazos e estrutura atual.",
    honeypot: "Deixe este campo vazio",
    submit: "Enviar mensagem",
    sending: "Enviando…",
    successTitle: "Mensagem enviada",
    success: "Obrigado, recebemos sua mensagem. Vamos responder por e-mail.",
    sendAnother: "Enviar outra mensagem",
    error: "Algo deu errado. Tente novamente ou escreva para {email}.",
    rateLimited: "Muitas tentativas. Aguarde alguns minutos e tente de novo.",
    validation: {
      name: "Informe seu nome (pelo menos 2 caracteres).",
      email: "Informe um e-mail válido.",
      need: "Escolha com o que você precisa de ajuda.",
      message: "Escreva pelo menos 10 caracteres.",
      messageMax: "Sua mensagem deve ter menos de 2.000 caracteres.",
    },
  },
  footer: {
    tagline: "Agência digital e empresa de software. Construímos para clientes e operamos nossos próprios produtos.",
    servicesTitle: "Serviços",
    companyTitle: "Empresa",
    legalTitle: "Jurídico",
    links: {
      about: "Sobre",
      products: "Produtos",
      howWeWork: "Como trabalhamos",
      faq: "Perguntas frequentes",
      careers: "Carreiras",
      contact: "Contato",
      privacy: "Privacidade",
      terms: "Termos",
      security: "Segurança",
      cookies: "Cookies",
    },
    followUs: "Siga a gente",
    social: {
      facebook: "Revosso no Facebook",
      instagram: "Revosso no Instagram",
      tiktok: "Revosso no TikTok",
    },
    hiring: "Estamos contratando.",
    hiringLink: "Ver vagas abertas",
    copyright: "Todos os direitos reservados.",
  },
  productPage: {
    breadcrumb: "Produtos",
    status: "No ar",
    visitLive: "Visitar o site",
    gallery: "Capturas de tela",
    overview: "Visão geral",
    whatItDoes: "O que faz",
    whoFor: "Para quem",
    subProducts: "Três produtos",
    builtByTitle: "Construído e operado pela Revosso",
    builtByBody:
      "A Revosso desenha, constrói, hospeda e mantém o {name}, com o mesmo processo que usamos nos projetos de clientes.",
    ctaTitle: "Quer algo assim para a sua empresa?",
    ctaButton: "Fale com a gente",
    otherProducts: "Outros produtos",
  },
  productsPage: {
    eyebrow: "Produtos",
    title: "Produtos que construímos e operamos",
    intro: "Quatro produtos no ar, construídos e operados pela equipe da Revosso.",
    howTitle: "Como construímos e operamos",
    howBody:
      "A mesma equipe desenha, constrói, hospeda e mantém cada produto. O que aprendemos operando-os vai para o trabalho que fazemos para os clientes.",
    seo: {
      title: "Produtos",
      description: "Revofin, RevoMaket, Rechajem e Revokonek: produtos no ar, construídos e operados pela Revosso.",
    },
  },
  aboutPage: {
    eyebrow: "Sobre",
    title: "Uma agência digital que também opera seus próprios produtos",
    intro:
      "A Revosso é uma empresa de tecnologia registrada no Brasil. Construímos software para clientes, e construímos e operamos nossos próprios produtos.",
    storyTitle: "Dois lados de uma mesma empresa",
    story: [
      "Como agência digital, desenhamos e construímos sites, plataformas web, apps e integrações para empresas, e podemos hospedá-los e mantê-los depois do lançamento.",
      "Também operamos quatro produtos nossos: Revofin, RevoMaket, Rechajem e Revokonek. Somos responsáveis por eles todos os dias, do primeiro desenho aos servidores onde rodam.",
    ],
    sidesTitle: "Como os dois lados se alimentam",
    sides: [
      {
        title: "Nossos produtos nos mantêm honestos",
        body: "Operar software no ar significa lidar com usuários reais, quedas e pedidos de suporte. Essa experiência vai para cada projeto de cliente.",
      },
      {
        title: "O trabalho com clientes nos amplia",
        body: "Projetos de clientes nos levam a setores e problemas que nossos produtos não cobrem, e o que aprendemos volta para os nossos produtos.",
      },
    ],
    factsTitle: "Dados da empresa",
    servicesTitle: "O que construímos",
    careersTitle: "Trabalhe com a gente",
    careersBody: "Estamos contratando. Veja as vagas abertas agora.",
    careersLink: "Ver vagas abertas",
    contactTitle: "Comece um projeto",
    contactBody: "Conte no que você está trabalhando, ou agende uma conversa grátis de 30 minutos.",
    contactLink: "Fale com a gente",
    seo: {
      title: "Sobre",
      description:
        "A Revosso é uma agência digital e empresa de software registrada no Brasil. Construímos software para clientes e operamos nossos próprios produtos.",
    },
  },
  careers: {
    seo: {
      title: "Carreiras",
      description: "Vagas abertas na Revosso, agência digital e empresa de software. Remoto, tempo integral ou parcial.",
    },
    eyebrow: "Carreiras",
    title: "Construa software com a Revosso",
    intro: "Faça parte da equipe que constrói software para clientes e opera Revofin, RevoMaket, Rechajem e Revokonek.",
    seeRoles: "Ver vagas abertas",
    why: {
      title: "Por que a Revosso",
      items: [
        {
          title: "Trabalhe em produtos digitais",
          description: "Ajude a construir e fazer crescer Revofin, RevoMaket, Revokonek, Rechajem e software sob medida para clientes.",
        },
        {
          title: "Contribua com projetos reais de tecnologia",
          description: "Participe do trabalho em produtos, plataformas e infraestrutura, do marketing à engenharia.",
        },
        {
          title: "Trabalhe em uma empresa em crescimento",
          description: "Faça parte de uma equipe que constrói produtos e serviços digitais e ajude a definir como a Revosso aparece no mercado.",
        },
        {
          title: "Desenvolva suas habilidades",
          description: "Aprenda entregando trabalho que importa: estratégia, conteúdo, campanhas e os sistemas por trás deles.",
        },
      ],
    },
    roles: {
      title: "Vagas abertas",
      openRole: "Ver vaga",
      empty: "Não há vagas abertas no momento. Mesmo assim, você pode escrever para {email}. Lemos todas as candidaturas.",
    },
    general: {
      title: "Não encontrou sua vaga?",
      body: "Escreva para {email} e conte como você poderia ajudar. Lemos todas as candidaturas.",
    },
    labels: {
      department: "Departamento",
      location: "Local",
      employmentType: "Tipo de contrato",
      workMode: "Modelo de trabalho",
      posted: "Publicada em",
    },
    values: {
      department: {
        sales: "Vendas",
        marketing: "Marketing",
      },
      location: {
        remote: "Remoto",
      },
      employmentType: {
        "full-time-or-part-time": "Tempo integral ou parcial",
      },
      workMode: {
        remote: "Remoto",
      },
    },
    details: {
      back: "Carreiras",
      overview: "Visão geral",
      responsibilities: "Responsabilidades",
      requirements: "O que buscamos",
      niceToHave: "Diferenciais",
      howToApply: "Como se candidatar",
      summary: "Resumo da vaga",
      apply: "Candidatar-se por e-mail",
      emailLabel: "Ou escreva para",
    },
    application: {
      subject: "Candidatura: {title}",
      body: "Olá, equipe Revosso,\n\nGostaria de me candidatar à vaga de {title}.\n\nNome:\nLink para meu perfil ou currículo:\nPor que esta vaga:\n\nObrigado,",
    },
    notFound: {
      title: "Vaga não encontrada",
      message: "Esta vaga não está mais aberta ou o link está incorreto.",
      back: "Ver vagas abertas",
    },
  },
} satisfies LandingLocaleMessages
