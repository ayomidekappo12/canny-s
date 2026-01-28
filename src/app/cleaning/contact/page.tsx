"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";

interface HoneypotForm extends HTMLFormElement {
  _honeypot?: HTMLInputElement;
}

// Validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, {
      message: "Please enter a valid name",
    }),
  email: z.email({ message: "Invalid email format" }),
  phone: z
    .string()
    .trim()
    .transform((val) => val.replace(/\s|[-()]/g, ""))
    .refine((val) => /^(\+44\d{9,11}|07\d{11})$/.test(val), {
      message:
        "Enter a valid UK phone number (+44 followed by 9-11 digits or 07 followed by 9-11 digits)",
    }),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be under 500 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      const phoneNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447930887488";

      // Build message text
      const message = `
New Cleaning Inquiry 👋

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message}
`;

      // Detect device
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      // Encode message properly
      const encodedMessage = encodeURIComponent(message.trim());

      // Correctly form WhatsApp URL for mobile vs desktop
      const whatsappURL = isMobile
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        : `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

      // Show success toast
      toast.success(
        <div aria-live="polite">
          <span className="text-[var(--professional-navy)] font-bold">
            Redirecting to WhatsApp...
          </span>
          <div className="text-[var(--professional-navy)]">
            Please wait while we open your chat.
          </div>
        </div>
      );

      // Wait a bit for UX smoothness
      setTimeout(() => {
        const newTab = window.open(whatsappURL, "_blank");
        if (!newTab) {
          toast.error("Please allow popups to continue to WhatsApp.");
        }
        reset({ name: "", email: "", phone: "", service: "", message: "" });
      }, 1000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-x-hidden">
      <div className="container flex h-full grow flex-col">
        <main className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="w-full max-w-[960px]">
            <section className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#1E293B] text-3xl md:text-4xl font-bold leading-tight">
                  Get in Touch
                </h1>
                <p className="text-[#637c88] text-base leading-normal">
                  We&apos;re here to help with your cleaning needs. Fill out the
                  form below — we’ll message you directly on WhatsApp.
                </p>
              </div>
            </section>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HoneypotForm;
                if (form._honeypot?.value) return;
                void handleSubmit(onSubmit)(e);
              }}
              className="space-y-2 w-auto"
            >
              {/* Name */}
              <div className="px-4 py-3">
                <Label htmlFor="name" className="py-2 px-1">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="bg-[#f0f3f4] h-14"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="px-4 py-3">
                <Label htmlFor="email" className="py-2 px-1">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#f0f3f4] h-14"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="px-4 py-3">
                <Label htmlFor="phone" className="py-2 px-1">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+44 770 0900 1233"
                  className="bg-[#f0f3f4] h-14"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service */}
              <div className="px-4 py-3">
                <Label htmlFor="service" className="py-2 px-1">
                  Service of Interest
                </Label>
                <Controller
                  name="service"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="bg-[#f0f3f4] w-full h-14">
                        <SelectValue placeholder="Select a Service" />
                      </SelectTrigger>
                      <SelectContent className="border-accent/20">
                        <SelectItem value="end-of-tenancy">
                          End-of-tenancy Cleaning
                        </SelectItem>
                        <SelectItem value="Deep Cleaning">
                          Deep Cleaning
                        </SelectItem>
                        <SelectItem value="Move-in/Move-out">
                          Move-in/Move-out
                        </SelectItem>
                        <SelectItem value="after-builder">
                          After-builder Cleaning
                        </SelectItem>
                        <SelectItem value="Domestic Cleaning">
                          Domestic Cleaning
                        </SelectItem>
                        <SelectItem value="Commercial Cleaning">
                          Commercial Cleaning
                        </SelectItem>
                        <SelectItem value="AirBnB Cleaning">
                          AirBnB Cleaning
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="px-4 py-3">
                <Label htmlFor="message" className="py-2 px-1">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="bg-[#f0f3f4] min-h-[120px]"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Honeypot Field */}
              <input
                type="text"
                name="_honeypot"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Submit */}
              <div className="flex px-4 py-3 justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                  className="bg-primary text-white rounded-lg px-4 h-10 text-sm font-bold cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message on WhatsApp"}
                </Button>
              </div>
            </form>

            <section className="px-4 pt-5">
              <h2 className="text-[#1E293B] text-[20px] md:text-[22px] font-bold">
                Or Contact Us Directly
              </h2>
              <p className="text-base pt-1">Phone: +44 7930 887488</p>
              <p className="text-base pt-1">Email: info@cannyscleaning.com</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
