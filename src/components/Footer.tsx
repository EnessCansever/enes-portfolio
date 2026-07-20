import { FiGithub, FiLinkedin } from 'react-icons/fi'

import { contactItems } from '../data/portfolio'

export function Footer() {
  const githubHref = contactItems.find((item) => item.label === 'GitHub')?.href ?? '#'
  const linkedinHref = contactItems.find((item) => item.label === 'LinkedIn')?.href ?? '#'

  return (
    <footer className="app-container pb-10 pt-6 sm:pb-12">
      <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Enes Cansever · React, TypeScript ve Node.js ile sade, kullanıcı odaklı web uygulamaları geliştiriyorum.</p>
        <div className="flex items-center gap-5">
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition duration-300 hover:text-indigo-600"
          >
            <FiGithub className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition duration-300 hover:text-indigo-600"
          >
            <FiLinkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a href="/cv.pdf" download className="inline-flex items-center gap-1.5 transition duration-300 hover:text-indigo-600">
            CV İndir
          </a>
        </div>
      </div>
    </footer>
  )
}