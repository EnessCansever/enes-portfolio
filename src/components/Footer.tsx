export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="app-container pb-8 pt-2 sm:pb-10">
      <div className="border-t border-slate-800/70 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
        <p>© {year} Kişisel portfolyo iskeleti</p>
        <p>React, TypeScript, Vite ve Tailwind CSS v4 ile hazırlandı.</p>
      </div>
    </footer>
  )
}