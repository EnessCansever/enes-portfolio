import { skillGroups } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Yetkinlikler"
      title="Kullandığım teknolojiler"
      description="Frontend tarafında React ve TypeScript’i, backend tarafında Node.js ve MongoDB’yi gerçek proje akışları içinde kullanmaya odaklanıyorum."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-indigo-200 hover:shadow-md"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 transition duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}