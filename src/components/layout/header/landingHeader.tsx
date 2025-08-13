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
import { Menu, Phone, Star, NotebookPen } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

interface NavLinkProps {
  item: NavItem;
  onClick?: () => void; // made optional
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/sections/mainAbout" },
    { name: "Contact", href: "/sections/mainContact" },
  ];

  // Smart active state checker
  const isActive = (href: string) => {
    if (href.includes("#")) {
      const [base] = href.split("#");
      return pathname === base || (base === "/" && pathname === "/");
    }
    const cleanHref = href.split("#")[0];
    return pathname === cleanHref || pathname.startsWith(cleanHref + "/");
  };

  // Navigation link component to avoid repetition
  const NavLink = ({ item, onClick }: NavLinkProps) => {
    const active = isActive(item.href);
    return (
      <Link
        href={item.href}
        scroll={true}
        onClick={onClick}
        className={`text-sm font-medium transition-colors ${
          active ? "text-primary" : "text-muted-foreground hover:text-primary"
        }`}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-[#1E293B]">
      <div className="flex h-16 items-center justify-between mx-5 sm:mx-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <span className="font-bold text-2xl italic bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Canny&apos;s
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
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
            <Link href="/sections/mainBooking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle>
              <VisuallyHidden>Menu panel</VisuallyHidden>
            </SheetTitle>
            <div className="flex flex-col space-y-4 mt-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  item={item}
                  onClick={() => setIsOpen(false)}
                />
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
                  <Link
                    href="/sections/mainBooking"
                    onClick={() => setIsOpen(false)}
                  >
                    <NotebookPen className="mx-1.5 w-5 h-5" />
                    Book Us Now
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
