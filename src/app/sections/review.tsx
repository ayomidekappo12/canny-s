"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import BookingFormDialog from "@/components/custom/page";
import { MapPin, Star, Clock, NotebookPen } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
}

const Review = () => {
  const [open, setOpen] = useState(false);
  const testimonials: Testimonial[] = [
    {
      name: "Adrien.",
      location: "Prison Island London",
      service: "Cleaning",
      quote: `I really want to thank you and your team for the amazing job you did at the London venue. To be honest, usually when a company finishes their work, there is still some mess left behind, but this time you really did an outstanding job. I truly appreciate it and will definitely recommend your services to others.`,
      rating: 5,
    },
    {
      name: "Obanye Ltd.",
      location: "London",
      service: "Cleaning (Office)",
      quote: `Thank you once again for the excellent service you provided. It was just as good as the last job you helped me with!!! Both the team and I are truly grateful for the quality of the cleaning and the way you kindly accommodated other trades who were still working on site at the same time. I am grateful!`,
      rating: 5,
    },
    {
      name: "Minya.",
      location: "London",
      service: "Cleaning (Airbnb)",
      quote: `Great work on maintaining the properties; the guests noticed and appreciated the cleanliness. The carpets have shown significant improvement, with the stains being effectively addressed. Thank you for your efforts!`,
      rating: 5,
    },
    {
      name: "Bayo.",
      location: "London",
      service: "Cleaning",
      quote: `I can't believe how well the flat looked. Your team really did an amazing job. To have the place turned around in a short time is impressive. I will definitely be using your services again.`,
      rating: 5,
    },
  ];

  return (
    <div className="bg-background">
      <main>
        {/* Enhanced Reviews Section */}
        <section className="pb-10 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B] mb-2">
                Our Clients Review
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don&apos;t just take our word for it&nbsp;&mdash;&nbsp;hear from
                our satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center-safe max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="py-6 px-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-muted/10 border border-[#dce2e5]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>

                  <p className="text-[#1E293B] mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#dce2e5]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-6">
            <Card
              className="border-0 shadow-[var(--shadow-medium)]"
              style={{ backgroundImage: "var(--gradient-card)" }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="text-left space-y-2">
                    <h3 className="text-2xl font-bold text-[#1E293B]">
                      Need a Custom Quote?
                    </h3>
                    <p className="text-muted-foreground">
                      Get personalized pricing for multiple services or large
                      properties.
                    </p>
                  </div>
                  <div className="flex items-center space-x-5">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Response within 1 hour</span>
                    </div>
                    <Button
                      onClick={() => setOpen(true)}
                      size="lg"
                      className="px-2.5 cursor-pointer sm:px-10 h-14"
                    >
                      <NotebookPen className="mx-1.5 w-5 h-5" />
                      Get Custom Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <BookingFormDialog open={open} onOpenChange={setOpen} />
      </main>
    </div>
  );
};

export default Review;
