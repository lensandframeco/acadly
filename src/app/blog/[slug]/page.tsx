import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const posts: Record<
  string,
  { title: string; date: string; category: string; content: string }
> = {
  "future-of-classroom-attendance": {
    title: "The Future of Classroom Attendance: Beyond Roll Calls",
    date: "Feb 15, 2026",
    category: "Trends",
    content: `Manual roll calls have been a staple of education for centuries, but they're fundamentally broken in modern classrooms. In a 300-person lecture hall, taking attendance by hand wastes 10+ minutes every session — time that could be spent teaching.

The good news? Technology is catching up. Here's what the future of attendance looks like:

## Geofencing and Location Verification

Modern attendance systems use GPS and Wi-Fi positioning to verify that students are physically present in the classroom. When a student tries to check in, the system confirms their location falls within the classroom's geofence — a virtual boundary around the physical space.

## Device Fingerprinting

Each smartphone has a unique digital fingerprint based on its hardware and software configuration. By linking each student to a specific device, attendance systems can prevent proxy check-ins where one student marks attendance for another.

## Dynamic QR Codes

Time-rotating QR codes displayed in the classroom provide another layer of verification. Unlike static codes that can be shared via screenshot, dynamic codes change every few seconds, requiring physical presence to scan.

## AI-Powered Analytics

Beyond just tracking who's present, modern systems use AI to identify patterns — which students are at risk of dropping out, which class times see the lowest attendance, and how attendance correlates with academic performance.

## The Bottom Line

The future of attendance isn't about surveillance — it's about eliminating administrative overhead so educators can focus on what matters: teaching. Tools like Acadly are already making this future a reality for 200+ institutions worldwide.`,
  },
  "boost-student-engagement": {
    title: "5 Proven Strategies to Boost Student Engagement in Large Lectures",
    date: "Feb 10, 2026",
    category: "Teaching Tips",
    content: `Large lectures are notoriously difficult environments for student engagement. When you're teaching 200+ students, it's easy for individuals to fade into the background. But research consistently shows that active learning leads to better outcomes.

Here are five strategies that work:

## 1. Start with a Poll

Open every lecture with a quick poll related to the day's topic. This immediately shifts students from passive to active mode and gives you a read on their existing knowledge.

## 2. Use the Think-Pair-Share Method

Pose a question, give students a minute to think individually, then have them discuss with a neighbor before sharing with the class. This works even in large lecture halls.

## 3. Implement Periodic Check-Ins

Every 15-20 minutes, pause for a quick comprehension check. This can be a poll, a quiz question, or simply asking students to submit a question about what was just covered.

## 4. Make Q&A Asynchronous

Instead of asking "any questions?" (which rarely works in large classes), use a digital Q&A tool where students can submit and upvote questions throughout the lecture. Address the most popular ones.

## 5. Share Resources in Real Time

Rather than emailing slides after class, share materials during the lecture. When students can follow along on their own devices, they're more engaged and take better notes.

## Putting It All Together

The common thread in all these strategies is reducing the barrier between instructor and student. Tools like Acadly Engage make it easy to implement all five strategies from a single platform — no juggling multiple apps.`,
  },
  "hybrid-classroom-best-practices": {
    title: "Hybrid Classroom Best Practices: Lessons from 200+ Institutions",
    date: "Feb 5, 2026",
    category: "Research",
    content: `Hybrid learning is here to stay. After analyzing data from 200+ institutions using Acadly, we've identified the practices that separate successful hybrid classrooms from struggling ones.

## Equal Experience for All Students

The biggest mistake institutions make is treating remote students as an afterthought. Successful hybrid classrooms provide an equal experience regardless of how students attend.

## Unified Attendance Tracking

Using separate systems for in-person and remote attendance creates inconsistent records and double the administrative work. A unified platform ensures every student is tracked the same way.

## Asynchronous Engagement Options

Not every student can participate in real-time, especially in hybrid settings across time zones. Providing asynchronous discussion boards and Q&A alongside synchronous tools ensures everyone can engage.

## Clear Expectations

The most successful hybrid classrooms set clear expectations about attendance, participation, and how students should engage — whether in-person or remote.

## Data-Driven Adjustments

Institutions that regularly review attendance and engagement data can spot issues early and adjust their approach. Are remote students disengaging after 30 minutes? Maybe it's time for shorter, more frequent sessions.`,
  },
  "lms-integration-guide": {
    title: "Complete Guide to LMS Integration with Acadly",
    date: "Jan 28, 2026",
    category: "Guides",
    content: `Integrating Acadly with your Learning Management System eliminates manual data entry and ensures attendance records are always in sync. Here's how to set it up.

## Supported Platforms

Acadly integrates with Canvas, Blackboard, Moodle, and D2L Brightspace. Each integration supports roster import, attendance sync, and grade passback.

## Canvas Integration

Setting up Canvas integration takes about 5 minutes. Navigate to your Acadly admin panel, select Canvas as your LMS, and follow the OAuth flow to authorize the connection.

## Blackboard Integration

Blackboard integration uses LTI (Learning Tools Interoperability). Install the Acadly LTI tool in your Blackboard instance and configure the connection using the credentials provided in your Acadly admin panel.

## What Gets Synced

Once connected, Acadly automatically syncs class rosters (so you don't need to manually add students), attendance records (updated after every class session), and participation grades (based on attendance and engagement).

## Troubleshooting

The most common issue is roster mismatches — usually caused by students having different email addresses in Acadly and your LMS. Acadly's admin panel includes a roster reconciliation tool to resolve these.`,
  },
  "ferpa-compliance-attendance": {
    title: "FERPA Compliance and Digital Attendance: What You Need to Know",
    date: "Jan 20, 2026",
    category: "Compliance",
    content: `The Family Educational Rights and Privacy Act (FERPA) protects student education records, including attendance data. Here's what you need to know about staying compliant when using digital attendance tools.

## What FERPA Covers

FERPA applies to all educational institutions that receive federal funding. It protects "education records" — any records directly related to a student that are maintained by the institution. Attendance records fall squarely within this definition.

## Key Requirements

Institutions must obtain consent before sharing student records with third parties, provide students access to their own records, and maintain reasonable security measures to protect student data.

## How Acadly Ensures Compliance

Acadly is designed with FERPA compliance built in. All data is encrypted at rest and in transit. Student data is never shared with third parties. Institutions maintain full control over their data, including the ability to export or delete it at any time.

## Data Retention

Acadly follows your institution's data retention policies. You can configure how long attendance records are stored and set up automatic deletion after a specified period.

## Best Practices

Even with a FERPA-compliant tool, institutions should train instructors on proper data handling, limit access to attendance data on a need-to-know basis, and conduct regular audits of who has access to student records.`,
  },
  "reduce-absenteeism": {
    title: "How Automated Attendance Tracking Reduces Student Absenteeism",
    date: "Jan 15, 2026",
    category: "Research",
    content: `Research consistently shows a strong correlation between class attendance and academic performance. But many institutions struggle with chronic absenteeism. Can automated attendance tracking help?

## The Data

Across 200+ institutions using Acadly, we've seen an average 15% reduction in absenteeism within the first semester of implementation. The effect is even stronger in courses that previously didn't track attendance at all.

## Why It Works

The primary mechanism is accountability. When students know their attendance is being accurately tracked, they're more likely to show up. It's the same principle behind speed cameras — the mere presence of tracking changes behavior.

## Early Intervention

Automated tracking also enables early intervention. When a student misses two classes in a row, the system can automatically flag them for the instructor or advisor, enabling outreach before the problem compounds.

## Student Self-Awareness

Many students don't realize how often they're missing class until they see the data. Acadly's student dashboard shows attendance rates and trends, giving students visibility into their own behavior.

## The Bottom Line

Automated attendance tracking isn't about punishment — it's about creating accountability and enabling early intervention. The result is fewer students falling through the cracks and better academic outcomes across the board.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    return createMetadata({
      title: "Post Not Found",
      description: "This blog post could not be found.",
      path: `/blog/${slug}`,
    });
  }
  return createMetadata({
    title: post.title,
    description: post.content.slice(0, 160),
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <Container width="narrow" className="py-20">
        <h1 className="mb-4 text-2xl font-bold text-navy">Post not found</h1>
        <Button href="/blog" variant="outline">
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <article className="px-6 py-20 md:py-28">
      <Container width="narrow">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <div className="mb-4 text-sm text-neutral-400">
          {post.date} &middot; {post.category}
        </div>
        <h1 className="mb-8 text-3xl font-bold text-navy md:text-4xl">
          {post.title}
        </h1>
        <div className="prose prose-neutral max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mb-4 mt-10 text-2xl font-bold text-navy"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed text-neutral-600">
                {paragraph}
              </p>
            );
          })}
        </div>
        <div className="mt-16 rounded-xl bg-neutral-50 p-8 text-center">
          <h3 className="mb-2 text-lg font-semibold text-navy">
            Ready to try Acadly?
          </h3>
          <p className="mb-4 text-sm text-neutral-600">
            Start your free trial and see results from your first class.
          </p>
          <Button href="/sign-up" variant="primary">
            Start Free Trial
          </Button>
        </div>
      </Container>
    </article>
  );
}
