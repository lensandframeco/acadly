import { createMetadata } from "@/lib/metadata";
import UseCaseTemplate from "@/components/sections/UseCaseTemplate";
import { useCases } from "@/data/use-cases";

const useCase = useCases.find((u) => u.slug === "attendance")!;

export const metadata = createMetadata({
  title: useCase.title,
  description: useCase.description,
  path: "/use-cases/attendance",
});

export default function AttendancePage() {
  return <UseCaseTemplate useCase={useCase} />;
}
