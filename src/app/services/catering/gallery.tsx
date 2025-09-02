"use client";

import Image from "next/image";


const Gallery = () => {
  const galleryItems = [
    {
      title: "Elegant Wedding Catering",
       src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756492142/Elegant_Feast_with_Friends_cmo9zb.png",
      description:
        "Beautiful Nigerian cuisine spread at a luxury wedding venue",
    },
    {
      title: "Corporate Event Success",
       src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756492143/buffer_v1mhhz.png",
      description:
        "Professional catering service for a major corporate function",
    },
    {
      title: "Premium Bar Service",
       src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756492140/Cocktails_in_the_Glow_of_Lights_vtptex.png",
      description: "Professional bartending at an upscale celebration",
    },
    {
      title: "Photo Booth Fun",
       src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756492123/Screenshot_564_f0tfep.png",
      description: "Creating lasting memories with our photo booth service",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0d0d] mb-6">
            Event Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful events and see how we bring
            Nigerian culinary excellence to celebrations across the UK. Each
            event is a testament to our commitment to quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                  priority={index === 0}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-[#FCFAF8] p-6 rounded-2xl border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#eeac00]">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#eeac00]">1000+</div>
              <div className="text-sm text-muted-foreground">Events Served</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#eeac00]">15+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;