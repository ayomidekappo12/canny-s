"use client";

import Link from "next/link";
import * as React from "react";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import Image from "next/image";

// Lazy-load the LegalDialog for performance
const LegalDialog = React.lazy(() => import("@/components/LegalDialog"));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // One state instead of two — simpler and cleaner
  const [legalType, setLegalType] = React.useState<"privacy" | "terms" | null>(
    null
  );

  const cleaningServices = [
    "Domestic Cleaning",
    "Deep Cleaning",
    "End of Tenancy",
    "AirBnB Cleaning",
    "Commercial Cleaning",
    "After-builders Cleaning",
  ];

  return (
    <footer className="text-white bg-[#1E293B]">
      <div className="mx-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 max-w-7xl mx-auto w-full">
          {/* Company Info - Takes more width on large screens */}
          <div className="space-y-4 lg:pr-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero">
                <Image
                  src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg"
                  alt="Canny's Cleaning Logo"
                  width={48}
                  height={48}
                  className="brightness-110 contrast-125"
                  quality={90}
                  priority
                />
              </div>
              <span className="font-bold text-xl whitespace-nowrap">
                Canny&apos;s Cleaning
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Professional cleaning services across London and Kent.
              <br/>
              Trusted by our satisfied customers.
            </p>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.9/5 Customer Rating</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-300">
                Company Incorporated Date: 14/09/2016
              </p>
              <p className="text-sm text-gray-300">
                Companies House Number: 10375630
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Our Services</h3>
            <ul className="space-y-2">
              {cleaningServices.map((service, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+44 79 3088 7488</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@cannyscleaning.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Serving all London
                  <br />
                  and Kent
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/cleaning/booking/", label: "Book Now" },
                { href: "/cleaning/about", label: "About Us" },
                { href: "/cleaning/contact", label: "Contact" },
                { href: "/cleaning/service", label: "Services" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/share/1A9Uquyytg/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SiFacebook className="h-5 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/cannyscleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SiInstagram className="h-5 w-4" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <button
                onClick={() => setLegalType("privacy")}
                onKeyDown={(e) => e.key === "Enter" && setLegalType("privacy")}
                className="hover:text-white focus:outline-none focus:underline transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalType("terms")}
                onKeyDown={(e) => e.key === "Enter" && setLegalType("terms")}
                className="hover:text-white focus:outline-none focus:underline transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span>© {currentYear} Canny&apos;s Cleaning</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 pt-6 border-t border-gray-600">
            <div className="flex flex-wrap justify-center items-center space-x-6 text-xs text-gray-400">
              <span>✓ Fully Insured</span>
              <span>✓ GDPR Compliant</span>
              <span>✓ COVID-19 Safe</span>
              <span>✓ Licensed & Bonded</span>
            </div>
          </div>
        </div>
      </div>

      {/* Single LegalDialog instance */}
      <Suspense fallback={null}>
        {legalType && (
          <LegalDialog
            open={!!legalType}
            onOpenChange={(open) => !open && setLegalType(null)}
            type={legalType}
          />
        )}
      </Suspense>
    </footer>
  );
}
