"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  BookingFormSchema,
  type BookingFormData,
} from "@/components/hooks/bookingSchema";
import ServiceDetailsCard from "./ServiceDetailsCard";
import PropertyDetailsCard from "./PropertyDetailsCard";
import ContactDetailsCard from "./ContactDetailsCard";
import CalendlyDialog from "./CalendlyDialog";
import emailjs from "@emailjs/browser";

interface HoneypotForm extends HTMLFormElement {
  _honeypot?: HTMLInputElement;
}

export default function BookingForm() {
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

  async function onSubmit(data: BookingFormData) {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BOOKING!,
        {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          email: data.email.trim(),
          phone: data.phone.trim(),
          service: data.service || "N/A",
          date: data.date
            ? new Date(data.date).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "N/A",
          time: data.time || "N/A",
          duration: data.duration || "N/A",
          property: data.property || "N/A",
          bedrooms: data.bedrooms || "N/A",
          bathrooms: data.bathrooms || "N/A",
          extraTask: data.extraTask || "None",
          specialRequest: data.specialRequest || "None",
          notes: data.notes || "None",
          condition: data.condition || "N/A",
          frequency: data.frequency || "N/A",
          supplies: data.supplies || "N/A",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success(
        <div aria-live="polite">
          <span className="text-[var(--professional-navy)] font-bold">
            Your booking request has been sent successfully!
          </span>
          <div className="text-[var(--professional-navy)]">
            We&apos;ll review your details and get back to you shortly. Please
            schedule a call below if needed.
          </div>
        </div>
      );

      setShowCalendly(true);
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
    } catch (error) {
      console.error("Booking form submission failed:", error);
      toast.error(
        <div aria-live="polite">
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
    <div className="container py-14 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E293B] mb-4">
            Book Your Cleaning Service
          </h1>
          <p className="text-xl text-muted-foreground mx-2 sm:mx-0">
            Fill out the form below and we&apos;ll get back to you within the
            hour
          </p>
        </div>

        <FormProvider {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formEl = e.target as HoneypotForm;
              if (formEl._honeypot?.value) return; // honeypot check
              void form.handleSubmit(onSubmit)(e);
            }}
            className="space-y-8"
            aria-labelledby="booking-form-heading"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceDetailsCard form={form} />
              <PropertyDetailsCard form={form} />
            </div>

            <ContactDetailsCard form={form} />

            {/* Honeypot Field */}
            <input
              type="text"
              name="_honeypot"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="text-center">
              <Button
                type="submit"
                variant="default"
                size="xl"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                className="w-fit sm:w-auto px-12 cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Book My Cleaning Service"}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We&apos;ll contact you within 1 hour to confirm your booking
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
