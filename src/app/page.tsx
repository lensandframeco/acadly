export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold text-slate-900">
            Acadly
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              Pricing
            </a>
          </div>
          <a
            href="#cta"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Trusted by 200+ institutions
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl md:leading-tight">
            Attendance tracking
            <br />
            <span className="text-indigo-600">that just works.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
            Automate classroom attendance with secure, frictionless check-ins.
            Eliminate buddy-punching, save hours of manual work, and get
            real-time insights — all from one dashboard.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#cta"
              className="w-full rounded-lg bg-indigo-600 px-8 py-3.5 text-base font-medium text-white transition hover:bg-indigo-700 sm:w-auto"
            >
              Start Free Trial
            </a>
            <a
              href="#how-it-works"
              className="w-full rounded-lg border border-slate-200 px-8 py-3.5 text-base font-medium text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "99.5%", label: "Accuracy Rate" },
            { value: "< 3s", label: "Check-in Time" },
            { value: "10hrs", label: "Saved Per Week" },
            { value: "200+", label: "Institutions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-indigo-600">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Everything you need to manage attendance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              From automated check-ins to detailed analytics, Acadly handles it
              all so you can focus on teaching.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                ),
                title: "Anti-Fraud Protection",
                desc: "Location verification, device fingerprinting, and liveness checks prevent buddy-punching and spoofing.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    />
                  </svg>
                ),
                title: "Real-Time Analytics",
                desc: "Track attendance trends, identify at-risk students, and export reports instantly from your dashboard.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                ),
                title: "Mobile-First",
                desc: "Students check in from their phones in under 3 seconds. No extra hardware or apps required.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ),
                title: "Automated Scheduling",
                desc: "Set up recurring class schedules and let Acadly handle the rest. Attendance windows open and close automatically.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                ),
                title: "Privacy-First",
                desc: "FERPA-compliant with end-to-end encryption. Student data is never shared with third parties.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                    />
                  </svg>
                ),
                title: "LMS Integration",
                desc: "Seamlessly connects with Canvas, Blackboard, Moodle, and more. Sync attendance data automatically.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-100 bg-white p-6 transition hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="border-y border-slate-100 bg-slate-50 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Up and running in minutes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              No hardware to install. No lengthy onboarding. Just three simple
              steps.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Create Your Classes",
                desc: "Import your class roster or add students manually. Set schedules and attendance rules.",
              },
              {
                step: "2",
                title: "Students Check In",
                desc: "Students tap a button on their phone when class begins. Geofencing and device checks verify they're really there.",
              },
              {
                step: "3",
                title: "Review & Export",
                desc: "See attendance in real time. Get automatic reports, spot trends, and export data to your LMS.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Start free and scale as your institution grows.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                desc: "Perfect for individual instructors",
                features: [
                  "Up to 3 classes",
                  "50 students per class",
                  "Basic analytics",
                  "Email support",
                ],
                cta: "Get Started",
                highlighted: false,
              },
              {
                name: "Pro",
                price: "$12",
                period: "per month",
                desc: "For departments and power users",
                features: [
                  "Unlimited classes",
                  "Unlimited students",
                  "Advanced analytics & exports",
                  "LMS integrations",
                  "Priority support",
                ],
                cta: "Start Free Trial",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For institutions with custom needs",
                features: [
                  "Everything in Pro",
                  "SSO / SAML",
                  "Dedicated account manager",
                  "Custom integrations",
                  "SLA guarantee",
                ],
                cta: "Contact Sales",
                highlighted: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-8 ${
                  plan.highlighted
                    ? "border-indigo-200 bg-indigo-50 ring-2 ring-indigo-600"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mb-4 text-sm text-slate-500">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-sm text-slate-500">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`block w-full rounded-lg py-3 text-center text-sm font-medium transition ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="border-t border-slate-100 bg-slate-900 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to automate attendance?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-slate-400">
            Join hundreds of institutions that save time and improve accuracy
            with Acadly. Start your free trial today — no credit card required.
          </p>
          <a
            href="mailto:hello@acadly.com"
            className="inline-block rounded-lg bg-indigo-600 px-8 py-3.5 text-base font-medium text-white transition hover:bg-indigo-700"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Acadly. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Terms
            </a>
            <a
              href="mailto:hello@acadly.com"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
