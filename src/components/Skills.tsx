import { skillGroups } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Yetenekler"
      title="Teknoloji ve çalışma başlıkları"
      description="Şimdilik örnek gruplar kullanıldı; gerçek beceriler daha sonra aynı düzen üzerinde güncellenebilir."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5">
            <h3 className="text-base font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}