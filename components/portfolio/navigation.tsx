'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS, type SectionKey } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function Navigation({
  onNavigate,
  onHome,
}: {
  onNavigate: (key: SectionKey) => void
  onHome: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-border/60 py-4'
            : 'py-6',
        )}
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-10">
          <button
            onClick={onHome}
            className="font-serif text-2xl tracking-tight text-foreground transition-opacity hover:opacity-60"
            aria-label="Manya Mehta — home"
          >
            MM<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => onNavigate(item.key)}
                  className="group relative text-[12px] uppercase tracking-wide-label text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile trigger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.4} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-background transition-all duration-500 md:hidden',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-serif text-2xl">
            MM<span className="text-accent">.</span>
          </span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" strokeWidth={1.4} />
          </button>
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-2 px-6 pb-16">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.key}>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onNavigate(item.key)
                }}
                className="flex w-full items-baseline gap-4 border-b border-border/60 py-4 text-left"
              >
                <span className="font-sans text-[11px] uppercase tracking-editorial text-accent">
                  0{i + 1}
                </span>
                <span className="font-serif text-4xl text-foreground">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
