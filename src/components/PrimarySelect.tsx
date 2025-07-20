import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface PrimarySelectProps {
  onSelect: (value: string) => void;
  className?: string;
  title?: string;
  id: string;
  options: string[];
  help?: string;
  defaultValue?: string;
}

const PrimarySelect = ({
  onSelect,
  className,
  title,
  id,
  options,
  help,
  defaultValue,
}: PrimarySelectProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <div className={cn("max-w-screen-sm", className)}>
      <label htmlFor={id} className="text-[13px] font-medium text-gray-600">
        {title}
      </label>

      <div
        id={id}
        className="flex flex-row items-center justify-between h-10 rounded-[10px] focus:outline-none border border-input px-0 my-2"
      >
        <select
          className="h-8 w-full focus:outline-none text-sm bg-transparent pr-2 px-3 appearance-none rounded-[10px]"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            setSelectedValue(value);
            onSelect(value);
          }}
          value={selectedValue}
        >
          <option value="" key={undefined} selected={defaultValue == undefined}>
            -
          </option>
          {options.map((option) => (
            <option
              value={option}
              key={option}
              selected={defaultValue == option}
            >
              {option}
            </option>
          ))}
        </select>

        <svg
          className="w-2.5 h-2.5 mr-3 mt-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            stroke="#979797"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      {help && (
        <p className="text-xs flex pt-2 pl-3.5 font-regular text-gray-400">
          {help}
        </p>
      )}
    </div>
  );
};

export default PrimarySelect;
