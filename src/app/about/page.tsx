import { createMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import StatCounter from "@/components/sections/StatCounter";
import CTASection from "@/components/sections/CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Acadly's mission to transform classroom experiences through technology.",
  path: "/about",
});

const timeline = [
  {
    year: "2015",
    title: "Founded at Purdue",
    description:
      "Acadly was born from a graduate research project at Purdue University, aiming to solve the attendance problem in large lectures.",
  },
  {
    year: "2017",
    title: "First 50 Institutions",
    description:
      "Rapid adoption across universities in the US and India validated the need for a better attendance solution.",
  },
  {
    year: "2019",
    title: "Acadly Engage Launches",
    description:
      "Added live polls, quizzes, and Q&A tools to transform Acadly from an attendance app into a complete teaching platform.",
  },
  {
    year: "2020",
    title: "Pandemic Pivot",
    description:
      "Rapidly adapted to support online and hybrid learning, helping institutions maintain attendance standards during COVID-19.",
  },
  {
    year: "2023",
    title: "200+ Institutions",
    description:
      "Reached a milestone of 200+ institutions and 500,000+ students across 15 countries.",
  },
  {
    year: "2025",
    title: "Acadly Here",
    description:
      "Launched Acadly Here with advanced geofencing, device fingerprinting, and dynamic QR code verification.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our mission"
        highlight="is to transform teaching."
        description="We believe technology should make teaching easier, not harder. Acadly gives educators the tools to focus on what matters — their students."
        variant="gradient"
      />

      <StatCounter
        stats={[
          { value: "2015", label: "Founded" },
          { value: "200+", label: "Institutions" },
          { value: "500K+", label: "Students" },
          { value: "15", label: "Countries" },
        ]}
      />

      {/* Story */}
      <section className="px-6 py-20 md:py-28">
        <Container width="narrow">
          <AnimateOnScroll>
            <h2 className="mb-6 text-3xl font-bold text-navy md:text-4xl">
              Our story
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Acadly started with a simple observation: in a 500-person
                lecture hall at Purdue University, taking attendance was either
                skipped entirely or wasted valuable teaching time. Sign-in sheets
                were easily forged. Clickers were expensive and unreliable.
              </p>
              <p>
                We built the first version of Acadly to solve this problem — a
                mobile app that let students check in with their phones, verified
                by geofencing. It worked so well that professors started asking
                for more: polls, quizzes, Q&A, resource sharing.
              </p>
              <p>
                Today, Acadly is a complete teaching platform used by 200+
                institutions across 15 countries. But our mission hasn't changed:
                make technology that helps educators focus on teaching, not
                administration.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-neutral-50 px-6 py-20 md:py-28">
        <Container width="narrow">
          <AnimateOnScroll>
            <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
              Our journey
            </h2>
          </AnimateOnScroll>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <AnimateOnScroll key={item.year} delay={i * 0.05}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="mt-2 h-full w-px bg-neutral-200" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="mb-1 text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Join us in transforming education"
        description="See how Acadly can help your institution save time and boost engagement."
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
        secondaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
      />
    </>
  );
}
