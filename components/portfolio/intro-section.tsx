'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal, Label } from './reveal'

export function IntroSection({ onReadMore }: { onReadMore: () => void }) {
  return (
    <section className="relative border-t border-border/70 py-24 md:py-36">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-10">
        {/* Portrait fragment */}
        <Reveal className="order-2 md:order-1 md:col-span-5">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden bg-stone md:ml-auto">
            <Image
              src="/images/manya-about.jpeg"
              alt="Manya Mehta in a pink top outdoors"
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover object-[center_38%] [filter:sepia(0.06)_saturate(1.03)]"
            />
            <div className="pointer-events-none absolute inset-0 border border-ivory/20" />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 md:order-2 md:col-span-7 md:pl-6">
          <Reveal>
            <Label className="mb-8">
              <span className="h-px w-8 bg-accent" />
              About Me
            </Label>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] tracking-tight text-foreground">
              Curious. Creative. <span className="italic text-espresso">Always learning.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-foreground/75">
              I&apos;m an Information Technology student who has never really been interested in
              staying inside one box. I love technology, but I&apos;m equally drawn to design,
              fashion, business, data, ideas and the stories behind the things people create.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <button
              onClick={onReadMore}
              className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/40 pb-2 font-sans text-[12px] uppercase tracking-wide-label text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Read more about me
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
