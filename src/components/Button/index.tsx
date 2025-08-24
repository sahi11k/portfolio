import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string; // for link buttons
  icon?: ReactNode;
}

const variantClasses = {
  primary: "bg-black text-white shadow-md hover:bg-neutral-800",
  secondary:
    "bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-100",
  text: "bg-transparent text-neutral-900 hover:opacity-50 transition-opacity",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  href,
  icon,
}) => {
  const baseClasses =
    "text-base font-medium transition-all flex items-center justify-center gap-1 cursor-pointer";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        className={combinedClasses}
        rel="noopener noreferrer"
      >
        {children}
        {icon && icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;
