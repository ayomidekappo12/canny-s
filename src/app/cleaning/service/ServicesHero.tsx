import { Badge } from "@/components/ui/badge";
import { Shield, Star, CheckCircle } from "lucide-react";

export function ServicesHero() {
  return (
    <section
      className="bg-gradient-to-br from-[var(--clean-blue)] to-white py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-8 text-center space-y-6">
        <Badge
          variant="outline"
          className="mb-4 px-4 text-lg lg:text-xl font-bold rounded-2xl border border-gray-200"
        >
          Our Services
        </Badge>
        <h1
          id="services-heading"
          className="text-4xl lg:text-6xl font-bold text-[#1E293B]"
        >
          Professional Cleaning Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From regular house cleaning to specialized deep cleans, we provide
          comprehensive cleaning solutions for homes and businesses across
          London.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-medium">Fully Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
            <span className="font-medium">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle
              className="h-5 w-5"
              style={{ color: "var(--success-green)" }}
              aria-hidden="true"
            />
            <span className="font-medium">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
