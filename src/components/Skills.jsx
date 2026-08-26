import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Database, FlaskConical, LayoutTemplate, Server, TerminalSquare } from 'lucide-react'
import { SKILL_CATEGORIES } from '../data/data'
import SectionHeading from './ui/SectionHeading'

const ICONS = {
  code: Code2,
  flask: FlaskConical,
  database: Database,
  brain: BrainCircuit,
  terminal: TerminalSquare,
  layout: LayoutTemplate,
  server: Server,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute top-1/4 left-1/2 -z-10 h-96 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-coral/6 blur-[140px]" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the systems."
          description="Grouped by craft — from JVM fundamentals and system design to everything that ships a feature to production."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = ICONS[category.icon] ?? Code2
            const accent = index % 2 === 0 ? 'lime' : 'coral'
            const accentText = accent === 'lime' ? 'text-lime' : 'text-coral'
            const accentBg =
              accent === 'lime'
                ? 'bg-lime/10 border-lime/25 group-hover:shadow-[0_0_18px_rgb(198_255_74/0.15)]'
                : 'bg-coral/10 border-coral/25 group-hover:shadow-[0_0_18px_rgb(255_107_87/0.15)]'
            const hoverBorder =
              accent === 'lime' ? 'hover:border-lime/50 hover:text-lime' : 'hover:border-coral/50 hover:text-coral'

            return (
              <motion.article
                key={category.id}
                variants={card}
                className="group rounded-2xl border border-white/8 bg-coal/80 p-6 transition-colors duration-300 hover:border-white/15"
              >
                <header className="flex items-center gap-3">
                  <span
                    className={`grid size-10 place-items-center rounded-lg border transition-shadow duration-300 ${accentBg}`}
                  >
                    <Icon size={19} className={accentText} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-bone">{category.title}</h3>
                </header>

                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ show: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } } }}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.85 },
                        show: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                    >
                      <span
                        className={`inline-block cursor-default rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] font-medium text-mist transition-all duration-200 ${hoverBorder}`}
                      >
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
