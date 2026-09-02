'use client'

import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

export function ProjectCard({
  number,
  title,
  category,
  description,
  tech,
  href,
  flip = false,
}: {
  number: string
  title: string
  category: string
  description: string
  tech: string[]
  href: string
  flip?: boolean
}) {
  return (
    <Reveal>
      <article className="group grid grid-cols-1 gap-8 border-t border-border py-14 md:grid-cols-12 md:gap-12 md:py-20">
        {/* Visual preview — typographic editorial cover */}
        <div className={flip ? 'md:order-2 md:col-span-5' : 'md:col-span-5'}>
          <div className="relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden bg-espresso p-8 text-ivory transition-transform duration-500 group-hover:scale-[0.99]">
            <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-editorial text-ivory/60">
              <span>Case Study</span>
              <span>{number}</span>
            </div>
            <span className="font-serif text-4xl italic leading-none text-ivory md:text-5xl">
              {title}
            </span>
            <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-wide-label text-gold">
              {category}
            </div>
            <div className="pointer-events-none absolute -right-8 -top-10 font-serif text-[10rem] leading-none text-ivory/5">
              {number}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className={flip ? 'md:order-1 md:col-span-7 md:pr-10' : 'md:col-span-7 md:pl-6'}>
          <span className="font-sans text-[11px] uppercase tracking-editorial text-accent">
            Project {number}
          </span>
          <h3 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            {title}
          </h3>
          <p className="mt-3 font-sans text-[11px] uppercase tracking-wide-label text-muted-foreground">
            {category}
          </p>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-foreground/75">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="border border-border px-3 py-1 font-sans text-[10px] uppercase tracking-wide-label text-espresso"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-10 inline-flex items-center gap-3 border-b border-foreground/40 pb-2 font-sans text-[12px] uppercase tracking-wide-label text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View on GitHub
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </article>
    </Reveal>
  )
}
