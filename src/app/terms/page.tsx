import { createMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Acadly's terms of service. Read our terms and conditions for using the platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="px-6 py-20 md:py-28">
      <Container width="narrow">
        <h1 className="mb-2 text-3xl font-bold text-navy md:text-4xl">Terms of Service</h1>
        <p className="mb-10 text-sm text-neutral-400">Last updated: February 1, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-600">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">1. Acceptance of Terms</h2>
            <p>By accessing or using Acadly&apos;s services, you agree to be bound by these Terms of Service. If you are using the service on behalf of an institution, you represent that you have the authority to bind the institution to these terms.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">2. Description of Services</h2>
            <p>Acadly provides a classroom management platform that includes attendance tracking, student engagement tools, analytics, and LMS integrations. The specific features available to you depend on your subscription plan.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">3. User Accounts</h2>
            <p>You must create an account to use our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">4. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to circumvent attendance verification measures</li>
              <li>Share your account credentials with others</li>
              <li>Interfere with or disrupt the service</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use the service to collect data about others without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">5. Subscription & Billing</h2>
            <p>Paid plans are billed monthly or annually. You may cancel at any time; access continues through the end of the billing period. We reserve the right to change pricing with 30 days&apos; notice.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">6. Intellectual Property</h2>
            <p>All content, features, and functionality of the Acadly platform are owned by Acadly Inc. and protected by international copyright, trademark, and other intellectual property laws. Your data remains yours — we claim no ownership over the content you create or upload.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Acadly shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">8. Termination</h2>
            <p>We may terminate or suspend your account at any time for violation of these terms. Upon termination, your right to use the service will cease immediately. Your data will be available for export for 30 days following termination.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">9. Governing Law</h2>
            <p>These terms shall be governed by the laws of the State of Indiana, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">10. Contact</h2>
            <p>Questions about these Terms? Contact us at legal@acadly.com.</p>
          </section>
        </div>
      </Container>
    </article>
  );
}
