"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface InputFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

/**
 * Accessible and reusable text input form field.
 * - Uses react-hook-form's FormField for full form context support.
 * - Automatically wires validation errors and ARIA attributes.
 */
export function InputField({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormControl>
            <Input
              id={name}
              {...field}
              type={type}
              placeholder={placeholder}
              className="h-12"
              aria-describedby={`${name}-error`}
            />
          </FormControl>
          <FormMessage id={`${name}-error`} />
        </FormItem>
      )}
    />
  );
}
InputField.displayName = "InputField";
