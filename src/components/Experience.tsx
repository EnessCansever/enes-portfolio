import { experienceItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Experience() {
  return (
    <SectionShell
      number="04"
      id="experience"
      eyebrow="Deneyim"
      title="Deneyim ve geçmiş"
      description="Frontend eğitmenliği, kişisel projeler ve full-stack geliştirme sürecimi özetleyen kısa zaman çizelgesi."
    >
      <div className="space-y-2">
        {experienceItems.map((item) => (
          <article
            key={`${item.period}-${item.title}`}
            className="group grid gap-4 border-t border-slate-800/80 py-5 transition duration-300 first:border-t-0 first:pt-0 last:pb-0 hover:bg-gradient-to-r hover:from-cyan-400/5 hover:via-transparent hover:to-violet-500/5 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-6"
          >
            <p className="text-sm font-semibold text-cyan-300 transition duration-300 group-hover:translate-x-0.5">{item.period}</p>
            <div>
              <h3 className="text-base font-medium text-white transition duration-300 group-hover:translate-x-0.5 group-hover:text-cyan-200">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
            <div className="flex items-start justify-start md:justify-end">
              <div className="flex h-12 w-12 items-center justify-center border border-slate-700/80 bg-[#070b1a] text-sm font-semibold text-cyan-300 opacity-0 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_0_24px_rgba(34,211,238,0.14)] transition duration-300 group-hover:opacity-100 group-hover:translate-x-0 md:translate-x-2">
                DA
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}