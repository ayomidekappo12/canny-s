"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { InputField } from "./InputField";
import { DatePickerField } from "./DatePickerField";

const bookingSchema = z.object({
  service: z.string().min(1, "Please input a service"),
  date: z.date().refine((d) => d instanceof Date && !isNaN(d.getTime()), {
    message: "Please input a date",
  }),
  time: z.string().min(1, "Please input a time"),
  duration: z.string().min(1, "Please input duration"),
  property: z.string().min(1, "Please input property type"),
  bedrooms: z.string().min(1, "Please input number of bedrooms"),
  bathrooms: z.string().min(1, "Please input number of bathrooms"),
  frequency: z.string().min(1, "Please input your desired frequency"),
  condition: z.string().min(1, "Please input a condition type"),
  supplies: z.string().min(1, "Please input your cleaning supplies option"),
  extraTask: z.string().optional(),
  specialRequest: z.string().optional(),
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.email({ message: "Invalid email format" }),
  phone: z.string().min(8, "Invalid phone number"),
  notes: z.string().min(10, "Please enter detailed notes"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * BookingFormDialog Component
 * - Modular, accessible, and fully validated with zod & react-hook-form.
 * - Uses helper components for cleaner and reusable form fields.
 */
export default function BookingFormDialog({
  open,
  onOpenChange,
}: BookingFormDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyUrl =
    "https://calendly.com/eventstaffingsolutions/30min?back_to=https://yourdomain.com/booking?booking=success";

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: "",
      date: undefined,
      time: "",
      duration: "",
      property: "",
      bedrooms: "",
      bathrooms: "",
      extraTask: "",
      specialRequest: "",
      condition: "",
      frequency: "",
      supplies: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "" 
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        // Handle validation errors from backend (Zod)
        if (result.errors) {
          toast.error(`Validation error: ${result.errors.join(", ")}`);
        } else {
          toast.error(result.message || "Failed to send booking");
        }
        return;
      }

      toast.success(
        <div>
          <span className="text-[var(--professional-navy)] font-bold">
            Custom Quote Confirmed!
          </span>
          <div className="text-[var(--professional-navy)]">
            We&apos;ve received your request and will contact you soon.
          </div>
        </div>
      );

      form.reset({
        service: "",
        date: undefined,
        time: "",
        duration: "",
        property: "",
        bedrooms: "",
        bathrooms: "",
        extraTask: "",
        specialRequest: "",
        condition: "",
        frequency: "",
        supplies: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: "",
      });
      setShowCalendly(true);
    } catch {
      toast.error("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="container max-w-4xl overflow-y-auto max-h-[95vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl my-2">
              Book Your Custom Cleaning Service
            </DialogTitle>
            <DialogDescription className="text-lg mb-4">
              Fill out the form below to confirm your service.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
              className="space-y-8"
            >
              {/* Service Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  control={form.control}
                  name="service"
                  label="Service Type"
                  placeholder="e.g., Deep Cleaning"
                />
                <DatePickerField
                  control={form.control}
                  name="date"
                  label="Preferred Date"
                />
                <InputField
                  control={form.control}
                  name="time"
                  label="Preferred Time"
                  placeholder="e.g., 10:00 AM"
                />
                <InputField
                  control={form.control}
                  name="duration"
                  label="Expected Duration"
                  placeholder="e.g., 3 hours"
                />
                <InputField
                  control={form.control}
                  name="property"
                  label="Property Type"
                  placeholder="e.g., Apartment"
                />
                <InputField
                  control={form.control}
                  name="bedrooms"
                  label="Bedrooms"
                  placeholder="e.g., 2"
                />
                <InputField
                  control={form.control}
                  name="bathrooms"
                  label="Bathrooms"
                  placeholder="e.g., 1"
                />
                <InputField
                  control={form.control}
                  name="frequency"
                  label="Frequency"
                  placeholder="e.g., Weekly"
                />
                <InputField
                  control={form.control}
                  name="condition"
                  label="Condition"
                  placeholder="e.g., Standard"
                />
                <InputField
                  control={form.control}
                  name="supplies"
                  label="Supplies"
                  placeholder="e.g., Client’s"
                />
                <InputField
                  control={form.control}
                  name="extraTask"
                  label="Extra Task (optional)"
                  placeholder="e.g., Ironing"
                />
                <InputField
                  control={form.control}
                  name="specialRequest"
                  label="Special Request (optional)"
                  placeholder="e.g., Pet-safe"
                />
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                />
                <InputField
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                />
                <InputField
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="john@example.com"
                />
                <InputField
                  control={form.control}
                  name="phone"
                  label="Phone"
                  placeholder="+44..."
                />
              </div>

              {/* Notes */}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="notes">Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        id="notes"
                        placeholder="Any special instructions..."
                        {...field}
                        className="resize-none min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Get a Quote"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      {/*Calendly Dialog */}
      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">
              Schedule a Consultation call if needed
            </DialogTitle>
            <DialogDescription>
              Click below to schedule your consultation call on Calendly in a
              new tab.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button
              onClick={() => {
                const calendlyWindow = window.open(calendlyUrl, "_blank");
                setTimeout(() => {
                  if (calendlyWindow) {
                    setShowCalendly(false);
                  } else {
                    toast.success(
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
                }, 1000);
              }}
              className="w-full cursor-pointer"
            >
              Schedule on Calendly
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
