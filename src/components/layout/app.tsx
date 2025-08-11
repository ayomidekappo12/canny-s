"use client";

import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/utils";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorProvider } from "@/lib/ErrorHandlerProvider";
import DynamicLayout from "@/components/layout/Route/dynamicLayout";
import { Toaster } from "@/components/ui/sonner";

import { LoadingIndicatorProvider } from "@/lib/LoadingIndicatorProvider";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorProvider>
      <SWRConfig
        value={{
          fetcher,
          onError: (error) => {
            //log
            console.log(error.message);
          },
          revalidateOnFocus: true,
        }}
      >
        <div className="bg-background min-h-screen">
          <LoadingIndicatorProvider />
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <DynamicLayout>
            {children}
            </DynamicLayout>
            <Toaster />
          </TooltipProvider>
        </div>
      </SWRConfig>
    </ErrorProvider>
  );
};

export default App;
