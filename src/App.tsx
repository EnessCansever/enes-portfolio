import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Focus } from './components/Focus'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb orb-cyan absolute left-[-8%] top-[-10%] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="orb orb-violet absolute right-[-10%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="orb orb-blue absolute bottom-[-12%] left-[18%] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col px-4 pb-6 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-10 lg:pt-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Focus />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
