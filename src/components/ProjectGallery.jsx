import { useState } from 'react'
import { Layers } from 'lucide-react'

// Uniform project gallery: every image is rendered at exactly the same size —
// 16:9, object-cover + object-top, identical border-radius, badge position and
// hover zoom. Works for any number of images: 0 → placeholder, 1 → single,
// 2–4 → equal-cell grid (all cells share the same dimensions).

const IMG =
  'aspect-video w-full object-cover object-top transition-transform duration-300 ease-out group-hover/shot:scale-105'

function Badge({ n }) {
  return (
    <span
      className="absolute right-2 bottom-2 rounded-md bg-ink/80 px-2 py-0.5 font-mono text-[10px] text-mist"
      aria-hidden="true"
    >
      {n}
    </span>
  )
}

function Shot({ src, alt, badge }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className="group/shot relative w-full overflow-hidden rounded-2xl border border-white/10 bg-carbon">
      {failed ? (
        <div className="bg-grid flex aspect-video w-full flex-col items-center justify-center gap-2 text-mist/60">
          <Layers className="size-7" aria-hidden="true" />
          <span className="px-4 text-center font-mono text-[11px] tracking-widest uppercase">
            screenshot unavailable
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={1280}
          height={720}
          onError={() => setFailed(true)}
          className={IMG}
        />
      )}
      <Badge n={badge} />
    </figure>
  )
}

function Placeholder({ label }) {
  return (
    <div className="bg-grid relative aspect-video overflow-hidden rounded-2xl border border-dashed border-white/12 bg-carbon">
      <div className="absolute inset-0 bg-gradient-to-br from-lime/6 via-transparent to-coral/8" aria-hidden="true" />
      <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <Layers className="size-9 text-mist/60 transition-colors duration-300 group-hover:text-lime/70" aria-hidden="true" />
        <p className="font-mono text-xs tracking-widest text-mist/70 uppercase">{label}</p>
        <p className="max-w-56 text-[11px] leading-relaxed text-mist/50">
          Drop 1–4 screenshots in <code className="text-lime/70">data.js → images</code>
        </p>
      </div>
    </div>
  )
}

export default function ProjectGallery({ project }) {
  const images = (project.images ?? []).slice(0, 4)

  if (images.length === 0) {
    return <Placeholder label={`${project.title} — screenshots`} />
  }

  if (images.length === 1) {
    return <Shot src={images[0]} alt={`${project.title} screenshot`} badge="01" />
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((src, i) => (
        <Shot key={src} src={src} alt={`${project.title} screenshot ${i + 1}`} badge={`0${i + 1}`} />
      ))}
    </div>
  )
}
