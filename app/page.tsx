import { CanvasAnimation } from "@/components/canvas-animation"
import { WebitLogo } from "@/components/webit-logo"
import { StrategicInnovationLogo } from "@/components/strategic-innovation-logo"

export default function Page() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed Background Container */}
      <div className="fixed inset-0 z-0 h-screen overflow-hidden">
        <CanvasAnimation />
        <div className="absolute inset-0 bg-black/90 backdrop-blur-[30px] saturate-150" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container flex items-center justify-between py-6">
            <WebitLogo />
            <div className="flex items-center gap-6 text-white">
              <a href="mailto:info@webit.net" className="text-cyan-400 transition-colors">
                info@webit.net
              </a>
            </div>
          </nav>
        </header>

        <main className="container relative min-h-screen pt-32 w-full flex flex-col items-center justify-center">
          <div className="max-w-3xl">
              <StrategicInnovationLogo />
            <div className="text-lg text-gray-400 space-y-4">
              <p>
                True innovation happens at the intersection of technology and human need. 
                We partner with visionary leaders to architect strategic pathways that 
                create market-defining opportunities.
              </p>
              <p>
                Our approach combines deep technical expertise with broad understanding of systems and data, 
                helping organizations reframe their challenges through a pragmatic approach to technology.
             <a href="mailto:info@webit.net" className="text-cyan-400 hover:text-cyan-300 transition-colors pl-2">
              Request our services
             </a>
              </p>
            </div>
          </div>
        </main>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 left-0 right-0 z-50 ">
          <div className="container flex items-center justify-between py-4 text-sm text-cyan-200">
            <div>© 2024 WEBIT Strategic Innovation Partners</div>
            <div className="flex gap-6">
              <span>Amsterdam · Berlin · Wyoming · Cape Town</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

