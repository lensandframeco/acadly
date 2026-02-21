"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { GraduationCap, BookOpen, Building2 } from "lucide-react";

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  institution: string;
}

const roles = [
  {
    id: "instructor",
    label: "Instructor",
    description: "I teach classes and want to manage attendance",
    icon: BookOpen,
  },
  {
    id: "student",
    label: "Student",
    description: "I want to check in to my classes",
    icon: GraduationCap,
  },
  {
    id: "admin",
    label: "Administrator",
    description: "I manage Acadly for my institution",
    icon: Building2,
  },
];

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();

  const onSubmit = (data: SignUpForm) => {
    console.log("Sign up:", { ...data, role: selectedRole });
    alert("Account created! Check your email to verify.");
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20 md:py-28">
      <Container width="narrow">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-navy md:text-4xl">
            Create your account
          </h1>
          <p className="text-neutral-600">
            Get started with Acadly for free. No credit card required.
          </p>
        </div>

        <Card className="mx-auto max-w-md p-8">
          {/* Role selection */}
          {!selectedRole ? (
            <div>
              <h2 className="mb-4 text-lg font-semibold text-navy">
                I am a...
              </h2>
              <div className="space-y-3">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className="flex w-full items-center gap-4 rounded-xl border border-neutral-200 p-4 text-left transition hover:border-brand-blue hover:bg-blue-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                      <role.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-navy">
                        {role.label}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {role.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="mb-2 text-sm text-brand-blue hover:underline"
              >
                &larr; Change role
              </button>
              <div>
                <label className="mb-1 block text-sm font-medium text-navy">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Required" })}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
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
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Required",
                    minLength: {
                      value: 8,
                      message: "At least 8 characters",
                    },
                  })}
                  type="password"
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {selectedRole !== "student" && (
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    Institution
                  </label>
                  <input
                    {...register("institution")}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
              )}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Create Account
              </Button>
              <p className="text-center text-xs text-neutral-500">
                By signing up, you agree to our{" "}
                <a href="/terms" className="text-brand-blue hover:underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-brand-blue hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}

          <div className="mt-6 border-t border-neutral-100 pt-6 text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <a href="/login" className="text-brand-blue hover:underline">
              Log in
            </a>
          </div>
        </Card>
      </Container>
    </section>
  );
}
