'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SectionOverlay({
  open,
  title,
  dark = false,
  onClose,
  onHome,
  children,
}: {
  open: boolean
  title: string
  dark?: boolean
  onClose: () => void
  onHome: () => void
  children: ReactNode
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // reset scroll to top whenever it becomes visible
  useEffect(() => {
    if (open && scrollRef.current) scrollRef.current.scrollTop = 0
  }, [open])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className={cn(
        'fixed inset-0 z-[60] flex flex-col transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        dark ? 'bg-espresso text-ivory' : 'bg-background text-foreground',
        open ? 'pointer-events-auto opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-[1.015]',
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          'flex shrink-0 items-center justify-between px-6 py-5 md:px-10',
          dark ? 'border-b border-ivory/15' : 'border-b border-border/60',
        )}
      >
        <button
          onClick={onHome}
          className="font-serif text-2xl tracking-tight transition-opacity hover:opacity-60"
          aria-label="Back to home"
        >
          MM<span className="text-accent">.</span>
        </button>
        <span className="font-sans text-[11px] uppercase tracking-editorial opacity-70">
          {title}
        </span>
        <button
          onClick={onClose}
          className="group inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-wide-label transition-opacity hover:opacity-60"
          aria-label="Back"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            strokeWidth={1.5}
          />
          Back
        </button>
      </div>

      {/* Scroll area */}
      <div ref={scrollRef} className="grain relative flex-1 overflow-y-auto">
        {open && children}
      </div>
    </div>
  )
}
