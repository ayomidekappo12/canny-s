"use client";

import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/utils";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorProvider } from "@/lib/ErrorHandlerProvider";
import Header from "./header";
import Footer from "./footer";
import { Toaster } from "@/components/ui/sonner";
import { LoadingIndicatorProvider } from "@/lib/LoadingIndicatorProvider";
import { normalizeError } from "@/lib/errors";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorProvider>
      <SWRConfig
        value={{
          fetcher,
          onError: (error: unknown) => {
            const normalized = normalizeError(error);
            console.error("SWR error:", normalized.message);
          },
          revalidateOnFocus: true,
        }}
      >
        <div className="bg-background min-h-screen">
          <LoadingIndicatorProvider />
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Header />
            {children}
            <Footer />
            <Toaster />
          </TooltipProvider>
        </div>
      </SWRConfig>
    </ErrorProvider>
  );
};

export default App;
