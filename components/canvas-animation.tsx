"use client"

import { useEffect, useRef } from "react"

interface WaveSource {
  x: number
  y: number
  speed: number
  angle: number
}

export function CanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const waveSources: WaveSource[] = [
      { x: 0.5, y: 0.3, speed: 0.4, angle: -Math.PI / 2 },
    ]

    const sourceSpeed = 0.00005
    const orbitRadius = 0.15

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const cellSize = 40 // Increased cell size for more fluid look
      const cols = Math.ceil(canvas.width / cellSize)
      const rows = Math.ceil(canvas.height / cellSize)

      waveSources.forEach((source) => {
        source.angle += sourceSpeed
        source.x = 0.5 + Math.cos(source.angle) * orbitRadius
        source.y = 0.5 + Math.sin(source.angle) * orbitRadius
      })

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSize
          const y = j * cellSize
          let height = 0

          waveSources.forEach((source) => {
            const dx = x / canvas.width - source.x
            const dy = y / canvas.height - source.y
            const distance = Math.sqrt(dx * dx + dy * dy) * 15 // Reduced for smoother transitions
            height += Math.sin(distance - time * source.speed) * Math.exp(-distance * 0.15) // Adjusted decay
          })

          // Add smooth wave motion
          height += Math.sin(x * 0.015 + time * 1.5) * 0.4
          height += Math.cos(y * 0.015 + time * 1.8) * 0.4

          const intensity = Math.min(Math.abs(height * 60), 255)
          ctx.fillStyle = `rgba(150, ${200 + intensity}, 255, ${0.7 + intensity / 510})`

          const size = cellSize * (0.9 + Math.abs(height) * 0.4) // Increased base size
          ctx.beginPath()
          ctx.arc(x + cellSize / 2, y + cellSize / 2, size / 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      time += 0.015 // Slowed down for more fluid motion
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)" }}
    />
  )
}

