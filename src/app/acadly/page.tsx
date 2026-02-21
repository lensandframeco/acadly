import { createMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StatCounter from "@/components/sections/StatCounter";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTASection from "@/components/sections/CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import { acadlyFeatures } from "@/data/features";
import { testimonials } from "@/data/testimonials";

export const metadata = createMetadata({
  title: "Acadly — All-in-One Classroom Platform",
  description:
    "The complete classroom management platform. Attendance, engagement, analytics, and LMS integration — all from one dashboard.",
  path: "/acadly",
});

const steps = [
  {
    step: "1",
    title: "Set Up Your Course",
    description:
      "Import your roster from your LMS or add students manually. Configure attendance rules, schedules, and grading policies.",
  },
  {
    step: "2",
    title: "Run Your Classes",
    description:
      "Attendance is captured automatically. Launch polls, quizzes, and discussions with one tap. Share resources in real time.",
  },
  {
    step: "3",
    title: "Track & Improve",
    description:
      "Review analytics, identify at-risk students, and export reports. All data syncs back to your LMS automatically.",
  },
];

export default function AcadlyPage() {
  return (
    <>
      <Hero
        badge="All-in-One Platform"
        title="Everything you need to run"
        highlight="a modern classroom."
        description="Acadly combines attendance tracking, student engagement, and course management in one seamless platform. Less time on admin, more time on teaching."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
        variant="gradient"
      />

      <StatCounter
        stats={[
          { value: "200+", label: "Institutions" },
          { value: "500K+", label: "Students" },
          { value: "99.5%", label: "Attendance Accuracy" },
          { value: "40%", label: "More Engagement" },
        ]}
      />

      <FeatureGrid
        title="Everything you need to manage your classroom"
        subtitle="From automated attendance to interactive engagement tools, Acadly handles it all so you can focus on teaching."
        features={acadlyFeatures}
      />

      {/* How It Works */}
      <section className="bg-neutral-50 px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
                Up and running in minutes
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                No hardware to install. No lengthy onboarding. Three simple
                steps.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((item, i) => (
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

      <TestimonialCarousel testimonials={testimonials} />

      <CTASection
        title="Ready to modernize your classroom?"
        description="Join 200+ institutions using Acadly. Start your free trial today — no credit card required."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
