import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import type { IconType } from 'react-icons'

import { contactItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

const iconByLabel: Record<string, IconType> = {
  'E-posta': FiMail,
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
}

export function Contact() {
  return (
    <SectionShell
      id="contact"
      eyebrow="İletişim"
      title="Birlikte çalışabiliriz"
      description="Frontend, React veya full-stack projeler üzerine konuşmak istersen benimle iletişime geçebilirsin."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item) => {
          const Icon = iconByLabel[item.label] ?? FiMail

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-slate-900">{item.value}</p>
              </div>
            </a>
          )
        })}

        <a
          href="/cv.pdf"
          download
          className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
            <FiDownload className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">CV</p>
            <p className="mt-1 text-sm font-medium text-slate-900">PDF olarak indir</p>
          </div>
        </a>
      </div>
    </SectionShell>
  )
}