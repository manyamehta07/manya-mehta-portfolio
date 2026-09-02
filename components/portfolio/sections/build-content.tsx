'use client'

import { BUILD_CATEGORIES } from '@/lib/portfolio-data'
import { Reveal, Label } from '../reveal'

export function BuildContent() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-4xl">
        <Reveal>
          <Label className="mb-8">
            <span className="h-px w-8 bg-accent" />
            What I Like To Build
          </Label>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight text-foreground">
            Digital experiences <span className="italic text-espresso">with a point of view.</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-10 max-w-3xl font-sans text-lg leading-relaxed text-foreground/75 md:text-xl">
            I&apos;m interested in creating things that sit somewhere between technology, visual design and content. That could be a website that makes a brand feel more interesting, a visual identity that communicates an idea, a content system that actually feels organized, or a digital experience that makes someone want to stay a little longer.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
        {BUILD_CATEGORIES.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 70} className="bg-background">
            <div className="flex h-full flex-col gap-4 p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10">
              <span className="font-serif text-2xl text-foreground">{cat.label}</span>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">{cat.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-16 max-w-2xl font-serif text-2xl italic leading-snug text-espresso md:text-3xl">
          I&apos;m still figuring out exactly where I want to take all of this. For now, I&apos;m interested in making things, learning fast, and seeing where the combination takes me.
        </p>
      </Reveal>
    </div>
  )
}
