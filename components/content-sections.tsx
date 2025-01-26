import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Code, Laptop, Palette } from "lucide-react"

export function ContentSections() {
  return (
    <div className="relative pt-screen space-y-32 pb-32">
      {/* Services Section */}
      <section className="container relative py-24">
        <div className="absolute top-0 -right-1/4 w-[600px] h-[600px] pointer-events-none">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-83NZDCN1OjHsk8eEIwAMPPwfNFeSkf.png"
            alt=""
            fill
            className="object-contain opacity-40"
          />
        </div>
        <div className="relative grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm text-white/80 rounded-full border border-white/20 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Our Services
            </div>
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Innovative Solutions for Modern Businesses
            </h2>
            <p className="text-xl text-gray-300">
              We develop engaging and functional websites and applications with creativity that creates unique designs
              your clients will love.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black group">
              Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="p-6 space-y-4 rounded-2xl bg-white/5 backdrop-blur">
              <Code className="w-10 h-10 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Web Development</h3>
              <p className="text-gray-300">Custom websites and web applications built with modern technologies.</p>
            </div>
            <div className="p-6 space-y-4 rounded-2xl bg-white/5 backdrop-blur">
              <Laptop className="w-10 h-10 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Cloud Solutions</h3>
              <p className="text-gray-300">Scalable and secure cloud infrastructure for your applications.</p>
            </div>
            <div className="p-6 space-y-4 rounded-2xl bg-white/5 backdrop-blur lg:translate-x-8">
              <Palette className="w-10 h-10 text-pink-400" />
              <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
              <p className="text-gray-300">Beautiful and intuitive interfaces that users love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container relative py-24">
        <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] -translate-y-1/2 pointer-events-none">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-83NZDCN1OjHsk8eEIwAMPPwfNFeSkf.png"
            alt=""
            fill
            className="object-contain opacity-40"
          />
        </div>
        <div className="relative grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-6">
              <div className="p-px rounded-2xl bg-gradient-to-b from-white/20 to-white/0">
                <div className="p-6 rounded-2xl bg-black/50 backdrop-blur">
                  <h3 className="text-xl font-semibold text-white mb-2">React & Next.js</h3>
                  <p className="text-gray-300">Building fast, interactive user interfaces with modern frameworks.</p>
                </div>
              </div>
              <div className="p-px rounded-2xl bg-gradient-to-b from-white/20 to-white/0 lg:translate-x-8">
                <div className="p-6 rounded-2xl bg-black/50 backdrop-blur">
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud Native</h3>
                  <p className="text-gray-300">Leveraging the best cloud platforms for scalable applications.</p>
                </div>
              </div>
              <div className="p-px rounded-2xl bg-gradient-to-b from-white/20 to-white/0">
                <div className="p-6 rounded-2xl bg-black/50 backdrop-blur">
                  <h3 className="text-xl font-semibold text-white mb-2">Modern Design</h3>
                  <p className="text-gray-300">Creating beautiful, responsive interfaces that work everywhere.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm text-white/80 rounded-full border border-white/20 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Our Stack
            </div>
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Built with Modern Technology</h2>
            <p className="text-xl text-gray-300">
              We use cutting-edge technologies to build fast, scalable, and beautiful applications that stand the test
              of time.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black group">
              View Technologies <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container relative py-24">
        <div className="absolute top-0 -right-1/4 w-[600px] h-[600px] pointer-events-none">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-83NZDCN1OjHsk8eEIwAMPPwfNFeSkf.png"
            alt=""
            fill
            className="object-contain opacity-40"
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
            Ready to Transform Your Digital Vision?
          </h2>
          <p className="text-xl text-gray-300">
            Let's create something amazing together. Our team is ready to bring your ideas to life with cutting-edge
            technology and beautiful design.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 group">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

