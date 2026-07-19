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
    <section id={id} className={`scroll-mt-28 py-12 sm:scroll-mt-32 sm:py-16 lg:py-20 ${className}`}>
      <div className="max-w-2xl">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.65rem)] font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  )
}
