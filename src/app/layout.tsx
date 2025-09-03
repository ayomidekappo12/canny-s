import type { Metadata } from "next";
import "./globals.css";
import App from "@/components/layout/app";
import { Sora, Inter } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

// Combined class name
const fontClass = `${inter.variable} ${sora.variable}`;

export const metadata: Metadata = {
  title: "Canny's Cleaning Services - cleaning service website",
  description:
    "We - Provide cleaning service.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Canny's Cleaning Services",
  url: "https://SynaraDev.com",
  logo: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
  description: "Canny's Cleaning Services Provide cleaning service.",
  sameAs: ["https://www.instagram.com/cannyscleaning"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@canny.co.uk",
    contactType: "customer support",
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
      <body
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
