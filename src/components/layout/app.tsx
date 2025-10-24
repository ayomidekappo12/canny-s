"use client";

import React from "react";
import { SWRConfig } from "swr";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorProvider } from "@/lib/ErrorHandlerProvider";
import Header from "./header";
import Footer from "./footer";
import CookieConsent from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import { LoadingIndicatorProvider } from "@/lib/LoadingIndicatorProvider";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorProvider>
      <SWRConfig>
        <div className="bg-background min-h-screen">
          <LoadingIndicatorProvider />
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Header />
            {children}
            <CookieConsent />
            <Footer />
            <Toaster />
          </TooltipProvider>
        </div>
      </SWRConfig>
    </ErrorProvider>
  );
};

export default App;
