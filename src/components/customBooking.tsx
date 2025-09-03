"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.date().refine((d) => d instanceof Date && !isNaN(d.getTime()), {
    message: "Please select a date",
  }),
  time: z.string().min(1, "Please select a time"),
  duration: z.string().min(1, "Please select duration"),
  property: z.string().min(1, "Please select property type"),
  bedrooms: z.string().min(1, "Please select number of bedrooms"),
  firstName: z
    .string()
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, {
      message: "Please enter a valid first name",
    }),
  lastName: z
    .string()
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, {
      message: "Please enter a valid last name",
    }),
  email: z.email({ message: "Invalid email format" }),
  phone: z
    .string()
    .trim()
    .transform((val) => val.replace(/\s|[-()]/g, ""))
    .refine((val) => /^(\+44\d{9,11}|07\d{10})$/.test(val), {
      message:
        "Enter a valid UK phone number (+44 followed by 9–11 digits or 07 followed by 10 digits)",
    }),
  address: z.string().min(5, "Please enter your full address"),
  postcode: z
    .string()
    .min(5, "Please enter a valid postcode")
    .max(8, "Please enter a valid postcode")
    .regex(
      /^(GIR\s?0AA|(?:(?:AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)\d{1,2}[A-Z]?\s?\d[A-Z]{2}))$/i,
      "Please enter a valid UK postcode"
    ),
  notes: z.string().regex(/^[a-zA-Z0-9 ,.'"\-!@#$%^&*()_+=:;?]{10,500}$/, {
    message: "Please enter a well-formatted about text",
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

type BookingFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

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
      notes: "",
    },
  });

  const onSubmit = async (_data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 2000));
      toast.success(
        <div>
          <span className="text-[var(--professional-navy)] font-bold">
            Booking Confirmed!
          </span>
          <div className="text-[var(--professional-navy)]">
            We&apos;ll review your details and get back to you shortly. Please
            schedule a call below if needed.
          </div>
        </div>
      );
      form.reset();
      setShowCalendly(true); // open Calendly dialog
    } catch (err) {
      toast.error(
        <div>
          <span className="text-[var(--professional-navy)] font-bold">
            Submission failed!
          </span>
          <div className="text-[var(--professional-navy)]">
            Please try again later.
          </div>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="container max-w-4xl overflow-y-auto max-h-[95vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl my-2">
              Book Your Custom Cleaning Service
            </DialogTitle>
            <DialogDescription className="text-lg mb-4">
              Fill the form below to confirm your service.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Type</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12"
                          placeholder="e.g. Deep Cleaning"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "pl-3 text-left font-normal h-12",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? format(field.value, "PPP")
                                : "Pick a date"}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="p-0">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Time</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12"
                          placeholder="e.g., 10:00 AM"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Duration</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12"
                          placeholder="e.g., 3 hours"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="property"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Type</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12"
                          placeholder="e.g., Apartment"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Bedrooms</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12"
                          placeholder="e.g., 2 bedrooms"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* CONTACT INFO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input className="h-12" placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input className="h-12" placeholder="Doe" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12"
                          placeholder="+44..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* ADDRESS */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Street, City, Postcode"
                        {...field}
                        className="resize-none min-h-[80px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postcode</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder="SW1A 1AA"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none min-h-[100px]"
                        placeholder="Any special instructions..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SUBMIT */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking"}
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
    </div>
  );
}
