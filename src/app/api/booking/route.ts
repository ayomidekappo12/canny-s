import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Define the shape of your booking data (type-safe)
const BookingFormSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z
    .union([z.coerce.date(), z.null(), z.literal("")])
    .optional()
    .nullable(),
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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request against schema
    const data = BookingFormSchema.parse(body);

    const {
      service,
      date,
      time,
      duration,
      property,
      bedrooms,
      bathrooms,
      firstName,
      lastName,
      email,
      phone,
      extraTask,
      specialRequest,
      notes,
      condition,
      frequency,
      supplies,
    } = data;

    // Format date safely (en-GB for UK)
    const formattedDate =
      date instanceof Date && !isNaN(date.getTime())
        ? date.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : "N/A";

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose the email
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      replyTo: email, // so you can reply directly to client
      to: process.env.CONTACT_RECEIVER,
      subject: `🧹 New Booking Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Cleaning Booking Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${time || "N/A"}</p>
        <p><strong>Duration:</strong> ${duration || "N/A"}</p>
        <p><strong>Frequency:</strong> ${frequency || "N/A"}</p>
        <p><strong>Property:</strong> ${property || "N/A"}</p>
        <p><strong>Bedrooms:</strong> ${bedrooms || "N/A"}</p>
        <p><strong>Bathrooms:</strong> ${bathrooms || "N/A"}</p>
        <p><strong>Condition:</strong> ${condition || "N/A"}</p>
        <p><strong>Supplies:</strong> ${supplies || "N/A"}</p>
        <hr />
        <p><strong>Extra Task(s):</strong> ${extraTask || "None"}</p>
        <p><strong>Special Request(s):</strong> ${specialRequest || "None"}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Booking email sent!" });
  } catch (error) {
    console.error("❌ Booking email failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send booking email" },
      { status: 500 }
    );
  }
}
