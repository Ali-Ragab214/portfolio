import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { PROFILE, SOCIALS } from '../data/data'
import Magnetic from './ui/Magnetic'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-bone">
            {PROFILE.name}
            <span className="text-lime">.</span>
          </p>
          <p className="mt-1 text-xs text-mist">
            © {year} — Built with React, Tailwind &amp; Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid size-10 place-items-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:border-lime/50 hover:text-lime"
          >
            <Github size={17} aria-hidden="true" />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid size-10 place-items-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:border-coral/50 hover:text-coral"
          >
            <Linkedin size={17} aria-hidden="true" />
          </a>

          <Magnetic strength={0.4}>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="group grid size-11 place-items-center rounded-full bg-carbon text-bone shadow-lg ring-1 ring-white/10 transition-colors duration-300 hover:bg-lime hover:text-ink"
            >
              <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  )
}
