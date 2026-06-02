import { experienceItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Deneyim"
      title="Kısa zaman çizelgesi"
      description="Bu yapı, ileride gerçek deneyim maddeleri veya eğitim geçmişiyle doldurulabilir."
    >
      <div className="space-y-4">
        {experienceItems.map((item) => (
          <article
            key={`${item.period}-${item.title}`}
            className="grid gap-3 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 md:grid-cols-[180px_1fr] md:gap-6"
          >
            <p className="text-sm font-semibold text-cyan-300">{item.period}</p>
            <div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}