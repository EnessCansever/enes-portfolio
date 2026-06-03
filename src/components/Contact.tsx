import { contactItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Contact() {
  return (
    <SectionShell
      number="06"
      id="contact"
      eyebrow="İletişim"
      title="Birlikte çalışabiliriz"
      description="Frontend, React veya full-stack projeler üzerine konuşmak istersen benimle iletişime geçebilirsin."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <p className="max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
          Kısa bir mesaj bırakmak, projelerimi incelemek veya iş fırsatları için iletişime geçmek istersen bağlantılar aşağıda.
        </p>

        <div className="space-y-2">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="group flex items-center justify-between gap-4 border-t border-slate-800/80 py-4 text-left transition duration-300 first:border-t-0 first:pt-0 last:pb-0 hover:-translate-y-px hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/60"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-medium text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {item.value}
                </p>
              </div>
              <span className="h-px w-8 bg-slate-700 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-300" />
            </a>
          ))}

          <a
            href="/cv.pdf"
            className="group mt-6 inline-flex items-center gap-3 text-sm font-medium text-slate-200 transition duration-300 hover:translate-x-0.5 hover:text-cyan-300 focus-visible:text-cyan-300"
          >
            <span>CV indir</span>
            <span className="h-px w-8 bg-slate-700 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-300" />
          </a>
        </div>
      </div>
    </SectionShell>
  )
}