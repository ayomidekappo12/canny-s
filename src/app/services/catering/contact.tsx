"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";

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
    .refine((val) => val === "" || /^(\+44\d{9,11}|07\d{10})$/.test(val), {
      message:
        "Enter a valid UK phone number (+44 followed by 9–11 digits or 07 followed by 10 digits)",
    }),
  event: z.string().min(1, "Please select an event type"),
  date: z.string().min(1, "Please provide a date"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be under 500 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      event: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Quote Request Sent!");
    toast("We'll get back to you within 24 hours with a personalized quote.", {
      description: "Details here...",
    });

    reset();
  };

  return (
    <section id="contact" className="py-20 bg-[#FCFAF8]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0d0d] mb-6">
            Let's Plan Your Event
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring authentic Nigerian flavors to your celebration? Get
            in touch with us for a personalized quote and let's make your event
            unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-[var(--shadow-elegant)] border-[#ebe6e0]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0d0d0d]">
                Get Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      {...register("name")}
                      className="border-border focus-visible:ring-0 focus-visible:ring-[#eeac00]/50"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      {...register("email")}
                      className="border-border focus-visible:ring-0 focus-visible:ring-[#eeac00]/50"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Event */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      {...register("phone")}
                      className="border-border focus-visible:ring-0 focus-visible:ring-[#eeac00]/50"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Event Type *
                    </label>
                    <Controller
                      name="event"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full px-3 py-2 border border-border rounded-md focus-visible:ring-0 focus-visible:ring-[#eeac00]/50 bg-background"
                        >
                          <option value="">Select Event Type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="other">Other</option>
                        </select>
                      )}
                    />
                    {errors.event && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.event.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Date *
                  </label>
                  <Input
                    type="date"
                    {...register("date")}
                    className="border-border focus-visible:ring-0 focus-visible:ring-[#eeac00]/50"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Details *
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Tell us about your event, number of guests, special requirements, etc."
                    className="border-border focus-visible:ring-0 focus-visible:ring-[#eeac00]/50 min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#eeac00] hover:bg-[#C9811D] text-lg text-white py-6 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Request Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-[var(--shadow-elegant)] border-[#ebe6e0]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0d0d0d]">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#eeac00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#eeac00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0d0d0d]">Address</h3>
                    <p className="text-muted-foreground">
                      Serving across the UK
                      <br />
                      London, Birmingham, Manchester & More
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#eeac00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#eeac00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0d0d0d]">Phone</h3>
                    <p className="text-muted-foreground">+44 020 7946 0958</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#eeac00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#eeac00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0d0d0d]">Email</h3>
                    <p className="text-muted-foreground">
                      info@cannyscatering.co.uk
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-elegant)] border-[#ebe6e0]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0d0d0d]">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#eeac00]/10 rounded-full flex items-center justify-center hover:bg-[#eeac00] hover:text-[#0d0d0d] transition-colors duration-300"
                  >
                    <SiFacebook className="w-6 h-6 text-inherit" />
                  </a>
                  <a
                    href="https://www.instagram.com/cannys.catering"
                    className="w-12 h-12 bg-[#eeac00]/10 rounded-full flex items-center justify-center hover:bg-[#eeac00] hover:text-[#0d0d0d] transition-colors duration-300"
                  >
                    <SiInstagram className="w-6 h-6 text-inherit" />
                  </a>
                  <a
                    href="mailto:info@cannyscatering.co.uk"
                    className="w-12 h-12 bg-[#eeac00]/10 rounded-full flex items-center justify-center hover:bg-[#eeac00] hover:text-[#0d0d0d] transition-colors duration-300"
                  >
                    <MessageCircle className="w-6 h-6 text-inherit" />
                  </a>
                </div>
                <p className="text-muted-foreground mt-4">
                  Stay connected with us for the latest updates, menu
                  highlights, and special offers!
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-[#eeac00] to-[#F4BD71] text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">24/7 Event Support</h3>
              <p className="text-white">
                We're here to help make your event perfect. Contact us anytime
                for emergency catering needs or last-minute bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
