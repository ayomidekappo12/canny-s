import { Hero } from "@/app/sections/hero";
import { Services } from "@/app/sections/services";
import Review from "@/app/sections/review";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Services />
        <Review />
      </main>
    </div>
  );
};