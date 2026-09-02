'use client'

import { TOOLKIT_COLUMNS, EDUCATION } from '@/lib/portfolio-data'
import { Reveal, Label } from '../reveal'

export function ToolkitContent() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <Label className="mb-8">
            <span className="h-px w-8 bg-accent" />
            The Toolkit
          </Label>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-serif text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1] tracking-tight text-foreground">
            I&apos;m less interested in collecting tools — <span className="italic text-espresso">and more interested in what I can create with them.</span>
          </h1>
        </Reveal>
      </div>

      {/* Skill columns */}
      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
        {TOOLKIT_COLUMNS.map((col, i) => (
          <Reveal key={col.label} delay={i * 70} className="bg-background">
            <div className="flex h-full flex-col gap-6 p-8">
              <span className="font-sans text-[11px] uppercase tracking-editorial text-accent">
                {col.label}
              </span>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="font-serif text-xl leading-snug text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* The Road So Far */}
      <div className="mt-24 md:mt-32">
        <Reveal>
          <Label className="mb-12">
            <span className="h-px w-8 bg-accent" />
            The Road So Far
          </Label>
        </Reveal>
        <div className="border-t border-border">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.place} delay={i * 70}>
              <div className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:py-10">
                <span className="font-sans text-[11px] uppercase tracking-editorial text-muted-foreground md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl tracking-tight text-foreground md:col-span-6 md:text-3xl">
                  {edu.place}
                </h3>
                <p className="font-sans text-sm text-foreground/70 md:col-span-3">
                  {edu.detail}
                </p>
                {edu.status && (
                  <p className="font-sans text-[11px] uppercase tracking-wide-label text-accent md:col-span-2 md:text-right">
                    {edu.status}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Learning outside the classroom */}
      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <Label>
            <span className="h-px w-8 bg-espresso/50" />
            Learning, Outside The Classroom
          </Label>
        </Reveal>
        <Reveal className="md:col-span-8" delay={80}>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
            <p>I don&apos;t really believe learning should stop when the lecture does.</p>
            <p>
              Alongside my degree, I&apos;ve been exploring courses, tutorials and projects through
              platforms like Google and YouTube, particularly around Data Analytics, Cybersecurity,
              Web Development and technology.
            </p>
            <p>
              Some things I&apos;m learning because they&apos;re useful. Others, simply because
              I&apos;m curious.
            </p>
            <p className="font-serif text-2xl italic text-espresso">
              Either way, I&apos;m always learning something.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
