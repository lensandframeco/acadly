"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg md:p-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-neutral-600">
          We use cookies to improve your experience. By continuing to use this
          site, you agree to our{" "}
          <a href="/privacy" className="text-brand-blue underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button variant="secondary" size="sm" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
