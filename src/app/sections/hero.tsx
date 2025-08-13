"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Star,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  NotebookPen,
  ArrowRight,
} from "lucide-react";

export function Hero() {
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
                <Shield className="h-3 w-3 mr-1" />
                DBS Checked
              </Badge>
              <Badge variant="secondary" className="bg-white/80 text-[#1E293B]">
                <CheckCircle className="h-3 w-3 mr-1" />
                Fully Insured
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#1E293B]">
                Canny&apos;s Professional{" "}
                <span className="text-primary">Cleaning Services</span> Across
                London
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Trusted by 2,400+ customers. Same-day bookings available.
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
                <Link href="/services/cleaning/booking">
                  <NotebookPen className="mx-1.5 w-5 h-5" />
                  Book Online Now
                  <ArrowRight className="mx-1.5 h-4 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="text-lg">
                <a href="tel:02079460958">
                  <Phone className="mx-1.5 h-4 w-5" />
                  Call 020 7946 0958
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <span>✓ 2,400+ Happy Customers</span>
              <span>✓ 24/7 Customer Support</span>
              <span>✓ All London Boroughs</span>
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

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-[#f8fdff] rounded-lg">
                      <span className="font-medium">Domestic Cleaning</span>
                      <span className="text-primary font-bold">
                        From £15/hr
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#f8fdff] rounded-lg">
                      <span className="font-medium">Deep Cleaning</span>
                      <span className="text-primary font-bold">
                        From £120/hr
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#f8fdff] rounded-lg">
                      <span className="font-medium">End of Tenancy</span>
                      <span className="text-primary font-bold">
                        From £180/hr
                      </span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full" asChild>
                    <Link href="/booking">Get Instant Quote</Link>
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
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
