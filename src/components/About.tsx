import { aboutHighlights } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="Hakkımda"
      title="Kısa profil alanı"
      description="Bu bölüm daha sonra kişisel özet, yaklaşım ve çalışma tarzı ile doldurulabilir."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {aboutHighlights.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}