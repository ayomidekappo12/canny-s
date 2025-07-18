// src/hooks/use-toast.ts
import { useCallback } from "react";

type ToastVariant = "default" | "success" | "error" | "destructive";

interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

export function useToast() {
  const toast = useCallback((options: ToastOptions) => {
    const {
      title,
      description = "",
      variant = "default",
      duration = 4000,
    } = options;

    // This uses a simple window alert fallback – replace with your own toast UI
    console.log(`[${variant.toUpperCase()}] ${title}: ${description}`);

    // Optionally connect to shadcn/ui, Radix, or another toast lib here.
    if (typeof window !== "undefined" && window?.document) {
      const evt = new CustomEvent("app-toast", {
        detail: { title, description, variant, duration },
      });
      window.dispatchEvent(evt);
    }
  }, []);

  return { toast };
}