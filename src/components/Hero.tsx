import { heroStats } from '../data/portfolio'

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="border-b border-slate-800/70 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300">
              Frontend Developer / Full-Stack Developer Adayı
            </p>

            <h1 className="mt-6 text-[clamp(3rem,13vw,8.6rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-[#f5f7fb]">
              <span className="block">ENES</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                CANSEVER
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              React, Tailwind CSS ve Node.js ile modern, sade ve kullanıcı odaklı web uygulamaları geliştiriyorum.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              {[
                { label: 'Projeler', href: '#projects' },
                { label: 'Yetkinlikler', href: '#skills' },
                { label: 'Deneyim', href: '#experience' },
                { label: 'İletişim', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-3 text-sm font-medium text-slate-200 transition duration-300 hover:translate-x-0.5 hover:text-cyan-300 focus-visible:translate-x-0.5 focus-visible:text-cyan-300"
                >
                  <span>{link.label}</span>
                  <span className="h-px w-8 bg-slate-700 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-xs justify-self-start lg:justify-self-end">
            <div className="border border-slate-800/80 bg-[#070b1a]/65 p-5 backdrop-blur-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-500">
                Mini manifesto
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-400">
                {heroStats.map((stat) => (
                  <li key={stat.label} className="group border-l border-slate-800 pl-4 transition-colors duration-300 hover:border-cyan-300/80">
                    <span className="block text-slate-200 transition-colors duration-300 group-hover:text-cyan-300">
                      {stat.value}
                    </span>
                    <span className="block">{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}