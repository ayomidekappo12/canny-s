"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

/**
 * @interface Service
 * Describes a cleaning service item displayed on the ServiceCard.
 */
export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  icon: LucideIcon;
  popular?: boolean;
  features: string[];
  includes: string[];
}

/**
 * @component ServiceCard
 * Displays an individual cleaning service with image, details, and call-to-action button.
 */
interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <article
      className="border-gray-200 overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 rounded-xl"
      aria-labelledby={`${service.id}-title`}
    >
      <div
        className={`flex flex-col ${
          !isEven ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Service Image */}
        <div className="relative h-64 lg:h-auto lg:w-3/4">
          <Image
            src={service.image}
            alt={`Image of ${service.title}`}
            className="object-cover brightness-110 contrast-100"
            fill
            priority={index === 0}
            quality={90}
          />
          {service.popular && (
            <Badge
              className="absolute top-4 left-4"
              style={{ backgroundImage: "var(--gradient-trust)" }}
            >
              Most Popular
            </Badge>
          )}
        </div>

        {/* Service Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <header className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Icon className="h-10 w-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h2
                  id={`${service.id}-title`}
                  className="text-xl sm:text-3xl font-bold text-[#1E293B]"
                >
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {service.subtitle}
                </p>
              </div>
            </header>

            <p className="text-lg leading-relaxed">{service.description}</p>

            <div className="flex items-center space-x-4 sm:space-x-36">
              <div className="sm:text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  {service.price}
                </p>
                <span className="text-sm text-muted-foreground">
                  Starting price
                </span>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">{service.duration}</p>
                <span className="text-sm text-muted-foreground">
                  Typical duration
                </span>
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="grid sm:grid-cols-2 gap-6">
              <section aria-label="Included features">
                <h4 className="font-semibold mb-3">What&apos;s Included:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 6).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start space-x-2 text-sm"
                    >
                      <CheckCircle
                        className="h-4 w-4 text-[var(--success-green)] mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-label="Service benefits">
                <h4 className="font-semibold mb-3">Service Benefits:</h4>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start space-x-2 text-sm"
                    >
                      <Star
                        className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild aria-label={`Book ${service.title}`}>
                <Link href="/cleaning/booking">
                  Book This Service
                  <ArrowRight className="mx-1.5 h-4 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
