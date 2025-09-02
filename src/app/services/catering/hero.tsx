"use client";

import { Button } from "@/components/ui/button";
import { Star, ChefHat } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="flex items-center bg-gradient-to-br from-[#FCFAF8] via-background to-[#FCFAF8]/50 pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-[#eeac00]">
              <Star className="w-5 h-5 fill-[#eeac00] stroke-none" />
              <Star className="w-5 h-5 fill-[#eeac00] stroke-none" />
              <Star className="w-5 h-5 fill-[#eeac00] stroke-none" />
              <Star className="w-5 h-5 fill-[#eeac00] stroke-none" />
              <Star className="w-5 h-5 fill-[#eeac00] stroke-none" />
              <span className="text-sm font-medium ml-2">5-Star Service</span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0d0d0d] leading-tight mb-6">
                Authentic <span className="text-[#eeac00]">Nigerian</span>{" "}
                Catering Excellence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bringing the rich flavors of Nigeria to your special events
                across the UK. From intimate gatherings to grand celebrations,
                we deliver unforgettable culinary experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#eeac00] to-[#F4BD71] hover:from-[#C9811D] hover:to-[#eeac00] shadow-[var(--shadow-glow)] text-lg px-8 py-6 cursor-pointer"
              >
                <ChefHat className="w-5 h-5 mr-2" />
                Book Your Event
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-[#eeac00] text-[#eeac00] hover:bg-[#eeac00] hover:text-white text-lg px-8 py-6 cursor-pointer"
              >
                View Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#eeac00]">500+</div>
                <div className="text-sm text-muted-foreground">
                  Events Catered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#eeac00]">15+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#eeac00]">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-full overflow-hidden shadow-[var(--shadow-elegant)] mx-auto">
              <Image
                src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756315030/WhatsApp_Image_2025-07-07_at_09.34.44_755afb7a_kpnaod.jpg"
                alt="Canny's Catering - Premium Nigerian Cuisine"
                width={1000}
                height={1000}
                className="w-full h-full object-contain bg-[#eeac00]/5 rounded-full p-8 brightness-110"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
            </div>

            {/* Floating Elements */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 bg-[#eeac00] text-[#0d0d0d] p-4 rounded-full shadow-lg"
            >
              <ChefHat className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
