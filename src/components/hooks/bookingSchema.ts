// bookingSchema.ts
import * as z from "zod";

/**
 * Booking schema: unchanged validation rules from your original file.
 * Kept phone validation as you specified (UK-focused).
 */
export const BookingFormSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.date().nullable().optional(),
  time: z.string().min(1, "Please select a time"),
  duration: z.string().min(1, "Please select duration"),
  property: z.string().min(1, "Please select property type"),
  bedrooms: z.string().min(1, "Please select number of bedrooms"),
  bathrooms: z.string().min(1, "Please select number of bathrooms"),
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
  email: z.email({ message: "Invalid email format" }),
  phone: z
    .string()
    .trim()
    .transform((val) => val.replace(/\s|[-()]/g, ""))
    .refine((val) => /^(\+44\d{9,11}|07\d{11})$/.test(val), {
      message:
        "Enter a valid UK phone number (+44 followed by 9–11 digits or 07 followed by 11 digits)",
    }),
  extraTask: z.string().optional(),
  specialRequest: z.string().optional(),
  notes: z.string().max(500).optional(),
  condition: z.string().min(1, "Please select a condition type"),
  frequency: z.string().min(1, "Please select your desired frequency"),
  supplies: z.string().min(1, "Please select your cleaning supplies option"),
});

export type BookingFormData = z.infer<typeof BookingFormSchema>;
