import { Scale, ShieldCheck, type LucideIcon } from 'lucide-react'
import type { SiteIcon } from '@/config/site'

export const IconRegistry = {
  shield: ShieldCheck,
  scale: Scale,
} satisfies Record<SiteIcon, LucideIcon>

export function ConfiguredIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = IconRegistry[name as SiteIcon]

  if (!IconComponent) {
    return <span aria-hidden="true" className={className} />
  }

  return <IconComponent aria-hidden="true" className={className} />
}
