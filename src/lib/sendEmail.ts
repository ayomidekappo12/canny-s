import emailjs from "@emailjs/browser";
import type { BookingFormData } from "@/components/hooks/bookingSchema";

export async function sendEmail(data: BookingFormData, formType: string) {
  try {
    return await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUOTE!,
      {
        firstName: data.firstName?.trim() || "N/A",
        lastName: data.lastName?.trim() || "N/A",
        email: data.email?.trim() || "N/A",
        phone: data.phone?.trim() || "N/A",
        service: data.service || "N/A",
        date: data.date
          ? new Date(data.date).toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "N/A",
        time: data.time || "N/A",
        duration: data.duration || "N/A",
        property: data.property || "N/A",
        bedrooms: data.bedrooms || "N/A",
        bathrooms: data.bathrooms || "N/A",
        extraTask: data.extraTask || "None",
        specialRequest: data.specialRequest || "None",
        notes: data.notes || "None",
        condition: data.condition || "N/A",
        frequency: data.frequency || "N/A",
        supplies: data.supplies || "N/A",
        formType,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error("EmailJS send failed:", error);
    throw error; // Re-throw to be caught in your form component
  }
}

