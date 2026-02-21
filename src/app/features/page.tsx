import { createMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import { acadlyFeatures, hereFeatures, engageFeatures } from "@/data/features";
import { Check, Minus } from "lucide-react";

export const metadata = createMetadata({
  title: "Features",
  description:
    "Explore all Acadly features — attendance tracking, student engagement, analytics, and LMS integrations.",
  path: "/features",
});

const comparisonRows = [
  { feature: "Automated Attendance", free: true, pro: true, enterprise: true },
  { feature: "Geofenced Check-In", free: true, pro: true, enterprise: true },
  { feature: "Basic Analytics", free: true, pro: true, enterprise: true },
  { feature: "Advanced Analytics", free: false, pro: true, enterprise: true },
  { feature: "Live Polls & Quizzes", free: false, pro: true, enterprise: true },
  { feature: "Q&A Sessions", free: false, pro: true, enterprise: true },
  { feature: "LMS Integration", free: false, pro: true, enterprise: true },
  { feature: "CSV/PDF Export", free: false, pro: true, enterprise: true },
  { feature: "SSO / SAML", free: false, pro: false, enterprise: true },
  { feature: "Custom Integrations", free: false, pro: false, enterprise: true },
  { feature: "Dedicated Support", free: false, pro: false, enterprise: true },
  { feature: "On-Premise Option", free: false, pro: false, enterprise: true },
];

export default function FeaturesPage() {
  return (
    <>
      <Hero
        badge="Features"
        title="Everything you need"
        highlight="in one platform."
        description="From automated attendance to real-time engagement tools — explore the full Acadly feature set."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        variant="gradient"
      />

      <FeatureGrid
        title="Attendance & Verification"
        subtitle="Secure, automated attendance tracking with multi-layer fraud prevention."
        features={hereFeatures}
      />

      <FeatureGrid
        title="Engagement Tools"
        subtitle="Interactive features that turn passive lectures into active learning."
        features={engageFeatures}
      />

      <FeatureGrid
        title="Platform Features"
        subtitle="Analytics, integrations, and everything else that makes Acadly complete."
        features={acadlyFeatures.filter(
          (f) => f.category === "analytics" || f.category === "integration"
        )}
      />

      {/* Comparison Table */}
      <section className="bg-neutral-50 px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
              Compare plans
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="pb-4 pr-8 font-semibold text-navy">
                      Feature
                    </th>
                    <th className="pb-4 px-4 text-center font-semibold text-navy">
                      Free
                    </th>
                    <th className="pb-4 px-4 text-center font-semibold text-brand-blue">
                      Pro
                    </th>
                    <th className="pb-4 px-4 text-center font-semibold text-navy">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-neutral-100"
                    >
                      <td className="py-3 pr-8 text-neutral-700">
                        {row.feature}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.free ? (
                          <Check className="mx-auto h-4 w-4 text-green-500" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-neutral-300" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.pro ? (
                          <Check className="mx-auto h-4 w-4 text-green-500" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-neutral-300" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.enterprise ? (
                          <Check className="mx-auto h-4 w-4 text-green-500" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-neutral-300" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <CTASection
        title="See all features in action"
        description="Start your free trial or book a demo to explore every feature."
        primaryCta={{ label: "Start Free Trial", href: "/sign-up" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
