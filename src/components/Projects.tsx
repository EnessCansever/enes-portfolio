import { projectItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Projects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projeler"
      title="Yer tutucu proje kartları"
      description="Gerçek projeler eklendiğinde bu bölüm aynı kart düzeniyle genişletilebilir."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {projectItems.map((project) => (
          <article key={project.name} className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5">
            <h3 className="text-base font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((stackItem) => (
                <li key={stackItem} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                  {stackItem}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}