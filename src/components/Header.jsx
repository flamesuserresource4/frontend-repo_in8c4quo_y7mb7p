import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield, Bot, Code, Lock, Phone } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-[2px]">
              <div className="h-full w-full rounded-md bg-black/90 grid place-items-center">
                <Shield className="h-5 w-5 text-cyan-300" />
              </div>
            </div>
            <span className="font-semibold tracking-tight text-white">DevGuardian</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm px-1 py-1">Home</a>

            <div className="relative" ref={servicesRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm px-1 py-1"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(v => !v)}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-3 w-72 rounded-xl border border-white/10 bg-black/80 backdrop-blur shadow-xl p-2"> 
                  <a href="#ai-agents" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 grid place-items-center">
                      <Bot className="h-4 w-4 text-fuchsia-300" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">AI Agents</p>
                      <p className="text-zinc-400 text-xs">Custom autonomous agents for your workflows</p>
                    </div>
                  </a>
                  <a href="#cybersecurity" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 grid place-items-center">
                      <Shield className="h-4 w-4 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Cybersecurity</p>
                      <p className="text-zinc-400 text-xs">Assessments, hardening, ongoing monitoring</p>
                    </div>
                  </a>
                  <a href="#web-dev" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500/30 to-indigo-500/30 grid place-items-center">
                      <Code className="h-4 w-4 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Web Development</p>
                      <p className="text-zinc-400 text-xs">Modern, fast, accessible apps</p>
                    </div>
                  </a>
                  <a href="#web-security" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-rose-500/30 to-orange-500/30 grid place-items-center">
                      <Lock className="h-4 w-4 text-rose-300" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Web Security</p>
                      <p className="text-zinc-400 text-xs">AppSec, pentesting, secure SDLC</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="#pricing" className="text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm px-1 py-1">Pricing</a>
            <a href="#about" className="text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm px-1 py-1">About</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <Phone className="h-4 w-4" /> Contact
            </a>
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
            <a href="#home" className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/5">Home</a>
            <details className="rounded-md" open>
              <summary className="flex items-center justify-between px-3 py-2 text-zinc-200 cursor-pointer select-none">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </summary>
              <div className="mt-1 space-y-1 pl-4">
                <a href="#ai-agents" className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/5">AI Agents</a>
                <a href="#cybersecurity" className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/5">Cybersecurity</a>
                <a href="#web-dev" className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/5">Web Development</a>
                <a href="#web-security" className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/5">Web Security</a>
              </div>
            </details>
            <a href="#pricing" className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/5">Pricing</a>
            <a href="#about" className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/5">About</a>
            <a href="#contact" className="block rounded-full text-center bg-gradient-to-br from-cyan-500 to-fuchsia-500 px-3 py-2 font-semibold text-black">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
