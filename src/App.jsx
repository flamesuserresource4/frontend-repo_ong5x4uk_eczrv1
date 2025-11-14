import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Smartphone, Globe, Wrench, Workflow, BadgeCheck, ArrowRight, Sparkles, Code2, Layers, Brain } from 'lucide-react'

function NavBar() {
  const [open, setOpen] = useState(false)
  const items = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/70 backdrop-blur-md shadow-lg shadow-black/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                <Rocket size={18} />
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900">Nova Digital</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {items.map(i => (
                <a key={i.label} href={i.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">{i.label}</a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:border-gray-300 transition-colors">Book a call</a>
              <a href="#contact" className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">Get a quote</a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <span className="sr-only">Toggle menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-4">
              <div className="grid gap-2">
                {items.map(i => (
                  <a key={i.label} href={i.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">{i.label}</a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-medium text-gray-900 border border-gray-200 bg-white">Book a call</a>
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600">Get a quote</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs text-gray-700 shadow-sm">
            <Sparkles size={14} className="text-blue-600" />
            Interactive. Tech-forward. Minimal.
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            A clean digital agency for web and mobile experiences
          </h1>
          <p className="mt-5 max-w-2xl text-gray-600 text-base sm:text-lg">
            We design and build high-performance websites and mobile apps with a focus on clarity, speed, and delightful interactions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white font-semibold shadow hover:opacity-95">
              Start a project
              <ArrowRight size={18} />
            </a>
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 font-medium hover:bg-gray-50">
              See our work
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2"><BadgeCheck className="text-blue-600" size={18}/>Enterprise quality</div>
            <div className="flex items-center gap-2"><BadgeCheck className="text-blue-600" size={18}/>Fast delivery</div>
            <div className="flex items-center gap-2"><BadgeCheck className="text-blue-600" size={18}/>Transparent pricing</div>
            <div className="flex items-center gap-2"><BadgeCheck className="text-blue-600" size={18}/>Ongoing support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const features = [
    {
      icon: <Globe className="text-blue-600" size={22} />,
      title: 'Web Development',
      desc: 'Modern, SEO-friendly websites built with performance and accessibility at the core.'
    },
    {
      icon: <Smartphone className="text-blue-600" size={22} />,
      title: 'Mobile App Development',
      desc: 'iOS and Android apps using native or cross‑platform stacks for speed and consistency.'
    },
    {
      icon: <Code2 className="text-blue-600" size={22} />,
      title: 'Frontend Engineering',
      desc: 'Pixel-perfect UI, smooth animations, and robust component systems.'
    },
    {
      icon: <Layers className="text-blue-600" size={22} />,
      title: 'Backend & APIs',
      desc: 'Scalable, secure APIs with best practices, monitoring, and documentation.'
    },
    {
      icon: <Wrench className="text-blue-600" size={22} />,
      title: 'Maintenance & Growth',
      desc: 'Retainers for optimization, iterations, and continuous feature delivery.'
    },
    {
      icon: <Brain className="text-blue-600" size={22} />,
      title: 'Product Strategy',
      desc: 'Workshops, roadmaps, and discovery to align business goals with user needs.'
    }
  ]
  return (
    <section id="services" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600">What we do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Services tailored for impact</h2>
          <p className="mt-3 text-gray-600">From discovery to deployment, we deliver end‑to‑end solutions that scale.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { title: 'Discover', desc: 'Align objectives, map user needs, and define success metrics.' },
    { title: 'Design', desc: 'Create systems and interfaces that are both beautiful and usable.' },
    { title: 'Develop', desc: 'Build with modern stacks, best practices, and rigorous testing.' },
    { title: 'Launch', desc: 'Ship with confidence, monitor closely, and iterate quickly.' },
  ]
  return (
    <section id="process" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600">How we work</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Proven, transparent process</h2>
          <p className="mt-3 text-gray-600">A clear path from idea to launch, with collaboration at every step.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 rounded-xl bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">{i+1}</div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const items = [
    { title: 'Fintech Dashboard', tag: 'Web App', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Travel Planner', tag: 'Mobile App', img: 'https://images.unsplash.com/photo-1544198365-3c6027baad7b?q=80&w=1400&auto=format&fit=crop' },
    { title: 'E‑commerce Redesign', tag: 'Website', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop' },
  ]
  return (
    <section id="work" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600">Selected work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Recent projects</h2>
            <p className="mt-3 text-gray-600">A snapshot of products we’ve designed and built for fast‑moving teams.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">Work with us</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(card => (
            <a key={card.title} href="#contact" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-blue-700">
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[11px] font-semibold text-blue-700">{card.tag}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold text-blue-600">About us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Small team. Senior talent. Big outcomes.</h2>
          <p className="mt-4 text-gray-600">We’re a compact, cross‑functional team of designers and engineers who ship quickly without sacrificing quality. We embed with your team, communicate clearly, and obsess over the details.</p>
          <ul className="mt-6 grid gap-3 text-sm text-gray-700">
            <li className="flex items-center gap-2"><BadgeCheck className="text-blue-600" size={18}/>10+ years experience</li>
            <li className="flex items-center gap-2"><BadgeCheck className="text-blue-600" size={18}/>Trusted by startups & enterprises</li>
            <li className="flex items-center gap-2"><BadgeCheck className="text-blue-600" size={18}/>Design‑to‑dev in one place</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50"><Workflow className="text-blue-600" size={22}/></div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Streamlined process</h3>
            <p className="mt-2 text-sm text-gray-600">We keep feedback loops short and milestones clear.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50"><Wrench className="text-blue-600" size={22}/></div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Modern stack</h3>
            <p className="mt-2 text-sm text-gray-600">From prototype to production using proven tools.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50"><Globe className="text-blue-600" size={22}/></div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Global delivery</h3>
            <p className="mt-2 text-sm text-gray-600">Distributed by design, we work across timezones.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50"><Smartphone className="text-blue-600" size={22}/></div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Native experiences</h3>
            <p className="mt-2 text-sm text-gray-600">Seamless across web, iOS, and Android.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-lg">
          <div className="rounded-3xl bg-white p-10 sm:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Have an idea? Let’s build it.</h2>
                <p className="mt-3 text-gray-600">Tell us about your goals and timelines. We’ll propose a path that balances speed and quality.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="mailto:hello@novadigital.studio" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white font-semibold shadow hover:opacity-95">Email us</a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 font-medium hover:bg-gray-50">Book a call</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Discovery workshop', 'Clickable prototype', 'Tech architecture', 'Launch & scale'].map(t => (
                  <div key={t} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="text-sm font-semibold text-gray-900">{t}</div>
                    <p className="mt-1 text-xs text-gray-600">Included in typical engagements</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white"><Rocket size={16}/></div>
          <span className="font-medium">Nova Digital</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Nova Digital. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Services />
      <Process />
      <Work />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
