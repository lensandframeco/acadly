type BadgeVariant = "blue" | "amber" | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue: "bg-blue-50 text-brand-blue border-blue-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  neutral: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export default function Badge({
  children,
  variant = "blue",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border px-4 py-1.5 text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
