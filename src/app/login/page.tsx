"use client";

import { useForm } from "react-hook-form";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log("Login:", data);
    alert("Login functionality will be connected to your auth backend.");
  };

  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center bg-gradient-to-b from-blue-50 to-white px-6 py-20">
      <Container width="narrow">
        <Card className="mx-auto max-w-sm p-8">
          <div className="mb-6 text-center">
            <h1 className="mb-1 text-2xl font-bold text-navy">Welcome back</h1>
            <p className="text-sm text-neutral-500">
              Log in to your Acadly account
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
              <div className="mb-1 flex items-center justify-between">
                <label className="text-sm font-medium text-navy">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-brand-blue hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                {...register("password", { required: "Required" })}
                type="password"
                className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full"
            >
              Log In
            </Button>
          </form>
          <div className="mt-6 border-t border-neutral-100 pt-6 text-center text-sm text-neutral-500">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="text-brand-blue hover:underline">
              Sign up
            </a>
          </div>
        </Card>
      </Container>
    </section>
  );
}
