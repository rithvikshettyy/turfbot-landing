import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://turfbook.in'),
  title: 'TurfBook — Automated WhatsApp Booking for Turfs',
  description:
    'TurfBook automates turf bookings, confirmations, reminders and payments through WhatsApp.',
  openGraph: {
    title: 'TurfBook — Automated WhatsApp Booking for Turfs',
    description:
      'Confirmations, UPI payments and reminders run themselves. Turn WhatsApp into your booking desk.',
    type: 'website',
    images: ['/hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A6B3A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`js ${archivo.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231A6B3A'/%3E%3Cpath d='M8.5 10.5h15v3H18v9h-3.5v-9H8.5z' fill='%23fff'/%3E%3C/svg%3E"
        />
        <link rel="preload" as="image" href="/hero.webp" />
      </head>
      <body>{children}</body>
    </html>
  )
}
