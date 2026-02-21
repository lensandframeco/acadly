import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface LogoCarouselProps {
  logos: string[];
  title?: string;
}

export default function LogoCarousel({
  logos,
  title = "Trusted by 200+ institutions worldwide",
}: LogoCarouselProps) {
  const doubled = [...logos, ...logos];

  return (
    <section className="border-y border-neutral-100 py-12">
      <Container>
        <AnimateOnScroll>
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-neutral-400">
            {title}
          </p>
        </AnimateOnScroll>
      </Container>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-block text-sm font-medium text-neutral-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
