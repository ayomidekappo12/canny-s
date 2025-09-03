"use client";

import { useContext, createContext, ReactNode } from "react";
import { normalizeError, AppError } from "@/lib/errors";

type ErrorHandler = (error: unknown) => void;

const ErrorHandlerContext = createContext<ErrorHandler | undefined>(undefined);

interface ErrorHandlerProviderProps {
  children?: ReactNode;
}

export const ErrorProvider = ({ children }: ErrorHandlerProviderProps) => {
  const handleError: ErrorHandler = (error) => {
    const normalized: AppError = normalizeError(error);

    console.error("App Error:", normalized.message);

    if (normalized.code === 401) {
      // auth.logout();
    }
  };

  return (
    <ErrorHandlerContext.Provider value={handleError}>
      {children}
    </ErrorHandlerContext.Provider>
  );
};

export const useErrorHandler = () => {
  const context = useContext(ErrorHandlerContext);
  if (!context) {
    throw new Error("useErrorHandler must be used within an <ErrorProvider>");
  }
  return context;
};
