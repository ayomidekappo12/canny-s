"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type NavItem = {
  id: string;
  label: string;
  isButton?: boolean;
  className?: string; // extra classes for desktop
  mobileClassName?: string; // extra classes for mobile
};

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    className: "text-[#0d0d0d] hover:text-[#eeac00] transition-colors cursor-pointer",
    mobileClassName:
      "text-left text-[#0d0d0d] hover:text-[#eeac00] transition-colors cursor-pointer",
  },
  {
    id: "services",
    label: "Services",
    className: "text-[#0d0d0d] hover:text-[#eeac00] transition-colors cursor-pointer",
    mobileClassName:
      "text-left text-[#0d0d0d] hover:text-[#eeac00] transition-colors cursor-pointer",
  },
  {
    id: "gallery",
    label: "Gallery",
    className: "text-[#0d0d0d] hover:text-[#eeac00] transition-colors cursor-pointer",
    mobileClassName:
      "text-left text-[#0d0d0d] hover:text-[#eeac00] transition-colors cursor-pointer",
  },
  {
    id: "contact",
    label: "Contact",
    className: "text-[#0d0d0d] hover:text-[#eeac00] transition-colors cursor-pointer",
    mobileClassName:
      "text-left text-[#0d0d0d] hover:text-[#eeac00] transition-colors cursor-pointer",
  },
  {
    id: "contact",
    label: "Book Now",
    isButton: true,
    className:
      "bg-[#eeac00] text-white hover:bg-[#eeac00]/90 cursor-pointer",
    mobileClassName:
      "w-fit bg-[#eeac00] text-white hover:bg-[#eeac00]/90 cursor-pointer ",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
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
              <h1 className="text-xl font-bold text-[#0d0d0d]">
                Canny&apos;s Catering
              </h1>
              <p className="text-sm text-muted-foreground">
                Nigerian Cuisine Excellence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label, isButton, className }) =>
              isButton ? (
                <Button
                  key={label}
                  className={className}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </Button>
              ) : (
                <button
                  key={label}
                  onClick={() => scrollToSection(id)}
                  className={className}
                >
                  {label}
                </button>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-[#0d0d0d] cursor-pointer" />
            ) : (
              <Menu size={24} className="text-[#0d0d0d] cursor-pointer" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map(({ id, label, isButton, mobileClassName }) =>
                isButton ? (
                  <Button
                    key={label}
                    className={mobileClassName}
                    onClick={() => scrollToSection(id)}
                  >
                    {label}
                  </Button>
                ) : (
                  <button
                    key={label}
                    onClick={() => scrollToSection(id)}
                    className={mobileClassName}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
