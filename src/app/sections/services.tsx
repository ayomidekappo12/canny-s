"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingFormDialog from "@/components/customBooking";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Home,
  Sparkles,
  Key,
  Building,
  Sofa,
  Plane,
  Clock,
  NotebookPen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const [open, setOpen] = useState(false);
  const services = [
    {
      icon: Home,
      title: "Domestic Cleaning",
      description:
        "Regular house cleaning to keep your home spotless. Weekly, bi-weekly, or monthly visits.",
      price: "From £15/hr",
      features: [
        "Kitchen & bathrooms",
        "Hoovering & mopping",
        "Dusting & polishing",
        "Flexible scheduling",
      ],
      popular: false,
      href: "/cleaning/service",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description:
        "Comprehensive top-to-bottom cleaning for move-ins, spring cleaning, or special occasions.",
      price: "From £120/hr",
      features: [
        "Inside appliances",
        "Window cleaning",
        "Skirting boards",
        "Light fixtures",
      ],
      popular: true,
      href: "/cleaning/service",
    },
    {
      icon: Key,
      title: "End of Tenancy",
      description:
        "Professional cleaning to secure your deposit. Landlord approved checklist included.",
      price: "From £180/hr",
      features: [
        "Deposit back guarantee",
        "Landlord checklist",
        "All appliances",
        "Professional equipment",
      ],
      popular: false,
      href: "/cleaning/service",
    },
    {
      icon: Building,
      title: "Office Cleaning",
      description:
        "Keep your workplace clean and professional. Daily, weekly, or one-off commercial cleaning.",
      price: "From £12/hr",
      features: [
        "Desk sanitization",
        "Kitchen areas",
        "Bathroom facilities",
        "Waste management",
      ],
      popular: false,
      href: "/cleaning/service",
    },
    {
      icon: Sofa,
      title: "Carpet & Upholstery",
      description:
        "Professional steam cleaning for carpets, sofas, and chairs. Stain removal included.",
      price: "From £80/hr",
      features: [
        "Steam cleaning",
        "Stain treatment",
        "Fabric protection",
        "Fast drying",
      ],
      popular: false,
      href: "/cleaning/service",
    },
    {
      icon: Plane,
      title: "AirBnB Cleaning",
      description:
        "Turnaround cleaning between guests. Quick, reliable service to maintain 5-star ratings.",
      price: "From £45/hr",
      features: [
        "Same-day service",
        "Fresh linens",
        "Restocking supplies",
        "Guest-ready standards",
      ],
      popular: false,
      href: "/cleaning/service",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--clean-blue)] to-white py-20">
        <div className="mx-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 text-lg lg:text-xl font-bold rounded-2xl border border-gray-200"
            >
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B]">
              Complete Cleaning Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From regular house cleaning to specialized deep cleans, we&apos;ve
              got every cleaning need covered across London.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className={`relative border-gray-100 transition-all duration-300 hover:shadow-[var(--shadow-strong)] hover:-translate-y-1 ${
                    service.popular
                      ? "border-primary shadow-[var(--shadow-medium)]"
                      : ""
                  }`}
                >
                  {service.popular && (
                    <Badge
                      variant="default"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white"
                      style={{ backgroundImage: "var(--gradient-trust)" }}
                    >
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-[#1E293B]">
                      {service.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-[#1de72e]" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col space-y-2">
                      <Button
                        variant={service.popular ? "default" : "default"}
                        className="w-full hover:scale-105 shadow-xl hover:shadow-2xl"
                        asChild
                      >
                        <Link href={service.href} className="cursor-pointer">
                          Learn More
                          <ArrowRight className="mx-1.5 h-4 w-5" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link href="/cleaning/booking">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-6">
            <Card
              className="border-0 shadow-[var(--shadow-medium)]"
              style={{ backgroundImage: "var(--gradient-card)" }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="text-left space-y-2">
                    <h3 className="text-2xl font-bold text-[#1E293B]">
                      Need a Custom Quote?
                    </h3>
                    <p className="text-muted-foreground">
                      Get personalized pricing for multiple services or large
                      properties.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Response within 1 hour</span>
                    </div>
                    <Button
                      onClick={() => setOpen(true)}
                      size="lg"
                      className="cursor-pointer sm:px-10 h-14"
                    >
                      <NotebookPen className="mx-1.5 w-5 h-5" />
                      Get Custom Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <BookingFormDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
