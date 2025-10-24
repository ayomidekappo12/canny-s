"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";

const LegalDialog = React.lazy(() => import("@/components/LegalDialog"));

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1E293B] text-white px-6 py-4 shadow-lg animate-slide-up">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <p className="text-sm text-gray-300 leading-relaxed md:w-3/4">
            🍪 We use cookies to enhance your browsing experience, serve
            personalized ads, and analyze our traffic. By clicking
            &ldquo;Accept&ldquo;, you agree to our
            <button
              onClick={() => setShowPrivacy(true)}
              className="underline cursor-pointer hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 px-1"
            >
              Privacy Policy
            </button>
            .
          </p>

          <div className="flex gap-2 shrink-0">
            <Button
              onClick={acceptCookies}
              className="bg-primary text-white hover:bg-primary/90 text-sm cursor-pointer"
            >
              Accept
            </Button>
            <Button
              variant="outline"
              onClick={rejectCookies}
              className="text-gray-300 border-gray-500 hover:bg-gray-500 bg-gray-700 text-sm cursor-pointer"
            >
              Decline
            </Button>
          </div>
        </div>
      </div>

      {/* Suspense fallback for lazy-loaded LegalDialog */}
      <Suspense fallback={null}>
        <LegalDialog
          open={showPrivacy}
          onOpenChange={setShowPrivacy}
          type="privacy"
        />
      </Suspense>
    </>
  );
}
