import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "./providers"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: 'WEBIT, Strategic Innovation Partners',
  description: 'We create using the future of technology and innovation to solve problems for our clients and create value.',
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
      <body className="h-screen overflow-auto">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
