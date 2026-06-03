import { aboutHighlights } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function About() {
  return (
    <SectionShell
      number="01"
      id="about"
      eyebrow="Hakkımda"
      title="Frontend eğitmenliğinden full-stack geliştirmeye"
      description="Frontend eğitmenliği deneyimimle HTML, CSS, JavaScript, Bootstrap ve React temellerini anlattım. Bu süreçte teknik konuları sadeleştirme, örneklerle açıklama ve kullanıcıya dönük düşünme konusunda güçlü bir pratik kazandım."
    >
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <p className="max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
          Frontend tarafında sade ve net arayüzler kurmayı, kullanıcı akışını gereksiz kalabalık olmadan çözmeyi önemsiyorum.
        </p>

        {aboutHighlights.map((item) => (
          <div key={item.title} className="border-t border-slate-800/80 py-4 first:border-t-0 first:pt-0 last:pb-0">
            <h3 className="text-base font-medium text-white">{item.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}