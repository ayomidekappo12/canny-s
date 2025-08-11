"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, Utensils } from "lucide-react";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";

const consultationSchema = z.object({
  name: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, {
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
  serviceType: z
    .enum(["cleaning", "catering", "both"])
    .or(z.literal(""))
    .refine((val) => val !== "", { message: "Please select a service type" }),
  projectDetails: z
    .string()
    .min(10, { message: "Please provide more details" })
    .max(500, { message: "Details are too long" }),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export default function Booking() {
  const [showCalendly, setShowCalendly] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const calendlyUrl =
    "https://calendly.com/eventstaffingsolutions/30min?back_to=https://yourdomain.com/booking?booking=success";

  // Show success toast via Sonner after returning from Calendly
  useEffect(() => {
    if (searchParams.get("booking") === "success") {
      toast.success("Booking Confirmed", {
        description: "You have successfully scheduled your consultation.",
      });
      router.replace("/booking");
    }
  }, [searchParams, router]);

  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      projectDetails: "",
      budget: "",
      timeline: "",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      console.log("Consultation request:", data);

      toast.success(
        <div>
          <span className="text-[var(--professional-navy)] font-bold">
            Consultation Request Submitted!
          </span>
          <div className="text-[var(--professional-navy)]">
            We'll review your details and get back to you shortly. Please
            schedule a call below.
          </div>
        </div>
      );


      setShowCalendly(true); // Open dialog with Calendly button
      form.reset();
    } catch {
      toast.error("Something went wrong.", {
        description: "Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-10 text-[var(--professional-navy)]">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your{" "}
            <span className="text-[var(--trust-blue)]">Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your cleaning or catering needs, and let&apos;s
            schedule a call to discuss how we can help bring your vision to
            life.
          </p>
        </div>

        <BookingForm form={form} onSubmit={onSubmit} />

        {/* ✅ Dialog now just has a button to open Calendly in a new tab */}
        <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center text-2xl gap-3 text-[var(--success-green)] mb-2">
                <Calendar className="text-[var(--success-green)]" size={24} />
                Schedule Your Consultation
              </DialogTitle>
              <DialogDescription>
                Click the button below to schedule your consultation on Calendly
                in a new tab.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Button
                onClick={() => {
                  const calendlyWindow = window.open(calendlyUrl, "_blank");

                  // ✅ Close dialog *after* allowing new tab to open
                  setTimeout(() => {
                    if (calendlyWindow) {
                      setShowCalendly(false);
                    } else {
                      toast.error("Popup blocked", {
                        description:
                          "Please allow popups for this site to schedule your consultation.",
                      });
                    }
                  }, 50); // short delay to prevent DOM race conditions
                }}
                className="w-full cursor-pointer"
              >
                Schedule on Calendly
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

// Extracted Form Component
function BookingForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<ConsultationFormData>>;
  onSubmit: (data: ConsultationFormData) => void;
}) {
  return (
    <Card className="shadow-medium border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Users className="text-[var(--trust-blue)]" size={24} />
          Tell Us About Your Request
        </CardTitle>
        <CardDescription>
          Share your requirements and we&apos;ll prepare for our consultation
          call
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+44XXXXXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Utensils className="text-[var(--trust-blue)]" size={18} />
                    Service Type
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select the service you need" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border-accent/20">
                      <SelectItem value="cleaning">
                        Cleaning Services
                      </SelectItem>
                      <SelectItem value="catering">
                        Catering Services
                      </SelectItem>
                      <SelectItem value="both">
                        Both Cleaning & Catering
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your specific needs..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., £500–1000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timeline (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="When do you need this service?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[var(--trust-blue)] cursor-pointer"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting
                ? "Submitting..."
                : "Submit & Schedule Call"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
