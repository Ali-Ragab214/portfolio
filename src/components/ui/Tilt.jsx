import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const MAX_TILT = 3.5

const shouldReduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches

export default function Tilt({ children, className }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const handleMove = (event) => {
    if (shouldReduceMotion() || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: -py * MAX_TILT * 2, ry: px * MAX_TILT * 2 })
  }

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
