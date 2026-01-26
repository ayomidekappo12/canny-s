"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LegalDialogType = "terms" | "privacy";

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: LegalDialogType;
}

interface LegalSection {
  title: string;
  content?: React.ReactNode;
  list?: string[];
}

export default function LegalDialog({
  open,
  onOpenChange,
  type,
}: LegalDialogProps) {
  const isTerms = type === "terms";

  const sections: LegalSection[] = isTerms
    ? [
        {
          title: "1. Introduction",
          content:
            "These Terms govern your use of the Canny's Cleaning website and services. By using our site or booking our services, you agree to comply with these Terms and all applicable laws and regulations.",
        },
        {
          title: "2. Services",
          content:
            "Canny's Cleaning provides residential and commercial cleaning services across London and Kent. Service availability may vary by location and is subject to scheduling and staff availability.",
        },
        {
          title: "3. Booking and Payment",
          list: [
            "All bookings must be made through our website or customer service line.",
            "Payment is due at the time of booking unless otherwise agreed.",
            "Payments are to be made by bank transfer.",
            "Cancellations must be made at least 24 hours in advance to avoid charges.",
          ],
        },
        {
          title: "4. Customer Responsibilities",
          list: [
            "Ensure access to the property at the scheduled time.",
            "Remove valuable or fragile items from cleaning areas.",
            "Notify us of any special cleaning requirements or hazards.",
          ],
        },
        {
          title: "5. Liability and Insurance",
          list: [
            "Canny's Cleaning is insured for public liability and employee coverage.",
            "We are not liable for pre-existing damage or wear and tear.",
            "Any claims for damage must be reported within 24 hours of service completion.",
          ],
        },
        {
          title: "6. Intellectual Property",
          content:
            "All content on this website, including text, graphics, logos, and images, is the property of Canny's Cleaning or its licensors and is protected by UK copyright laws.",
        },
        {
          title: "7. Privacy Policy",
          content: (
            <>
              Your privacy is important to us. Please refer to our
              <a
                href="/termsPolicy/privacy-policy"
                className="text-primary hover:underline font-medium px-1"
              >
                Privacy Policy
              </a>
              for details on how we collect, use, and protect your personal
              information.
            </>
          ),
        },
        {
          title: "8. Termination",
          content:
            "We reserve the right to terminate or suspend access to our services at any time, without notice, for conduct that violates these Terms or is harmful to other users or our business.",
        },
        {
          title: "9. Changes to Terms",
          content:
            "We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the new Terms.",
        },
        {
          title: "10. Governing Law",
          content:
            "These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
        },
        {
          title: "11. Contact Us",
          content: (
            <>
              If you have any questions about these Terms, please contact us at:
              <div className="mt-3 text-base leading-6">
                <strong className="text-primary">
                  Canny&apos;s Cleaning Service
                </strong>
                <br />
                Email:
                <a
                  href="mailto:info@cannyscleaning.com"
                  className="text-primary hover:underline px-1"
                >
                  <strong>info@cannyscleaning.com</strong>
                </a>
                <br />
                Address:{" "}
                <strong className="text-primary">
                  167 - 169 Great Portland Street, 5th Floor, London, W1W 5PF,
                  UK.
                </strong>
                <br />
                Phone:{" "}
                <strong className="text-[#1E293B]">+44 79 3088 7488</strong>
              </div>
            </>
          ),
        },
      ]
    : [
        {
          title: "1. Information We Collect",
          list: [
            "Contact Information: Name, email address, phone number, and address.",
            "Booking Details: Service preferences, property access instructions, and appointment history.",
            "Payment Information: Billing details (processed securely via third-party payment providers).",
            "Technical Data: IP address, browser type, device information, and usage data via cookies.",
          ],
        },
        {
          title: "2. How We Use Your Information",
          list: [
            "Provide and manage our cleaning services.",
            "Process payments and send invoices.",
            "Communicate with you regarding bookings, updates, and promotions.",
            "Improve our website and customer experience.",
            "Comply with legal obligations.",
          ],
        },
        {
          title: "3. Legal Basis for Processing",
          list: [
            "Consent: When you opt-in to marketing communications.",
            "Contract: To fulfil our service agreement with you.",
            "Legal Obligation: For tax, accounting, and regulatory compliance.",
            "Legitimate Interests: To improve services and prevent fraud.",
          ],
        },
        {
          title: "4. Sharing Your Information",
          list: [
            "Service providers (e.g., payment processors, IT support).",
            "Legal authorities when required by law.",
            "Business partners with your consent.",
          ],
        },
        {
          title: "5. Data Retention",
          content:
            "We retain your data only as long as necessary for the purposes outlined in this policy or as required by law.",
        },
        {
          title: "6. Your Rights",
          list: [
            "Access your personal data.",
            "Request correction or deletion.",
            "Object to or restrict processing.",
            "Withdraw consent at any time.",
            "Lodge a complaint with the Information Commissioner’s Office (ICO).",
          ],
        },
        {
          title: "7. Cookies",
          content: (
            <>
              Our website uses cookies to enhance user experience. You can
              manage cookie preferences through your browser settings. For more
              details, see our
              <a
                href="/termsPolicy/cookie-policy"
                className="text-primary hover:underline font-medium px-1"
              >
                Cookie Policy
              </a>
              .
            </>
          ),
        },
        {
          title: "8. Data Security",
          content:
            "We implement appropriate technical and organisational measures to protect your data from unauthorised access, alteration, or loss.",
        },
        {
          title: "9. Third-Party Links",
          content:
            "Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their policies before providing personal data.",
        },
        {
          title: "10. Changes to This Policy",
          content:
            "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
        },
        {
          title: "11. Contact Us",
          content: (
            <>
              If you have questions or concerns about this Privacy Policy,
              please contact us at:
              <div className="mt-3 text-base leading-6">
                <strong className="text-primary">
                  Canny&apos;s Cleaning
                </strong>
                <br />
                Email:
                <a
                  href="mailto:info@cannyscleaning.com"
                  className="text-primary hover:underline px-1"
                >
                  <strong>info@cannyscleaning.com</strong>
                </a>
                <br />
                Address:{" "}
                <strong className="text-primary">
                  167 - 169 Great Portland Street, 5th Floor, London, W1W 5PF,
                  UK.
                </strong>
                <br />
                Phone:{" "}
                <strong className="text-[#1E293B]">+44 79 3088 7488</strong>
              </div>
            </>
          ),
        },
      ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl bg-gradient-to-b from-white to-gray-50 border border-gray-200 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100">
        {/* Header */}
        <DialogHeader className="space-y-2 text-center">
          <DialogTitle className="text-3xl font-bold text-primary">
            {isTerms ? "Terms of Service" : "Privacy Policy"}
          </DialogTitle>
          <p className="text-sm text-gray-500">
            Effective Date: <span className="font-medium">23 October 2025</span>
          </p>
        </DialogHeader>

        {/* Body */}
        <section className="space-y-8 text-gray-700 leading-relaxed px-1 md:px-3">
          {isTerms ? (
            <p className="text-base">
              Welcome to
              <strong className="text-primary px-1">
                Canny&apos;s Cleaning.
              </strong>
              By accessing or using our website and services, you agree to be
              bound by the following Terms of Service. Please read them
              carefully.
            </p>
          ) : (
            <p className="text-base">
              <strong className="text-primary px-1">
                Canny&apos;s Cleaning
              </strong>
              (&ldquo;we&ldquo;, &ldquo;our&ldquo;, &ldquo;us&ldquo;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>
          )}

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg md:text-xl font-semibold text-primary mb-2 border-l-4 border-blue-400 pl-3">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-sm md:text-base">{section.content}</p>
              )}
              {section.list && (
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 ml-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </DialogContent>
    </Dialog>
  );
}
