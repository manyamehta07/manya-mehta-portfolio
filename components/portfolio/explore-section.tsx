'use client'

import { ArrowUpRight } from 'lucide-react'
import { EXPLORE_PANELS, type SectionKey } from '@/lib/portfolio-data'
import { Reveal, Label } from './reveal'

export function ExploreSection({
  onNavigate,
}: {
  onNavigate: (key: SectionKey) => void
}) {
  return (
    <section id="explore" className="relative scroll-mt-24 bg-secondary/50 py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Label className="mb-6">
                <span className="h-px w-8 bg-accent" />
                Explore My World
              </Label>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="max-w-2xl font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] tracking-tight text-foreground">
                There&apos;s more to me than <span className="italic text-espresso">one discipline.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
              Six chapters — each a different lens on how I think, learn and create.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border">
          {EXPLORE_PANELS.map((panel, i) => (
            <Reveal key={panel.key} delay={i * 60}>
              <button
                onClick={() => onNavigate(panel.key)}
                className="group flex w-full items-center gap-6 border-b border-border py-8 text-left transition-colors hover:bg-background md:gap-12 md:py-10"
              >
                <span className="font-sans text-[11px] tracking-editorial text-accent md:text-sm">
                  {panel.number}
                </span>
                <span className="flex-1 font-serif text-3xl leading-none tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                  {panel.title}
                </span>
                <span className="hidden font-sans text-sm uppercase tracking-wide-label text-muted-foreground sm:block">
                  {panel.caption}
                </span>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-foreground/50 transition-all duration-300 group-hover:rotate-45 group-hover:text-accent md:h-8 md:w-8"
                  strokeWidth={1.2}
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
