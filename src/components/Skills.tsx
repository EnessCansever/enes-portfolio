import { skillGroups } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Skills() {
  return (
    <SectionShell
      number="02"
      id="skills"
      eyebrow="Yetkinlikler"
      title="Kullandığım teknolojiler"
      description="Frontend tarafında React ve TypeScript’i, backend tarafında Node.js ve MongoDB’yi gerçek proje akışları içinde kullanmaya odaklanıyorum."
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <p className="max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
          Arayüz geliştirirken component yapısı, okunabilir kod, responsive tasarım ve kullanıcı akışını birlikte düşünmeye çalışıyorum.
        </p>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-slate-800/80 pt-4 first:border-t-0 first:pt-0">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <h3 className="text-base font-medium text-white">{group.title}</h3>
                <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-slate-500 sm:justify-end">
                  {group.items.map((item) => (
                    <li key={item} className="transition-colors duration-300 hover:text-cyan-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}