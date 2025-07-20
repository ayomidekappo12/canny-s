import React, { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

interface PrimaryTextAreaProps {
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  title?: string;
  id: string;
  lines?: number;
  help?: string;
  defaultValue?: string;
  defaultFocus?: boolean;
  maxLength?: number;
}

const PrimaryTextArea = ({
  onChange,
  placeholder,
  title,
  id,
  lines = 2,
  className,
  help,
  defaultValue,
  defaultFocus = false,
  maxLength,
}: PrimaryTextAreaProps) => {
  useEffect(() => {
    if (defaultValue && defaultFocus) {
      const input = document.getElementById(id) as HTMLInputElement;
      input?.focus();
    }
  }, [defaultValue, defaultFocus]);

  const [count, setCount] = useState(defaultValue?.length || 0);

  return (
    <div className={cn("max-w-screen-sm", className)}>
      <label htmlFor={id} className="text-[13px] font-medium text-gray-600">
        {title}
      </label>
      <Textarea
        id={id}
        className="rounded-[10px] focus:outline-none focus-visible:ring-transparent block text-sm placeholder:text-slate-300 my-1"
        onChange={(e) => {
          onChange(e.target.value);
          setCount(e.target.value.length);
        }}
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={lines}
      />

      {maxLength && (
        <p
          className={`text-end text-xs pt-1 ${
            count > maxLength ? "text-red-500" : "text-gray-500"
          }`}
        >
          {count}/{maxLength}
        </p>
      )}

      {help && (
        <p className="text-xs flex pt-2 pl-3.5 font-regular text-gray-400">
          {help}
        </p>
      )}
    </div>
  );
};

export default PrimaryTextArea;
