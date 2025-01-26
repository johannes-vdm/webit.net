import * as Tabs from "@radix-ui/react-tabs"
import React from "react"
import { PartnershipCards } from "./partnership-cards"

export function RadixTabsDemo() {
  return (
    <Tabs.Root defaultValue="innovation">
      <Tabs.List>
        <Tabs.Trigger value="innovation">Innovation Partnership Frameworks</Tabs.Trigger>
        <Tabs.Trigger value="other">Other</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="innovation">
        <PartnershipCards />
      </Tabs.Content>

      <Tabs.Content value="other">
        Other content...
      </Tabs.Content>
    </Tabs.Root>
  )
} 