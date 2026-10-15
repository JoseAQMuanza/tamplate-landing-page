type HeadingKind = 'hero' | 'section'

export function getHeadingSizeClass(text: string, kind: HeadingKind): string {
  const length = [...text.trim()].length

  if (kind === 'hero') {
    if (length > 58) return 'text-5xl sm:text-6xl lg:text-7xl'
    if (length > 35) return 'text-6xl sm:text-7xl lg:text-8xl'

    return 'text-6xl sm:text-8xl lg:text-[8.5rem]'
  }

  if (length > 48) return 'text-4xl sm:text-5xl lg:text-6xl'
  if (length > 30) return 'text-4xl sm:text-6xl lg:text-7xl'

  return 'text-5xl sm:text-7xl'
}