import { contactItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Contact() {
  return (
    <SectionShell
      id="contact"
      eyebrow="İletişim"
      title="Bağlantı alanı"
      description="Şimdilik basit iletişim kartları yer alıyor. Gerçek bağlantılar daha sonra buraya taşınabilir."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
          <p className="text-sm font-medium text-cyan-200">Bir proje fikri mi var?</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
            Bu alan, ileride kısa çağrı metni, uygunluk durumu veya iletişim formu için genişletilebilir.
          </p>
        </div>

        <div className="grid gap-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 text-base font-semibold text-white">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}