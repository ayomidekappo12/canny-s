"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Utensils,
  Settings,
  Wine,
  Users,
  Camera,
  Calendar,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Catering",
      description:
        "Catering for all occasions - weddings, corporate events, birthdays, and more",
      features: [
        "Custom menu planning",
        "Traditional Nigerian dishes",
        "Dietary accommodations",
        "Professional presentation",
      ],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Equipment Hire",
      description: "Complete event equipment rental for seamless celebrations",
      features: [
        "Tables and chairs",
        "Serving equipment",
        "Sound systems",
        "Tent rentals",
      ],
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Bar Service",
      description:
        "Professional bartending and beverage service for your event",
      features: [
        "Skilled bartenders",
        "Premium drink selection",
        "Custom cocktails",
        "Non-alcoholic options",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Waiter Service",
      description: "Experienced waiting staff to ensure impeccable service",
      features: [
        "Professional staff",
        "Table service",
        "Event coordination",
        "Guest assistance",
      ],
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Booth",
      description: "Capture memories with our professional photo booth service",
      features: [
        "Professional equipment",
        "Custom backdrops",
        "Instant prints",
        "Digital gallery",
      ],
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Specialty Menus",
      description:
        "Authentic Nigerian cuisine crafted with traditional recipes",
      features: [
        "Jollof rice varieties",
        "Grilled meats & fish",
        "Traditional soups",
        "Vegetarian options",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#FCFAF8]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0d0d] mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we provide
            comprehensive catering services that bring the authentic taste of
            Nigeria to your special events across the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border/50 hover:border-[#eeac00]/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-[#eeac00]/10 rounded-full flex items-center justify-center text-[#eeac00] group-hover:bg-[#eeac00] group-hover:text-[#0d0d0d] transition-colors duration-300 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-[#0d0d0d]">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-[#eeac00] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#eeac00] to-[#F4BD71] text-[#0d0d0d] p-8 rounded-2xl shadow-[var(--shadow-glow)]">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Plan Your Event?
            </h3>
            <p className="text-lg mb-6 text-white">
              Let us bring the authentic flavors of Nigeria to your next
              celebration
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-[#eeac00] px-8 py-3 rounded-lg font-semibold hover:bg-[#FCFAF8] transition-colors duration-300 cursor-pointer"
            >
              Get Quote Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;