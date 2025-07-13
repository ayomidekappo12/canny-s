"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import { SiFacebook, SiX, SiInstagram } from "react-icons/si";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-[#1E293B]">
      <div className="mx-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero">
                <Image
                  src={"/images/Logo.jpg"}
                  alt="Logo"
                  width={300}
                  height={300}
                  className="brightness-110 contrast-125"
                  quality={90}
                  priority
                />
              </div>
              <span className="font-bold text-xl">Canny&apos;s cleaning</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Professional cleaning services across London and surrounding
              areas. Trusted by over 2,400 satisfied customers.
            </p>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.9/5 Customer Rating</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/services/domestic"
                  className="hover:text-white transition-colors"
                >
                  Domestic Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/deep"
                  className="hover:text-white transition-colors"
                >
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/end-of-tenancy"
                  className="hover:text-white transition-colors"
                >
                  End of Tenancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/office"
                  className="hover:text-white transition-colors"
                >
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/carpet"
                  className="hover:text-white transition-colors"
                >
                  Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/airbnb"
                  className="hover:text-white transition-colors"
                >
                  AirBnB Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>020 7946 0958</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@canny.co.uk</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  Serving all London boroughs
                  <br />
                  and surrounding areas
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/booking"
                  className="hover:text-white transition-colors"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-white transition-colors"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="hover:text-white transition-colors"
                >
                  Service Areas
                </Link>
              </li>
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
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SiFacebook className="h-5 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SiInstagram className="h-5 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SiX className="h-5 w-4" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <span>© {currentYear} Canny&apos;s cleaning</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 pt-6 border-t border-gray-600">
            <div className="flex flex-wrap justify-center items-center space-x-6 text-xs text-gray-400">
              <span>✓ Fully Insured</span>
              <span>✓ DBS Checked Staff</span>
              <span>✓ GDPR Compliant</span>
              <span>✓ COVID-19 Safe</span>
              <span>✓ Licensed & Bonded</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
