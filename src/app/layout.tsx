import type { Metadata } from "next";
import "./globals.css";
import App from "@/components/layout/app";
import { Sora, Inter } from "next/font/google";
import Script from "next/script";

// Font setup
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const fontClass = `${inter.variable} ${sora.variable}`;

export const revalidate = 3600; // Re-generate every hour

export const metadata: Metadata = {
  title:
    "Cannys Cleaning Services - 5★ Rated Cleaning Company Trusted by 1,000+ Happy Customers",
  description:
    "Cannys Cleaning Services provides professional and reliable cleaning for homes and offices across the UK. Rated 5 stars by over 1,000 happy customers — your trusted partner for spotless results.",

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

  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: "Cannys Cleaning Services - 5★ Rated by 1,000+ Satisfied Customers",
    description:
      "Rated 5 stars by over 1,000 satisfied clients — professional, affordable, and reliable cleaning for homes and offices in the UK.",
    url: "https://www.cannyscleaning.com",
    siteName: "Cannys Cleaning Services",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
        alt: "Cannys Cleaning Services Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cannys Cleaning Services - 5★ Rated Cleaning Company",
    description:
      "Professional, affordable, and reliable cleaning for homes and offices across the UK. Trusted by over 1,000 happy clients.",
    images: [
      "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
    ],
    creator: "@cannyscleaning",
  },

  /*
   Search engine verification tags
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
    yandex: "YANDEX_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "BING_VERIFICATION_CODE", // Bing
      "yahoo-site-verification": "YAHOO_VERIFICATION_CODE", // Yahoo
    },
  },
  */

  // Robots (search crawler rules)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Theme + PWA manifest
  themeColor: "#ffffff",
  manifest: "/manifest.json",
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cannys Cleaning Services",
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
    name: "Cannys Cleaning Services",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
    },
  },
};


// Organization Schema (with reviews & rating)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Cannys Cleaning Services",
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
      author: { "@type": "Person", name: "Adrien" },
      datePublished: "2025-08-12",
      reviewBody:
        "I really want to thank you and your team for the amazing job you did at the London venue. You really did an outstanding job.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ike" },
      datePublished: "2025-09-01",
      reviewBody:
        "Thank you again for the excellent service. It was just as good as the last job! The cleaning quality was outstanding.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  ],
  address: { "@type": "PostalAddress", addressCountry: "GB" },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={fontClass}>
      <head>
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />

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

        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
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
