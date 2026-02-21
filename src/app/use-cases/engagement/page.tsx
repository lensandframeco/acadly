import { createMetadata } from "@/lib/metadata";
import UseCaseTemplate from "@/components/sections/UseCaseTemplate";
import { useCases } from "@/data/use-cases";

const useCase = useCases.find((u) => u.slug === "engagement")!;

export const metadata = createMetadata({
  title: useCase.title,
  description: useCase.description,
  path: "/use-cases/engagement",
});

export default function EngagementPage() {
  return <UseCaseTemplate useCase={useCase} />;
}
