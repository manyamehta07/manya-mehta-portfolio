'use client'

import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'

export function HeroCover({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-0">
      <div className="mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-12 md:px-10">
        {/* Left — editorial type block */}
        <div className="relative z-20 md:col-span-7 md:pr-6">
          <div className="mb-6 flex items-center gap-4 animate-fade">
            <span className="h-px w-10 bg-espresso/50" />
            <span className="font-sans text-[11px] uppercase tracking-editorial text-espresso">
              Portfolio — Vol. 01
            </span>
          </div>

          <h1 className="font-serif text-[clamp(3.4rem,12vw,10rem)] leading-[0.86] tracking-[-0.02em] text-foreground">
            <span className="block animate-rise">Manya</span>
            <span className="block animate-rise italic text-espresso" style={{ animationDelay: '120ms' }}>
              Mehta
            </span>
          </h1>

          <p
            className="mt-8 font-sans text-[13px] uppercase tracking-editorial text-foreground/70 animate-rise"
            style={{ animationDelay: '240ms' }}
          >
            Technology <span className="text-accent">×</span> Creativity{' '}
            <span className="text-accent">×</span> Business
          </p>

          <div
            className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-rise"
            style={{ animationDelay: '360ms' }}
          >
            <p className="max-w-sm font-serif text-xl italic leading-relaxed text-espresso">
              &ldquo;Curious by nature. Creative by instinct. Always exploring.&rdquo;
            </p>
            <dl className="font-sans text-[10px] uppercase tracking-wide-label text-muted-foreground">
              <div className="flex flex-col gap-1 border-l border-border pl-4">
                <dt className="sr-only">Field of study</dt>
                <dd>Information Technology</dd>
                <dd>VIT Vellore</dd>
                <dd>India</dd>
              </div>
            </dl>
          </div>

          <div
            className="mt-12 flex flex-wrap items-center gap-8 animate-rise"
            style={{ animationDelay: '480ms' }}
          >
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 font-sans text-[12px] uppercase tracking-wide-label text-primary-foreground transition-colors hover:bg-espresso"
            >
              Explore my world
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </button>
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-wide-label text-foreground/60 transition-colors hover:text-foreground"
            >
              Scroll to explore
              <ArrowDown
                className="h-4 w-4 animate-bounce"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>

        {/* Right — hero photograph */}
        <div className="relative md:col-span-5">
          <div className="relative animate-overlay-in">
            <div className="pointer-events-none absolute -left-6 top-8 z-10 hidden font-sans text-[10px] uppercase tracking-editorial text-espresso md:block [writing-mode:vertical-rl]">
              Curious · Creative · Always Exploring
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone">
              <Image
                src="/images/manya-hero.png"
                alt="Manya Mehta, standing indoors in front of a warm wooden doorway"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[center_20%] [filter:sepia(0.12)_saturate(1.05)_contrast(1.03)]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
            </div>
            <div className="mt-3 flex items-center justify-between font-sans text-[10px] uppercase tracking-wide-label text-muted-foreground">
              <span>Fig. 01</span>
              <span>Manya Mehta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
