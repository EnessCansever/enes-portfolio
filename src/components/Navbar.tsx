import { navigationItems } from '../data/portfolio'

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="app-container flex flex-wrap items-center justify-between gap-3 py-4 sm:py-5">
        <a
          href="#hero"
          className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-900 transition duration-300 hover:text-indigo-600 sm:tracking-[0.38em]"
        >
          <span>ENES CANSEVER</span>
          <span className="h-px w-0 bg-indigo-500 transition-all duration-300 group-hover:w-6" />
        </a>

        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4">
          <nav aria-label="Ana navigasyon" className="hidden md:block">
            <ul className="flex flex-wrap items-center justify-end gap-6 text-sm text-slate-500">
              {navigationItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    className="group inline-flex flex-col gap-1 transition duration-300 hover:text-indigo-600 focus-visible:text-indigo-600"
                    href={item.href}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold tracking-[0.35em] text-slate-400 transition-colors duration-300 group-hover:text-indigo-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span className="h-px w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/cv.pdf"
            download
            className="group inline-flex shrink-0 items-center rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition duration-300 hover:-translate-y-px hover:bg-indigo-700 hover:shadow-md focus-visible:bg-indigo-700 sm:px-5 sm:py-2.5"
          >
            CV İndir
          </a>
        </div>
      </div>
    </header>
  )
}