import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manya Mehta — Technology × Creativity × Business',
  description:
    'The personal editorial portfolio of Manya Mehta. Curious by nature, creative by instinct — an Information Technology student exploring the space where technology, design and business meet.',
  generator: 'v0.app',
  openGraph: {
    title: 'Manya Mehta — Technology × Creativity × Business',
    description:
      'Curious by nature. Creative by instinct. Always exploring. The editorial portfolio of Manya Mehta.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f1e7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
