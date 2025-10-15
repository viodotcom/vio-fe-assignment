import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "elevated" | "filled";
  size?: "sm" | "md" | "lg";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  shadow?: "none" | "sm" | "md" | "lg";
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  size = "md",
  padding = "md",
  className = "",
  onClick,
  hover = false,
  rounded = "md",
  shadow = "sm",
}) => {
  const baseClasses = "transition-all duration-200";

  const variantClasses = {
    default: "bg-white border border-gray-200",
    outlined: "bg-transparent border-2 border-gray-300",
    elevated: "bg-white shadow-lg",
    filled: "bg-gray-50 border border-gray-100",
  };

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  const hoverClasses = hover
    ? "hover:shadow-md hover:scale-105 cursor-pointer"
    : "";

  const clickClasses = onClick ? "cursor-pointer" : "";

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${paddingClasses[padding]} ${roundedClasses[rounded]} ${shadowClasses[shadow]} ${hoverClasses} ${clickClasses} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`px-4 py-3 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = "",
}) => {
  return <div className={`px-4 py-3 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`px-4 py-3 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
