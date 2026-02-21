import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Insights, guides, and best practices for modern classroom management from the Acadly team.",
  path: "/blog",
});

const posts = [
  {
    slug: "future-of-classroom-attendance",
    title: "The Future of Classroom Attendance: Beyond Roll Calls",
    excerpt:
      "Manual roll calls are a relic of the past. Explore how geofencing, biometrics, and AI are reshaping attendance tracking in higher education.",
    category: "Trends",
    date: "Feb 15, 2026",
  },
  {
    slug: "boost-student-engagement",
    title: "5 Proven Strategies to Boost Student Engagement in Large Lectures",
    excerpt:
      "Large lectures don't have to mean passive learning. Here are five research-backed strategies to keep every student engaged.",
    category: "Teaching Tips",
    date: "Feb 10, 2026",
  },
  {
    slug: "hybrid-classroom-best-practices",
    title: "Hybrid Classroom Best Practices: Lessons from 200+ Institutions",
    excerpt:
      "We analyzed data from hundreds of hybrid classrooms to identify what works — and what doesn't — in blended learning environments.",
    category: "Research",
    date: "Feb 5, 2026",
  },
  {
    slug: "lms-integration-guide",
    title: "Complete Guide to LMS Integration with Acadly",
    excerpt:
      "Step-by-step instructions for connecting Acadly with Canvas, Blackboard, Moodle, and D2L Brightspace.",
    category: "Guides",
    date: "Jan 28, 2026",
  },
  {
    slug: "ferpa-compliance-attendance",
    title: "FERPA Compliance and Digital Attendance: What You Need to Know",
    excerpt:
      "A comprehensive guide to staying FERPA-compliant while using digital attendance tools in your institution.",
    category: "Compliance",
    date: "Jan 20, 2026",
  },
  {
    slug: "reduce-absenteeism",
    title: "How Automated Attendance Tracking Reduces Student Absenteeism",
    excerpt:
      "Research shows that when attendance is tracked accurately and consistently, absenteeism drops. Here's the data.",
    category: "Research",
    date: "Jan 15, 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog"
        description="Insights, guides, and best practices for modern classroom management."
        variant="light"
      />

      <section className="px-6 py-20 md:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`}>
                  <Card hover className="flex h-full flex-col">
                    <Badge variant="neutral" className="mb-4 self-start">
                      {post.category}
                    </Badge>
                    <h3 className="mb-2 text-lg font-semibold text-navy">
                      {post.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-neutral-400">
                      {post.date}
                    </span>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
