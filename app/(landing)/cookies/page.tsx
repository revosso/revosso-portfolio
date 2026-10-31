import type { Metadata } from "next"
import Link from "next/link"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { LegalBox, LegalList, LegalPage, LegalSection, LegalSubheading, legalLinkClass } from "@/components/landing/legal"

type Locale = "en" | "fr" | "pt-BR" | "es"

const data: Record<Locale, {
  title: string
  lastUpdated: string
  s1Title: string
  s1p1: string
  s2Title: string
  s2_1Title: string
  s2_1p1: string
  cookieTableCookie: string
  cookieTablePurpose: string
  cookieTableDuration: string
  cookieSessionPurpose: string
  cookieSessionDuration: string
  s2_2Title: string
  s2_2p1: string
  analyticsTableService: string
  analyticsTablePurpose: string
  analyticsTablePolicy: string
  analyticsServiceName: string
  analyticsServicePurpose: string
  s3Title: string
  s3Intro: string
  s3Items: string[]
  s4Title: string
  s4p1: string
  s4p2: string
  s4Chrome: string
  s4Firefox: string
  s4Safari: string
  s4Edge: string
  s5Title: string
  s5p1: string
  s6Title: string
  s6p1: string
  s6Company: string
  s6Email: string
  s6Website: string
}> = {
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last updated:",
    s1Title: "1. What Are Cookies?",
    s1p1: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide reporting information to site owners. Cookies can be "persistent" (remaining on your device for a set period) or "session" cookies (deleted when you close your browser).`,
    s2Title: "2. Cookies We Use",
    s2_1Title: "2.1 Strictly Necessary Cookies",
    s2_1p1: "These cookies are essential for the website to function and cannot be switched off. They are typically set in response to actions you take, such as submitting a form.",
    cookieTableCookie: "Cookie",
    cookieTablePurpose: "Purpose",
    cookieTableDuration: "Duration",
    cookieSessionPurpose: "Session management for authenticated admin users",
    cookieSessionDuration: "Session",
    s2_2Title: "2.2 Analytics Cookies",
    s2_2p1: "We use an analytics service to understand how visitors interact with our website. This service collects anonymized, aggregated data and does not track individual visitors across sites.",
    analyticsTableService: "Service",
    analyticsTablePurpose: "Purpose",
    analyticsTablePolicy: "Privacy Policy",
    analyticsServiceName: "Analytics Provider",
    analyticsServicePurpose: "Anonymized page view analytics",
    s3Title: "3. Cookies We Do Not Use",
    s3Intro: "Revosso does not use:",
    s3Items: [
      "Advertising or targeting cookies",
      "Third-party social media cookies",
      "Persistent tracking cookies for individual visitor profiling",
    ],
    s4Title: "4. Managing Your Cookie Preferences",
    s4p1: "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, or to alert you when cookies are being sent. However, disabling strictly necessary cookies may affect the functionality of the Site.",
    s4p2: "Common browser cookie controls:",
    s4Chrome: "Settings → Privacy and Security → Cookies",
    s4Firefox: "Options → Privacy & Security → Cookies and Site Data",
    s4Safari: "Preferences → Privacy → Cookies",
    s4Edge: "Settings → Cookies and site permissions",
    s5Title: "5. Changes to This Policy",
    s5p1: `We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our practices. We will update the "Last updated" date at the top of this page when changes are made.`,
    s6Title: "6. Contact",
    s6p1: "If you have questions about our use of cookies, please contact us:",
    s6Company: "Revosso",
    s6Email: "Email:",
    s6Website: "Website:",
  },
  fr: {
    title: "Politique en Matière de Cookies",
    lastUpdated: "Dernière mise à jour :",
    s1Title: "1. Que sont les Cookies ?",
    s1p1: `Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez un site Web. Ils sont largement utilisés pour faire fonctionner efficacement les sites Web et fournir des informations de rapport aux propriétaires de sites. Les cookies peuvent être « persistants » (restant sur votre appareil pendant une période déterminée) ou des cookies de « session » (supprimés lorsque vous fermez votre navigateur).`,
    s2Title: "2. Cookies que Nous Utilisons",
    s2_1Title: "2.1 Cookies Strictement Nécessaires",
    s2_1p1: "Ces cookies sont essentiels au fonctionnement du site Web et ne peuvent pas être désactivés. Ils sont généralement définis en réponse aux actions que vous effectuez, comme la soumission d'un formulaire.",
    cookieTableCookie: "Cookie",
    cookieTablePurpose: "Finalité",
    cookieTableDuration: "Durée",
    cookieSessionPurpose: "Gestion des sessions pour les utilisateurs administrateurs authentifiés",
    cookieSessionDuration: "Session",
    s2_2Title: "2.2 Cookies d'Analyse",
    s2_2p1: "Nous utilisons un service d'analyse pour comprendre comment les visiteurs interagissent avec notre site Web. Ce service collecte des données anonymisées et agrégées et ne suit pas les visiteurs individuels sur les sites.",
    analyticsTableService: "Service",
    analyticsTablePurpose: "Finalité",
    analyticsTablePolicy: "Politique de confidentialité",
    analyticsServiceName: "Fournisseur d'analyse",
    analyticsServicePurpose: "Analyses anonymisées des pages vues",
    s3Title: "3. Cookies que Nous N'utilisons Pas",
    s3Intro: "Revosso n'utilise pas :",
    s3Items: [
      "Cookies publicitaires ou de ciblage",
      "Cookies de réseaux sociaux tiers",
      "Cookies de suivi persistants pour le profilage individuel des visiteurs",
    ],
    s4Title: "4. Gestion de Vos Préférences en Matière de Cookies",
    s4p1: "La plupart des navigateurs Web vous permettent de contrôler les cookies via leurs paramètres. Vous pouvez configurer votre navigateur pour refuser les cookies ou pour vous alerter lorsque des cookies sont envoyés. Cependant, désactiver les cookies strictement nécessaires peut affecter la fonctionnalité du Site.",
    s4p2: "Contrôles courants des cookies des navigateurs :",
    s4Chrome: "Paramètres → Confidentialité et sécurité → Cookies",
    s4Firefox: "Options → Vie privée et sécurité → Cookies et données de site",
    s4Safari: "Préférences → Confidentialité → Cookies",
    s4Edge: "Paramètres → Cookies et autorisations de site",
    s5Title: "5. Modifications de Cette Politique",
    s5p1: `Nous pouvons mettre à jour cette politique en matière de cookies de temps à autre pour refléter les changements de technologie, de réglementation ou de nos pratiques. Nous mettrons à jour la date de « Dernière mise à jour » en haut de cette page lors des modifications.`,
    s6Title: "6. Contact",
    s6p1: "Si vous avez des questions sur notre utilisation des cookies, veuillez nous contacter :",
    s6Company: "Revosso",
    s6Email: "Courriel :",
    s6Website: "Site web :",
  },
  "pt-BR": {
    title: "Política de Cookies",
    lastUpdated: "Última atualização:",
    s1Title: "1. O que são Cookies?",
    s1p1: `Cookies são pequenos arquivos de texto colocados no seu dispositivo quando você visita um site. Eles são amplamente usados para fazer os sites funcionarem com eficiência e fornecer informações de relatório aos proprietários dos sites. Os cookies podem ser "persistentes" (permanecendo no seu dispositivo por um período definido) ou cookies de "sessão" (excluídos quando você fecha o navegador).`,
    s2Title: "2. Cookies que Usamos",
    s2_1Title: "2.1 Cookies Estritamente Necessários",
    s2_1p1: "Esses cookies são essenciais para o funcionamento do site e não podem ser desativados. Eles são normalmente definidos em resposta a ações que você realiza, como o envio de um formulário.",
    cookieTableCookie: "Cookie",
    cookieTablePurpose: "Finalidade",
    cookieTableDuration: "Duração",
    cookieSessionPurpose: "Gerenciamento de sessão para usuários administradores autenticados",
    cookieSessionDuration: "Sessão",
    s2_2Title: "2.2 Cookies de Análise",
    s2_2p1: "Usamos um serviço de análise para entender como os visitantes interagem com nosso site. Este serviço coleta dados anonimizados e agregados e não rastreia visitantes individuais entre sites.",
    analyticsTableService: "Serviço",
    analyticsTablePurpose: "Finalidade",
    analyticsTablePolicy: "Política de Privacidade",
    analyticsServiceName: "Provedor de Análise",
    analyticsServicePurpose: "Análise anonimizada de visualizações de página",
    s3Title: "3. Cookies que Não Usamos",
    s3Intro: "A Revosso não usa:",
    s3Items: [
      "Cookies de publicidade ou segmentação",
      "Cookies de redes sociais de terceiros",
      "Cookies de rastreamento persistentes para perfilagem individual de visitantes",
    ],
    s4Title: "4. Gerenciando Suas Preferências de Cookies",
    s4p1: "A maioria dos navegadores da web permite que você controle os cookies por meio de suas configurações. Você pode configurar seu navegador para recusar cookies ou para alertá-lo quando cookies estiverem sendo enviados. No entanto, desabilitar cookies estritamente necessários pode afetar a funcionalidade do Site.",
    s4p2: "Controles comuns de cookies do navegador:",
    s4Chrome: "Configurações → Privacidade e segurança → Cookies",
    s4Firefox: "Opções → Privacidade e Segurança → Cookies e Dados do Site",
    s4Safari: "Preferências → Privacidade → Cookies",
    s4Edge: "Configurações → Cookies e permissões de site",
    s5Title: "5. Alterações nesta Política",
    s5p1: `Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças na tecnologia, regulamentação ou nossas práticas. Atualizaremos a data de "Última atualização" no topo desta página quando forem feitas alterações.`,
    s6Title: "6. Contato",
    s6p1: "Se você tiver dúvidas sobre nosso uso de cookies, entre em contato conosco:",
    s6Company: "Revosso",
    s6Email: "E-mail:",
    s6Website: "Site:",
  },
  es: {
    title: "Política de Cookies",
    lastUpdated: "Última actualización:",
    s1Title: "1. ¿Qué son las Cookies?",
    s1p1: `Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita un sitio web. Se utilizan ampliamente para que los sitios web funcionen de manera eficiente y para proporcionar información de informes a los propietarios de sitios. Las cookies pueden ser "persistentes" (permaneciendo en su dispositivo por un período establecido) o cookies de "sesión" (eliminadas cuando cierra su navegador).`,
    s2Title: "2. Cookies que Utilizamos",
    s2_1Title: "2.1 Cookies Estrictamente Necesarias",
    s2_1p1: "Estas cookies son esenciales para que el sitio web funcione y no se pueden desactivar. Generalmente se establecen en respuesta a las acciones que usted realiza, como enviar un formulario.",
    cookieTableCookie: "Cookie",
    cookieTablePurpose: "Propósito",
    cookieTableDuration: "Duración",
    cookieSessionPurpose: "Gestión de sesiones para usuarios administradores autenticados",
    cookieSessionDuration: "Sesión",
    s2_2Title: "2.2 Cookies de Análisis",
    s2_2p1: "Utilizamos un servicio de análisis para comprender cómo los visitantes interactúan con nuestro sitio web. Este servicio recopila datos anonimizados y agregados y no rastrea a los visitantes individuales entre sitios.",
    analyticsTableService: "Servicio",
    analyticsTablePurpose: "Propósito",
    analyticsTablePolicy: "Política de Privacidad",
    analyticsServiceName: "Proveedor de Análisis",
    analyticsServicePurpose: "Análisis anonimizado de visitas a páginas",
    s3Title: "3. Cookies que No Utilizamos",
    s3Intro: "Revosso no utiliza:",
    s3Items: [
      "Cookies de publicidad o segmentación",
      "Cookies de redes sociales de terceros",
      "Cookies de seguimiento persistentes para la elaboración de perfiles de visitantes individuales",
    ],
    s4Title: "4. Gestión de Sus Preferencias de Cookies",
    s4p1: "La mayoría de los navegadores web le permiten controlar las cookies a través de su configuración. Puede configurar su navegador para rechazar cookies o para alertarle cuando se envíen cookies. Sin embargo, deshabilitar las cookies estrictamente necesarias puede afectar la funcionalidad del Sitio.",
    s4p2: "Controles comunes de cookies del navegador:",
    s4Chrome: "Configuración → Privacidad y seguridad → Cookies",
    s4Firefox: "Opciones → Privacidad y Seguridad → Cookies y datos del sitio",
    s4Safari: "Preferencias → Privacidad → Cookies",
    s4Edge: "Configuración → Cookies y permisos del sitio",
    s5Title: "5. Cambios en esta Política",
    s5p1: `Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en la tecnología, la regulación o nuestras prácticas. Actualizaremos la fecha de "Última actualización" en la parte superior de esta página cuando se realicen cambios.`,
    s6Title: "6. Contacto",
    s6p1: "Si tiene preguntas sobre nuestro uso de cookies, contáctenos:",
    s6Company: "Revosso",
    s6Email: "Correo electrónico:",
    s6Website: "Sitio web:",
  },
}

const lastUpdated = "March 2026"

export async function generateMetadata(): Promise<Metadata> {
  const t = data[await getLandingLocale()]
  return { title: t.title, alternates: { canonical: "/cookies" } }
}

const tableClass = "w-full text-left text-base"
const headCellClass = "border-b border-rv-border p-4 font-semibold"

export default async function CookiesPage() {
  const t = data[await getLandingLocale()]

  return (
    <LandingSiteShell>
      <LegalPage title={t.title} updated={`${t.lastUpdated} ${lastUpdated}`}>
        <LegalSection title={t.s1Title}>
          <p>{t.s1p1}</p>
        </LegalSection>
        <LegalSection title={t.s2Title}>
          <LegalSubheading>{t.s2_1Title}</LegalSubheading>
          <p>{t.s2_1p1}</p>
          <div className="overflow-x-auto rounded-rv-frame border border-rv-border bg-rv-surface">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={headCellClass}>{t.cookieTableCookie}</th>
                  <th className={headCellClass}>{t.cookieTablePurpose}</th>
                  <th className={headCellClass}>{t.cookieTableDuration}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-medium">revosso-session</td>
                  <td className="p-4">{t.cookieSessionPurpose}</td>
                  <td className="p-4">{t.cookieSessionDuration}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <LegalSubheading className="pt-2">{t.s2_2Title}</LegalSubheading>
          <p>{t.s2_2p1}</p>
          <div className="overflow-x-auto rounded-rv-frame border border-rv-border bg-rv-surface">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={headCellClass}>{t.analyticsTableService}</th>
                  <th className={headCellClass}>{t.analyticsTablePurpose}</th>
                  <th className={headCellClass}>{t.analyticsTablePolicy}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">{t.analyticsServiceName}</td>
                  <td className="p-4">{t.analyticsServicePurpose}</td>
                  <td className="p-4 text-rv-muted">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </LegalSection>
        <LegalSection title={t.s3Title}>
          <p>{t.s3Intro}</p>
          <LegalList>{(t.s3Items).map((item) => <li key={item}>{item}</li>)}</LegalList>
        </LegalSection>
        <LegalSection title={t.s4Title}>
          <p>{t.s4p1}</p>
          <p>{t.s4p2}</p>
          <LegalList>
            <li>
              <strong className="font-semibold">Chrome:</strong> {t.s4Chrome}
            </li>
            <li>
              <strong className="font-semibold">Firefox:</strong> {t.s4Firefox}
            </li>
            <li>
              <strong className="font-semibold">Safari:</strong> {t.s4Safari}
            </li>
            <li>
              <strong className="font-semibold">Edge:</strong> {t.s4Edge}
            </li>
          </LegalList>
        </LegalSection>
        <LegalSection title={t.s5Title}>
          <p>{t.s5p1}</p>
        </LegalSection>
        <LegalSection title={t.s6Title}>
          <p>{t.s6p1}</p>
          <ContactBox company={t.s6Company} emailLabel={t.s6Email} websiteLabel={t.s6Website} />
        </LegalSection>
      </LegalPage>
    </LandingSiteShell>
  )
}

function ContactBox({ company, emailLabel, websiteLabel }: { company: string; emailLabel: string; websiteLabel: string }) {
  return (
    <LegalBox>
      <p className="font-semibold">{company}</p>
      <p>
        {emailLabel}{" "}
        <a href="mailto:contact@revosso.com" className={legalLinkClass}>
          contact@revosso.com
        </a>
      </p>
      <p>
        {websiteLabel}{" "}
        <Link href="/" className={legalLinkClass}>
          revosso.com
        </Link>
      </p>
    </LegalBox>
  )
}
