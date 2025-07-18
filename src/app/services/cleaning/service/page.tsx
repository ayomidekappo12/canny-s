"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Sparkles,
  Key,
  Building,
  Sofa,
  Plane,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "domestic",
      icon: Home,
      title: "Domestic Cleaning",
      subtitle: "Regular house cleaning",
      description:
        "Keep your home spotless with our regular cleaning service. Perfect for busy professionals and families who want to maintain a clean, healthy living environment.",
      price: "From £15/hr",
      duration: "2-4 hours",
      features: [
        "Kitchen cleaning & sanitizing",
        "Bathroom deep clean",
        "Hoovering all carpets & rugs",
        "Mopping hard floors",
        "Dusting furniture & surfaces",
        "Bin emptying & fresh liners",
        "Basic tidying & organizing",
        "Flexible scheduling options",
      ],
      includes: [
        "All cleaning supplies provided",
        "Eco-friendly products available",
        "Insured & vetted cleaners",
        "Flexible scheduling",
      ],
      popular: false,
      image:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1752654243/Web_Page_Pictures.docx.pdf-image-002_yy0vsh.jpg",
    },
    {
      id: "deep",
      icon: Sparkles,
      title: "Deep Cleaning",
      subtitle: "Comprehensive spring clean",
      description:
        "Our most thorough cleaning service. Perfect for move-ins, spring cleaning, or when your home needs that extra attention to detail.",
      price: "From £120/hr",
      duration: "4-8 hours",
      features: [
        "Everything in domestic cleaning",
        "Inside oven & microwave cleaning",
        "Inside fridge & freezer cleaning",
        "Window cleaning (interior)",
        "Skirting boards & door frames",
        "Light switches & door handles",
        "Cabinet fronts & handles",
        "Behind appliances cleaning",
      ],
      includes: [
        "Professional equipment",
        "Specialized cleaning products",
        "Before & after photos",
        "Satisfaction guarantee",
      ],
      popular: true,
      image:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1752654243/Web_Page_Pictures.docx.pdf-image-003_d05kcm.jpg",
    },
    {
      id: "end-of-tenancy",
      icon: Key,
      title: "End of Tenancy Cleaning",
      subtitle: "Get your deposit back",
      description:
        "Professional end of tenancy cleaning using the landlord's checklist. We guarantee you'll get your deposit back or we'll return for free.",
      price: "From £180/hr",
      duration: "6-10 hours",
      features: [
        "Landlord checklist compliance",
        "Professional carpet cleaning",
        "Oven & appliance deep clean",
        "Bathroom descaling & sanitizing",
        "Window cleaning (inside & out)",
        "Wall spot cleaning",
        "Cupboard cleaning (inside & out)",
        "Garden area tidying (if applicable)",
      ],
      includes: [
        "Deposit back guarantee",
        "Landlord communication",
        "Certificate of cleaning",
        "48-hour completion",
      ],
      popular: false,
      image:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1752654250/Web_Page_Pictures.docx.pdf-image-005_ec3pxv.jpg",
    },
    {
      id: "office",
      icon: Building,
      title: "Office Cleaning",
      subtitle: "Professional workspace cleaning",
      description:
        "Keep your workplace clean and professional. Regular cleaning services for offices, shops, and commercial spaces across London.",
      price: "From £12/hr",
      duration: "1-4 hours",
      features: [
        "Desk cleaning & sanitizing",
        "Kitchen/break room cleaning",
        "Bathroom facilities cleaning",
        "Floor vacuuming & mopping",
        "Waste bin emptying",
        "Reception area cleaning",
        "Meeting room preparation",
        "Covid-safe practices",
      ],
      includes: [
        "Flexible scheduling",
        "After-hours service available",
        "Commercial insurance",
        "Regular quality checks",
      ],
      popular: false,
      image:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1752654244/Web_Page_Pictures.docx.pdf-image-004_vtnqaj.jpg",
    },
    {
      id: "carpet",
      icon: Sofa,
      title: "Carpet & Upholstery Cleaning",
      subtitle: "Professional steam cleaning",
      description:
        "Revitalize your carpets, rugs, and furniture with our professional steam cleaning service. Effective stain removal and sanitization.",
      price: "From £80/hr",
      duration: "2-4 hours",
      features: [
        "Hot water extraction cleaning",
        "Pre-treatment of stains",
        "Pet odor elimination",
        "Fabric protection application",
        "Fast drying techniques",
        "Sofa & chair cleaning",
        "Rug cleaning service",
        "Mattress cleaning available",
      ],
      includes: [
        "Professional equipment",
        "Eco-friendly solutions",
        "Stain removal guarantee",
        "Same-day service available",
      ],
      popular: false,
      image:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1752633083/image1_uim5bi.png",
    },
    {
      id: "airbnb",
      icon: Plane,
      title: "AirBnB Cleaning",
      subtitle: "Guest-ready turnarounds",
      description:
        "Quick, reliable cleaning between guests to maintain your 5-star rating. Same-day service available with linen changes and restocking.",
      price: "From £45/hr",
      duration: "1-3 hours",
      features: [
        "Complete property reset",
        "Fresh linen & towels",
        "Bathroom restocking",
        "Kitchen cleaning & restocking",
        "Trash removal",
        "Quick maintenance checks",
        "Guest welcome setup",
        "Emergency cleaning available",
      ],
      includes: [
        "Same-day availability",
        "Supply restocking",
        "Property condition reports",
        "Host communication",
      ],
      popular: false,
      image:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1752633083/image2_ih0xxw.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--clean-blue)] to-white py-20">
        <div className="mx-8">
          <div className="text-center space-y-6">
            <Badge
              variant="outline"
              className="mb-4 px-4 text-lg lg:text-xl font-bold rounded-2xl border border-gray-200"
            >
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1E293B]">
              Professional Cleaning Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From regular house cleaning to specialized deep cleans, we provide
              comprehensive cleaning solutions for homes and businesses across
              London.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle
                  className="h-5 w-5"
                  style={{ color: "var(--success-green)" }}
                />
                <span className="font-medium">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10">
        <div className="mx-8">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <Card
                  key={service.id}
                  className=" border-gray-200 overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 p-0"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-0 ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-64 lg:h-auto ${
                        !isEven ? "lg:col-start-2" : ""
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover brightness-110 contrast-100"
                        quality={90}
                        priority
                      />
                      {service.popular && (
                        <Badge
                          className="absolute top-4 left-4"
                          style={{ backgroundImage: "var(--gradient-trust)" }}
                        >
                          Most Popular
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-[#1E293B]">
                              {service.title}
                            </h2>
                            <p className="text-lg text-muted-foreground">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-lg leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {service.price}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Starting price
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold">
                              {service.duration}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Typical duration
                            </div>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">
                              What's Included:
                            </h4>
                            <ul className="space-y-2">
                              {service.features.slice(0, 4).map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start space-x-2"
                                >
                                  <CheckCircle className="h-4 w-4 text-[var(--success-green)] mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">
                              Service Benefits:
                            </h4>
                            <ul className="space-y-2">
                              {service.includes.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start space-x-2"
                                >
                                  <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button size="lg" asChild>
                            <Link href="/booking">
                              Book This Service
                              <ArrowRight className="mx-1.5 h-4 w-5" />
                            </Link>
                          </Button>
                          <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Get Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--clean-blue)] to-white">
        <div className="mx-8">
          <Card
            className="border-0 shadow-[var(--shadow-strong)]"
            style={{ backgroundImage: "var(--gradient-card)" }}
          >
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
                Need a Custom Cleaning Solution?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every property is unique. Get a personalized quote tailored to
                your specific needs, schedule, and budget requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" asChild>
                  <Link href="/contact">
                    Get Custom Quote
                    <ArrowRight className="mx-1.5 h-4 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl">
                  <Clock className="mx-1.5 h-4 w-5" />
                  Call 020 7946 0958
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                ✓ Free quotes ✓ Same-day response ✓ No obligation
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
