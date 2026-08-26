import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { ABOUT_SEGMENTS, STATS } from '../data/data'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

function CountUp({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState((0).toFixed(decimals))

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [inView, value, decimals])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-lime">{suffix}</span>
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Backend engineering, done properly."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-mist">
              {ABOUT_SEGMENTS.map((paragraph, i) => (
                <p key={i}>
                  {paragraph.map((segment, j) =>
                    segment.hl ? (
                      <strong key={j} className="font-semibold text-bone underline decoration-lime/60 decoration-2 underline-offset-4">
                        {segment.t}
                      </strong>
                    ) : (
                      <span key={j}>{segment.t}</span>
                    ),
                  )}
                </p>
              ))}
            </div>
          </Reveal>

          <ul className="grid grid-cols-2 gap-4 self-center">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <li className="group h-full rounded-2xl border border-white/8 bg-coal/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime/30 hover:shadow-[0_8px_32px_rgb(198_255_74/0.08)]">
                  <p className="font-display text-3xl font-bold text-bone sm:text-4xl">
                    <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </p>
                  <p className="mt-2 text-xs leading-snug text-mist">{stat.label}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
