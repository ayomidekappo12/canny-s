"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, Phone, Star } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services/cleaning/service" },
    { name: "About", href: "/services/cleaning/about" },
    { name: "Contact", href: "/services/cleaning/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between mx-5 sm:mx-8">
        {/* Logo Click */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={75}
            height={70}
            className="brightness-110 contrast-125"
            quality={90}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Trust & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">4.9/5</span>
            <span className="text-xs">2,400+ reviews</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">020 7946 0958</span>
          </div>
          <Button size="sm" asChild>
            <Link href="/booking/">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle>
              <VisuallyHidden>Hidden but accessible title</VisuallyHidden>
            </SheetTitle>
            <div className="flex flex-col space-y-4 mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium text-left ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">020 7946 0958</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 rating • 2,400+ reviews</span>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    Book Cleaning Now
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
