/*
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import LandingHeader from "@/components/layout/header/landingHeader";
import CateringHeader from "@/components/layout/Heading";
import CleaningHeader from "@/components/layout/header/cleaningHeader";

import LandingFooter from "@/components/layout/footer/landingFooter";
import CateringFooter from "@/components/layout/Footer";
import CleaningFooter from "@/components/layout/footer/cleaningFooter";

export default function DynamicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // ✅ Explicit typing so ESLint/TS know these are React components
  let Header: React.ComponentType = LandingHeader;
  let Footer: React.ComponentType = LandingFooter;

  if (pathname?.startsWith("/services/cleaning")) {
    Header = CleaningHeader;
    Footer = CleaningFooter;
  } else if (pathname?.startsWith("/services/catering")) {
    Header = CateringHeader;
    Footer = CateringFooter;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
*/