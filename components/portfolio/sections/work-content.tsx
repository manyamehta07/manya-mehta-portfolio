'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { PROJECTS, TATTVA } from '@/lib/portfolio-data'
import { ProjectCard } from '../project-card'
import { Reveal, Label } from '../reveal'

export function WorkContent() {
  const [showCaseStudy, setShowCaseStudy] = useState(false)

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-4xl">
        <Reveal>
          <Label className="mb-8">
            <span className="h-px w-8 bg-accent" />
            Selected Work
          </Label>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight text-foreground">
            I want to understand <span className="italic text-espresso">why things work.</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-foreground/70 md:text-xl">
            My work sits across business thinking, marketing, operations and data — using different tools to answer different kinds of questions.
          </p>
        </Reveal>
      </div>

      {/* Featured strategy + marketing case study */}
      <Reveal delay={180}>
        <article className="mt-16 overflow-hidden border border-border bg-background md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="relative min-h-[360px] md:col-span-7 md:min-h-[540px]">
              <Image
                src={TATTVA.images.hero}
                alt="TATTVA speculative launch campaign for Past Modern"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute left-5 top-5 bg-background/90 px-3 py-2 font-sans text-[9px] uppercase tracking-wide-label text-foreground backdrop-blur-sm">
                Self-initiated · Speculative
              </div>
            </div>
            <div className="flex flex-col justify-between p-7 md:col-span-5 md:p-10 lg:p-12">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-editorial text-accent">
                  {TATTVA.eyebrow}
                </span>
                <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight text-foreground md:text-5xl">
                  {TATTVA.title}
                </h2>
                <p className="mt-6 font-sans text-base leading-relaxed text-foreground/70 md:text-lg">
                  {TATTVA.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {TATTVA.capabilities.map((item) => (
                    <span key={item} className="border border-border px-3 py-1 font-sans text-[9px] uppercase tracking-wide-label text-espresso">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6">
  <button
    onClick={() => setShowCaseStudy((value) => !value)}
    className="group inline-flex w-fit items-center gap-3 border-b border-foreground/40 pb-2 font-sans text-[12px] uppercase tracking-wide-label text-foreground transition-colors hover:border-accent hover:text-accent"
  >
    {showCaseStudy ? 'Close Case Study' : 'View Case Study'}
    {showCaseStudy ? (
      <ArrowDown className="h-4 w-4 rotate-180" />
    ) : (
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    )}
  </button>

  <a
    href={TATTVA.deck}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 border-b border-accent pb-2 font-sans text-[12px] uppercase tracking-wide-label text-accent transition-colors hover:text-foreground"
  >
    View Full Deck ↗
  </a>
</div>
            </div>
          </div>

          {showCaseStudy && (
            <div className="border-t border-border bg-secondary/30 p-6 md:p-10 lg:p-14">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="font-sans text-[10px] uppercase tracking-editorial text-accent">The thinking</span>
                  <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">From consumer tension to campaign system.</h3>
                </div>
                <div className="space-y-7 font-sans text-base leading-relaxed text-foreground/75 md:col-span-8 md:text-lg">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-editorial text-muted-foreground">Consumer insight</span>
                    <p className="mt-2">“I don&apos;t always need a new outfit to express a different side of myself — sometimes I just need a new way to style the one I&apos;m already wearing.”</p>
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-editorial text-muted-foreground">Positioning</span>
                    <p className="mt-2">TATTVA helps fashion-conscious consumers express how they want to show up without changing their entire outfit.</p>
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-editorial text-muted-foreground">Big idea</span>
                    <p className="mt-2 font-serif text-2xl italic text-espresso">SAME YOU. DIFFERENT ENERGY.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12">
                <div className="relative aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[420px]">
                  <Image src={TATTVA.images.styling} alt="TATTVA styling application" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden md:col-span-5 md:aspect-auto md:min-h-[420px]">
                  <Image src={TATTVA.images.element} alt="TATTVA elemental cards" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover" />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-12">
                <div className="relative aspect-[16/9] overflow-hidden md:col-span-8 md:aspect-auto md:min-h-[300px]">
                  <Image src={TATTVA.images.installation} alt="TATTVA sensory launch installation" fill sizes="(max-width: 768px) 100vw, 67vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center border border-border bg-background p-7 md:col-span-4 md:p-9">
                  <span className="font-sans text-[10px] uppercase tracking-editorial text-accent">Campaign architecture</span>
                  <p className="mt-4 font-serif text-2xl leading-tight text-foreground">Discover → Anticipate → Intrigue → Experience → Wear → Express</p>
                  <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground">Social, PR + creators, experiential and e-commerce work together as one launch journey.</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-border pt-7 md:flex-row md:items-center md:justify-between">
                <p className="max-w-2xl font-sans text-xs leading-relaxed text-muted-foreground">Speculative concept — not commissioned or executed by Past Modern. Concept, strategy and creative development by Manya Mehta.</p>
                <span className="font-sans text-[10px] uppercase tracking-wide-label text-accent">Brand Strategy · Campaign Development · Creative Strategy</span>
              </div>
            </div>
          )}
        </article>
      </Reveal>

      {/* Data work */}
      <div className="mt-20 md:mt-28">
        <Reveal>
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-editorial text-accent">Analytical work</span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Data → insight</h2>
            </div>
            <p className="hidden max-w-xs text-right font-sans text-xs leading-relaxed text-muted-foreground md:block">Projects that show how I work with data, patterns and evidence.</p>
          </div>
        </Reveal>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.number} {...p} flip={i % 2 === 1} />
        ))}
      </div>

      <Reveal>
        <div className="mt-8 flex flex-col items-center gap-6 border-y border-border py-20 text-center">
          <span className="font-sans text-[11px] uppercase tracking-editorial text-accent">
            More work in progress
          </span>
          <p className="max-w-2xl font-serif text-2xl italic leading-snug text-espresso md:text-3xl">
            Next: real business problems, marketing experiments, operational projects and stronger analytics work.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
