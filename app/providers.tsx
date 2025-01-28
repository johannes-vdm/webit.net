"use client"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"
import type { ReactNode } from "react"

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <Theme>
      {children}
    </Theme>
  )
}