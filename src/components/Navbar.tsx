import { navigationItems } from '../data/portfolio'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="app-container flex items-center justify-between gap-4 py-4">
        <a
          href="#hero"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:text-cyan-300"
        >
          Kişisel Portfolyo
        </a>

        <nav aria-label="Ana navigasyon" className="hidden md:block">
          <ul className="flex flex-wrap items-center justify-end gap-5 text-sm text-slate-400">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-cyan-300" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}