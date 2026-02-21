import { createMetadata } from "@/lib/metadata";
import UseCaseTemplate from "@/components/sections/UseCaseTemplate";
import { useCases } from "@/data/use-cases";

const useCase = useCases.find((u) => u.slug === "in-person")!;

export const metadata = createMetadata({
  title: useCase.title,
  description: useCase.description,
  path: "/use-cases/in-person",
});

export default function InPersonPage() {
  return <UseCaseTemplate useCase={useCase} />;
}
