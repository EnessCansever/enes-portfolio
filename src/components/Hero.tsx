import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'

import { contactItems } from '../data/portfolio'

export function Hero() {
  const githubHref = contactItems.find((item) => item.label === 'GitHub')?.href ?? '#'
  const linkedinHref = contactItems.find((item) => item.label === 'LinkedIn')?.href ?? '#'

  return (
    <section id="hero" className="scroll-mt-24">
      <div className="py-14 sm:py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-indigo-600">
          Frontend Developer / Full-Stack Developer Adayı
        </p>

        <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
          Enes Cansever
        </h1>

        <p className="mt-4 max-w-2xl text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl">
          React ve TypeScript ile modern web uygulamaları geliştiriyorum.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Frontend eğitmenliği deneyimimi, gerçek projeler ve full-stack geliştirme pratiğiyle
          birleştiriyorum. Kullanıcı odaklı, sade ve canlıya alınabilir web uygulamaları üretmeye
          odaklanıyorum.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-px hover:bg-indigo-700 hover:shadow-md focus-visible:bg-indigo-700"
          >
            Projeleri Gör
            <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-px hover:border-indigo-300 hover:text-indigo-600"
          >
            <FiGithub className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>

          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-px hover:border-indigo-300 hover:text-indigo-600"
          >
            <FiLinkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-px hover:border-indigo-300 hover:text-indigo-600"
          >
            <FiDownload className="h-4 w-4" aria-hidden="true" />
            CV İndir
          </a>
        </div>
      </div>
    </section>
  )
}