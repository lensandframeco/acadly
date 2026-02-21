import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center px-6 py-20">
      <Container width="narrow">
        <div className="text-center">
          <div className="mb-4 text-6xl font-bold text-neutral-200">404</div>
          <h1 className="mb-4 text-2xl font-bold text-navy">Page not found</h1>
          <p className="mb-8 text-neutral-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved or deleted.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" variant="secondary">
              Go Home
            </Button>
            <Button href="/support" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
