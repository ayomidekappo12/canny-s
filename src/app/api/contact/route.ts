import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const { name, email, phone, service, message } = body;

    // Validate basic required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true, // Gmail requires SSL (port 465)
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    // Send the email (hybrid + replyTo)
    await transporter.sendMail({
      from: `"Clean London Contact Form" <${process.env.SMTP_USER}>`,
      replyTo: email, // ensures replies go to the sender’s address
      to: process.env.CONTACT_RECEIVER,
      subject: `📩 New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log(`✅ Email successfully sent from ${email}`);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("❌ Error sending email:", error);

    const message =
      error instanceof Error ? error.message : "Unknown server error";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
