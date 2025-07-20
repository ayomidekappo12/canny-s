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
  DialogTrigger,
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
import { useToast } from "@/components/hooks/use-toast";

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
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]{1,50}(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]{1,50})*$/, {
        message: "Please enter a valid first name",
      }),
    lastName: z
      .string()
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]{1,50}(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]{1,50})*$/, {
        message: "Please enter a valid last name",
      }),
    email: z
      .email({ message: "Invalid email format" })
      .regex(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, {
        message: "Invalid email format",
      }),
    phone: z.string().regex(/^\+44\d{12}$/, {
      message: "Please enter a valid phone number",
    }),
    address: z.string().min(5, "Please enter your full address"),
    postcode: z.string().min(5, "Please enter a valid postcode"),
    notes: z.string().regex(/^[a-zA-Z0-9 ,.'"\-!@#$%^&*()_+=:;?]{10,500}$/, {
      message: "Please enter a well-formatted about text",
    }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

type BookingFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function BookingFormDialog({ open, onOpenChange }: BookingFormDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      notes: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 2000));
      toast({
        title: "Booking Confirmed!",
        description: "We’ll contact you shortly to confirm details.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="max-w-4xl overflow-y-auto max-h-[95vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl my-2">
            Book Your custom Cleaning service
          </DialogTitle>
          <DialogDescription className="text-lg mb-4">
            Fill the form below to confirm your service.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* SERVICE INFO */}
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
                      <Input className="h-12" placeholder="+44..." {...field} />
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
                    <Input className="h-12" placeholder="SW1A 1AA" {...field} />
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
  );
}
