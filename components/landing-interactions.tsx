'use client'

import { useState } from 'react'
import { ChevronDown, Menu, Minus, X } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  return <><button className="sm:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>{open && <nav className="flex flex-col gap-5 border-t border-white/15 bg-brand-primary px-6 py-6 text-brand-bg shadow-xl sm:hidden" aria-label="Navegação principal">{siteConfig.navigation.map(({ label, href }) => <a key={href} href={href} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.18em] text-brand-bg/80">{label}</a>)}</nav>}</>
}

export function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const item = siteConfig.testimonials[active]
  const move = (direction: -1 | 1) => setActive((current) => (current + direction + siteConfig.testimonials.length) % siteConfig.testimonials.length)
  return <div className="mx-auto max-w-7xl"><div className="mb-10 flex items-center justify-between gap-6 md:mb-14"><p className="text-[11px] uppercase tracking-[0.22em] text-brand-accent">{siteConfig.testimonialsSection.title}</p><div className="flex gap-2"><button onClick={() => move(-1)} className="flex size-10 items-center justify-center rounded-full border border-brand-primary/20 text-brand-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-brand-primary hover:text-brand-bg hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent" aria-label={siteConfig.testimonialsSection.previousLabel}><span aria-hidden="true">&#8592;</span></button><button onClick={() => move(1)} className="flex size-10 items-center justify-center rounded-full border border-brand-primary/20 text-brand-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-brand-primary hover:text-brand-bg hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent" aria-label={siteConfig.testimonialsSection.nextLabel}><span aria-hidden="true">&#8594;</span></button></div></div><div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr]"><Minus className="hidden size-12 text-brand-accent lg:block" /><div><blockquote className="max-w-4xl rounded-3xl border border-brand-text/10 bg-gradient-to-br from-brand-bg via-brand-bg to-brand-secondary/35 p-8 font-serif text-4xl leading-[1.04] tracking-tight text-brand-primary shadow-xl shadow-brand-primary/5 sm:p-12 sm:text-6xl">&ldquo;{item.quote}&rdquo;</blockquote><p className="mt-8 text-xs font-medium uppercase tracking-[0.15em] text-brand-primary/65">{item.name} <span className="mx-2 text-brand-accent">/</span> {item.company}</p></div></div></div>
}

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="font-serif text-5xl leading-none tracking-[-0.05em] text-brand-primary sm:text-6xl">{siteConfig.faq.title}</h2><div className="border-t border-brand-text/15">{siteConfig.faq.items.map(({ question, answer }, index) => <div key={question} className="border-b border-brand-text/15"><button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} className="flex w-full items-center justify-between py-6 text-left text-sm font-semibold text-brand-primary transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"><span>{question}</span><ChevronDown className={`size-4 text-brand-accent transition ${open === index ? 'rotate-180' : ''}`} /></button>{open === index && <p className="max-w-xl pb-6 pr-8 text-sm leading-relaxed text-brand-text/70">{answer}</p>}</div>)}</div></div>
}
