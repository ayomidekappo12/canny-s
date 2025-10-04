// PropertyDetailsCard.tsx
"use client";

import { MapPin } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import type { BookingFormData } from "@/components/hooks/bookingSchema";

interface Props {
  form: UseFormReturn<BookingFormData>;
}

const propertyTypes = [
  { value: "flat", label: "Flat/Apartment" },
  { value: "house", label: "House" },
  { value: "office", label: "Office" },
  { value: "studio", label: "Studio" },
  { value: "Commercial Space", label: "Commercial Space" },
  { value: "Airbnb", label: "Airbnb" },
];

const bedroomOptions = [
  { value: "studio", label: "Studio" },
  { value: "1", label: "1 bedroom" },
  { value: "2", label: "2 bedrooms" },
  { value: "3", label: "3 bedrooms" },
  { value: "4", label: "4 bedrooms" },
  { value: "5", label: "5+ bedrooms" },
];

const bathroomOptions = [
  { value: "1", label: "1 bathroom" },
  { value: "2", label: "2 bathrooms" },
  { value: "3", label: "3 bathrooms" },
  { value: "4", label: "4 bathrooms" },
  { value: "5", label: "5+ bathrooms" },
];

export default function PropertyDetailsCard({ form }: Props) {
  return (
    <Card className="mx-4 md:mx-0 border border-[#dce2e5]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Property Details
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <FormField
          control={form.control}
          name="property"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    {propertyTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Bedrooms</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select bedrooms" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    {bedroomOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Bathrooms</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select bathrooms" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    {bathroomOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="extraTask"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Extra Tasks (Optional)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Extra Tasks" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    <SelectItem value="ironing">ironing</SelectItem>
                    <SelectItem value="laundry">laundry</SelectItem>
                    <SelectItem value="oven-cleaning">oven-cleaning</SelectItem>
                    <SelectItem value="fridge-cleaning">
                      fridge-cleaning
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specialRequest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special request (Optional)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select special request" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    <SelectItem value="eco-friendly products">
                      eco-friendly products
                    </SelectItem>
                    <SelectItem value="pet-safe">pet-safe</SelectItem>
                    <SelectItem value="allergen control">
                      allergen control
                    </SelectItem>
                    <SelectItem value="specific rooms">
                      specific rooms
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="condition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Condition Types</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select condition types" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    <SelectItem value="lightly used">lightly used</SelectItem>
                    <SelectItem value="standard">standard</SelectItem>
                    <SelectItem value="very dirty">very dirty</SelectItem>
                    <SelectItem value="post-construction">
                      post-construction
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
