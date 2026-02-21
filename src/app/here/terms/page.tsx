import { createMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Acadly Here Terms of Service",
  description: "Terms of service specific to Acadly Here attendance tracking product.",
  path: "/here/terms",
});

export default function HereTermsPage() {
  return (
    <article className="px-6 py-20 md:py-28">
      <Container width="narrow">
        <h1 className="mb-2 text-3xl font-bold text-navy md:text-4xl">Acadly Here Terms of Service</h1>
        <p className="mb-10 text-sm text-neutral-400">Last updated: February 1, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-600">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">1. Supplemental Terms</h2>
            <p>These terms supplement and should be read in conjunction with our <a href="/terms" className="text-brand-blue hover:underline">general Terms of Service</a>. In the event of a conflict, these supplemental terms govern your use of Acadly Here.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">2. Location & Device Access</h2>
            <p>Acadly Here requires access to your device&apos;s location services and device identifiers for attendance verification. By using Acadly Here, you consent to this data collection during attendance check-in. You may revoke location access through your device settings, though this will prevent you from checking in.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">3. Attendance Integrity</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Attempt to spoof or falsify your location</li>
              <li>Use VPNs, GPS spoofing tools, or similar technologies to circumvent geofencing</li>
              <li>Check in on behalf of another student</li>
              <li>Share QR codes or check-in links with others</li>
              <li>Use modified or rooted devices to bypass verification</li>
            </ul>
            <p className="mt-3">Violations may result in attendance being voided and potential disciplinary action by your institution.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">4. Accuracy Disclaimer</h2>
            <p>While Acadly Here is designed for high accuracy, location-based verification is subject to the limitations of GPS, Wi-Fi, and Bluetooth technology. In cases of technical disputes, institutions maintain the ability to manually adjust attendance records.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">5. Contact</h2>
            <p>For questions about these terms, contact legal@acadly.com.</p>
          </section>
        </div>
      </Container>
    </article>
  );
}
