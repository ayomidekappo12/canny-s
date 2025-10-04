"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
}

/**
 * Accessible and reusable text input form field.
 * - Strongly typed for react-hook-form.
 * - Automatically handles validation, ARIA, and styling.
 * - No need to manually attach <FormDataType> — it infers from control.
 */
export function InputField<T extends FieldValues = FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: InputFieldProps<T>) {
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
