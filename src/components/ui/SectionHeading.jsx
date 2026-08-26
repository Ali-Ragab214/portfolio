import { motion } from 'framer-motion'
import { EASE } from './motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'
  return (
    <div className={`mb-14 md:mb-20 ${centered ? 'text-center' : ''}`}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`flex items-center gap-2 font-mono text-sm tracking-widest text-mist uppercase ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span className="inline-block size-1.5 rounded-full bg-lime" aria-hidden="true" />
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
        className="mt-4 font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
          className={`mt-4 max-w-2xl text-base leading-relaxed text-mist ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}
