// CalendlyDialog.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  calendlyUrl: string;
}

export default function CalendlyDialog({
  open,
  onOpenChange,
  calendlyUrl,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">
            Schedule a Consultation call if needed
          </DialogTitle>
          <DialogDescription>
            Click below to schedule your Consultation Call on Calendly in a new
            tab.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button
            onClick={() => {
              const calendlyWindow = window.open(calendlyUrl, "_blank");
              setTimeout(() => {
                if (calendlyWindow) {
                  onOpenChange(false);
                } else {
                  toast.error(
                    <div>
                      <span className="text-red-400 font-bold">
                        Popup blocked
                      </span>
                      <div className="text-[var(--professional-navy)]">
                        Please allow popups to open Calendly.
                      </div>
                    </div>
                  );
                }
              }, 500);
            }}
            className="w-full cursor-pointer"
          >
            Schedule on Calendly
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
