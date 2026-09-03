'use client'

import { useCallback, useEffect, useState } from 'react'
import type { SectionKey } from '@/lib/portfolio-data'
import { Navigation } from './navigation'
import { HeroCover } from './hero-cover'
import { IntroSection } from './intro-section'
import { ExploreSection } from './explore-section'
import { SiteFooter } from './site-footer'
import { SectionOverlay } from './section-overlay'
import { AboutContent } from './sections/about-content'
import { VisionContent } from './sections/vision-content'
import { WorkContent } from './sections/work-content'
import { ToolkitContent } from './sections/toolkit-content'
import { BuildContent } from './sections/build-content'
import { BeyondContent } from './sections/beyond-content'
import { ContactContent } from './sections/contact-content'

const TITLES: Record<SectionKey, string> = {
  about: 'About',
  vision: 'Vision',
  work: 'Selected Work',
  toolkit: 'The Toolkit',
  build: 'What I Like To Build',
  beyond: 'Beyond The Code',
  contact: 'Contact',
}

export function PortfolioApp() {
  const [active, setActive] = useState<SectionKey | null>(null)
  const [open, setOpen] = useState(false)

  const navigate = useCallback((key: SectionKey) => {
  setActive(key)
  window.history.pushState({ section: key }, '', `#${key}`)

  requestAnimationFrame(() =>
    requestAnimationFrame(() => setOpen(true))
  )
}, [])

  const close = useCallback(() => {
  setOpen(false)
  window.setTimeout(() => setActive(null), 520)
}, [])
useEffect(() => {
  const handlePopState = () => {
    setOpen(false)
    window.setTimeout(() => setActive(null), 520)
  }

  window.addEventListener('popstate', handlePopState)

  return () => {
    window.removeEventListener('popstate', handlePopState)
  }
}, [])

  // lock body scroll while overlay is present
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  const scrollToExplore = useCallback(() => {
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <main className="grain relative min-h-screen bg-background">
      <Navigation onNavigate={navigate} onHome={close} />

      <HeroCover onExplore={scrollToExplore} />
      <IntroSection onReadMore={() => navigate('about')} />
      <ExploreSection onNavigate={navigate} />
      <SiteFooter onNavigate={navigate} />

      <SectionOverlay
        open={open}
        title={active ? TITLES[active] : ''}
        dark={active === 'contact'}
        onClose={close}
        onHome={close}
      >
        {active === 'about' && <AboutContent />}
        {active === 'vision' && <VisionContent />}
        {active === 'work' && <WorkContent />}
        {active === 'toolkit' && <ToolkitContent />}
        {active === 'build' && <BuildContent />}
        {active === 'beyond' && <BeyondContent />}
        {active === 'contact' && <ContactContent />}
      </SectionOverlay>
    </main>
  )
}
