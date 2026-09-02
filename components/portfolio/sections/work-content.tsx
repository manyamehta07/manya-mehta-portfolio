'use client'

import { PROJECTS } from '@/lib/portfolio-data'
import { ProjectCard } from '../project-card'
import { Reveal, Label } from '../reveal'

export function WorkContent() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <Label className="mb-8">
            <span className="h-px w-8 bg-accent" />
            Selected Work
          </Label>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight text-foreground">
            Turning data into insights — <span className="italic text-espresso">and ideas into things worth exploring.</span>
          </h1>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-24">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.number} {...p} flip={i % 2 === 1} />
        ))}
      </div>

      {/* Future work */}
      <Reveal>
        <div className="mt-8 flex flex-col items-center gap-6 border-y border-border py-20 text-center">
          <span className="font-sans text-[11px] uppercase tracking-editorial text-accent">
            More experiments coming soon
          </span>
          <p className="max-w-xl font-serif text-2xl italic leading-snug text-espresso md:text-3xl">
            I&apos;m currently building my way into web development, data analytics and creative
            digital projects.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
