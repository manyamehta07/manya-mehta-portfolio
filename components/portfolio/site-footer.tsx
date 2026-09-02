'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'
import type { SectionKey } from '@/lib/portfolio-data'

export function SiteFooter({ onNavigate }: { onNavigate: (key: SectionKey) => void }) {
  return (
    <footer className="relative bg-espresso px-6 py-20 text-ivory md:px-10 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-editorial text-gold">
                Let&apos;s connect
              </span>
              <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-tight text-ivory">
                Let&apos;s make something <span className="italic">worth looking at.</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center gap-3 border border-ivory/30 px-8 py-4 font-sans text-[12px] uppercase tracking-wide-label text-ivory transition-colors hover:bg-ivory hover:text-espresso"
            >
              Get in touch
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 md:flex-row">
          <span className="font-serif text-xl">
            MM<span className="text-gold">.</span>
          </span>
          <span className="font-sans text-[10px] uppercase tracking-editorial text-ivory/40">
            Manya Mehta — Technology × Creativity × Business
          </span>
          <span className="font-sans text-[10px] uppercase tracking-editorial text-ivory/40">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
