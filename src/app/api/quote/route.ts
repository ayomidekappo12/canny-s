import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Define type-safe Zod schema to validate incoming form data
const QuoteFormSchema = z.object({
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
    // Parse and validate request data
    const body = await request.json();
    const data = QuoteFormSchema.parse(body);

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

    // Set up Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Construct email content
    const htmlContent = `
      <h2>🧾 New Quote Request from ${firstName} ${lastName}</h2>
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
      <p><strong>Extra Tasks:</strong> ${extraTask || "None"}</p>
      <p><strong>Special Requests:</strong> ${specialRequest || "None"}</p>
      <p><strong>Notes:</strong> ${notes || "None"}</p>
    `;

    // Send email using Gmail SMTP
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      replyTo: email, // ensures replies go directly to the customer
      to: process.env.CONTACT_RECEIVER,
      subject: `💬 New Quote Request from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending quote email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data",
          issues: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to send quote email" },
      { status: 500 }
    );
  }
}
