import type { Metadata } from "next";
import "./globals.css";
import App from "@/components/layout/app";
import { Sora, Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
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

// WebSite Schema — helps Google understand your entire site
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Canny's Cleaning Services",
  url: "https://www.cannyscleaning.com",
  description:
    "Professional cleaning company in the UK, trusted by over 1,000 happy customers. Book reliable cleaners for your home or office.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.cannyscleaning.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "Canny's Cleaning Services",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
    },
  },
};

// Organization Schema — provides detailed business info
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
      reviewBody: `I really want to thank you and your team for the amazing job you did at the London venue. Usually when a company finishes their work, there’s some mess left behind, but this time you really did an outstanding job.`,
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
      reviewBody: `Thank you once again for the excellent service you provided. It was just as good as the last job! I’m truly grateful for the quality of the cleaning and how you accommodated other trades still on site.`,
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K7GPQH3XTX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K7GPQH3XTX');
          `}
        </Script>

        {/* Structured Data */}
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
