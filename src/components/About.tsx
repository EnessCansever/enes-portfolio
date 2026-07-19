import { aboutHighlights } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="Hakkımda"
      title="Frontend eğitmenliğinden full-stack geliştirmeye"
      description="Frontend eğitmenliği deneyimimle HTML, CSS, JavaScript, Bootstrap ve React temellerini anlattım. Bu süreçte teknik konuları sadeleştirme, örneklerle açıklama ve kullanıcıya dönük düşünme konusunda güçlü bir pratik kazandım."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {aboutHighlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}