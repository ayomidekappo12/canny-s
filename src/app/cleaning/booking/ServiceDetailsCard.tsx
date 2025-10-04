// ServiceDetailsCard.tsx
"use client";

import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { BookingFormData } from "@/components/hooks/bookingSchema";

interface Props {
  form: UseFormReturn<BookingFormData>;
}

const services = [
  { value: "domestic", label: "Domestic Cleaning - £150/hr" },
  { value: "deep", label: "Deep Cleaning - From £120/hr" },
  { value: "end-tenancy", label: "End of Tenancy - From £180/hr" },
  { value: "commercial", label: "Commercial Cleaning - £120/hr" },
  { value: "builders", label: "After-Builders Cleaning - From £200/hr" },
  { value: "airbnb", label: "AirBnB Cleaning - From £250/hr" },
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const durations = [
  { value: "2", label: "2 hours" },
  { value: "3", label: "3 hours" },
  { value: "4", label: "4 hours" },
  { value: "5", label: "5 hours" },
  { value: "6", label: "6+ hours" },
];

const frequencies = [
  { value: "one-time", label: "one-time" },
  { value: "weekly", label: "weekly" },
  { value: "bi-weekly", label: "bi-weekly" },
  { value: "monthly", label: "monthly" },
];

const supplyOptions = [
  { value: "1", label: "client cleaning suppliers" },
  { value: "2", label: "canny's cleaning suppliers" },
];

export default function ServiceDetailsCard({ form }: Props) {
  return (
    <Card className="mx-4 md:mx-0 border border-[#dce2e5]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Service Details
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Service select */}
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Type</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    {services.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date picker (optional) */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              {" "}
              <FormLabel>Preferred Date (optional)</FormLabel>{" "}
              <Popover>
                {" "}
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value instanceof Date ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date (optional)</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <FormControl />{" "}

                <PopoverContent
                  className="w-auto p-0 bg-background border z-50"
                  align="start"
                >
                  {" "}
                  <Calendar
                    mode="single"
                    selected={field.value ?? undefined}
                    onSelect={(d) => field.onChange(d ?? undefined)}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today;
                    }}
                    className="p-3 pointer-events-auto"
                  />{" "}
                </PopoverContent>{" "}
              </Popover>{" "}
              <FormMessage />{" "}
            </FormItem>
          )}
        />

        {/* Time */}
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Time</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Duration */}
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expected Duration</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border z-50 border-accent/20">
                    {durations.map((d) => (
                      <SelectItem key={d.value} value={d.value}>
                        {d.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Frequency */}
        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frequency Type</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select frequency type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    {frequencies.map((f) => (
                      <SelectItem key={f.value} value={f.value}>
                        {f.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Supplies */}
        <FormField
          control={form.control}
          name="supplies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supply Type</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select supply type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-accent/20 z-50">
                    {supplyOptions.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
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
