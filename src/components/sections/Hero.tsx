import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

type HeroVariant = "light" | "gradient" | "dark";

interface HeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: HeroVariant;
}

const variantStyles: Record<HeroVariant, { bg: string; title: string; desc: string }> = {
  light: {
    bg: "",
    title: "text-navy",
    desc: "text-neutral-600",
  },
  gradient: {
    bg: "bg-gradient-to-b from-blue-50 to-white",
    title: "text-navy",
    desc: "text-neutral-600",
  },
  dark: {
    bg: "bg-navy",
    title: "text-white",
    desc: "text-neutral-300",
  },
};

export default function Hero({
  badge,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  variant = "light",
}: HeroProps) {
  const styles = variantStyles[variant];

  return (
    <section className={`px-6 py-20 md:py-28 ${styles.bg}`}>
      <Container width="narrow">
        <AnimateOnScroll>
          <div className="text-center">
            {badge && (
              <Badge
                variant={variant === "dark" ? "neutral" : "blue"}
                className="mb-6"
              >
                {badge}
              </Badge>
            )}
            <h1
              className={`mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight ${styles.title}`}
            >
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="text-brand-blue">{highlight}</span>
                </>
              )}
            </h1>
            <p
              className={`mx-auto mb-10 max-w-2xl text-lg md:text-xl ${styles.desc}`}
            >
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {primaryCta && (
                  <Button variant="primary" size="lg" href={primaryCta.href}>
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    variant={variant === "dark" ? "outline" : "outline"}
                    size="lg"
                    href={secondaryCta.href}
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
