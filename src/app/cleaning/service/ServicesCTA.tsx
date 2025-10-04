"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NotebookPen, Phone } from "lucide-react";

interface ServicesCTAProps {
  onOpenQuote: () => void;
}

export function ServicesCTA({ onOpenQuote }: ServicesCTAProps) {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[var(--clean-blue)] to-white"
      aria-labelledby="custom-quote-heading"
    >
      <div className="mx-8">
        <Card
          className="border-0 shadow-[var(--shadow-strong)]"
          style={{ backgroundImage: "var(--gradient-card)" }}
        >
          <CardContent className="p-12 text-center">
            <h2
              id="custom-quote-heading"
              className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-6"
            >
              Need a Custom Cleaning Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every property is unique. Get a personalized quote tailored to
              your specific needs, schedule, and budget requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onOpenQuote}
                size="lg"
                className="cursor-pointer sm:px-10 h-14"
                aria-label="Open custom quote form"
              >
                <NotebookPen className="mx-1.5 w-5 h-5" />
                Get Custom Quote
              </Button>

              <Button variant="outline" size="xl" className="cursor-pointer">
                <a
                  href="tel:07930887488"
                  className="inline-flex items-center"
                  aria-label="Call Clean London"
                >
                  <Phone className="mx-1.5 h-4 w-5" />
                  Call 079 3088 7488
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              ✓ Free quotes ✓ Same-day response ✓ No obligation
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
