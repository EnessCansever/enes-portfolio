import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiCheck, FiGithub, FiX } from 'react-icons/fi'

import { projectItems } from '../data/portfolio'
import type { ProjectItem } from '../types/portfolio'
import { SectionShell } from './SectionShell'

const accentStyles = {
  indigo: {
    badge: 'bg-indigo-50 text-indigo-700',
    ring: 'group-hover:border-indigo-200',
    dot: 'bg-indigo-500',
  },
  violet: {
    badge: 'bg-violet-50 text-violet-700',
    ring: 'group-hover:border-violet-200',
    dot: 'bg-violet-500',
  },
  blue: {
    badge: 'bg-blue-50 text-blue-700',
    ring: 'group-hover:border-blue-200',
    dot: 'bg-blue-500',
  },
  slate: {
    badge: 'bg-slate-100 text-slate-600',
    ring: 'group-hover:border-slate-300',
    dot: 'bg-slate-400',
  },
} as const

type LightboxState = {
  project: ProjectItem
  index: number
}

function getPreviewLabel(project: ProjectItem) {
  if (project.liveUrl !== '#') {
    try {
      return new URL(project.liveUrl).hostname.replace(/^www\./, '')
    } catch {
      return project.liveUrl.replace(/^https?:\/\//, '')
    }
  }

  if (project.githubUrl !== '#') {
    return project.githubUrl.replace('https://github.com/', 'github.com/')
  }

  return project.category
}

function getInitials(name: string) {
  return name.trim().slice(0, 2).toUpperCase()
}

export function Projects() {
  const [brokenImages, setBrokenImages] = useState<string[]>([])
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const handleImageError = (image: string) => {
    setBrokenImages((current) => (current.includes(image) ? current : [...current, image]))
  }

  const closeLightbox = () => setLightbox(null)

  const showPrevious = () => {
    setLightbox((current) => {
      if (!current) return current
      const images = current.project.images ?? []
      return { ...current, index: (current.index - 1 + images.length) % images.length }
    })
  }

  const showNext = () => {
    setLightbox((current) => {
      if (!current) return current
      const images = current.project.images ?? []
      return { ...current, index: (current.index + 1) % images.length }
    })
  }

  useEffect(() => {
    if (!lightbox) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }
      if (event.key === 'ArrowLeft') {
        showPrevious()
      }
      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox])

  return (
    <SectionShell
      id="projects"
      eyebrow="Projeler"
      title="Öne çıkan çalışmalar"
      description="Fikirden canlıya taşıdığım full-stack ve frontend projeler — teknoloji seçimleri, öne çıkan özellikler ve canlı bağlantılarla."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projectItems.map((project) => {
          const accent = accentStyles[project.accent]
          const images = project.images ?? []
          const coverImage = images[0]
          const coverBroken = coverImage ? brokenImages.includes(coverImage) : false
          const hasLiveDemo = project.liveUrl !== '#'
          const hasGithub = project.githubUrl !== '#'

          const previewLabel = getPreviewLabel(project)
          const initials = getInitials(project.name)

          return (
            <article
              key={project.name}
              className={`group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${accent.ring}`}
            >
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <div className="flex min-w-0 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                  <span className="ml-2 min-w-0 flex-1 truncate text-[11px] text-slate-400">{previewLabel}</span>
                </div>

                <div className="relative h-36 overflow-hidden bg-slate-50 sm:h-40">
                  {coverImage && !coverBroken ? (
                    <button
                      type="button"
                      onClick={() => setLightbox({ project, index: 0 })}
                      className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      aria-label={`${project.name} görsellerini büyüt`}
                    >
                      <img
                        src={coverImage}
                        alt={`${project.name} önizleme`}
                        loading="lazy"
                        onError={() => handleImageError(coverImage)}
                        className="h-full w-full bg-slate-50 object-contain transition duration-500 group-hover:scale-[1.03]"
                      />
                      {images.length > 1 && (
                        <span className="absolute bottom-2 right-2 rounded-full bg-slate-900/70 px-2 py-0.5 text-[10px] font-medium text-white">
                          {images.length} görsel
                        </span>
                      )}
                    </button>
                  ) : (
                    <div className="flex h-full w-full flex-col justify-center gap-2.5 bg-gradient-to-br from-indigo-50 via-white to-slate-50 px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold shadow-sm ${accent.badge}`}
                        >
                          {initials}
                        </span>
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <div className="h-2 w-2/5 rounded-full bg-slate-200" />
                          <div className="h-2 w-1/4 rounded-full bg-slate-200/70" />
                        </div>
                      </div>
                      <div className="h-3 w-full rounded-full bg-white shadow-sm ring-1 ring-slate-200" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-6 rounded-md bg-white shadow-sm ring-1 ring-slate-200" />
                        <div className="h-6 rounded-md bg-white shadow-sm ring-1 ring-slate-200" />
                        <div className="h-6 rounded-md bg-white shadow-sm ring-1 ring-slate-200" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 pt-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${accent.badge}`}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
                        Öne çıkan
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                </div>

                <ul className="space-y-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                      <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm font-semibold">
                  {hasLiveDemo && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-indigo-600 transition duration-300 hover:text-indigo-700"
                    >
                      Canlı Demo
                      <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                  {hasGithub && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-700 transition duration-300 hover:text-indigo-600"
                    >
                      <FiGithub className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {lightbox &&
        (() => {
          const images = lightbox.project.images ?? []
          const activeImage = images[lightbox.index]
          const isBroken = activeImage ? brokenImages.includes(activeImage) : false

          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`${lightbox.project.name} görsel önizlemesi`}
                className="relative flex max-h-[85vh] w-[min(95vw,64rem)] flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Görseli kapat"
                  className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition duration-300 hover:border-indigo-200 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <FiX className="h-4 w-4" aria-hidden="true" />
                </button>

                <div className="pr-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                    {lightbox.project.name}
                  </p>
                </div>

                <div className="relative mt-3 flex-1 overflow-hidden rounded-xl bg-slate-50">
                  {activeImage && !isBroken ? (
                    <img
                      src={activeImage}
                      alt={`${lightbox.project.name} görsel ${lightbox.index + 1}`}
                      onError={() => handleImageError(activeImage)}
                      className="mx-auto block max-h-[70vh] w-auto object-contain"
                    />
                  ) : (
                    <div className="flex min-h-[40vh] items-center justify-center text-sm text-slate-400">
                      Görsel yüklenemedi
                    </div>
                  )}

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPrevious}
                        aria-label="Önceki görsel"
                        className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition duration-300 hover:border-indigo-200 hover:text-indigo-600"
                      >
                        <span aria-hidden="true">‹</span>
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        aria-label="Sonraki görsel"
                        className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition duration-300 hover:border-indigo-200 hover:text-indigo-600"
                      >
                        <span aria-hidden="true">›</span>
                      </button>
                    </>
                  )}
                </div>

                {images.length > 1 && (
                  <p className="mt-3 text-center text-xs font-medium text-slate-400">
                    {lightbox.index + 1} / {images.length}
                  </p>
                )}
              </div>
            </div>
          )
        })()}
    </SectionShell>
  )
}
