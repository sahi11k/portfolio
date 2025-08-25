import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string; // for link buttons
  icon?: ReactNode;
}

const variantClasses = {
  primary: "bg-text-base text-bg-surface hover:opacity-70",
  secondary:
    "bg-transparent border-[1.5px] border-text-muted text-text-muted hover:text-text-base hover:border-text-base",
  text: "bg-transparent text-text-base underline underline-offset-8",
  icon: "bg-transparent text-text-muted hover:text-text-base !p-0",
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
    "text-base text-xl rounded-full font-medium transition-all flex items-center justify-center gap-1 cursor-pointer duration-300";

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
