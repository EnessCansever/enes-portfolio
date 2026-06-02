import { navigationItems } from '../data/portfolio'

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/60 bg-[#050816]/72 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#050816]/58">
      <div className="app-container flex flex-wrap items-center justify-between gap-3 py-4 sm:py-5">
        <a
          href="#hero"
          className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:text-cyan-300 sm:tracking-[0.38em]"
        >
          <span>ENES CANSEVER</span>
          <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-6" />
        </a>

        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4">
          <nav aria-label="Ana navigasyon" className="hidden md:block">
            <ul className="flex flex-wrap items-center justify-end gap-6 text-sm text-slate-400">
              {navigationItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    className="group inline-flex flex-col gap-1 transition duration-300 hover:text-cyan-300 focus-visible:text-cyan-300"
                    href={item.href}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold tracking-[0.35em] text-slate-600 transition-colors duration-300 group-hover:text-cyan-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/cv.pdf"
            download
            className="group inline-flex shrink-0 items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition duration-300 hover:-translate-y-px hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400/20 hover:via-slate-950 hover:to-violet-500/20 hover:text-white hover:shadow-[0_0_0_1px_rgba(34,211,238,0.22),0_0_24px_rgba(139,92,246,0.18)] focus-visible:text-white sm:px-5 sm:py-2.5"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-slate-100 to-violet-300 bg-clip-text text-transparent">
              CV İndir
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}