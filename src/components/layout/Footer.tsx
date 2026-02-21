import Link from "next/link";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-navy text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold text-white">
              Acadly
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              The complete teaching platform for modern classrooms. Attendance,
              engagement, and learning — all in one place.
            </p>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 transition hover:text-white"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-white">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 md:flex-row">
          <div className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Acadly. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-neutral-500 transition hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-500 transition hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="text-neutral-500 transition hover:text-white"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
