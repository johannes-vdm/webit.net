import React from "react"

export function StrategicInnovationLogo() {
  return (
    <svg
      viewBox="0 0 1200 200"
      aria-label="Strategic Innovation Logo"
      className="h-[120px] w-full sm:h-[85px]"
    >
      <defs>
        <style>
          {`.cls-4 {
              stroke: #FFFFFFFF;
              stroke-width: 2;
              stroke-linejoin: round;
              fill: none;
            }
          `}
        </style>
      </defs>

      <text
        className="cls-4"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="85"
        fontFamily="sans-serif"
      >
        <tspan x="50%" dy="-0.6em" className="hidden max-sm:inline">STRATEGIC</tspan>
        <tspan x="50%" dy="1.2em" className="hidden max-sm:inline">INNOVATION</tspan>
        <tspan className="sm:inline max-sm:hidden">STRATEGIC INNOVATION</tspan>
      </text>
    </svg>
  )
} 