"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-neutral-600 transition hover:bg-neutral-50 hover:text-navy">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-neutral-200 bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 transition hover:bg-neutral-50"
                      >
                        <div className="text-sm font-medium text-navy">
                          {child.label}
                        </div>
                        {"description" in child && child.description && (
                          <div className="mt-0.5 text-xs text-neutral-500">
                            {child.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="rounded-lg px-3 py-2 text-sm text-neutral-600 transition hover:bg-neutral-50 hover:text-navy"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" href="/login">
            Log In
          </Button>
          <Button variant="primary" size="sm" href="/demo">
            Book a Demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-100 bg-white px-6 py-4 lg:hidden">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="py-2">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {item.label}
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 text-sm text-neutral-600 hover:text-navy"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="block py-2 text-sm text-neutral-600 hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mt-4 flex flex-col gap-2 border-t border-neutral-100 pt-4">
            <Button variant="outline" size="md" href="/login">
              Log In
            </Button>
            <Button variant="primary" size="md" href="/demo">
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
