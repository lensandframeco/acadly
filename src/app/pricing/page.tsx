import { createMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import PricingCard from "@/components/sections/PricingCard";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import { pricingTiers, pricingFAQs } from "@/data/pricing";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Acadly. Start free and scale as your institution grows.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Simple, transparent pricing"
        description="Start free and scale as your institution grows. No hidden fees, no surprises."
        variant="gradient"
      />

      <section className="px-6 py-20 md:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 0.1}>
                <PricingCard tier={tier} />
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <FAQAccordion faqs={pricingFAQs} />

      <CTASection
        title="Not sure which plan is right?"
        description="Talk to our team to find the best fit for your institution."
        primaryCta={{ label: "Contact Sales", href: "/demo" }}
        secondaryCta={{ label: "Start Free", href: "/sign-up" }}
      />
    </>
  );
}
