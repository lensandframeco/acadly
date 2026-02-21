import { createMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StatCounter from "@/components/sections/StatCounter";
import CTASection from "@/components/sections/CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { hereFeatures } from "@/data/features";

export const metadata = createMetadata({
  title: "Acadly Here — Secure Automated Attendance",
  description:
    "Eliminate buddy-punching with geofenced, device-verified attendance tracking. Accurate records in under 3 seconds.",
  path: "/here",
});

const differentiators = [
  {
    title: "vs. Manual Roll Call",
    points: [
      "Saves 10+ minutes per class",
      "100% digital records, zero paper",
      "No human error in data entry",
    ],
  },
  {
    title: "vs. Clicker Systems",
    points: [
      "No hardware to buy or maintain",
      "Can't share devices for fraud",
      "Works with students' own phones",
    ],
  },
  {
    title: "vs. Other Apps",
    points: [
      "Multi-layer anti-fraud (geo + device + QR)",
      "Works offline with sync",
      "Integrates with major LMS platforms",
    ],
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Instructor Opens Session",
    description:
      "Tap one button to start an attendance session. A geofence activates around your classroom automatically.",
  },
  {
    step: "2",
    title: "Students Check In",
    description:
      "Students tap 'Here' on their phone. Geofencing, device fingerprinting, and dynamic QR verify their presence.",
  },
  {
    step: "3",
    title: "Records Sync Instantly",
    description:
      "Attendance data appears on your dashboard in real time and syncs to your LMS automatically.",
  },
];

export default function HerePage() {
  return (
    <>
      <Hero
        badge="Acadly Here"
        title="Attendance tracking"
        highlight="that just works."
        description="Geofenced, device-verified check-ins that eliminate buddy-punching and manual roll calls. Accurate records in under 3 seconds."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "See How It Works", href: "#how-it-works" }}
        variant="gradient"
      />

      <StatCounter
        stats={[
          { value: "99.5%", label: "Accuracy Rate" },
          { value: "< 3s", label: "Check-in Time" },
          { value: "10hrs", label: "Saved Per Week" },
          { value: "Zero", label: "Hardware Needed" },
        ]}
      />

      <FeatureGrid
        title="Multi-layer attendance verification"
        subtitle="Four independent verification methods ensure only present students can check in."
        features={hereFeatures}
      />

      {/* How It Works */}
      <section id="how-it-works" className="bg-neutral-50 px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
                How it works
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Three steps. Under a minute. Zero manual work.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-12 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
              How Acadly Here compares
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((d, i) => (
              <AnimateOnScroll key={d.title} delay={i * 0.1}>
                <Card hover>
                  <h3 className="mb-4 text-lg font-semibold text-navy">
                    {d.title}
                  </h3>
                  <ul className="space-y-2">
                    {d.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to automate attendance?"
        description="Start your free trial and see results from your very first class. No credit card required."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
