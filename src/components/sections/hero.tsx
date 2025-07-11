"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link"; // ✅ Next.js Link
import {
  Star,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-clean-blue to-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="secondary"
                className="bg-white/80 text-professional-navy"
              >
                <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                4.9/5 Rating
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/80 text-professional-navy"
              >
                <Shield className="h-3 w-3 mr-1" />
                DBS Checked
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/80 text-professional-navy"
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Fully Insured
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-professional-navy leading-tight">
                Professional{" "}
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
                <div className="p-2 rounded-lg bg-success-green/10">
                  <Clock className="h-5 w-5 text-success-green" />
                </div>
                <div>
                  <p className="font-semibold text-professional-navy">
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
                  <p className="font-semibold text-professional-navy">
                    Satisfaction Guarantee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Not happy? We'll return free
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild className="text-lg">
                <Link href="/booking">
                  Book Online Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="text-lg">
                <Phone className="h-5 w-5" />
                Call 020 7946 0958
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
            <Card className="bg-gradient-card shadow-strong border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-professional-navy mb-2">
                      Get Your Free Quote
                    </h3>
                    <p className="text-muted-foreground">
                      No obligation. Instant pricing.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-clean-blue rounded-lg">
                      <span className="font-medium">Domestic Cleaning</span>
                      <span className="text-primary font-bold">
                        From £15/hour
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-clean-blue rounded-lg">
                      <span className="font-medium">Deep Cleaning</span>
                      <span className="text-primary font-bold">From £120</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-clean-blue rounded-lg">
                      <span className="font-medium">End of Tenancy</span>
                      <span className="text-primary font-bold">From £180</span>
                    </div>
                  </div>

                  <Button
                    variant="booking"
                    size="lg"
                    className="w-full"
                    asChild
                  >
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
                      "Outstanding service, highly recommend!" - Sarah M.
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
