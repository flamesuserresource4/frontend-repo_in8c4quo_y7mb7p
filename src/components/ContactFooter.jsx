import { Mail, Phone, Github, Linkedin, Twitter, ShieldAlert } from 'lucide-react';
import { useState } from 'react';

export default function ContactFooter() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.fullName || !data.email || !data.message) {
      setStatus('Please fill in your name, email and message.');
      return;
    }
    setStatus('Thanks! Your message has been prepared. Connect Formspree to enable submissions.');
    form.reset();
  }

  return (
    <>
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.12),transparent_60%)]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s work together</h2>
              <p className="mt-2 text-zinc-300">Tell us about your goals. We’ll reply within 1 business day. We use anti-spam measures and best-practice security headers on production.</p>
              <div className="mt-6 space-y-3 text-zinc-200">
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-300" /> contact@devguardian.io</div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-fuchsia-300" /> +1 (555) 012-3456</div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-zinc-300" htmlFor="fullName">Full name</label>
                  <input id="fullName" name="fullName" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Alex Carter" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-300" htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-300" htmlFor="company">Company (optional)</label>
                  <input id="company" name="company" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Company Inc." />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-zinc-300" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell us about your project, timeline, and goals" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button type="submit" className="rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 px-6 py-2 font-semibold text-black hover:opacity-90">Send message</button>
                <p className="text-sm text-zinc-400">Protected by rate limits & best practices</p>
              </div>
              {status && <p className="mt-3 text-sm text-amber-300">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-black/60">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-[2px]">
                  <div className="h-full w-full rounded-md bg-black/90 grid place-items-center">
                    <ShieldAlert className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>
                <span className="font-semibold text-white">DevGuardian</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">Your guardian for AI, security, and modern web — crafted with performance and privacy in mind.</p>
              <div className="mt-4 flex items-center gap-3 text-zinc-300">
                <a aria-label="Twitter" href="#" className="rounded-md p-2 hover:bg-white/5"><Twitter className="h-5 w-5" /></a>
                <a aria-label="GitHub" href="#" className="rounded-md p-2 hover:bg-white/5"><Github className="h-5 w-5" /></a>
                <a aria-label="LinkedIn" href="#" className="rounded-md p-2 hover:bg-white/5"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Services</h4>
              <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
                <li><a href="#ai-agents" className="hover:text-white">AI Agents</a></li>
                <li><a href="#cybersecurity" className="hover:text-white">Cybersecurity</a></li>
                <li><a href="#web-dev" className="hover:text-white">Web Development</a></li>
                <li><a href="#web-security" className="hover:text-white">Web Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
                <li><a href="#cases" className="hover:text-white">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Legal & Security</h4>
              <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
                <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms</a></li>
                <li><a href="#security" className="hover:text-white">Security</a></li>
                <li><a href="#status" className="hover:text-white">Status</a></li>
                <li><a href="#disclosure" className="hover:text-white">Responsible disclosure</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-zinc-400">© {new Date().getFullYear()} DevGuardian. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
