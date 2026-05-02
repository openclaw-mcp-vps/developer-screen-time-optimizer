export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          Eye Health for Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Coding Yourself{" "}
          <span className="text-[#58a6ff]">Blind</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mb-8">
          DevEyes tracks your coding sessions, reminds you to take breaks at the right time, and helps you understand how screen time affects your eye strain — all with local-first privacy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Start for $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          {[
            ["20-20-20", "Rule enforced"],
            ["IDE", "Plugin support"],
            ["Local", "Privacy first"]
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 flex justify-center">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Session tracking across all IDEs",
              "Smart break reminders (20-20-20 rule)",
              "Eye strain symptom journal",
              "Weekly health reports",
              "Optional cloud sync",
              "Desktop companion app"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. 7-day free trial.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            [
              "How does DevEyes track my coding sessions?",
              "DevEyes uses lightweight IDE plugins (VS Code, JetBrains) and optional system-level monitoring to detect active coding time. All data is stored locally on your device by default — nothing leaves your machine unless you enable cloud sync."
            ],
            [
              "What is the 20-20-20 rule and how does it help?",
              "Every 20 minutes, look at something 20 feet away for 20 seconds. DevEyes enforces this automatically with gentle, non-intrusive reminders timed to your actual coding activity — not a fixed clock."
            ],
            [
              "Can I use DevEyes without the desktop app?",
              "Yes. The web dashboard works standalone for manual session logging and symptom tracking. The desktop companion app unlocks automatic session detection and cross-device break reminders."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#21262d]">
        © {new Date().getFullYear()} DevEyes. Built for developers who care about their health.
      </footer>
    </main>
  );
}
