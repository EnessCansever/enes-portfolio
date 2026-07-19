export type NavigationItem = {
  label: string
  href: string
}

export type HeroStat = {
  value: string
  label: string
}

export type HighlightItem = {
  title: string
  description: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type ProjectItem = {
  name: string
  category: string
  description: string
  stack: string[]
  liveUrl: string
  githubUrl: string
  images?: string[]
  features: string[]
  accent: 'indigo' | 'violet' | 'blue' | 'slate'
  featured?: boolean
}

export type ExperienceItem = {
  period: string
  title: string
  description: string
}

export type FocusItem = {
  title: string
  description: string
}

export type ContactItem = {
  label: string
  value: string
  href: string
  external?: boolean
}
