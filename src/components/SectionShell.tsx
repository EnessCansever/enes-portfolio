import type { ReactNode } from 'react'

type SectionShellProps = {
  number: string
  id: string
  eyebrow: string
  title: string
  description: string
  children: ReactNode
  className?: string
}

export function SectionShell({
  number,
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionShellProps) {
  return (
    <section id={id} className={`group scroll-mt-24 ${className}`}>
      <div className="border-t border-slate-800/65 py-10 sm:py-12 lg:py-14">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300/90">
              {number}
            </span>
            <span className="h-px w-8 bg-slate-700 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-300" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.35rem)] font-semibold tracking-[-0.05em] text-[#f5f7fb]">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}