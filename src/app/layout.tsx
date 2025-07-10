import type { Metadata } from "next";
import "./globals.css";
import App from "@/components/layouts/app";
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
  logo: "https://SynaraDev.com/images/logo.svg",
  description: "Canny's Cleaning Services Provide cleaning service.",
  sameAs: [
    "https://x.com/synaradev",
    "https://www.linkedin.com/company/synaradev/",
    "https://www.instagram.com/synaradev/",
    "http://www.tiktok.com/@synaradev",
    "https://www.youtube.com/@SynaraDev",
    "https://web.facebook.com/SynaraDev/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "synara.dev@gmail.com",
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
