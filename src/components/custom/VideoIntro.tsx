"use client";

export default function VideoIntro() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B]">
          How Cannys Cleaning Services Works
        </h2>

        {/* Supporting text */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Watch how we deliver reliable, professional cleaning services trusted
          by over 1,000 happy customers across the UK.
        </p>

        {/* Video Wrapper */}
        <div className="relative w-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://player.vimeo.com/video/1158448550"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="How Cannys Cleaning Services Works"
          />
        </div>
      </div>
    </section>
  );
}
