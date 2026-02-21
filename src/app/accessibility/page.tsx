import { createMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Accessibility",
  description: "Acadly's commitment to accessibility and WCAG 2.1 compliance.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <article className="px-6 py-20 md:py-28">
      <Container width="narrow">
        <h1 className="mb-2 text-3xl font-bold text-navy md:text-4xl">Accessibility Statement</h1>
        <p className="mb-10 text-sm text-neutral-400">Last updated: February 1, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-600">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">Our Commitment</h2>
            <p>Acadly is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">Standards</h2>
            <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">Measures Taken</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Semantic HTML structure throughout the platform</li>
              <li>ARIA labels and roles for interactive elements</li>
              <li>Keyboard navigation support for all features</li>
              <li>Sufficient color contrast ratios (minimum 4.5:1)</li>
              <li>Text alternatives for non-text content</li>
              <li>Responsive design that works across screen sizes</li>
              <li>Focus indicators for keyboard users</li>
              <li>Screen reader compatibility testing</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">Known Limitations</h2>
            <p>While we strive for full accessibility, some areas may have limitations:</p>
            <ul className="list-disc space-y-2 pl-6 mt-3">
              <li>Some third-party embedded content may not be fully accessible</li>
              <li>Older PDF documents may not be fully screen-reader compatible</li>
              <li>Some data visualizations in analytics dashboards are being updated for accessibility</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">Feedback</h2>
            <p>We welcome your feedback on the accessibility of Acadly. If you encounter accessibility barriers, please contact us:</p>
            <ul className="mt-3 list-none space-y-1">
              <li>Email: accessibility@acadly.com</li>
              <li>Phone: +1 (765) 555-0123</li>
              <li>Address: 1281 Win Hentschel Blvd, West Lafayette, IN 47906</li>
            </ul>
            <p className="mt-3">We aim to respond to accessibility feedback within 2 business days.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">Assessment</h2>
            <p>Acadly assesses accessibility through self-evaluation, user testing with assistive technologies, and periodic third-party audits. Our most recent third-party audit was conducted in January 2026.</p>
          </section>
        </div>
      </Container>
    </article>
  );
}
