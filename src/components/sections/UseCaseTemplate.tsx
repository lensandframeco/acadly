"use client";

import {
  Shield, BarChart3, Clock, MapPin, Fingerprint, FileText,
  Monitor, LayoutGrid, Users, MessageCircle, Smartphone,
  RefreshCw, Upload, ArrowRightLeft, FileCheck, Lock,
} from "lucide-react";
import Hero from "./Hero";
import StatCounter from "./StatCounter";
import CTASection from "./CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";
import type { UseCase } from "@/data/use-cases";

const iconMap: Record<string, React.ElementType> = {
  Shield, BarChart3, Clock, MapPin, Fingerprint, FileText,
  Monitor, LayoutGrid, Users, MessageCircle, Smartphone,
  RefreshCw, Upload, ArrowRightLeft, FileCheck, Lock,
};

interface UseCaseTemplateProps {
  useCase: UseCase;
}

export default function UseCaseTemplate({ useCase }: UseCaseTemplateProps) {
  const testimonial = testimonials[useCase.testimonialIndex];

  return (
    <>
      <Hero
        badge={useCase.subtitle}
        title={useCase.title}
        description={useCase.description}
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
        variant={useCase.heroVariant}
      />

      <StatCounter stats={useCase.stats} />

      {/* Challenges */}
      <section className="px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
              The challenges you face
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-3">
            {useCase.challenges.map((challenge, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <Card hover>
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-500">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">
                    {challenge.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {challenge.description}
                  </p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="bg-neutral-50 px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
              How Acadly solves them
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-3">
            {useCase.solutions.map((solution, i) => {
              const Icon = iconMap[solution.icon] || Shield;
              return (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <Card hover>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-navy">
                      {solution.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {solution.description}
                    </p>
                  </Card>
                </AnimateOnScroll>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-20 md:py-28">
        <Container width="narrow">
          <AnimateOnScroll>
            <div className="text-center">
              <blockquote className="mb-6 text-lg leading-relaxed text-neutral-700 md:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="font-semibold text-navy">{testimonial.name}</div>
              <div className="text-sm text-neutral-500">
                {testimonial.role}, {testimonial.institution}
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <CTASection
        title={useCase.ctaTitle}
        description={useCase.ctaDescription}
      />
    </>
  );
}
