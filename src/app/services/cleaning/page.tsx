import { Hero } from "@/app/sections/hero";
import { Services } from "@/app/sections/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
};