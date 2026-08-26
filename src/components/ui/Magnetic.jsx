import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const isCoarsePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches

export default function Magnetic({ children, strength = 0.28, className }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    if (isCoarsePointer() || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: (event.clientX - (rect.left + rect.width / 2)) * strength,
      y: (event.clientY - (rect.top + rect.height / 2)) * strength,
    })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      className={`inline-block ${className ?? ''}`}
    >
      {children}
    </motion.div>
  )
}
