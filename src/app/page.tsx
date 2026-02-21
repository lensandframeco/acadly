import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Zap } from "lucide-react";
import Hero from "@/components/sections/Hero";
import StatCounter from "@/components/sections/StatCounter";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import LogoCarousel from "@/components/sections/LogoCarousel";
import CTASection from "@/components/sections/CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";
import { universities } from "@/data/universities";

const products = [
  {
    icon: BookOpen,
    name: "Acadly",
    tagline: "The all-in-one classroom platform",
    description:
      "Manage attendance, engagement, and course materials from a single dashboard. Everything you need to run a modern classroom.",
    href: "/acadly",
    color: "bg-blue-50 text-brand-blue",
  },
  {
    icon: MapPin,
    name: "Acadly Here",
    tagline: "Secure automated attendance",
    description:
      "Geofenced, device-verified check-ins that eliminate buddy-punching. Accurate records with zero manual work.",
    href: "/here",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Zap,
    name: "Acadly Engage",
    tagline: "Real-time engagement tools",
    description:
      "Live polls, quizzes, Q&A, and discussions that turn passive lectures into active learning experiences.",
    href: "/engage",
    color: "bg-amber-50 text-amber-600",
  },
];

const useCaseLinks = [
  { label: "In-Person Classes", href: "/use-cases/in-person" },
  { label: "Online Learning", href: "/use-cases/online" },
  { label: "Hybrid Classrooms", href: "/use-cases/hybrid" },
  { label: "Attendance Tracking", href: "/use-cases/attendance" },
  { label: "Student Engagement", href: "/use-cases/engagement" },
  { label: "LMS Integration", href: "/use-cases/lms" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Trusted by 200+ institutions"
        title="The complete teaching platform"
        highlight="for modern classrooms."
        description="Attendance, engagement, and learning — all in one place. Save time, eliminate fraud, and keep every student engaged."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
        variant="gradient"
      />

      {/* Product Suite */}
      <section className="px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
                One platform, three powerful products
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Whether you need attendance tracking, engagement tools, or a
                complete classroom solution — Acadly has you covered.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, i) => (
              <AnimateOnScroll key={product.name} delay={i * 0.1}>
                <Card hover className="flex flex-col h-full">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${product.color}`}
                  >
                    <product.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-navy">
                    {product.name}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-brand-blue">
                    {product.tagline}
                  </p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-blue-dark"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <StatCounter
        stats={[
          { value: "200+", label: "Institutions" },
          { value: "500K+", label: "Students" },
          { value: "99.5%", label: "Accuracy" },
          { value: "10hrs", label: "Saved Per Week" },
        ]}
      />

      {/* Use Cases */}
      <section className="px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
                Built for every classroom format
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Whether your classes are in-person, online, or hybrid — Acadly
                adapts to how you teach.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCaseLinks.map((uc, i) => (
              <AnimateOnScroll key={uc.href} delay={i * 0.05}>
                <Link
                  href={uc.href}
                  className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-6 py-4 transition hover:border-brand-blue hover:shadow-md"
                >
                  <span className="text-sm font-medium text-navy">
                    {uc.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-neutral-400" />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <LogoCarousel logos={universities} />

      <TestimonialCarousel testimonials={testimonials} />

      <CTASection
        title="Ready to transform your classroom?"
        description="Join hundreds of institutions that save time, eliminate fraud, and boost engagement with Acadly. Start free — no credit card required."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
