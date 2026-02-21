import { createMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Webinars",
  description:
    "Join live webinars and watch recordings to learn best practices for classroom management with Acadly.",
  path: "/webinars",
});

const upcoming = [
  {
    title: "Getting Started with Acadly: A Complete Walkthrough",
    date: "March 5, 2026",
    time: "2:00 PM EST",
    description:
      "A comprehensive introduction to Acadly for new users. Learn how to set up classes, configure attendance, and use engagement tools.",
  },
  {
    title: "Advanced Analytics: Identifying At-Risk Students Early",
    date: "March 19, 2026",
    time: "2:00 PM EST",
    description:
      "Deep dive into Acadly's analytics dashboard. Learn how to spot trends, identify at-risk students, and generate actionable reports.",
  },
];

const past = [
  {
    title: "Hybrid Classroom Best Practices",
    date: "Feb 12, 2026",
    description:
      "Learn how leading institutions manage attendance and engagement in hybrid classrooms.",
  },
  {
    title: "LMS Integration Workshop",
    date: "Jan 29, 2026",
    description:
      "Step-by-step guide to integrating Acadly with Canvas, Blackboard, Moodle, and D2L.",
  },
  {
    title: "Boosting Engagement in Large Lectures",
    date: "Jan 15, 2026",
    description:
      "Practical strategies and tools for keeping students engaged in lecture halls with 200+ students.",
  },
  {
    title: "FERPA Compliance & Digital Attendance",
    date: "Dec 11, 2025",
    description:
      "Everything you need to know about staying FERPA-compliant while using digital attendance tracking.",
  },
];

export default function WebinarsPage() {
  return (
    <>
      <Hero
        title="Webinars"
        description="Join live sessions or watch recordings. Learn best practices for classroom management from the Acadly team and fellow educators."
        variant="gradient"
      />

      {/* Upcoming */}
      <section className="px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <h2 className="mb-8 text-2xl font-bold text-navy">
              Upcoming Webinars
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-6 md:grid-cols-2">
            {upcoming.map((webinar, i) => (
              <AnimateOnScroll key={webinar.title} delay={i * 0.1}>
                <Card hover className="flex flex-col h-full">
                  <Badge variant="blue" className="mb-4 self-start">
                    Live
                  </Badge>
                  <h3 className="mb-2 text-lg font-semibold text-navy">
                    {webinar.title}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-brand-blue">
                    {webinar.date} &middot; {webinar.time}
                  </p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600">
                    {webinar.description}
                  </p>
                  <Button variant="secondary" size="sm">
                    Register
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Past */}
      <section className="bg-neutral-50 px-6 py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <h2 className="mb-8 text-2xl font-bold text-navy">
              Past Webinars
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-6 md:grid-cols-2">
            {past.map((webinar, i) => (
              <AnimateOnScroll key={webinar.title} delay={i * 0.05}>
                <Card hover className="flex flex-col h-full">
                  <Badge variant="neutral" className="mb-4 self-start">
                    Recording
                  </Badge>
                  <h3 className="mb-2 text-lg font-semibold text-navy">
                    {webinar.title}
                  </h3>
                  <p className="mb-2 text-xs text-neutral-400">
                    {webinar.date}
                  </p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600">
                    {webinar.description}
                  </p>
                  <Button variant="outline" size="sm">
                    Watch Recording
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
