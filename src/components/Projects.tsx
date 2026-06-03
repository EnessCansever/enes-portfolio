import { useEffect, useMemo, useState } from 'react'

import { projectItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Projects() {
  const [activeProject, setActiveProject] = useState(projectItems[0])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [brokenImages, setBrokenImages] = useState<string[]>([])

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
  const projectImages = activeProject.images ?? []
  const hasProjectImages = projectImages.length > 0
  const activeProjectImage = hasProjectImages ? projectImages[activeImageIndex % projectImages.length] : null
  const activeProjectImagePosition = hasProjectImages ? (activeImageIndex % projectImages.length) + 1 : 0
  const activeProjectImageBroken = activeProjectImage ? brokenImages.includes(activeProjectImage) : false

  const handleProjectActivate = (project: (typeof projectItems)[number]) => {
    setActiveProject(project)
    setActiveImageIndex(0)
    setIsLightboxOpen(false)
  }

  const handleImageError = (image: string) => {
    setBrokenImages((current) => (current.includes(image) ? current : [...current, image]))
  }

  const handleLightboxOpen = () => {
    if (hasProjectImages) {
      setIsLightboxOpen(true)
    }
  }

  const handleLightboxClose = () => {
    setIsLightboxOpen(false)
  }

  const handlePreviousImage = () => {
    if (projectImages.length > 1) {
      setActiveImageIndex((current) => (current - 1 + projectImages.length) % projectImages.length)
    }
  }

  const handleNextImage = () => {
    if (projectImages.length > 1) {
      setActiveImageIndex((current) => (current + 1) % projectImages.length)
    }
  }

  useEffect(() => {
    if (!isLightboxOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleLightboxClose()
      }

      if (event.key === 'ArrowLeft') {
        if (projectImages.length > 1) {
          setActiveImageIndex((current) => (current - 1 + projectImages.length) % projectImages.length)
        }
      }

      if (event.key === 'ArrowRight') {
        if (projectImages.length > 1) {
          setActiveImageIndex((current) => (current + 1) % projectImages.length)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLightboxOpen, projectImages.length])

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
                onMouseEnter={() => handleProjectActivate(project)}
                onFocus={() => handleProjectActivate(project)}
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
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        className="text-slate-300 transition duration-300 hover:translate-x-0.5 hover:text-cyan-300 focus-visible:text-cyan-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Canlı Demo
                      </a>
                    )}
                    {project.liveUrl !== '#' && project.githubUrl !== '#' && (
                      <span className="text-slate-700">/</span>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        className="text-slate-300 transition duration-300 hover:translate-x-0.5 hover:text-cyan-300 focus-visible:text-cyan-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
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

                {hasProjectImages ? (
                  <div className="mt-5 flex min-h-0 flex-1 flex-col gap-4">
                    <button
                      type="button"
                      onClick={handleLightboxOpen}
                      className="group relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1223]/60 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/60"
                      aria-label={`${activeProject.name} görselini büyüt`}
                    >
                      {activeProjectImage && !activeProjectImageBroken ? (
                        <img
                          src={activeProjectImage}
                          alt={`${activeProject.name} görsel ${activeImageIndex + 1}`}
                          loading="lazy"
                          onError={() => handleImageError(activeProjectImage)}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-900/80 px-4 text-center">
                          <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Görsel yüklenemedi</p>
                            <p className="mt-3 text-sm leading-6 text-slate-500">
                              Bu proje görseli şu anda gösterilemiyor.
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-transparent px-4 py-4">
                        <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.3em] text-slate-100 transition duration-300 group-hover:text-cyan-100">
                          <span className="flex items-center gap-2 font-medium">
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-[10px] text-cyan-200">↗</span>
                            Büyütmek için tıkla
                          </span>
                          <span className="text-slate-300/90">{activeImageIndex + 1} / {projectImages.length}</span>
                        </div>
                      </div>
                    </button>

                    <div className="flex items-center justify-center gap-2">
                      {projectImages.map((image, imageIndex) => {
                        const isActiveImage = imageIndex === activeImageIndex
                        const isBrokenImage = brokenImages.includes(image)

                        return (
                          <button
                            key={image}
                            type="button"
                            onClick={() => setActiveImageIndex(imageIndex)}
                            className={`relative h-14 w-20 overflow-hidden rounded-xl border transition duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/60 ${isActiveImage ? 'border-cyan-300/70 shadow-[0_0_0_1px_rgba(34,211,238,0.35)]' : 'border-white/10 opacity-70 hover:border-cyan-300/40 hover:opacity-100'}`}
                            aria-label={`${activeProject.name} görsel ${imageIndex + 1}`}
                            aria-pressed={isActiveImage}
                          >
                            {isBrokenImage ? (
                              <div className="flex h-full w-full items-center justify-center bg-slate-900/80 px-2 text-center text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                Hata
                              </div>
                            ) : (
                              <img
                                src={image}
                                alt={`${activeProject.name} görsel ${imageIndex + 1}`}
                                loading="lazy"
                                onError={() => handleImageError(image)}
                                className="h-full w-full object-cover"
                              />
                            )}
                            <span className={`absolute inset-0 bg-slate-950/20 transition duration-300 ${isActiveImage ? 'opacity-0' : 'opacity-100'}`} />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {isLightboxOpen && hasProjectImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-md"
          onClick={handleLightboxClose}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.name} görsel önizlemesi`}
            className="relative flex w-[min(95vw,80rem)] max-h-[90vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050814]/95 shadow-[0_0_0_1px_rgba(34,211,238,0.10),0_30px_120px_rgba(2,6,23,0.75)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleLightboxClose}
              aria-label="Görseli kapat"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-sm text-slate-200 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/60"
            >
              ×
            </button>

            <div className="space-y-4 p-4 sm:p-6">
              <div className="pr-12">
                <p className={`text-xs uppercase tracking-[0.35em] ${activeAccent.label}`}>Preview</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-medium text-slate-100 sm:text-xl">
                    {activeProject.name}
                  </h4>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {activeProjectImagePosition} / {projectImages.length}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-3 shadow-inner shadow-cyan-950/20 sm:px-4 sm:py-4">
                {activeProjectImage && !activeProjectImageBroken ? (
                  <img
                    src={activeProjectImage}
                    alt={`${activeProject.name} görsel ${activeProjectImagePosition}`}
                    loading="lazy"
                    onError={() => handleImageError(activeProjectImage)}
                    className="mx-auto block max-h-[80vh] max-w-full w-auto object-contain sm:max-w-[92vw]"
                  />
                ) : (
                  <div className="flex min-h-[50vh] items-center justify-center px-6 py-12 text-center">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Görsel yüklenemedi</p>
                      <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                        Bu görsel şu anda gösterilemiyor.
                      </p>
                    </div>
                  </div>
                )}

                {projectImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePreviousImage}
                      aria-label="Önceki görsel"
                      className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-lg text-slate-100 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/60"
                    >
                      <span aria-hidden="true">‹</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextImage}
                      aria-label="Sonraki görsel"
                      className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-lg text-slate-100 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/60"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </>
                )}
              </div>

              {projectImages.length > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2 pb-1">
                  {projectImages.map((image, imageIndex) => {
                    const isActiveImage = imageIndex === activeImageIndex
                    const isBrokenImage = brokenImages.includes(image)

                    return (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImageIndex(imageIndex)}
                        aria-label={`${activeProject.name} görsel ${imageIndex + 1}`}
                        aria-pressed={isActiveImage}
                        className={`relative h-12 w-16 overflow-hidden rounded-xl border transition duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/60 sm:h-14 sm:w-20 ${isActiveImage ? 'border-cyan-300/70 shadow-[0_0_0_1px_rgba(34,211,238,0.35)]' : 'border-white/10 opacity-70 hover:border-cyan-300/40 hover:opacity-100'}`}
                      >
                        {isBrokenImage ? (
                          <div className="flex h-full w-full items-center justify-center bg-slate-900/80 px-2 text-center text-[10px] uppercase tracking-[0.25em] text-slate-500">
                            Hata
                          </div>
                        ) : (
                          <img
                            src={image}
                            alt={`${activeProject.name} görsel ${imageIndex + 1}`}
                            loading="lazy"
                            onError={() => handleImageError(image)}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  )
}