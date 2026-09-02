'use client'

import { Reveal, Label } from '../reveal'

export function VisionContent() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
      <Reveal>
        <Label className="mb-12">
          <span className="h-px w-8 bg-accent" />
          Vision
        </Label>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="max-w-4xl font-serif text-[clamp(2.6rem,7vw,6rem)] leading-[0.96] tracking-tight text-foreground">
          I don&apos;t have one box. <span className="italic text-espresso">And I don&apos;t want one.</span>
        </h1>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <Label>
            <span className="h-px w-8 bg-espresso/50" />
            What I&apos;m Working Towards
          </Label>
        </Reveal>

        <div className="md:col-span-8">
          <Reveal>
            <div className="space-y-6 font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
              <p>I want to know enough about the world to never stop being curious about it.</p>
              <p>
                I don&apos;t have one perfectly defined path — and I don&apos;t think I need one
                yet.
              </p>
              <p>
                What I do know is that I want to build a life around learning. I want to understand
                technology deeply enough to build with it, business well enough to turn ideas into
                something real, design well enough to make those ideas meaningful, and the world
                around me well enough to always have something new to question.
              </p>
              <p>
                I&apos;m drawn to the intersection of technology, creativity and business, but
                I&apos;m also interested in everything that exists around them — fashion, luxury,
                culture, people, brands, stories and ideas.
              </p>
              <p>
                My goal isn&apos;t to know everything. It&apos;s to become someone who is deeply
                knowledgeable about the things that matter to me, curious about everything else,
                and never afraid to learn something completely new.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={120}>
        <blockquote className="mt-24 border-t border-border pt-12">
          <p className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-foreground">
            Maybe my path won&apos;t be linear.
            <br />
            <span className="italic text-accent">I&apos;d rather it be interesting.</span>
          </p>
        </blockquote>
      </Reveal>
    </div>
  )
}
