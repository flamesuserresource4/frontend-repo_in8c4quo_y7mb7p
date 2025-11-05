import { Bot, Shield, Code, Lock, Sparkles } from 'lucide-react';

const services = [
  {
    id: 'ai-agents',
    icon: Bot,
    title: 'AI Agents',
    desc: 'Autonomous assistants tailored to your processes: lead intake, support, research, and internal tooling.',
    perks: ['Custom LLM workflows', 'Tool-use & integration', 'Safety guardrails', 'Analytics dashboard'],
    color: 'from-fuchsia-500/20 to-cyan-500/20',
    price: 'From $1,499'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'End-to-end security services: risk assessments, hardening, blue-team monitoring, and incident response.',
    perks: ['Security reviews', 'Cloud hardening', 'Threat monitoring', 'IR playbooks'],
    color: 'from-emerald-500/20 to-cyan-500/20',
    price: 'From $1,999'
  },
  {
    id: 'web-dev',
    icon: Code,
    title: 'Web Development',
    desc: 'Fast, accessible, SEO-friendly websites and apps with modern stacks and performance built-in.',
    perks: ['React + Tailwind', 'SEO & analytics', 'Accessibility (WCAG)', 'CI/CD & testing'],
    color: 'from-blue-500/20 to-indigo-500/20',
    price: 'From $2,499'
  },
  {
    id: 'web-security',
    icon: Lock,
    title: 'Web Security',
    desc: 'Application security reviews, pentesting, and secure SDLC guidance to keep your apps resilient.',
    perks: ['Pentesting', 'Secure code reviews', 'SDLC guardrails', 'WAF & CSP setup'],
    color: 'from-rose-500/20 to-orange-500/20',
    price: 'From $1,599'
  }
];

function ServiceCard({ s }) {
  const Icon = s.icon;
  return (
    <div id={s.id} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition hover:border-white/20">
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${s.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60`}></div>
      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{s.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{s.desc}</p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {s.perks.map(p => (
            <li key={p} className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan-300" /> {p}</li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-zinc-200 font-medium">{s.price}</span>
          <a href="#contact" className="rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90">Get started</a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
            <p className="mt-2 text-zinc-300 max-w-2xl">Transparent pricing on each service page block with a clean, rounded, glassy aesthetic. Mobile-first, dark, and neon-accented.</p>
          </div>
          <a href="#pricing" className="hidden sm:inline-flex rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white hover:bg-white/5">See pricing</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(s => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>

        {/* Pricing anchor */}
        <div id="pricing" className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-2xl font-semibold text-white">Simple, transparent pricing</h3>
          <p className="mt-2 text-zinc-300">Each service block displays a starting price. Reach out for a tailored estimate based on scope, security requirements, and timeline.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {services.map(s => (
              <div key={s.id} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-200">
                <span className="font-medium text-white">{s.title}:</span> {s.price}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
