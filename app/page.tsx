import { CanvasAnimation } from "@/components/canvas-animation"
import { WebitLogo } from "@/components/webit-logo"
import { ContentSections } from "@/components/content-sections"
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
              <a href="mailto:info@webit.net" className="hover:text-cyan-400 transition-colors">
                info@webit.net
              </a>
              <a href="https://twitter.com/webit" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">
                @webit
              </a>
            </div>
          </nav>
        </header>

        <main className="container relative min-h-screen pt-32 w-full flex flex-col items-center justify-center">
          <div className="max-w-3xl">
              <StrategicInnovationLogo />
            <div className="text-lg text-gray-300 space-y-4">
              <p>
                True innovation happens at the intersection of technology and human need. 
                We partner with visionary leaders to architect strategic pathways that 
                create market-defining opportunities.
              </p>
              <p>
                Our approach combines deep technical expertise with broad understanding of systems and data, 
                helping organizations reframe their challenges through a pragmatic approach to technology.
              </p>
            </div>
          </div>
        </main>

        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Partnership Models */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-cyan-300">Innovation Partnership Frameworks</h2>
                <p className="text-lg text-gray-300">Architecting the future through collaborative models</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Model 1 */}
                <div className="p-8 border rounded-2xl border-cyan-900/50 bg-gradient-to-br from-black to-cyan-900/20 hover:border-cyan-400 transition-all">
                  <h3 className="mb-4 text-xl font-semibold text-cyan-400">Exploratory Research Partnership</h3>
                  <p className="text-gray-300">
                    Joint discovery initiatives where we co-explore emerging technologies and their 
                    philosophical implications. Includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-cyan-200">
                    <li>• Technology forecasting workshops</li>
                    <li>• Ethical impact assessments</li>
                    <li>• Prototype-driven research</li>
                  </ul>
                </div>

                {/* Model 2 */}
                <div className="p-8 border rounded-2xl border-cyan-900/50 bg-gradient-to-br from-black to-cyan-900/20 hover:border-cyan-400 transition-all">
                  <h3 className="mb-4 text-xl font-semibold text-cyan-400">Market Creation Alliance</h3>
                  <p className="text-gray-300">
                    Building new market spaces through technological foresight. Includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-cyan-200">
                    <li>• Emerging technology mapping</li>
                    <li>• First-principles market analysis</li>
                    <li>• Ecosystem architecture</li>
                  </ul>
                </div>

                {/* Model 3 */}
                <div className="p-8 border rounded-2xl border-cyan-900/50 bg-gradient-to-br from-black to-cyan-900/20 hover:border-cyan-400 transition-all">
                  <h3 className="mb-4 text-xl font-semibold text-cyan-400">Transformation Accelerator</h3>
                  <p className="text-gray-300">
                    Full-spectrum organizational evolution programs. Includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-cyan-200">
                    <li>• Innovation capability building</li>
                    <li>• Technology consciousness workshops</li>
                    <li>• Exponential strategy development</li>
                  </ul>
                </div>

                {/* Model 4 - Uses Gradient Texture */}
                <div className="relative p-8 overflow-hidden border rounded-2xl border-cyan-900/50 bg-black/80 backdrop-blur-lg">
                  <div className="absolute inset-0 -z-10 bg-[url('/Dreamy Gradient Blur Texture.png')] bg-cover opacity-20 mix-blend-soft-light" />
                  <h3 className="mb-4 text-xl font-semibold text-cyan-400">Future Foundations Program</h3>
                  <p className="text-gray-300">
                    Long-term strategic partnership for sustained innovation leadership
                  </p>
                  <ul className="mt-4 space-y-2 text-cyan-200">
                    <li>• Continuous horizon scanning</li>
                    <li>• Adaptive innovation systems</li>
                    <li>• Cultural technology integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContentSections />

        {/* Sticky Footer */}
        <div className="sticky bottom-0 left-0 right-0 z-50 border-t border-cyan-900 bg-black/95 backdrop-blur-xl">
          <div className="container flex items-center justify-between py-4 text-sm text-cyan-200">
            <div>© 2024 WEBIT Strategic Innovation Partners</div>
            <div className="flex gap-6">
              <span>New York · London · Singapore</span>
              <span>Elevating Technology Consciousness Since 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

