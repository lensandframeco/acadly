import { Check } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <Card highlighted={tier.highlighted} className="flex flex-col p-8">
      <h3 className="mb-1 text-lg font-semibold text-navy">{tier.name}</h3>
      <p className="mb-4 text-sm text-neutral-500">{tier.description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-navy">{tier.price}</span>
        {tier.period && (
          <span className="ml-1 text-sm text-neutral-500">/{tier.period}</span>
        )}
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
            {f}
          </li>
        ))}
      </ul>
      <Button
        variant={tier.highlighted ? "secondary" : "outline"}
        size="lg"
        href={tier.ctaHref}
        className="w-full"
      >
        {tier.cta}
      </Button>
    </Card>
  );
}
