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
          I&apos;m building towards the space where <span className="italic text-espresso">business meets data.</span>
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
              <p>I&apos;m exploring a career across business strategy, marketing, operations and business analytics.</p>
              <p>
                I&apos;m interested in the questions behind a business: Who is the customer? What do they value? Where does growth come from? What is slowing the business down? Which decision should be made next?
              </p>
              <p>
                Data is becoming the way I answer those questions. I&apos;m building my analytical foundation in SQL, Excel and Python while learning how to translate numbers into commercial and operational insight.
              </p>
              <p>
                Marketing gives me another lens: consumer behaviour, positioning, brands, campaigns and the way people respond to ideas. Operations connects that thinking to execution — systems, processes, coordination and improvement.
              </p>
              <p>
                I&apos;m deliberately exploring before specialising. My goal over the next few years is to collect real evidence about the kinds of business problems I enjoy solving and become very good at solving them.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={120}>
        <blockquote className="mt-24 border-t border-border pt-12">
          <p className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-foreground">
            I don&apos;t need the title figured out yet.
            <br />
            <span className="italic text-accent">I need the problems worth solving.</span>
          </p>
        </blockquote>
      </Reveal>
    </div>
  )
}
