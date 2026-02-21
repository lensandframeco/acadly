interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  highlighted?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover = false,
  highlighted = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-xl border bg-white p-6 ${
        highlighted
          ? "border-brand-blue ring-2 ring-brand-blue"
          : "border-neutral-200"
      } ${hover ? "transition-shadow hover:shadow-lg" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
