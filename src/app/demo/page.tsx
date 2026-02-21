"use client";

import { useForm } from "react-hook-form";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Check } from "lucide-react";

interface DemoForm {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  role: string;
  studentsCount: string;
  message: string;
}

const benefits = [
  "See Acadly in action with a personalized walkthrough",
  "Get answers to your specific questions",
  "Learn how 200+ institutions use Acadly",
  "Discuss pricing and custom requirements",
  "No commitment — just a conversation",
];

export default function DemoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoForm>();

  const onSubmit = (data: DemoForm) => {
    console.log("Demo form submitted:", data);
    alert("Thank you! We'll be in touch within 24 hours to schedule your demo.");
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Value prop */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold text-navy md:text-5xl">
              Book a Demo
            </h1>
            <p className="mb-8 text-lg text-neutral-600">
              See how Acadly can transform classroom management at your
              institution. Schedule a personalized demo with our team.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-neutral-700"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-semibold text-navy">
              Request your demo
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    First Name
                  </label>
                  <input
                    {...register("firstName", { required: "Required" })}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    Last Name
                  </label>
                  <input
                    {...register("lastName", { required: "Required" })}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-navy">
                  Work Email
                </label>
                <input
                  {...register("email", {
                    required: "Required",
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
              <div>
                <label className="mb-1 block text-sm font-medium text-navy">
                  Institution
                </label>
                <input
                  {...register("institution", { required: "Required" })}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
                {errors.institution && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.institution.message}
                  </p>
                )}
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    Your Role
                  </label>
                  <select
                    {...register("role", { required: "Required" })}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  >
                    <option value="">Select...</option>
                    <option value="instructor">Instructor</option>
                    <option value="department-head">Department Head</option>
                    <option value="it-admin">IT Administrator</option>
                    <option value="dean">Dean / Provost</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    Number of Students
                  </label>
                  <select
                    {...register("studentsCount")}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  >
                    <option value="">Select...</option>
                    <option value="1-100">1–100</option>
                    <option value="100-500">100–500</option>
                    <option value="500-5000">500–5,000</option>
                    <option value="5000+">5,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-navy">
                  Anything specific you&apos;d like to discuss?
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Request Demo
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
