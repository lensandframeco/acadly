"use client";

import { useForm } from "react-hook-form";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FAQAccordion from "@/components/sections/FAQAccordion";

const supportFAQs = [
  {
    question: "How do I reset my password?",
    answer:
      'Click "Forgot Password" on the login page and enter your registered email. You\'ll receive a reset link within minutes.',
  },
  {
    question: "How do I add students to my class?",
    answer:
      "You can import students from your LMS, upload a CSV file, or share an enrollment link that students can use to join your class.",
  },
  {
    question: "Can I export attendance data?",
    answer:
      "Yes! Go to your class dashboard, click Export, and choose between CSV, PDF, or direct LMS sync.",
  },
  {
    question: "What devices do students need?",
    answer:
      "Students need a smartphone (iOS or Android) with a web browser. No app download is required — Acadly works entirely in the browser.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Use the form on this page, email support@acadly.com, or use the in-app chat widget. Pro and Enterprise users get priority response times.",
  },
];

interface SupportForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function SupportPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupportForm>();

  const onSubmit = (data: SupportForm) => {
    console.log("Support form submitted:", data);
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20 md:py-28">
        <Container width="narrow">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-navy md:text-5xl">
              How can we help?
            </h1>
            <p className="text-lg text-neutral-600">
              Search our FAQ or send us a message. We&apos;re here to help.
            </p>
          </div>
        </Container>
      </section>

      <section className="px-6 py-20 md:py-28">
        <Container width="narrow">
          <Card className="p-8">
            <h2 className="mb-6 text-2xl font-bold text-navy">
              Contact Support
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    type="email"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    placeholder="you@university.edu"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-navy">
                  Subject
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  placeholder="What do you need help with?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  placeholder="Describe your issue or question..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" variant="secondary" size="lg">
                Send Message
              </Button>
            </form>
          </Card>
        </Container>
      </section>

      <FAQAccordion faqs={supportFAQs} title="Frequently asked questions" />
    </>
  );
}
