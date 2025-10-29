import type { Metadata } from "next";
import "./globals.css";
import App from "@/components/layout/app";
import { Sora, Inter } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

// Combined font classes
const fontClass = `${inter.variable} ${sora.variable}`;

export const metadata: Metadata = {
  title:
    "Canny's Cleaning Services - 5★ Rated Cleaning Company Trusted by 1,000+ Happy Customers",
  description:
    "Canny's Cleaning Services provides professional and reliable cleaning for homes and offices across the UK. Rated 5 stars by over 1,000 happy customers — your trusted partner for spotless results.",
  openGraph: {
    title: "Canny's Cleaning Services - 5★ Rated by 1,000+ Satisfied Customers",
    description:
      "Rated 5 stars by over 1,000 satisfied clients — professional, affordable, and reliable cleaning for homes and offices in the UK.",
    url: "https://www.cannyscleaning.com",
    siteName: "Canny's Cleaning Services",
    locale: "en_UK",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
        alt: "Canny's Cleaning Services Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cannyscleaning.com",
  },
  keywords: [
    "cleaning services",
    "professional cleaners",
    "home cleaning",
    "office cleaning",
    "5 star cleaning",
    "UK cleaning company",
    "trusted cleaners",
    "Canny's Cleaning Services",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Canny's Cleaning Services",
  image:
    "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
  url: "https://www.cannyscleaning.com",
  logo: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
  description:
    "Rated 5 stars by over 1,000 happy customers — professional cleaning services for homes and offices across the UK.",
  sameAs: [
    "https://www.instagram.com/cannyscleaning",
    "https://www.facebook.com/share/1A9Uquyytg/?mibextid=wwXIfr",
  ],
  telephone: "+44 079 3088 7488",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@cannyscleaning.com",
    contactType: "customer support",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1000",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Adrien." },
      datePublished: "2025-08-12",
      reviewBody: `I really want to thank you and your team for the amazing job you did at the London venue. To be honest, usually when a company finishes their work, there is still some mess left behind, but this time you really did an outstanding job. I truly appreciate it.`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ike." },
      datePublished: "2025-09-01",
      reviewBody: `Thank you once again for the excellent service you provided. It was just as good as the last job you helped me with!!! Both the team and I are truly grateful for the quality of the cleaning and the way you kindly accommodated other trades who were still working on site at the same time. I am grateful!`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={fontClass}>
      <head>
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
