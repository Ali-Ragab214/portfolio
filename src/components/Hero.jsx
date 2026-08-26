import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { MARQUEE_ITEMS, PROFILE, SOCIALS } from '../data/data'
import Magnetic from './ui/Magnetic'
import { EASE } from './ui/motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

const socialLinks = [
  { label: 'GitHub', href: SOCIALS.github, Icon: Github },
  { label: 'LinkedIn', href: SOCIALS.linkedin, Icon: Linkedin },
  { label: 'Email', href: SOCIALS.email, Icon: Mail },
  { label: 'Phone', href: SOCIALS.phone, Icon: Phone },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const mx = useMotionValue(-600)
  const my = useMotionValue(-600)
  const sx = useSpring(mx, { stiffness: 60, damping: 22 })
  const sy = useSpring(my, { stiffness: 60, damping: 22 })
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${sx}px ${sy}px, rgb(198 255 74 / 0.06), transparent 65%)`

  const handleMouseMove = (event) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(event.clientX - rect.left)
    my.set(event.clientY - rect.top)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col overflow-hidden pt-16 md:pt-20"
    >
      {/* animated backdrop */}
      <div className="pointer-events-none bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" aria-hidden="true" />
      <div className="pointer-events-none animate-float-slow absolute -top-32 -left-24 size-[28rem] rounded-full bg-lime/15 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none animate-float-slower absolute top-1/3 -right-32 size-[26rem] rounded-full bg-coral/15 blur-[120px]" aria-hidden="true" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-carbon/80 px-4 py-1.5 font-mono text-xs tracking-wide text-mist"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-lime" />
            </span>
            Open to backend &amp; AI opportunities
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl xl:text-7xl"
          >
            Ali Ragab
            <br />
            <span className="text-gradient">Ghonim</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 font-display text-xl font-medium text-bone/90 sm:text-2xl">
            Backend Software Engineer
            <span className="mt-1 block font-mono text-sm font-normal tracking-wider text-lime sm:text-base">
              Java · Spring Boot · AI Systems
            </span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-mist">
            {PROFILE.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-4 flex items-center gap-2 text-sm text-mist">
            <MapPin size={16} className="text-coral" aria-hidden="true" />
            {PROFILE.location}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_0_36px_rgb(198_255_74/0.4)]"
              >
                View Projects
                <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={PROFILE.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-bone transition-colors duration-300 hover:border-lime/50 hover:text-lime"
              >
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
            </Magnetic>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <Magnetic strength={0.4}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:text-lime hover:shadow-[0_0_20px_rgb(198_255_74/0.2)]"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </Magnetic>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* photo slot — swap in /public/images/profile.jpg and set PROFILE.photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-1 animate-[spin_9s_linear_infinite] rounded-[2.2rem] bg-[conic-gradient(from_0deg,#c6ff4a,#ff6b57_38%,transparent_62%,#c6ff4a)] opacity-50 blur-[6px]" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-carbon">
            {PROFILE.photo ? (
              <img
                src={PROFILE.photo}
                alt={`Portrait of ${PROFILE.name}`}
                width={640}
                height={800}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="bg-grid flex h-full w-full flex-col items-center justify-center gap-4 text-mist">
                <UserRound size={72} strokeWidth={1.25} aria-hidden="true" />
                <p className="font-mono text-xs tracking-widest uppercase">Your photo goes here</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" aria-hidden="true" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
            className="glass absolute -right-3 top-8 rounded-xl border border-white/10 px-4 py-2 font-mono text-xs text-lime shadow-lg sm:-right-6"
          >
            spring boot 3.x
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6, ease: EASE }}
            className="animate-float-slow glass absolute -left-3 bottom-10 rounded-xl border border-white/10 px-4 py-2 font-mono text-xs text-coral shadow-lg sm:-left-6"
          >
            system design
          </motion.div>
        </motion.div>
      </div>

      {/* tech ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative border-y border-white/5 py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-8">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((tech, i) => (
            <span key={i} className="flex items-center gap-8 font-mono text-sm whitespace-nowrap text-mist">
              {tech}
              <span className="size-1 rounded-full bg-lime/70" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
