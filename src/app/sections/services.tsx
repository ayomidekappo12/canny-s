"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Home,
  Sparkles,
  Key,
  Building,
  Cog,
  Plane,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Domestic Cleaning",
      description:
        "Regular house cleaning to keep your home spotless. Weekly, bi-weekly, or monthly visits.",
      price: "From £25/hr",
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
      price: "From £35/hr",
      features: [
        "Inside appliances",
        "Window cleaning",
        "Everything in domestic cleaning",
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
        "Guaranted satisfaction",
        "Landlord checklist",
        "All appliances",
        "Professional equipment",
      ],
      popular: false,
      href: "/cleaning/service",
    },
    {
      icon: Building,
      title: "Commercial Cleaning",
      description:
        "Keep your workplace clean and professional. Daily, weekly, or one-off commercial cleaning.",
      price: "price on request",
      features: [
        "Office sanitization",
        "Workspace and Business space cleaning",
        "Bathroom facilities",
        "Waste management",
      ],
      popular: false,
      href: "/cleaning/service",
    },
    {
      icon: Cog,
      title: "After-Builders Cleaning",
      description:
        "Clearing the dirt and dust after your building work's complete. Make your space shine again.",
      price: "price on request",
      features: [
        "removal of paint, plaster and glue",
        "polished free of all dirt and dust",
        "Tilework deep cleaned of limescale",
        "All appliance and equipment exteriors cleaned",
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
          <div className="text-center space-y-4 mb-10">
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
        </div>
      </section>
    </>
  );
}
