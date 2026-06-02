import { heroStats } from '../data/portfolio'

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/75 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-sm sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Merhaba, ben
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Koyu temalı, modern ve geliştirilebilir portfolyo iskeleti.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Bu başlangıç yapısı, daha sonra gerçek içerik, proje detayları ve kişisel bilgilerle doldurulmak
            üzere sade tutuldu.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Projeleri Gör
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              İletişime Geç
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-cyan-200">Bu alan ne için?</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Hızlıca genişletilebilen, tek sayfa portfolyo düzeni için başlangıç kartı.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}