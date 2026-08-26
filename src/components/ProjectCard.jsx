import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import ProjectGallery from './ProjectGallery'
import Tilt from './ui/Tilt'

const highlightIcon = (
  <svg viewBox="0 0 12 12" className="mt-1.5 size-3 shrink-0 text-lime" aria-hidden="true">
    <path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ProjectCard({ project }) {
  return (
    <Tilt className="will-change-transform">
      <article className="group relative overflow-hidden rounded-3xl border border-white/8 bg-coal/90 transition-[border-color,box-shadow] duration-500 hover:border-lime/25 hover:shadow-[0_24px_80px_-24px_rgb(198_255_74/0.15)]">
        {/* shine sweep */}
        <div
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -top-6 right-4 font-display text-[7rem] leading-none font-bold text-white/[0.04] select-none sm:text-[9rem]"
          aria-hidden="true"
        >
          {project.index}
        </span>

        <div className="p-6 sm:p-9">
          <div className="flex flex-col">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider">
              <span className="text-coral">{project.type}</span>
              <span className="text-mist/50">/</span>
              <span className="text-mist">{project.role}</span>
            </p>

            <h3 className="mt-3 font-display text-2xl font-bold text-bone transition-colors duration-300 group-hover:text-lime sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 font-display text-base text-bone/70 italic sm:text-lg">{project.tagline}</p>

            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                  {highlightIcon}
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-white/10 bg-carbon px-2.5 py-1 font-mono text-[11px] text-bone/70 transition-colors duration-200 hover:border-lime/40 hover:text-lime"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3 pt-1">
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime hover:shadow-[0_0_24px_rgb(198_255_74/0.35)]"
                >
                  <Github size={16} aria-hidden="true" />
                  Source code
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-white/15 px-5 py-2.5 text-sm font-medium text-mist/60"
                  title="Repository will be published soon"
                >
                  <Github size={16} aria-hidden="true" />
                  Repo coming soon
                </span>
              )}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-bone transition-colors duration-300 hover:border-coral/60 hover:text-coral"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live demo
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-8">
            <ProjectGallery project={project} />
          </div>
        </div>
      </article>
    </Tilt>
  )
}
