import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "./providers"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'WEBIT, Strategic Innovation Partners',
  description: 'We create using the future of technology and innovation to solve problems for our clients and create value.',
  openGraph: {
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'WEBIT - Strategic Innovation Partners'
      }
    ]
  },
  icons: {
    icon: '/webit.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://assets.calendly.com/assets/external/widget.css" 
          rel="stylesheet"
        />
      </head>
      <body className="h-screen overflow-auto">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}