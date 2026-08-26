import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/data'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute top-40 -left-40 -z-10 size-[30rem] rounded-full bg-lime/7 blur-[140px]" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that ship."
          description="Production-grade platforms — each one designed around clean architecture, real testing discipline, and systems thinking."
        />

        <div className="space-y-10 lg:space-y-14">
          {PROJECTS.map((project) => (
            <Reveal key={project.id} y={56} amount={0.15}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
