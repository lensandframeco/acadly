import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "light";
}

export default function CTASection({
  title,
  description,
  primaryCta = { label: "Book a Demo", href: "/demo" },
  secondaryCta,
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`px-6 py-20 md:py-28 ${
        isDark ? "bg-navy" : "bg-neutral-50"
      }`}
    >
      <Container width="narrow">
        <AnimateOnScroll>
          <div className="text-center">
            <h2
              className={`mb-4 text-3xl font-bold md:text-4xl ${
                isDark ? "text-white" : "text-navy"
              }`}
            >
              {title}
            </h2>
            <p
              className={`mx-auto mb-8 max-w-xl text-lg ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button variant="outline" size="lg" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
