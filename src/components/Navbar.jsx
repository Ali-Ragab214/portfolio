import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../data/data'
import { EASE } from './ui/motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass border-b border-white/5 shadow-[0_8px_32px_rgb(0_0_0/0.35)]' : ''
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 md:h-20"
      >
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-bone"
        >
          <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-carbon font-display text-sm transition-colors group-hover:border-lime/50">
            {PROFILE.monogram}
            <span className="sr-only">— home</span>
          </span>
          <span>
            ali<span className="text-lime">.</span>ghonim
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 text-sm font-medium text-mist transition-colors hover:text-bone"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-lime to-coral transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.cvPath}
            download
            className="hidden items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgb(198_255_74/0.35)] sm:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-lg border border-white/10 bg-carbon text-bone transition-colors hover:border-lime/40 lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 glass lg:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex h-full flex-col items-start justify-center gap-2 px-8 pb-24"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  variants={{
                    closed: { opacity: 0, x: 48 },
                    open: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
                  }}
                  className="w-full"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex w-full items-baseline gap-4 border-b border-white/5 py-4 font-display text-3xl font-semibold text-bone transition-colors hover:text-lime"
                  >
                    <span className="font-mono text-xs text-coral">0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  closed: { opacity: 0, x: 48 },
                  open: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
                }}
                className="pt-6"
              >
                <a
                  href={PROFILE.cvPath}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink"
                >
                  <Download size={18} aria-hidden="true" />
                  Download CV
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
