"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { BookingFormSchema, type BookingFormData } from "@/components/hooks/bookingSchema";
import ServiceDetailsCard from "@/app/cleaning/booking/ServiceDetailsCard";
import PropertyDetailsCard from "@/app/cleaning/booking/PropertyDetailsCard";
import ContactDetailsCard from "@/app/cleaning/booking/ContactDetailsCard";
import CalendlyDialog from "@/app/cleaning/booking/CalendlyDialog";

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(BookingFormSchema),
    mode: "onTouched",
    defaultValues: {
      service: "",
      date: undefined,
      time: "",
      duration: "",
      property: "",
      bedrooms: "",
      bathrooms: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      extraTask: "",
      specialRequest: "",
      notes: "",
      condition: "",
      frequency: "",
      supplies: "",
    },
  });

  const calendlyUrl =
    "https://calendly.com/eventstaffingsolutions/30min?back_to=https://yourdomain.com/booking?booking=success";

  // NOTE: onSubmit matches Zod schema via react-hook-form resolver.
  async function onSubmit(data: BookingFormData) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      toast.success(
        <div>
          <span className="text-[var(--professional-navy)] font-bold">
            Quote Request Sent!
          </span>
          <div className="text-[var(--professional-navy)]">
            We’ll get back to you within the hour with your quote.
          </div>
        </div>
      );

      // Offer user to schedule a call
      setShowCalendly(true);

      // Reset form to defaults (preserves controlled components)
      form.reset({
        service: "",
        date: undefined,
        time: "",
        duration: "",
        property: "",
        bedrooms: "",
        bathrooms: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        extraTask: "",
        specialRequest: "",
        notes: "",
        condition: "",
        frequency: "",
        supplies: "",
      });
    } catch (err) {
      toast.error(
        <div>
          <span className="text-red-400 font-bold">Submission failed</span>
          <div className="text-[var(--professional-navy)]">
            Something went wrong — please try again or call us.
          </div>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container py-5 sm:py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E293B] mb-2">
            Get Your Quote
          </h1>
          <p className="text-xl text-muted-foreground mx-2 sm:mx-0">
            Fill out the form below and we&apos;ll get back to you within the
            hour
          </p>
        </div>

        {/* Main form: keep layout & styles unchanged */}
        <FormProvider {...form}>
          <form
            onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
            className="space-y-8"
            aria-labelledby="booking-form-heading"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceDetailsCard form={form} />
              <PropertyDetailsCard form={form} />
            </div>

            <ContactDetailsCard form={form} />

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                variant="default"
                size="xl"
                disabled={isSubmitting}
                className="w-fit sm:w-auto px-12 cursor-pointer"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "get quote"}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We&apos;ll contact you within 1 hour to confirm your Quote
              </p>
            </div>
          </form>
        </FormProvider>
        <CalendlyDialog
          open={showCalendly}
          onOpenChange={setShowCalendly}
          calendlyUrl={calendlyUrl}
        />
      </div>
    </div>
  );
}
