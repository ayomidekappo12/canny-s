import { Hero } from "@/app/sections/hero";
import { Services } from "@/app/sections/services";
import VideoIntro from "@/components/custom/VideoIntro";
import Script from "next/script";
import Review from "@/app/sections/review";

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "How Cannys Cleaning Services Works",
  description:
    "Watch a short video explaining how Cannys Cleaning Services delivers reliable, 5-star rated cleaning services for homes and businesses across the UK.",
  thumbnailUrl:
    "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1769454226/Professional_Cleaning_Services_in_Action_vzpzam.png",
  uploadDate: "2025-01-10",
  duration: "PT41S",
  contentUrl: "https://vimeo.com/1158448550",
  embedUrl: "https://player.vimeo.com/video/1158448550",
  publisher: {
    "@type": "Organization",
    name: "Cannys Cleaning Services",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1756848808/Logo_qaj4rw.jpg",
    },
  },
};


export default function Home() {
  return (
    <>
      {/* Video Schema */}
      <Script
        id="video-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema),
        }}
      />
      <div className="min-h-screen bg-background">
        <main>
          <Hero />
          <VideoIntro />
          <Services />
          <Review />
        </main>
      </div>
    </>
  );
};