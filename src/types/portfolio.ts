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
  description: string
  stack: string[]
  liveUrl: string
  githubUrl: string
  previewLabel: string
  previewText: string
  accent: 'cyan' | 'violet' | 'blue'
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