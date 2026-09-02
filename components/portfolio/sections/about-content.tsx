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
              Curious by nature. <br />
              Creative by instinct. <br />
              <span className="italic text-espresso">Tech by choice.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-foreground/80 md:mt-12 md:text-xl">
              <p>
                I&apos;m Manya — an Information Technology student who has never really been
                interested in staying inside one box.
              </p>
              <p>
                I love technology, but I&apos;m equally drawn to design, fashion, business, data,
                ideas and the stories behind the things people create. I like learning something
                new just because it makes me curious, taking it apart, understanding how it works,
                and then finding a way to make it my own.
              </p>
              <p>
                For me, creativity isn&apos;t separate from technology. I enjoy the space where the
                two meet — where an idea can become a product, a visual experience, a brand, or
                something people actually use.
              </p>
              <p>
                I&apos;m still exploring, experimenting and figuring out where all of these interests
                will take me. And honestly, that&apos;s my favourite part.
              </p>
              <p className="font-serif text-2xl italic text-espresso">
                I&apos;m here to learn a little about everything that fascinates me — and build
                along the way.
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
