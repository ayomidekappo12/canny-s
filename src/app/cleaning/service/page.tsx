"use client";

import { useState } from "react";
import BookingFormDialog from "@/components/custom/page";
import { services } from "@/components/hooks/servicesData";
import { ServiceCard } from "./ServiceCard";
import { ServicesHero } from "./ServicesHero";
import { ServicesCTA } from "./ServicesCTA";

/**
 * @page Services
 * Displays all available cleaning services and a custom quote CTA.
 */
export default function Services() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Grid */}
      <section className="py-10">
        <div className="mx-8 grid gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <ServicesCTA onOpenQuote={() => setOpen(true)} />

      {/* Custom Booking Modal */}
      <BookingFormDialog open={open} onOpenChange={setOpen} />
    </main>
  );
}
