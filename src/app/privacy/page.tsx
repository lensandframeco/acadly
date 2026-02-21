import { createMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Acadly's privacy policy. Learn how we collect, use, and protect your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="px-6 py-20 md:py-28">
      <Container width="narrow">
        <h1 className="mb-2 text-3xl font-bold text-navy md:text-4xl">Privacy Policy</h1>
        <p className="mb-10 text-sm text-neutral-400">Last updated: February 1, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-600">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">1. Introduction</h2>
            <p>Acadly Inc. (&quot;Acadly,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and related services.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">2. Information We Collect</h2>
            <p className="mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Account information (name, email address, institution, role)</li>
              <li>Class and course information</li>
              <li>Attendance records and check-in data</li>
              <li>Usage data and interaction logs</li>
              <li>Device information for verification purposes</li>
              <li>Location data (only during active check-in, with consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">3. How We Use Your Information</h2>
            <p className="mb-3">We use collected information to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Verify attendance through location and device checks</li>
              <li>Generate analytics and reports for instructors</li>
              <li>Communicate with you about your account and services</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">4. FERPA Compliance</h2>
            <p>Acadly complies with the Family Educational Rights and Privacy Act (FERPA). We act as a &quot;school official&quot; under FERPA and maintain student education records on behalf of institutions. We do not use student data for any purpose other than providing our services to the institution.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">5. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in operating our platform, but only under strict confidentiality agreements and only to the extent necessary to provide our services.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">6. Data Security</h2>
            <p>We implement industry-standard security measures including encryption at rest and in transit, regular security audits, access controls, and SOC 2 Type II certified data centers. While no system is 100% secure, we take every reasonable precaution to protect your data.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">7. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to provide services. Institutions can configure retention periods, and data is available for export for 30 days after account closure.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">8. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at privacy@acadly.com or write to: Acadly Inc., 1281 Win Hentschel Blvd, West Lafayette, IN 47906.</p>
          </section>
        </div>
      </Container>
    </article>
  );
}
