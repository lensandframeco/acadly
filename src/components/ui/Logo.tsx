import Link from "next/link";

interface LogoProps {
  white?: boolean;
  className?: string;
}

export default function Logo({ white = false, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 46 45"
        width="32"
        height="32"
        fill="none"
        aria-hidden="true"
      >
        {/* Blue circle — top left */}
        <circle cx="7.5" cy="8" r="6.5" fill="#2563EB" />

        {/* Orange pac-man — top right, mouth opens left */}
        <path
          d="M32 11 L23 4.7 A11 11 0 1 1 23 17.3 Z"
          fill="#D06830"
        />

        {/* Crimson pac-man — bottom left, mouth opens upper-right */}
        <path
          d="M10 33 L11.9 22.2 A11 11 0 1 0 20.8 31.1 Z"
          fill="#D4155A"
        />

        {/* Teal pac-man — bottom right, mouth opens up */}
        <path
          d="M32 33 L25.7 24 A11 11 0 1 1 38.3 24 Z"
          fill="#008060"
        />
      </svg>
      <span
        className={`text-[22px] font-bold tracking-tight ${
          white ? "text-white" : "text-navy"
        }`}
      >
        acadly
      </span>
    </Link>
  );
}
