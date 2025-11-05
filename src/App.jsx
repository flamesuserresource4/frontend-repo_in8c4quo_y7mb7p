import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactFooter from './components/ContactFooter';

function SectionAbout() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.10),transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About DevGuardian</h2>
            <p className="mt-3 text-zinc-300">We’re a security-first agency crafting AI-powered products and high-performance websites. Our approach blends modern aesthetics (glassmorphism, neon, clean rounded cards) with strict security practices (headers, CSP, rate-limits) and accessibility.</p>
            <ul className="mt-4 list-disc pl-5 text-zinc-300">
              <li>Modern dark theme with subtle lighting and motion</li>
              <li>Responsive design across mobile, tablet and desktop</li>
              <li>Accessible interactions with clear focus states</li>
              <li>SEO-friendly structure and content</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Security promise</h3>
            <p className="mt-2 text-zinc-300">We design with safety in mind: least-privilege, hardened deployments, and safe-by-default features. Production can include hCaptcha, rate limits, security headers, CSP, and validation.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-zinc-300">Security headers & CSP</div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-zinc-300">Form validation & spam protection</div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-zinc-300">Monitoring & status page</div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-zinc-300">Responsible disclosure policy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-fuchsia-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <SectionAbout />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
