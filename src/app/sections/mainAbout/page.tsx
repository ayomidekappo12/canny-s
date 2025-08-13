"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  ChefHat,
  Users,
  Trophy,
  Shield,
  MapPin,
  Heart,
  Clock,
  Star,
  NotebookPen,
  CheckCircle,
  Award,
  Target,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Trophy },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const values = [
    {
      icon: Trophy,
      title: "Excellence",
      description:
        "We strive for perfection in every service we deliver, ensuring exceptional quality that exceeds expectations.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Fully insured and licensed professionals you can trust with your most important spaces and events.",
    },
    {
      icon: Heart,
      title: "Care",
      description:
        "We treat every clients space and event as if it were our own, with genuine care and attention to detail.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Meticulous attention to detail and customized solutions tailored to your specific needs and preferences.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description:
        "Started as a small cleaning service in London with a vision to combine excellence in both cleaning and catering.",
    },
    {
      year: "2020",
      title: "Expanded Services",
      description:
        "Added premium catering services, becoming the first company in London to specialize in both cleaning and catering.",
    },
    {
      year: "2022",
      title: "UK-Wide Coverage",
      description:
        "Expanded operations across major UK cities, serving clients from Birmingham to Manchester and beyond.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 py-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              About Canny&apos;s
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              We&apos;re the UK&apos;s premier dual-service provider, uniquely
              combining professional cleaning and exceptional catering to
              deliver comprehensive solutions for your home, office, and special
              events.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-medium transition-all duration-300 border-primary/20"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Unique Niche */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Unique Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The first and only company in the UK to master both professional
                cleaning and premium catering services under one roof.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8 hover:shadow-strong transition-all duration-500 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    Professional Cleaning Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    From end-of-tenancy deep cleans to ongoing commercial
                    maintenance, we bring hospital-grade standards to every
                    space we touch. Our eco-friendly products and cutting-edge
                    equipment ensure spotless results that protect both your
                    environment and health.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--success-green)]" />
                      <span className="text-sm">End-of-tenancy guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--success-green)]" />
                      <span className="text-sm">
                        Eco-friendly products only
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--success-green)]" />
                      <span className="text-sm">
                        Professional-grade equipment
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-500 border-accent/20 bg-gradient-to-br from-background to-accent/5">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChefHat className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-accent">
                    Premium Catering Mastery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our professionally trained chefs create culinary experiences
                    that transform ordinary events into extraordinary memories.
                    From intimate dinner parties to large corporate functions,
                    we craft bespoke menus using the finest locally-sourced
                    ingredients.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--success-green)]" />
                      <span className="text-sm">Michelin-trained chefs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--success-green)]" />
                      <span className="text-sm">
                        Locally-sourced ingredients
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--success-green)]" />
                      <span className="text-sm">Custom menu creation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and drive our
                commitment to exceptional service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-primary/20"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From a small London cleaning service to the UK&apos;s leading
                dual-service provider.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start gap-8 mb-12 last:mb-0"
                >
                  <div
                    className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-medium"
                    style={{ backgroundImage: "var(--gradient-hero)" }}
                  >
                    {milestone.year}
                  </div>
                  <Card className="flex-1 p-6 hover:shadow-medium transition-all duration-300 border-accent/20">
                    <CardContent className="pt-0">
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Canny&apos;s Service?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The unique advantages of working with the UK&apos;s only
                dual-service cleaning and catering specialist.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 border-primary/20">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    One-Stop Solution
                  </h3>
                  <p className="text-muted-foreground">
                    The convenience of having both your cleaning and catering
                    needs handled by one trusted, reliable company.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 border-accent/20">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    UK-Wide Coverage
                  </h3>
                  <p className="text-muted-foreground">
                    Consistent, high-quality service across London and major UK
                    cities with the same exceptional standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 border-accent/20">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-[var(--success-green)] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Fully Insured</h3>
                  <p className="text-muted-foreground">
                    Complete peace of mind with comprehensive insurance coverage
                    and licensed, trained professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-background to-accent/10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the Cannys Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who trust us with their most
              important spaces and special moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/sections/mainBooking">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:w-auto cursor-pointer"
                >
                  <NotebookPen className="mx-1.5 w-5 h-5" />
                  Get Your Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="xl"
                  variant="secondary"
                  className="w-full sm:w-auto cursor-pointer"
                >
                  <Users className="mx-1.5 w-5 h-5" />
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;