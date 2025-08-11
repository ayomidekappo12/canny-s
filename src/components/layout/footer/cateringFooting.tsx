"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { SiFacebook, SiX, SiInstagram } from "react-icons/si";
import { ChefHat, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-[#1E293B]">
      <div className="mx-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero">
                <div className="flex">
                  <Sparkles className="h-4 w-4 text-white" />
                  <ChefHat className="h-4 w-4 text-white -ml-1" />
                </div>
              </div>
              <span className="font-bold text-xl">cannys</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Premium cleaning and catering services across London and the UK.
              Trusted by over 500 satisfied customers for exceptional quality.
            </p>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.9/5 Customer Rating</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <h4 className="font-medium text-primary mb-2">Cleaning</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-white transition-colors"
                    >
                      Domestic Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-white transition-colors"
                    >
                      End of Tenancy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-white transition-colors"
                    >
                      Office Cleaning
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-accent mb-2">Catering</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>
                    <Link
                      href="/catering"
                      className="hover:text-white transition-colors"
                    >
                      Wedding Catering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/catering"
                      className="hover:text-white transition-colors"
                    >
                      Corporate Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/catering"
                      className="hover:text-white transition-colors"
                    >
                      Private Chef
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+44 020 7946 0958</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@canny.co.uk</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  Serving London, Manchester,
                  <br />
                  Birmingham & UK nationwide
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
                  href="/services/cleaning/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cleaning/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cleaning/service"
                  className="hover:text-white transition-colors"
                >
                  Services
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SiFacebook className="h-5 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/cannyscleaning/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SiInstagram className="h-5 w-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
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
