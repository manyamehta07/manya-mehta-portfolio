'use client'

import Image from 'next/image'
import { INTERESTS } from '@/lib/portfolio-data'
import { Reveal, Label } from '../reveal'

const photos = [
  { src: '/images/manya-rooftop-01.jpeg', alt: 'Manya on a rooftop at night', className: 'col-span-2 row-span-2 md:col-span-2 md:row-span-3', caption: 'LIFE / OBSERVATION' },
  { src: '/images/manya-black-dress.jpeg', alt: 'Manya in a black dress', className: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2', caption: 'STYLE / EXPRESSION' },
  { src: '/images/manya-travel.jpeg', alt: 'Manya travelling with mountains in the background', className: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2', caption: 'TRAVEL / CURIOSITY' },
  { src: '/images/manya-cafe-01.jpeg', alt: 'Manya at a café', className: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2', caption: 'EVERYDAY / DETAILS' },
  { src: '/images/manya-rooftop-02.jpeg', alt: 'Manya on a rooftop at night', className: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2', caption: 'NIGHT / CITY' },
  { src: '/images/manya-temple.png', alt: 'Manya outside a temple while travelling', className: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2', caption: 'CULTURE / PLACE' },
  { src: '/images/manya-cafe-02.jpeg', alt: 'Manya at a café', className: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2', caption: 'EVERYDAY / DETAILS' },
]

export function BeyondContent() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <Label className="mb-8">
            <span className="h-px w-8 bg-accent" />
            Beyond The Code
          </Label>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight text-foreground">
            I get interested in things. <span className="italic text-espresso">A lot of things.</span>
          </h1>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 auto-rows-[150px] gap-3 md:mt-24 md:grid-cols-4 md:auto-rows-[150px]">
        {photos.map((photo, i) => (
          <Reveal key={photo.src} className={photo.className} delay={i * 60}>
            <figure className="group relative h-full min-h-[150px] overflow-hidden bg-stone">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent opacity-70" />
              <figcaption className="absolute bottom-3 left-4 font-sans text-[9px] uppercase tracking-editorial text-ivory drop-shadow-sm">
                {photo.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
          {INTERESTS.map((interest) => (
            <span key={interest} className="font-sans text-[11px] uppercase tracking-editorial text-muted-foreground">
              {interest}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-3">
          <Reveal>
            <div className="space-y-6 font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
              <p>I&apos;m naturally curious, and my interests have never stayed in one lane.</p>
              <p>
                I&apos;m fascinated by technology — not just learning how it works, but watching where it&apos;s going. New products, emerging ideas, changing industries, the ways technology is becoming more integrated into everyday life, and especially the space where technology and creativity meet.
              </p>
              <p>
                Then there&apos;s fashion — the visual language, the business behind a brand, the way culture shapes trends, and how something as simple as a product can become an entire identity.
              </p>
              <p>
                I&apos;m also very much into sports, Bollywood and music — different worlds, but all connected by something I find interesting: people, culture, storytelling and the way things become experiences.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 border-t border-border pt-12 md:mt-32 md:pt-16">
        <Reveal>
          <p className="max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.4rem)] leading-tight tracking-tight text-foreground">
            I&apos;m rarely interested in just knowing that something exists. <span className="italic text-espresso">I want to know why it works, why people care, and what could be done differently.</span>
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 max-w-2xl font-sans text-lg leading-relaxed text-foreground/75 md:text-xl">
            <p>
              I&apos;m an ambivert. I can be the person talking to everyone in a room, but I equally enjoy disappearing into my own world, learning something random at 2 AM, or working on an idea by myself.
            </p>
            <p className="mt-6">
              I like conversations. I like observing. I like experimenting. And I think that explains a lot about me.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
