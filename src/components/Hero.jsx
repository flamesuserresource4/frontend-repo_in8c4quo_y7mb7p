import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[80vh] grid items-center">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px] shadow-cyan-400"></span>
              Secure • Modern • AI-Powered
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Building secure, intelligent experiences for the modern web
            </h1>
            <p className="mt-4 text-lg text-zinc-300">
              DevGuardian delivers AI agents, cybersecurity, web development and web security — all in one trusted partner. Dark, sleek design with glassmorphism and neon accents built-in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-black shadow-[0_0_30px_-10px] shadow-cyan-500/60 hover:opacity-90">
                Contact us
              </a>
              <a href="#services" className="rounded-full border border-white/15 bg-black/40 px-6 py-3 font-semibold text-white hover:bg-white/5">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 right-10 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/30 blur-3xl"></div>
    </section>
  );
}
