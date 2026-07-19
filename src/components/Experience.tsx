import { experienceItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Deneyim"
      title="Deneyim ve geçmiş"
      description="Frontend eğitmenliği, kişisel projeler ve full-stack geliştirme sürecimi özetleyen kısa bir zaman çizelgesi."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {experienceItems.map((item) => (
          <article
            key={`${item.period}-${item.title}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
              {item.period}
            </span>
            <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}