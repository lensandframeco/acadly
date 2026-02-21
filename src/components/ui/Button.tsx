import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-amber text-navy font-semibold hover:bg-brand-amber-light shadow-sm",
  secondary:
    "bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark shadow-sm",
  outline:
    "border border-neutral-200 text-neutral-700 hover:bg-neutral-50 font-medium",
  ghost: "text-neutral-600 hover:text-navy hover:bg-neutral-50 font-medium",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-lg",
  lg: "px-8 py-3.5 text-base rounded-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
