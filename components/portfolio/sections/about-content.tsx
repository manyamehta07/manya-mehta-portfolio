'use client'

import Image from 'next/image'
import { PERSONALITY } from '@/lib/portfolio-data'
import { Reveal, Label } from '../reveal'

export function AboutContent() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <Label className="mb-8">
              <span className="h-px w-8 bg-accent" />
              About Me
            </Label>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight text-foreground">
              Business curious. <br />
              Data minded. <br />
              <span className="italic text-espresso">Tech enabled.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-foreground/80 md:mt-12 md:text-xl">
              <p>
                I&apos;m Manya — an Information Technology student interested in the business side of how things work.
              </p>
              <p>
                I&apos;m especially drawn to business strategy, marketing, operations and data. I want to understand the customer, the market and the numbers — then connect those pieces to a decision that can actually be executed.
              </p>
              <p>
                My technical background is the enabler, not the end goal. SQL, Excel, Python and technology help me investigate problems, structure information and communicate better decisions.
              </p>
              <p>
                I&apos;m using college to explore different sides of this space through projects, campaigns, internships and real-world experiments — learning what kind of business problems I want to spend my career solving.
              </p>
              <p className="font-serif text-2xl italic text-espresso">
                I want to become someone who can move from a business question to an insight, and from an insight to action.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="md:col-span-5" delay={160}>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone">
            <Image
              src="/images/manya-hero.png"
              alt="Portrait of Manya Mehta"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[30%_28%] [filter:sepia(0.18)_saturate(1.05)_contrast(1.02)]"
            />
          </div>
        </Reveal>
      </div>


      {/* Personality */}
      <div className="mt-20 border-t border-border pt-12 md:mt-28">
        <Reveal>
          <Label className="mb-10">
            <span className="h-px w-8 bg-accent" />
            In A Few Words
          </Label>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PERSONALITY.map((p, i) => (
            <Reveal key={p.label} delay={i * 70} className="bg-background">
              <div className="flex h-full flex-col gap-4 p-8">
                <span className="font-sans text-[11px] uppercase tracking-editorial text-accent">
                  {p.label}
                </span>
                <p className="font-serif text-xl leading-snug text-foreground">
                  &ldquo;{p.text}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
