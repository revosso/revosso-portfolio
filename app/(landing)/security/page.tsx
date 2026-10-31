import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, Eye, Lock, Server, Shield } from "lucide-react"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { LegalBox, LegalList, LegalPage, LegalSection, LegalSubheading, legalLinkClass } from "@/components/landing/legal"

type Locale = "en" | "fr" | "pt-BR" | "es"

const data: Record<Locale, {
  title: string
  lastUpdated: string
  intro: string
  cards: { title: string; description: string }[]
  platformTitle: string
  transportTitle: string
  transport: string[]
  authTitle: string
  auth: string[]
  apiTitle: string
  api: string[]
  infraTitle: string
  infra: string[]
  disclosureTitle: string
  disclosure1: string
  disclosure2: string
  reportTitle: string
  reportText1: string
  reportText2: string
  reportItems: string[]
  commitmentsTitle: string
  commitments: string[]
  scopeTitle: string
  scopeIntro: string
  scopeIn: string[]
  scopeOutIntro: string
  scopeOut: string[]
  contactTitle: string
  contactIntro: string
  contactCompany: string
  contactSecurity: string
  contactGeneral: string
  contactWebsite: string
}> = {
  en: {
    title: "Security",
    lastUpdated: "Last updated:",
    intro: "Security is a foundational principle at Revosso — both in the systems we build for clients and in how we operate our own infrastructure. This page outlines our security practices and how to report potential vulnerabilities.",
    cards: [
      { title: "TLS Everywhere", description: "All data in transit is encrypted using TLS 1.2 or higher." },
      { title: "Secure Authentication", description: "Admin access is protected with PKCE authorization flow and public key validation." },
      { title: "Minimal Attack Surface", description: "API endpoints are protected with JWT validation and rate limiting." },
      { title: "Access Controls", description: "Role-based access control enforces least-privilege across all systems." },
    ],
    platformTitle: "Platform Security Measures",
    transportTitle: "Transport Security",
    transport: [
      "All connections enforced over HTTPS with TLS 1.2+",
      "HTTP Strict Transport Security (HSTS) enabled",
      "Secure headers configured on all responses",
    ],
    authTitle: "Authentication & Authorization",
    auth: [
      "Admin access protected with PKCE authorization flow via a dedicated identity provider",
      "Access tokens stored in memory only — never in localStorage or cookies",
      "Server-side JWT validation using public key infrastructure",
      "Role-based access control with least-privilege enforcement via custom claims",
      "All admin API routes protected by server-side token validation",
    ],
    apiTitle: "API & Input Security",
    api: [
      "Strict input validation on all API endpoints",
      "Rate limiting on public endpoints to prevent abuse",
      "Honeypot fields on contact forms to detect automated submissions",
      "Parameterized database queries to prevent SQL injection",
    ],
    infraTitle: "Infrastructure",
    infra: [
      "Hosted on a managed cloud platform with edge-level DDoS protection",
      "Database hosted on a managed, encrypted cloud storage with strict access controls",
      "Environment variables and secrets managed through secure environment configuration",
      "No secrets committed to version control",
    ],
    disclosureTitle: "Responsible Disclosure Policy",
    disclosure1: "We take security seriously. If you discover a potential security vulnerability in our website or systems, we encourage you to report it to us responsibly. We appreciate the efforts of security researchers and commit to working with you to understand and resolve the issue quickly.",
    disclosure2: "To report a security vulnerability:",
    reportTitle: "To report a security vulnerability:",
    reportText1: "Please email",
    reportText2: "with a detailed description of the issue, steps to reproduce, and any supporting evidence. Please do not publicly disclose the vulnerability until we have had an opportunity to investigate and address it.",
    reportItems: [
      "Description of the vulnerability and its potential impact",
      "Step-by-step instructions to reproduce the issue",
      "Any relevant screenshots, logs, or proof-of-concept code",
      "Your contact information for follow-up",
    ],
    commitmentsTitle: "Our Commitments",
    commitments: [
      "We will acknowledge receipt of your report within 3 business days",
      "We will investigate and keep you informed of our progress",
      "We will not take legal action against researchers acting in good faith",
      "We will work to remediate confirmed vulnerabilities in a timely manner",
    ],
    scopeTitle: "Scope",
    scopeIntro: "Our responsible disclosure program covers:",
    scopeIn: ["revosso.com and all subdomains", "Public APIs operated by Revosso"],
    scopeOutIntro: "Out of scope:",
    scopeOut: [
      "Social engineering attacks targeting Revosso staff",
      "Physical security",
      "Denial of service attacks",
      "Third-party services and platforms not operated by Revosso",
    ],
    contactTitle: "Contact",
    contactIntro: "For security-related inquiries:",
    contactCompany: "Revosso Security",
    contactSecurity: "Security reports:",
    contactGeneral: "General inquiries:",
    contactWebsite: "Website:",
  },
  fr: {
    title: "Sécurité",
    lastUpdated: "Dernière mise à jour :",
    intro: "La sécurité est un principe fondamental chez Revosso — aussi bien dans les systèmes que nous construisons pour nos clients que dans la façon dont nous exploitons notre propre infrastructure. Cette page présente nos pratiques de sécurité et la manière de signaler des vulnérabilités potentielles.",
    cards: [
      { title: "TLS Partout", description: "Toutes les données en transit sont chiffrées à l'aide de TLS 1.2 ou supérieur." },
      { title: "Authentification Sécurisée", description: "L'accès administrateur est protégé par un flux d'autorisation PKCE et une validation par clé publique." },
      { title: "Surface d'Attaque Minimale", description: "Les points d'accès API sont protégés par validation JWT et limitation de débit." },
      { title: "Contrôles d'Accès", description: "Le contrôle d'accès basé sur les rôles applique le moindre privilège sur tous les systèmes." },
    ],
    platformTitle: "Mesures de Sécurité de la Plateforme",
    transportTitle: "Sécurité du Transport",
    transport: [
      "Toutes les connexions imposées sur HTTPS avec TLS 1.2+",
      "HTTP Strict Transport Security (HSTS) activé",
      "En-têtes sécurisés configurés sur toutes les réponses",
    ],
    authTitle: "Authentification et Autorisation",
    auth: [
      "Accès administrateur protégé par un flux d'autorisation PKCE via un fournisseur d'identité dédié",
      "Jetons d'accès stockés en mémoire uniquement — jamais dans localStorage ou les cookies",
      "Validation JWT côté serveur à l'aide d'une infrastructure à clé publique",
      "Contrôle d'accès basé sur les rôles avec application du moindre privilège via des revendications personnalisées",
      "Toutes les routes API administrateur protégées par une validation de jeton côté serveur",
    ],
    apiTitle: "Sécurité des API et des Entrées",
    api: [
      "Validation stricte des entrées sur tous les points d'accès API",
      "Limitation de débit sur les points d'accès publics pour prévenir les abus",
      "Champs honeypot sur les formulaires de contact pour détecter les soumissions automatisées",
      "Requêtes de base de données paramétrées pour prévenir les injections SQL",
    ],
    infraTitle: "Infrastructure",
    infra: [
      "Hébergé sur une plateforme cloud gérée avec protection DDoS au niveau de la périphérie",
      "Base de données hébergée sur un stockage cloud géré et chiffré avec des contrôles d'accès stricts",
      "Variables d'environnement et secrets gérés via une configuration d'environnement sécurisée",
      "Aucun secret engagé dans le contrôle de version",
    ],
    disclosureTitle: "Politique de Divulgation Responsable",
    disclosure1: "Nous prenons la sécurité au sérieux. Si vous découvrez une vulnérabilité de sécurité potentielle sur notre site Web ou nos systèmes, nous vous encourageons à nous la signaler de manière responsable. Nous apprécions les efforts des chercheurs en sécurité et nous nous engageons à collaborer avec vous pour comprendre et résoudre le problème rapidement.",
    disclosure2: "Pour signaler une vulnérabilité de sécurité :",
    reportTitle: "Pour signaler une vulnérabilité de sécurité :",
    reportText1: "Veuillez envoyer un e-mail à",
    reportText2: "avec une description détaillée du problème, des étapes pour le reproduire et tout justificatif. Veuillez ne pas divulguer publiquement la vulnérabilité tant que nous n'avons pas eu l'occasion d'enquêter et d'y remédier.",
    reportItems: [
      "Description de la vulnérabilité et de son impact potentiel",
      "Instructions étape par étape pour reproduire le problème",
      "Captures d'écran, journaux ou code de preuve de concept pertinents",
      "Vos coordonnées pour le suivi",
    ],
    commitmentsTitle: "Nos Engagements",
    commitments: [
      "Nous accuserons réception de votre rapport dans les 3 jours ouvrables",
      "Nous enquêterons et vous tiendrons informé de nos progrès",
      "Nous n'intenterons pas de poursuites judiciaires contre les chercheurs agissant de bonne foi",
      "Nous travaillerons à remédier aux vulnérabilités confirmées en temps opportun",
    ],
    scopeTitle: "Périmètre",
    scopeIntro: "Notre programme de divulgation responsable couvre :",
    scopeIn: ["revosso.com et tous les sous-domaines", "Les API publiques exploitées par Revosso"],
    scopeOutIntro: "Hors périmètre :",
    scopeOut: [
      "Attaques d'ingénierie sociale ciblant le personnel de Revosso",
      "Sécurité physique",
      "Attaques par déni de service",
      "Services et plateformes tiers non exploités par Revosso",
    ],
    contactTitle: "Contact",
    contactIntro: "Pour les demandes liées à la sécurité :",
    contactCompany: "Sécurité Revosso",
    contactSecurity: "Signalements de sécurité :",
    contactGeneral: "Renseignements généraux :",
    contactWebsite: "Site web :",
  },
  "pt-BR": {
    title: "Segurança",
    lastUpdated: "Última atualização:",
    intro: "A segurança é um princípio fundamental na Revosso — tanto nos sistemas que construímos para nossos clientes quanto na forma como operamos nossa própria infraestrutura. Esta página descreve nossas práticas de segurança e como reportar possíveis vulnerabilidades.",
    cards: [
      { title: "TLS em Todo Lugar", description: "Todos os dados em trânsito são criptografados usando TLS 1.2 ou superior." },
      { title: "Autenticação Segura", description: "O acesso administrativo é protegido com fluxo de autorização PKCE e validação por chave pública." },
      { title: "Superfície de Ataque Mínima", description: "Os endpoints de API são protegidos com validação JWT e limitação de taxa." },
      { title: "Controles de Acesso", description: "O controle de acesso baseado em funções aplica o menor privilégio em todos os sistemas." },
    ],
    platformTitle: "Medidas de Segurança da Plataforma",
    transportTitle: "Segurança do Transporte",
    transport: [
      "Todas as conexões forçadas sobre HTTPS com TLS 1.2+",
      "HTTP Strict Transport Security (HSTS) habilitado",
      "Cabeçalhos seguros configurados em todas as respostas",
    ],
    authTitle: "Autenticação e Autorização",
    auth: [
      "Acesso administrativo protegido com fluxo de autorização PKCE via provedor de identidade dedicado",
      "Tokens de acesso armazenados apenas em memória — nunca em localStorage ou cookies",
      "Validação JWT no servidor usando infraestrutura de chave pública",
      "Controle de acesso baseado em funções com aplicação de menor privilégio via declarações personalizadas",
      "Todas as rotas de API administrativas protegidas por validação de token no servidor",
    ],
    apiTitle: "Segurança de API e Entradas",
    api: [
      "Validação estrita de entradas em todos os endpoints de API",
      "Limitação de taxa em endpoints públicos para prevenir abusos",
      "Campos honeypot em formulários de contato para detectar envios automatizados",
      "Consultas parametrizadas ao banco de dados para prevenir injeção SQL",
    ],
    infraTitle: "Infraestrutura",
    infra: [
      "Hospedado em uma plataforma de nuvem gerenciada com proteção DDoS em nível de borda",
      "Banco de dados hospedado em armazenamento de nuvem gerenciado e criptografado com controles de acesso rigorosos",
      "Variáveis de ambiente e segredos gerenciados por meio de configuração de ambiente seguro",
      "Nenhum segredo confirmado no controle de versão",
    ],
    disclosureTitle: "Política de Divulgação Responsável",
    disclosure1: "Levamos a segurança a sério. Se você descobrir uma potencial vulnerabilidade de segurança em nosso site ou sistemas, encorajamos que a reporte de forma responsável. Agradecemos os esforços dos pesquisadores de segurança e nos comprometemos a trabalhar com você para entender e resolver o problema rapidamente.",
    disclosure2: "Para reportar uma vulnerabilidade de segurança:",
    reportTitle: "Para reportar uma vulnerabilidade de segurança:",
    reportText1: "Por favor, envie um e-mail para",
    reportText2: "com uma descrição detalhada do problema, etapas para reprodução e quaisquer evidências de suporte. Por favor, não divulgue publicamente a vulnerabilidade até que tenhamos tido a oportunidade de investigá-la e corrigi-la.",
    reportItems: [
      "Descrição da vulnerabilidade e seu impacto potencial",
      "Instruções passo a passo para reproduzir o problema",
      "Capturas de tela, logs ou código de prova de conceito relevantes",
      "Suas informações de contato para acompanhamento",
    ],
    commitmentsTitle: "Nossos Compromissos",
    commitments: [
      "Confirmaremos o recebimento do seu relatório em até 3 dias úteis",
      "Investigaremos e manteremos você informado sobre nosso progresso",
      "Não tomaremos medidas legais contra pesquisadores agindo de boa-fé",
      "Trabalharemos para remediar vulnerabilidades confirmadas em tempo hábil",
    ],
    scopeTitle: "Escopo",
    scopeIntro: "Nosso programa de divulgação responsável cobre:",
    scopeIn: ["revosso.com e todos os subdomínios", "APIs públicas operadas pela Revosso"],
    scopeOutIntro: "Fora do escopo:",
    scopeOut: [
      "Ataques de engenharia social direcionados à equipe da Revosso",
      "Segurança física",
      "Ataques de negação de serviço",
      "Serviços e plataformas de terceiros não operados pela Revosso",
    ],
    contactTitle: "Contato",
    contactIntro: "Para consultas relacionadas à segurança:",
    contactCompany: "Segurança Revosso",
    contactSecurity: "Relatórios de segurança:",
    contactGeneral: "Consultas gerais:",
    contactWebsite: "Site:",
  },
  es: {
    title: "Seguridad",
    lastUpdated: "Última actualización:",
    intro: "La seguridad es un principio fundamental en Revosso — tanto en los sistemas que construimos para nuestros clientes como en la forma en que operamos nuestra propia infraestructura. Esta página describe nuestras prácticas de seguridad y cómo reportar posibles vulnerabilidades.",
    cards: [
      { title: "TLS en Todas Partes", description: "Todos los datos en tránsito están cifrados con TLS 1.2 o superior." },
      { title: "Autenticación Segura", description: "El acceso de administrador está protegido con flujo de autorización PKCE y validación por clave pública." },
      { title: "Superficie de Ataque Mínima", description: "Los endpoints de API están protegidos con validación JWT y limitación de tasa." },
      { title: "Controles de Acceso", description: "El control de acceso basado en roles aplica el mínimo privilegio en todos los sistemas." },
    ],
    platformTitle: "Medidas de Seguridad de la Plataforma",
    transportTitle: "Seguridad del Transporte",
    transport: [
      "Todas las conexiones forzadas sobre HTTPS con TLS 1.2+",
      "HTTP Strict Transport Security (HSTS) habilitado",
      "Cabeceras seguras configuradas en todas las respuestas",
    ],
    authTitle: "Autenticación y Autorización",
    auth: [
      "Acceso de administrador protegido con flujo de autorización PKCE a través de un proveedor de identidad dedicado",
      "Tokens de acceso almacenados solo en memoria — nunca en localStorage ni en cookies",
      "Validación JWT en el servidor utilizando infraestructura de clave pública",
      "Control de acceso basado en roles con aplicación de mínimo privilegio mediante reclamaciones personalizadas",
      "Todas las rutas de API de administrador protegidas por validación de token en el servidor",
    ],
    apiTitle: "Seguridad de API y Entradas",
    api: [
      "Validación estricta de entradas en todos los endpoints de API",
      "Limitación de tasa en endpoints públicos para prevenir abusos",
      "Campos honeypot en formularios de contacto para detectar envíos automatizados",
      "Consultas parametrizadas a la base de datos para prevenir inyección SQL",
    ],
    infraTitle: "Infraestructura",
    infra: [
      "Alojado en una plataforma de nube administrada con protección DDoS a nivel de borde",
      "Base de datos alojada en almacenamiento en la nube administrado y cifrado con controles de acceso estrictos",
      "Variables de entorno y secretos administrados a través de una configuración de entorno segura",
      "Ningún secreto confirmado en el control de versiones",
    ],
    disclosureTitle: "Política de Divulgación Responsable",
    disclosure1: "Tomamos la seguridad en serio. Si descubre una posible vulnerabilidad de seguridad en nuestro sitio web o sistemas, le animamos a reportarla de manera responsable. Apreciamos los esfuerzos de los investigadores de seguridad y nos comprometemos a trabajar con usted para comprender y resolver el problema rápidamente.",
    disclosure2: "Para reportar una vulnerabilidad de seguridad:",
    reportTitle: "Para reportar una vulnerabilidad de seguridad:",
    reportText1: "Por favor, envíe un correo electrónico a",
    reportText2: "con una descripción detallada del problema, pasos para reproducirlo y cualquier evidencia de apoyo. Por favor, no divulgue públicamente la vulnerabilidad hasta que hayamos tenido la oportunidad de investigarla y abordarla.",
    reportItems: [
      "Descripción de la vulnerabilidad y su impacto potencial",
      "Instrucciones paso a paso para reproducir el problema",
      "Capturas de pantalla, registros o código de prueba de concepto relevantes",
      "Su información de contacto para seguimiento",
    ],
    commitmentsTitle: "Nuestros Compromisos",
    commitments: [
      "Acusaremos recibo de su informe dentro de los 3 días hábiles",
      "Investigaremos y le mantendremos informado de nuestro progreso",
      "No tomaremos acciones legales contra investigadores que actúen de buena fe",
      "Trabajaremos para remediar las vulnerabilidades confirmadas de manera oportuna",
    ],
    scopeTitle: "Alcance",
    scopeIntro: "Nuestro programa de divulgación responsable cubre:",
    scopeIn: ["revosso.com y todos los subdominios", "APIs públicas operadas por Revosso"],
    scopeOutIntro: "Fuera del alcance:",
    scopeOut: [
      "Ataques de ingeniería social dirigidos al personal de Revosso",
      "Seguridad física",
      "Ataques de denegación de servicio",
      "Servicios y plataformas de terceros no operados por Revosso",
    ],
    contactTitle: "Contacto",
    contactIntro: "Para consultas relacionadas con la seguridad:",
    contactCompany: "Seguridad Revosso",
    contactSecurity: "Informes de seguridad:",
    contactGeneral: "Consultas generales:",
    contactWebsite: "Sitio web:",
  },
}

const cardIcons = [Lock, Shield, Server, Eye]
const lastUpdated = "March 2026"

export async function generateMetadata(): Promise<Metadata> {
  const t = data[await getLandingLocale()]
  return { title: t.title, alternates: { canonical: "/security" } }
}

export default async function SecurityPage() {
  const t = data[await getLandingLocale()]

  return (
    <LandingSiteShell>
      <LegalPage title={t.title} updated={`${t.lastUpdated} ${lastUpdated}`} intro={t.intro}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {t.cards.map((card, index) => {
            const Icon = cardIcons[index]
            return (
              <li key={card.title} className="space-y-3 rounded-rv-frame border border-rv-border bg-rv-surface p-6">
                <span className="inline-flex size-9 items-center justify-center rounded-rv bg-rv-accent/10 text-rv-accent">
                  <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h2 className="font-semibold">{card.title}</h2>
                <p className="text-base text-rv-muted">{card.description}</p>
              </li>
            )
          })}
        </ul>

        <LegalSection title={t.platformTitle}>
          <LegalSubheading>{t.transportTitle}</LegalSubheading>
          <LegalList>{(t.transport).map((item) => <li key={item}>{item}</li>)}</LegalList>
          <LegalSubheading className="pt-2">{t.authTitle}</LegalSubheading>
          <LegalList>{(t.auth).map((item) => <li key={item}>{item}</li>)}</LegalList>
          <LegalSubheading className="pt-2">{t.apiTitle}</LegalSubheading>
          <LegalList>{(t.api).map((item) => <li key={item}>{item}</li>)}</LegalList>
          <LegalSubheading className="pt-2">{t.infraTitle}</LegalSubheading>
          <LegalList>{(t.infra).map((item) => <li key={item}>{item}</li>)}</LegalList>
        </LegalSection>

        <LegalSection title={t.disclosureTitle}>
          <p>{t.disclosure1}</p>
          <LegalBox className="flex items-start gap-3 border-rv-accent/40">
            <AlertTriangle className="mt-1 size-5 shrink-0 text-rv-accent" aria-hidden="true" strokeWidth={1.75} />
            <div className="space-y-2">
              <p className="font-semibold">{t.reportTitle}</p>
              <p>
                {t.reportText1}{" "}
                <a href="mailto:security@revosso.com" className={legalLinkClass}>
                  security@revosso.com
                </a>{" "}
                {t.reportText2}
              </p>
            </div>
          </LegalBox>
          <p>{t.disclosure2}</p>
          <LegalList>{(t.reportItems).map((item) => <li key={item}>{item}</li>)}</LegalList>
        </LegalSection>

        <LegalSection title={t.commitmentsTitle}>
          <LegalList>{(t.commitments).map((item) => <li key={item}>{item}</li>)}</LegalList>
        </LegalSection>

        <LegalSection title={t.scopeTitle}>
          <p>{t.scopeIntro}</p>
          <LegalList>{(t.scopeIn).map((item) => <li key={item}>{item}</li>)}</LegalList>
          <p>{t.scopeOutIntro}</p>
          <LegalList>{(t.scopeOut).map((item) => <li key={item}>{item}</li>)}</LegalList>
        </LegalSection>

        <LegalSection title={t.contactTitle}>
          <p>{t.contactIntro}</p>
          <LegalBox>
            <p className="font-semibold">{t.contactCompany}</p>
            <p>
              {t.contactSecurity}{" "}
              <a href="mailto:security@revosso.com" className={legalLinkClass}>
                security@revosso.com
              </a>
            </p>
            <p>
              {t.contactGeneral}{" "}
              <a href="mailto:contact@revosso.com" className={legalLinkClass}>
                contact@revosso.com
              </a>
            </p>
            <p>
              {t.contactWebsite}{" "}
              <Link href="/" className={legalLinkClass}>
                revosso.com
              </Link>
            </p>
          </LegalBox>
        </LegalSection>
      </LegalPage>
    </LandingSiteShell>
  )
}
