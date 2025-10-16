import React from "react";

interface InputProps {
  type?: "text" | "email" | "password" | "number" | "tel";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
  min?: string;
  max?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  disabled = false,
  required = false,
  className = "",
  id,
  name,
  min,
  max,
}) => {
  const baseClasses =
    "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed"
    : "bg-white";

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      required={required}
      min={min}
      max={max}
      className={`${baseClasses} ${disabledClasses} ${className}`}
    />
  );
};

export default Input;
