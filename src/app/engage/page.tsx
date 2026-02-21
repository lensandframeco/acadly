import { createMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StatCounter from "@/components/sections/StatCounter";
import CTASection from "@/components/sections/CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { engageFeatures } from "@/data/features";

export const metadata = createMetadata({
  title: "Acadly Engage — Real-Time Student Engagement",
  description:
    "Turn passive lectures into active learning with live polls, quizzes, Q&A, and real-time discussions.",
  path: "/engage",
});

const integrations = [
  "Canvas",
  "Blackboard",
  "Moodle",
  "D2L Brightspace",
  "Google Classroom",
  "Microsoft Teams",
];

export default function EngagePage() {
  return (
    <>
      <Hero
        badge="Acadly Engage"
        title="Turn every lecture into"
        highlight="an active learning experience."
        description="Live polls, quizzes, Q&A, and discussions that keep students engaged — whether your class has 20 students or 500."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
        variant="gradient"
      />

      <StatCounter
        stats={[
          { value: "40%", label: "More Participation" },
          { value: "3x", label: "More Questions" },
          { value: "92%", label: "Student Satisfaction" },
          { value: "< 10s", label: "To Launch a Poll" },
        ]}
      />

      <FeatureGrid
        title="Engagement tools that work"
        subtitle="Everything you need to make lectures interactive, all in one platform."
        features={engageFeatures}
      />

      {/* Integrations */}
      <section className="bg-neutral-50 px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
                Works with your existing tools
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Acadly Engage integrates seamlessly with the platforms you
                already use.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {integrations.map((name, i) => (
              <AnimateOnScroll key={name} delay={i * 0.05}>
                <Card className="text-center py-6">
                  <span className="text-sm font-medium text-navy">{name}</span>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Boost engagement in your next lecture"
        description="Try Acadly Engage free and see participation soar. No credit card required."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
