import { useMemo, useState } from 'react'

import { projectItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Projects() {
  const [activeProject, setActiveProject] = useState(projectItems[0])
  const activeIndex = useMemo(() => {
    const index = projectItems.findIndex((project) => project.name === activeProject.name)
    return index < 0 ? 0 : index
  }, [activeProject])

  const accentStyles = {
    cyan: {
      line: 'bg-cyan-300',
      title: 'group-hover:text-cyan-300',
      label: 'text-cyan-300',
      badge: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200',
      panel: 'radial-gradient(circle at top left, rgba(34,211,238,0.22), transparent 35%), linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.72))',
      glow: 'from-cyan-400/28 via-slate-900 to-violet-500/18',
    },
    violet: {
      line: 'bg-violet-300',
      title: 'group-hover:text-violet-200',
      label: 'text-violet-300',
      badge: 'border-violet-400/20 bg-violet-400/10 text-violet-200',
      panel: 'radial-gradient(circle at top left, rgba(139,92,246,0.22), transparent 35%), linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.72))',
      glow: 'from-violet-400/28 via-slate-900 to-cyan-500/18',
    },
    blue: {
      line: 'bg-sky-300',
      title: 'group-hover:text-sky-200',
      label: 'text-sky-300',
      badge: 'border-sky-400/20 bg-sky-400/10 text-sky-200',
      panel: 'radial-gradient(circle at top left, rgba(56,189,248,0.22), transparent 35%), linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.72))',
      glow: 'from-sky-400/28 via-slate-900 to-cyan-500/18',
    },
  } as const

  const activeAccent = accentStyles[activeProject.accent]

  return (
    <SectionShell
      number="03"
      id="projects"
      eyebrow="Projeler"
      title="Öne çıkan çalışmalar"
      description="Kısa açıklamalar, teknoloji listeleri ve canlı bağlantılarla düzenlenmiş çalışmalar."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div>
          <div className="space-y-0">
            {projectItems.map((project, index) => (
              <article
                key={project.name}
                className="group relative border-t border-slate-800/80 py-5 pl-4 transition duration-300 first:border-t-0 first:pt-0 last:pb-0 hover:-translate-y-px hover:border-slate-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/60"
                onMouseEnter={() => setActiveProject(project)}
                onFocus={() => setActiveProject(project)}
                tabIndex={0}
              >
                <span
                  className={`absolute left-0 top-5 h-[calc(100%-2.5rem)] w-px opacity-0 transition-all duration-300 group-hover:opacity-100 ${accentStyles[project.accent].line}`}
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 top-5 h-[calc(100%-2.5rem)] w-[3px] rounded-full bg-gradient-to-b from-cyan-300 via-sky-400 to-violet-400 opacity-0 blur-[1px] transition-all duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-500">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span className={`h-px w-8 transition-all duration-300 group-hover:w-14 ${accentStyles[project.accent].line}`} />
                      <span className={accentStyles[project.accent].label}>Proje</span>
                    </div>
                    <h3 className={`mt-3 text-lg font-medium text-[#f5f7fb] transition-all duration-300 sm:text-xl group-hover:translate-x-1 ${accentStyles[project.accent].title}`}>
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <a
                      href={project.liveUrl}
                      className="text-slate-300 transition duration-300 hover:translate-x-0.5 hover:text-cyan-300 focus-visible:text-cyan-300"
                      target={project.liveUrl === '#' ? undefined : '_blank'}
                      rel={project.liveUrl === '#' ? undefined : 'noreferrer'}
                    >
                      Canlı Demo
                    </a>
                    <span className="text-slate-700">/</span>
                    <a
                      href={project.githubUrl}
                      className="text-slate-300 transition duration-300 hover:translate-x-0.5 hover:text-cyan-300 focus-visible:text-cyan-300"
                      target={project.githubUrl === '#' ? undefined : '_blank'}
                      rel={project.githubUrl === '#' ? undefined : 'noreferrer'}
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-slate-500 sm:pl-[calc(2.5rem+1px)]">
                  {project.stack.map((stackItem) => (
                    <li key={stackItem} className="rounded-full border border-slate-800 px-3 py-1 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 group-hover:text-slate-200">
                      {stackItem}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <aside className="sticky top-28 hidden lg:block">
          <div className="border border-slate-800/80 bg-[#070b1a]/70 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-500">
              <span>Preview</span>
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            </div>

            <div key={activeProject.name} className="mt-4 aspect-[4/5] overflow-hidden border border-slate-800 bg-slate-900/50 transition-all duration-500 ease-out">
              <div className="flex h-full flex-col justify-between p-5 transition-all duration-500" style={{ backgroundImage: activeAccent.panel }}>
                <div className="transition-all duration-500">
                  <p className={`inline-flex border px-3 py-1 text-sm font-medium ${activeAccent.badge}`}>
                    {activeProject.previewLabel}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300 transition-all duration-500">
                    {activeProject.previewText}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="relative h-32 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1223]/60 transition-all duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeAccent.glow}`} />
                    <div className="absolute left-4 right-4 top-4 space-y-2">
                      <div className="h-2 w-24 rounded-full bg-white/20" />
                      <div className="h-2 w-40 rounded-full bg-white/10" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                      <div className="h-14 rounded-xl border border-white/10 bg-white/6 p-3">
                        <div className="h-2 w-10 rounded-full bg-cyan-300/70" />
                        <div className="mt-3 h-2 w-16 rounded-full bg-white/15" />
                      </div>
                      <div className="h-14 rounded-xl border border-white/10 bg-white/6 p-3">
                        <div className="h-2 w-10 rounded-full bg-violet-300/70" />
                        <div className="mt-3 h-2 w-14 rounded-full bg-white/15" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-10 rounded-xl border border-white/10 bg-white/5 transition-all duration-300" />
                    <div className="h-10 rounded-xl border border-white/10 bg-white/5 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </SectionShell>
  )
}