import { GraduationCap, Globe } from 'lucide-react'
import { EDUCATION, LANGUAGES } from '../data/data'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Where the foundation was built."
        />

        <ol className="relative ml-3 max-w-3xl space-y-10 border-l border-white/10 pl-8 md:ml-6 md:pl-12">
          <span
            className="absolute top-0 bottom-0 left-px w-px bg-gradient-to-b from-lime via-coral/60 to-transparent"
            aria-hidden="true"
          />
          {EDUCATION.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.1} y={40}>
              <li className="group relative">
                <span
                  className="absolute top-1.5 -left-[2.65rem] grid size-4 place-items-center rounded-full border-2 border-lime bg-ink shadow-[0_0_16px_rgb(198_255_74/0.35)] transition-transform duration-300 group-hover:scale-125 md:-left-[4.15rem]"
                  aria-hidden="true"
                >
                  <span className="size-1 rounded-full bg-lime" />
                </span>

                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-carbon px-3 py-1 font-mono text-xs text-lime">
                  <GraduationCap size={14} aria-hidden="true" />
                  {entry.period}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-bone transition-colors duration-300 group-hover:text-lime sm:text-2xl">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-sm text-mist">
                  <span className="font-medium text-bone/80">{entry.org}</span>
                  <span className="mx-2 text-white/20">•</span>
                  {entry.place}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-wrap items-center gap-4 rounded-2xl border border-white/8 bg-coal/70 p-6 md:max-w-3xl">
            <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-mist uppercase">
              <Globe size={16} className="text-lime" aria-hidden="true" />
              Languages
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {LANGUAGES.map((lang) => (
                <li
                  key={lang.name}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-bone/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime/40 hover:text-lime"
                >
                  <strong className="font-semibold">{lang.name}</strong>
                  <span className="mx-1.5 text-white/25" aria-hidden="true">·</span>
                  <span className="text-mist">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
