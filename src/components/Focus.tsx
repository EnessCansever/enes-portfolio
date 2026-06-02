import { focusItems } from '../data/portfolio'
import { SectionShell } from './SectionShell'

export function Focus() {
  return (
    <SectionShell
      number="05"
      id="focus"
      eyebrow="Odak Alanlarım"
      title="Şu anda güçlendirdiğim alanlar"
      description="Kısa vadede derinleşmek istediğim başlıklar; teknik omurga, okunabilir yapı ve arayüz kalitesi."
    >
      <div className="space-y-2">
        {focusItems.map((item, index) => (
          <div key={item.title} className="grid gap-3 border-t border-slate-800 py-4 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[72px_1fr] sm:gap-6">
            <div className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-500">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div>
              <h3 className="text-base font-medium text-white">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}