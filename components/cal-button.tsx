"use client"
import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export function CalButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" })
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: true,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#22d3ee" },
          dark: { "cal-brand": "#22d3ee" }
        }
      })
    })()
  }, [])

  return (
    <a
      data-cal-namespace="30min"
      data-cal-link="webit/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
      className="text-cyan-400 hover:text-cyan-300 transition-colors pl-1 cursor-pointer"
    >
      Request our services
    </a>
  )
}
