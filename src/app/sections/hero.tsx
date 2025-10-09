"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import {
  Star,
  Clock,
  CheckCircle,
  Phone,
  NotebookPen,
  ArrowRight,
  Goal,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/components/quote";

export function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--clean-blue)] to-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 bg-cyan-100"></div>
      <div className="flex mx-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="bg-white/80 text-[#1E293B]">
                <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                4.9/5 Rating
              </Badge>
              <Badge variant="secondary" className="bg-white/80 text-[#1E293B]">
                <CheckCircle className="h-3 w-3 mr-1" />
                Fully Insured
              </Badge>
              <Badge variant="secondary" className="bg-white/80 text-[#1E293B]">
                <Goal
                  className="h-3 w-3 mr-1"
                  style={{ color: "var(--success-green)" }}
                />
                Where Clean Meets Perfection
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#1E293B]">
                Canny&apos;s Professional{" "}
                <span className="text-primary">Cleaning Services</span> Across
                London and Kent
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Trusted by our customers. Same-day bookings available.
                Eco-friendly products. 100% satisfaction guarantee.
              </p>
            </div>

            {/* USPs */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#dcf7de]">
                  <Clock
                    className="h-5 w-5"
                    style={{ color: "var(--success-green)" }}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#131620]">
                    Same Day Service
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Book today, clean today
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-[#131620]">
                    Satisfaction Guarantee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Not happy? We&apos;ll return free
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                asChild
                className="text-lg hover:scale-105 shadow-xl hover:shadow-2xl font-semibold"
              >
                <Link href="/cleaning/booking/">
                  <NotebookPen className="mx-1.5 w-5 h-5" />
                  Book Online Now
                  <ArrowRight className="mx-1.5 h-4 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="text-lg">
                <a href="tel:07930887488">
                  <Phone className="mx-1.5 h-4 w-5" />
                  Call 079 3088 7488
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <span>✓ 24/7 Customer Support</span>
              <span>✓ All London Boroughs</span>
              <span>✓ Where Clean Meets Perfection</span>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative">
            <Card className="bg-[#ffff] shadow-strong border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#131620] mb-2">
                      Get Your Free Quote
                    </h3>
                    <p className="text-muted-foreground">
                      No obligation. Instant pricing.
                    </p>
                  </div>

                  <div>
                    <Button
                      size="lg"
                      className="w-full cursor-pointer"
                      onClick={() => setOpen(true)}
                    >
                      Get your Quote
                    </Button>

                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogContent className="max-w-5xl overflow-y-auto max-h-[90vh]">
                        <DialogHeader>
                          <DialogTitle>
                            <VisuallyHidden>
                              Hidden but accessible title
                            </VisuallyHidden>
                          </DialogTitle>
                        </DialogHeader>
                        <QuoteForm />
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="mt-1">
                      &quot;Outstanding service, highly recommend!&quot; - Sarah
                      M.
                    </p>
                    <p className="mt-1">
                      &quot;Outstanding service, highly recommend!&quot; - Sarah
                      M.
                    </p>
                    <p className="mt-1">
                      &quot;Outstanding service, highly recommend!&quot; - Sarah
                      M.
                    </p>
                    <p className="mt-1">
                      &quot;Outstanding service, highly recommend!&quot; - Sarah
                      M.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
