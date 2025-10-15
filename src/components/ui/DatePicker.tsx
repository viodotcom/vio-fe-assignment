import React from "react";

interface DatePickerProps {
  value?: string;
  onChange?: (date: string) => void;
  minDate?: string;
  maxDate?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  required = false,
  className = "",
  id,
  name,
}) => {
  const baseClasses =
    "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed"
    : "bg-white";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type="date"
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      min={minDate}
      max={maxDate}
      disabled={disabled}
      required={required}
      className={`${baseClasses} ${disabledClasses} ${className}`}
    />
  );
};

export default DatePicker;
