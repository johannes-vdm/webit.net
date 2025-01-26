import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "./providers"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
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
