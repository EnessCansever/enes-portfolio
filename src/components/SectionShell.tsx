import type { ReactNode } from 'react'

type SectionShellProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  children: ReactNode
  className?: string
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="section-card">
        <div className="max-w-2xl">
          <p className="section-label">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-text">{description}</p>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}