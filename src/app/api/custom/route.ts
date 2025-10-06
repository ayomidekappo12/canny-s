import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

// Match your frontend schema exactly, with safe coercion for date
const bookingSchema = z.object({
  service: z.string(),
  date: z.coerce.date(),
  time: z.string(),
  duration: z.string(),
  property: z.string(),
  bedrooms: z.string(),
  bathrooms: z.string(),
  frequency: z.string(),
  condition: z.string(),
  supplies: z.string(),
  extraTask: z.string().optional(),
  specialRequest: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.email({ message: "Invalid email format" }),
  phone: z.string(),
  notes: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate incoming data
    const data = bookingSchema.parse(body);

    // 🗓 Format date cleanly, e.g., "Saturday, Oct 4, 2025"
    const formattedDate = data.date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Email content
    const html = `
      <h2>🧾 New Cleaning Custom-Quote Request</h2>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Date:</strong> ${formattedDate}</p>
      <p><strong>Time:</strong> ${data.time}</p>
      <p><strong>Duration:</strong> ${data.duration}</p>
      <p><strong>Property:</strong> ${data.property}</p>
      <p><strong>Bedrooms:</strong> ${data.bedrooms}</p>
      <p><strong>Bathrooms:</strong> ${data.bathrooms}</p>
      <p><strong>Frequency:</strong> ${data.frequency}</p>
      <p><strong>Condition:</strong> ${data.condition}</p>
      <p><strong>Supplies:</strong> ${data.supplies}</p>
      ${
        data.extraTask
          ? `<p><strong>Extra Task:</strong> ${data.extraTask}</p>`
          : ""
      }
      ${
        data.specialRequest
          ? `<p><strong>Special Request:</strong> ${data.specialRequest}</p>`
          : ""
      }
      <hr />
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Notes:</strong> ${data.notes}</p>
    `;

    // Configure Nodemailer (use your email service or SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "SendGrid" / "Outlook"
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Clean London" <${process.env.EMAIL_USER}>`,
      to: process.env.BOOKING_RECEIVER_EMAIL ?? process.env.EMAIL_USER!,
      subject: `🧾 New Cleaning Booking from ${data.firstName} ${data.lastName}`,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Booking API error:", error);

    if (error instanceof z.ZodError) {
      const messages = error.issues.map((issue) => issue.message);
      return NextResponse.json(
        { success: false, message: "Invalid form data", errors: messages },
        { status: 400 }
      );
    }


    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
