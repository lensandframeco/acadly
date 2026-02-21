import { createMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Acadly Here Privacy Policy",
  description: "Privacy policy specific to Acadly Here attendance tracking and location data.",
  path: "/here/privacy",
});

export default function HerePrivacyPage() {
  return (
    <article className="px-6 py-20 md:py-28">
      <Container width="narrow">
        <h1 className="mb-2 text-3xl font-bold text-navy md:text-4xl">Acadly Here Privacy Policy</h1>
        <p className="mb-10 text-sm text-neutral-400">Last updated: February 1, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-600">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">1. About Acadly Here</h2>
            <p>Acadly Here is our attendance verification product that uses location data, device fingerprinting, and dynamic QR codes to verify student presence. This supplemental privacy policy covers the additional data collection specific to Acadly Here. Please also review our <a href="/privacy" className="text-brand-blue hover:underline">general Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">2. Location Data</h2>
            <p className="mb-3">Acadly Here collects location data only during active attendance check-in. Specifically:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Location is collected only when a student initiates a check-in</li>
              <li>Location data is used solely to verify presence within the classroom geofence</li>
              <li>We store only whether the student was within the geofence (pass/fail), not continuous location tracking</li>
              <li>Location access requires explicit device permission from the student</li>
              <li>Students can review their check-in history at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">3. Device Fingerprinting</h2>
            <p>We collect device identifiers to prevent proxy attendance. This includes device model, OS version, and a unique device hash. This data is used exclusively for attendance verification and is not shared with any third party.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">4. Bluetooth & Wi-Fi Data</h2>
            <p>Where Bluetooth beacon verification is enabled by the institution, Acadly Here may detect nearby Bluetooth beacons during check-in. This data is processed locally and only the verification result is transmitted to our servers.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">5. Data Minimization</h2>
            <p>We follow the principle of data minimization. We collect only the data necessary to verify attendance and we retain it only as long as required by the institution&apos;s data retention policy.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-navy">6. Contact</h2>
            <p>For questions specific to Acadly Here&apos;s data practices, contact privacy@acadly.com.</p>
          </section>
        </div>
      </Container>
    </article>
  );
}
