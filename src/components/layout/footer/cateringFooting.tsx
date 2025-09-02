"use client";

import { MessageCircle, Heart } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import Image from "next/image";

const services = [
  "Event Catering for all occasions",
  "Equipment Hire",
  "Bar Service",
  "Waiter Service",
  "Photo Booth",
];

const socialLinks = [
  {
    href: "#",
    icon: <SiFacebook className="w-5 h-5" />,
  },
  {
    href: "https://www.instagram.com/cannys.catering",
    icon: <SiInstagram className="w-5 h-5" />,
  },
  {
    href: "mailto:info@cannyscatering.co.uk",
    icon: <MessageCircle className="w-5 h-5" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756315030/WhatsApp_Image_2025-07-07_at_09.34.44_755afb7a_kpnaod.jpg"
                alt="Logo"
                width={100}
                height={80}
                className="w-16 h-13 rounded-full brightness-110"
                quality={90}
                priority
              />
              <div>
                <h3 className="text-xl font-bold text-[#eeac00]">
                  Canny&apos;s Catering
                </h3>
                <p className="text-white/70">Nigerian Cuisine Excellence</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Bringing authentic Nigerian flavors to your special events across
              the UK. Professional catering services with a personal touch.
            </p>
          </div>

          {/* Services (mapped) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#eeac00]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="text-white/80 hover:text-[#eeac00] transition-colors"
                >
                  ⚜️ {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact (mapped) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#eeac00]">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#eeac00] hover:text-[#0d0d0d] transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-white/80">
              <p className="mb-2">📧 info@cannyscatering.co.uk</p>
              <p className="mb-2">📞 +44 020 7946 0958</p>
              <p>📍 Serving across the UK</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Canny's Catering. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center mt-4 md:mt-0">
              Made with{" "}
              <Heart className="w-4 h-4 text-[#eeac00] mx-1 fill-current" /> for
              authentic Nigerian cuisine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
