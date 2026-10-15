const siteConfigData = {
  colors: {
    primary: 'oklch(0.19 0.035 250)',
    secondary: 'oklch(0.91 0.025 80)',
    accent: 'oklch(0.77 0.13 78)',
    background: 'oklch(0.965 0.012 85)',
    text: 'oklch(0.19 0.035 250)',
  },
  companyName: 'Mário & Bastos',
  eyebrow: 'Advocacia estratégica · Luanda',
  tagline: 'Clareza para decisões que importam.',
  description: 'Assessoria jurídica próxima, estratégica e orientada para resultados reais.',
  whatsapp: '244900000000',
  whatsappMessage: 'Olá, gostaria de agendar uma consulta.',
  phone: '+244 900 000 000',
  email: 'geral@mariobastos.ao',
  address: 'Rua Amílcar Cabral, 42 · Luanda',
  seo: {
    title: 'Mário & Bastos | Advocacia estratégica em Luanda',
    description: 'Assessoria jurídica próxima, estratégica e orientada para resultados reais.',
    keywords: ['advocacia', 'Luanda', 'assessoria jurídica'],
    favicon: "/icon.svg",
  },
  navigation: [
    { label: 'Áreas de atuação', href: '#servicos' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Testemunhos', href: '#testemunhos' },
  ],
  hero: {
    title: 'O direito ao seu lado.',
    subtitle: 'Estratégia jurídica para proteger o que construiu e abrir caminho para o próximo passo.',
    ctaPrimary: 'Agendar consulta',
    ctaSecondary: 'Falar no WhatsApp',
    imageAlt: 'Fachada contemporânea do escritório Mário & Bastos',
    backgroundImage: '/images/hero-legal.webp',
  },
  stats: [
    { value: '15+', label: 'anos de experiência' },
    { value: '500+', label: 'casos acompanhados' },
    { value: '98%', label: 'recomendação dos clientes' },
  ],
  servicesSection: {
    eyebrow: 'Como podemos ajudar',
    title: 'Prontos para o que vem a seguir.',
    description: 'Conhecimento profundo, comunicação direta e uma visão prática do direito.',
  },
  services: [
    { number: '01', title: 'Direito empresarial', description: 'Decisões seguras para empresas que querem crescer com consistência.' },
    { number: '02', title: 'Direito civil', description: 'Proteção dos seus direitos em cada contrato, relação e conflito.' },
    { number: '03', title: 'Imobiliário', description: 'Segurança jurídica para os seus investimentos e património.' },
    { number: '04', title: 'Laboral', description: 'Relações de trabalho mais claras, equilibradas e conformes.' },
  ],
  about: {
    eyebrow: 'Uma abordagem diferente',
    title: 'Direito com visão humana.',
    description: 'Acreditamos que o melhor trabalho jurídico começa por ouvir. Traduzimos complexidade em decisões claras e construímos rela??es de confiança que duram.',
    principles: [
      { icon: 'shield', title: 'Rigor e proximidade', description: 'Cada caso recebe atenção sénior e uma estratégia feita à medida.' },
      { icon: 'scale', title: 'Perspetiva de negócio', description: 'Decisões jurídicas alinhadas com os seus objetivos.' },
    ],
  },
  testimonialsSection: { title: 'O que dizem de nós', previousLabel: 'Testemunho anterior', nextLabel: 'Próximo testemunho' },
  testimonials: [
    { quote: 'Encontrámos mais do que advogados: encontrámos parceiros que entendem o nosso negócio.', name: 'Ana P. · Diretora executiva', company: 'Grupo Horizonte' },
    { quote: 'A equipa tornou um processo complexo simples, claro e muito mais tranquilo.', name: 'Carlos M. · Empresário', company: 'Luanda' },
  ],
  faq: {
    title: 'Perguntas frequentes.',
    items: [
      { question: 'Atendem clientes fora de Luanda?', answer: 'Sim. Acompanhamos clientes em todo o território nacional e apoiamos processos com dimensão internacional.' },
      { question: 'Como funciona a primeira consulta?', answer: 'Come?amos por compreender o seu contexto e objetivos. Depois, apresentamos uma leitura clara dos caminhos possíveis.' },
      { question: 'Quanto custa uma consulta?', answer: 'Os honorários são definidos com transparência de acordo com a complexidade e o âmbito do trabalho.' },
    ],
  },
  finalCta: {
    eyebrow: 'Comece por uma conversa',
    title: 'O próximo passo começa aqui.',
    action: 'Falar com a nossa equipa',
  },
  footer: { copyright: 'Todos os direitos reservados', whatsappLabel: 'Falar connosco pelo WhatsApp' },
} as const

import { z } from 'zod'

export const siteIconKeys = ['shield', 'scale'] as const
export type SiteIcon = (typeof siteIconKeys)[number]

export const siteConfigSchema = z.object({
  colors: z.object({
    primary: z.string(),
    secondary: z.string(),
    accent: z.string(),
    background: z.string(),
    text: z.string(),
  }),
  companyName: z.string(),
  eyebrow: z.string(),
  tagline: z.string(),
  description: z.string(),
  whatsapp: z.string(),
  whatsappMessage: z.string(),
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    favicon: z.string(),
  }),
  navigation: z.array(z.object({ label: z.string(), href: z.string() })),
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string(),
    imageAlt: z.string(),
    backgroundImage: z.string(),
  }),
  stats: z.array(z.object({ value: z.string(), label: z.string() })),
  servicesSection: z.object({ eyebrow: z.string(), title: z.string(), description: z.string() }),
  services: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
  about: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    principles: z.array(z.object({
      icon: z.enum(siteIconKeys),
      title: z.string(),
      description: z.string(),
    })),
  }),
  testimonialsSection: z.object({ title: z.string(), previousLabel: z.string(), nextLabel: z.string() }),
  testimonials: z.array(z.object({ quote: z.string(), name: z.string(), company: z.string() })),
  faq: z.object({
    title: z.string(),
    items: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
  finalCta: z.object({ eyebrow: z.string(), title: z.string(), action: z.string() }),
  footer: z.object({ copyright: z.string(), whatsappLabel: z.string() }),
})

export type SiteConfig = z.infer<typeof siteConfigSchema>
export const siteConfig: SiteConfig = siteConfigSchema.parse(siteConfigData)

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

