import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { PROFILE, SOCIALS } from '../data/data'
import Magnetic from './ui/Magnetic'
import Reveal from './ui/Reveal'
import { EASE } from './ui/motion'

const heading = ["Let's", 'build', 'something', 'together.']

const channels = [
  {
    label: 'Email',
    value: PROFILE.email,
    href: SOCIALS.email,
    Icon: Mail,
    copyable: true,
  },
  {
    label: 'Phone',
    value: PROFILE.phoneDisplay,
    href: SOCIALS.phone,
    Icon: Phone,
  },
  {
    label: 'Location',
    value: PROFILE.location,
    Icon: MapPin,
  },
]

function EmailCard({ channel }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = SOCIALS.email
    }
  }

  return (
    <div className="group relative flex h-full items-center gap-4 rounded-2xl border border-white/8 bg-coal/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime/30 hover:shadow-[0_8px_32px_rgb(198_255_74/0.08)]">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-lime/25 bg-lime/10">
        <channel.Icon size={18} className="text-lime" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-xs tracking-widest text-mist uppercase">{channel.label}</p>
        <a
          href={channel.href}
          className="block truncate text-sm font-medium text-bone transition-colors hover:text-lime"
        >
          {channel.value}
        </a>
      </div>
      <button
        type="button"
        onClick={copyEmail}
        aria-label={copied ? 'Email copied' : 'Copy email address'}
        className="ml-auto grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 text-mist transition-colors hover:border-lime/50 hover:text-lime"
      >
        {copied ? <Check size={15} className="text-lime" aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      </button>
    </div>
  )
}

function ChannelCard({ channel }) {
  if (channel.copyable) return <EmailCard channel={channel} />
  const inner = (
    <>
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-xl border ${
          channel.label === 'Phone' ? 'border-coral/25 bg-coral/10' : 'border-white/15 bg-white/[0.04]'
        }`}
      >
        <channel.Icon size={18} className={channel.label === 'Phone' ? 'text-coral' : 'text-bone'} aria-hidden="true" />
      </span>
      <div>
        <p className="font-mono text-xs tracking-widest text-mist uppercase">{channel.label}</p>
        <p className="text-sm font-medium text-bone">{channel.value}</p>
      </div>
    </>
  )

  const classes =
    'flex items-center gap-4 rounded-2xl border border-white/8 bg-coal/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-coral/30 hover:shadow-[0_8px_32px_rgb(255_107_87/0.08)] h-full w-full text-left'

  return channel.href ? (
    <a href={channel.href} className={classes}>
      {inner}
    </a>
  ) : (
    <div className={`${classes} cursor-default`}>{inner}</div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-36">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" aria-hidden="true" />
      <div className="animate-float-slow absolute -bottom-24 left-1/4 size-96 rounded-full bg-coral/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="flex items-center justify-center gap-2 font-mono text-sm tracking-widest text-mist uppercase">
            <span className="inline-block size-1.5 rounded-full bg-lime" aria-hidden="true" />
            Get in touch
          </p>
        </Reveal>

        <h2
          className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-6xl"
          aria-label="Let's build something together."
        >
          {heading.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 28, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
              className={`mr-[0.28em] inline-block ${i === heading.length - 1 ? 'text-gradient' : ''}`}
              aria-hidden="true"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-mist">
            Backend roles, freelance APIs, AI integrations, or a good conversation about system design — my inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8">
            <Magnetic strength={0.35}>
              <a
                href={SOCIALS.email}
                className="inline-flex items-center gap-2.5 rounded-full bg-lime px-9 py-4 font-display text-lg font-bold text-ink transition-shadow duration-300 hover:shadow-[0_0_44px_rgb(198_255_74/0.45)]"
              >
                <Mail size={20} aria-hidden="true" />
                Say Hello
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={0.15 + i * 0.08} className="h-full">
              <ChannelCard channel={channel} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Magnetic strength={0.4}>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="grid size-12 place-items-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:text-lime"
              >
                <Github size={20} aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="grid size-12 place-items-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:-translate-y-1 hover:border-coral/50 hover:text-coral"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
