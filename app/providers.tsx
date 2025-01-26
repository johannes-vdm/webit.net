"use client"
import "@radix-ui/themes/styles.css"
import { Theme, Button } from "@radix-ui/themes"
import type { ReactNode } from "react"

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <Theme>
      {children}
    </Theme>
  )
}

export default function HelloRadix() {
  return (
    <Theme>
      <Button variant="ghost">Hey 👋</Button>
    </Theme>
  )
}  