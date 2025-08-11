"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  ChefHat,
  ArrowRight,
  MapPin,
  Star,
  Shield,
  Users,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const Index = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "London",
      service: "Cleaning",
      quote:
        "Outstanding cleaning service! They transformed our office space completely.",
      rating: 5,
    },
    {
      name: "James R.",
      location: "Manchester",
      service: "Catering",
      quote:
        "The catering for our wedding was absolutely perfect. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma T.",
      location: "Birmingham",
      service: "Cleaning",
      quote:
        "Professional, reliable, and thorough. Best cleaning service in the area.",
      rating: 5,
    },
  ];

  const locations = ["London", "Manchester", "Birmingham", "Leeds", "Bristol"];


  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--clean-blue)] to-white">
      <main>
        {/* Enhanced Hero Section with Background Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={`https://res.cloudinary.com/dxvf9uqwe/image/upload/v1754706317/landingHero_fxmuvr_ar_16_9_c_fill_g_auto_w_1024_pi3yh1.png`}
              alt="Professional cleaning and catering services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40"></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto relative z-10 px-4">
            <div className="text-center">
              <div className="mb-32"></div> {/* Spacer for centered logo */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 italic bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-lg">
                <div className="flex items-center justify-center space-x-4 mb-0">
                  <span className="text-primary">Canny&apos;s</span>
                </div>
                <div className="flex flex-col leading-tight text-primary">
                  <span>Services LTD.</span>
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-primary max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
                Exceptional service tailored for events, homes, and businesses
                across London and the UK
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link href="services/cleaning">
                  <Button
                    size="xl"
                    variant="default"
                    className="w-full sm:w-auto cursor-pointer shadow-[var(--shadow-strong)]"
                  >
                    <Sparkles className="mx-1.5 h-5 w-5" />
                    Explore Cleaning
                  </Button>
                </Link>
                <Link href="services/catering">
                  <Button
                    size="xl"
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer shadow-[var(--shadow-strong)]"
                  >
                    <ChefHat className="mx-1.5 h-5 w-5" />
                    Explore Catering
                  </Button>
                </Link>
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
                <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 bg-white/90 text-foreground"
                  >
                    <Users className="mx-1.5 h-5 w-5 text-primary" />
                    500+ Happy Clients
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 bg-white/90 text-foreground"
                  >
                    <Star className="mx-1.5 h-5 w-5 text-yellow-400" />
                    4.9/5 Average Rating
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 bg-white/90 text-foreground"
                  >
                    <MapPin className="mx-1.5 h-5 w-5 text-primary" />
                    Serving London & UK UK-Wide Coverage
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 bg-white/90 text-foreground"
                  >
                    <Shield className="mx-1.5 h-5 w-5 text-primary" />
                    Fully Insured & Licensed
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Preview Cards */}
        <section id="get-service" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Enhanced Cleaning Card */}
              <Card className="group p-8 text-center hover:shadow-strong transition-all duration-500 hover:-translate-y-3 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-24 h-20 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="secondary" className="text-xs">
                      Professional
                    </Badge>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-primary mb-4">
                  Canny&apos;s Cleaning Services
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Professional cleaning services for homes and offices across
                  London. From deep cleaning to regular maintenance, we ensure
                  spotless results every time.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    End of Tenancy Cleaning
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Regular Domestic Cleaning
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Office & Commercial
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Carpet & Upholstery
                  </div>
                </div>

                <Link href="services/cleaning">
                  <Button
                    size="lg"
                    className="w-full group/btn text-lg py-6 cursor-pointer"
                  >
                    View Cleaning Services
                    <ArrowRight className="mx-1.5 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>

              {/* Enhanced Catering Card */}
              <Card className="group p-8 text-center hover:shadow-strong transition-all duration-500 hover:-translate-y-3 border-accent/20 bg-gradient-to-br from-background to-accent/5">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ChefHat className="w-24 h-20 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="secondary" className="text-xs">
                      Premium
                    </Badge>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-accent mb-4">
                  Canny&apos;s Catering Services
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Exceptional catering services for events, corporate functions,
                  and special occasions. Fresh, delicious cuisine crafted by our
                  professional chefs.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Corporate Events
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Wedding Catering
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Private Chef Services
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Custom Menu Planning
                  </div>
                </div>

                <Link href="services/catering">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full group/btn text-lg py-6 cursor-pointer hover:bg-accent"
                  >
                    View Catering Services
                    <ArrowRight className="mx-1.5 h- w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Coverage Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Serving Major Cities Across the UK
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional cleaning and catering services available in major
              cities and nationwide coverage
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {locations.map((location) => (
                <Badge
                  key={location}
                  variant="secondary"
                  className="px-4 py-2 text-base"
                >
                  <MapPin className="mx-1.5 h-5 w-5 mr-2 text-primary" />
                  {location}
                </Badge>
              ))}
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <MapPin className="mx-1.5 h-5 w-5 mr-2 text-primary" />+
                Nationwide
              </Badge>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-medium transition-all duration-300 border-accent/20"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">
                      {testimonial.location} • {testimonial.service}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-background to-accent/10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a personalized quote for your cleaning or catering needs. Our
              team is ready to serve you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button
                size="xl"
                variant="outline"
                className="w-full sm:w-auto cursor-pointer"
              >
                <Phone className="mx-1.5 w-5 h-5" />
                Get Free Quote
              </Button>
              <Button
                size="xl"
                variant="secondary"
                className="w-full sm:w-auto cursor-pointer"
              >
                <Mail className="mx-1.5 w-5 h-5" />
                Contact Us Today
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              <Phone className="h-4 w-4 inline mr-1" />
              Call us: 0800 123 4567 |
              <Mail className="h-4 w-4 inline mx-1" />
              hello@premiumservices.co.uk
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
