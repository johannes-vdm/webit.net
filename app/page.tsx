import { CanvasAnimation } from "@/components/canvas-animation"
import { WebitLogo } from "@/components/webit-logo"

export default function Page() {
  return (
    <div className="relative overflow-x-hidden mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
      {/* Fixed Background Container */}
      <div className="fixed inset-0 z-0 h-screen overflow-hidden">
        <CanvasAnimation />
        <div className="absolute inset-0 bg-black/90 backdrop-blur-[30px] saturate-150" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col w-full">
        <main className="relative w-full flex-grow flex flex-col items-center justify-center pt-32">
          <div className="max-w-3xl w-full text-center sm:text-left flex flex-col items-center justify-center space-y-8">
            <WebitLogo />
            <div className="text-base sm:text-lg text-gray-400 space-y-4">
              <p>
                True innovation happens at the intersection of technology and problem solving. 
                We partner with visionary leaders to architect strategic pathways that 
                create market-defining opportunities.
              </p>
              <div>
                <p>
                  Our approach combines deep technical expertise with broad understanding of systems and data, 
                  helping organizations reframe their challenges through a pragmatic approach to technology.
                  <a 
                    href={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors pl-1 cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request our services
                  </a>
                </p>
                <div 
                  id="calendar-button" 
                  className="opacity-0 h-0 w-0 overflow-hidden absolute"
                  data-scheduling-button
                />
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="flex items-center justify-center py-4 text-sm text-cyan-200">
            <div className="max-w-3xl w-full sm:text-left flex flex-col items-center justify-center space-y-8">
              © {new Date().getFullYear()} WEBIT LLC | Strategic Innovation Partners
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}