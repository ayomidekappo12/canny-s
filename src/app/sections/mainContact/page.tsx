"use client";

import React from "react";
import { useForm } from "react-hook-form";
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
import * as z from "zod";

// 1. Define schema
const formSchema = z.object({
  name: z
    .string()
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]{1,50}(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]{1,50})*$/, {
      message: "Please enter a valid name",
    }),
  email: z.email({ message: "Invalid email format" }),
  phone: z
    .string()
    .trim()
    .transform((val) => val.replace(/\s|[-()]/g, "")) // remove spaces, dashes, parentheses
    .refine((val) => /^(\+44\d{9,10}|07\d{9})$/.test(val), {
      message: "Enter a valid UK phone number (+44xxxxxxxxxx or 07xxxxxxxxx)",
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
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    // simulate async action
    await new Promise((r) => setTimeout(r, 1000));
    alert("Message sent successfully!");
     reset();
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
                  We&apos;re here to help with your cleaning needs. Reach out to
                  us for inquiries, bookings, or any questions you may have.
                </p>
              </div>
            </section>

            <form
              onSubmit={handleSubmit(onSubmit)}
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
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1E293B] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
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
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1E293B] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
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
                  Phone Number{" "}
                </Label>
                <Input
                  id="phone"
                  placeholder="+44 020 7946 0958"
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1E293B] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service Select */}
              <div className="px-4 py-3">
                <Label htmlFor="service" className="py-2 px-1">
                  Service of Interest
                </Label>
                <Select
                  onValueChange={(value) =>
                    setValue("service", value, { shouldValidate: true })
                  }
                >
                  <SelectTrigger className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#637c88] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent className="border-accent/20">
                    <SelectItem value="cleaning">Cannys Cleaning</SelectItem>
                    <SelectItem value="deep">Cannys Catering</SelectItem>
                  </SelectContent>
                </Select>
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
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1E293B] focus:outline-0 focus:ring-0 border-none bg-muted focus:border-none placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex px-4 py-3 justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white rounded-lg px-4 h-10 text-sm font-bold cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>

            <section className="px-4 pt-5">
              <h2 className="text-[#1E293B] text-[20px] md:text-[22px] font-bold leading-tight">
                Or Contact Us Directly
              </h2>
              <p className="text-base pt-2">Phone: +44 020 7946 0958</p>
              <p className="text-base pt-1">Email: info@cannys.com</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}