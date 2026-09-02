'use client'

import { ArrowUpRight } from 'lucide-react'
import { CONTACT } from '@/lib/portfolio-data'
import { Reveal } from '../reveal'

export function ContactContent() {
  return (
    <div className="mx-auto flex min-h-full max-w-[1400px] flex-col justify-between px-6 py-20 md:px-10 md:py-24">
      <div>
        <Reveal>
          <span className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-editorial text-gold">
            <span className="h-px w-8 bg-gold" />
            Contact
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-10 font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight text-ivory">
            Have an <span className="italic">idea?</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl font-serif text-2xl italic text-ivory/80 md:text-3xl">
            Let&apos;s make something worth looking at.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-ivory/60">
            Available for freelance web, content and creative digital projects.
          </p>
        </Reveal>
      </div>

      {/* Contact grid */}
      <div className="mt-20 grid grid-cols-1 gap-12 border-t border-ivory/15 pt-14 md:grid-cols-2">
        <Reveal>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] uppercase tracking-editorial text-ivory/40">
                Email
              </span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="w-fit border-b border-ivory/30 pb-1 font-serif text-xl text-ivory transition-colors hover:border-gold hover:text-gold md:text-2xl"
              >
                {CONTACT.email}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] uppercase tracking-editorial text-ivory/40">
                Phone
              </span>
              <a
                href={`tel:${CONTACT.phone}`}
                className="w-fit border-b border-ivory/30 pb-1 font-serif text-xl text-ivory transition-colors hover:border-gold hover:text-gold md:text-2xl"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] uppercase tracking-editorial text-ivory/40">
                Location
              </span>
              <span className="font-serif text-xl text-ivory md:text-2xl">
                {CONTACT.location}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-2">
            <span className="mb-2 font-sans text-[10px] uppercase tracking-editorial text-ivory/40">
              Socials
            </span>
            {CONTACT.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-ivory/15 py-4 font-serif text-2xl text-ivory transition-colors hover:text-gold md:text-3xl"
              >
                {s.label}
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.4}
                />
              </a>
            ))}
            <span className="mt-3 font-sans text-[11px] uppercase tracking-wide-label text-ivory/40">
              Instagram — {CONTACT.instagramHandle}
            </span>
          </div>
        </Reveal>
      </div>

      {/* Signature */}
      <Reveal>
        <div className="mt-24 flex flex-col items-center gap-3 border-t border-ivory/15 pt-14 text-center">
          <span className="font-serif text-5xl tracking-tight text-ivory md:text-7xl">
            Manya Mehta
          </span>
          <span className="font-sans text-[11px] uppercase tracking-editorial text-gold">
            Technology × Creativity × Business
          </span>
        </div>
      </Reveal>
    </div>
  )
}
