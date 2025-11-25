import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-normal uppercase tracking-widest transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed border";
  
  const variants = {
    primary: "bg-black border-black text-brand-300 hover:bg-brand-300 hover:text-black",
    secondary: "bg-transparent border-black text-black hover:bg-black hover:text-brand-300",
    inverse: "bg-brand-300 border-brand-300 text-black hover:bg-black hover:text-brand-300 hover:border-black", 
    outline: "bg-transparent border-current text-current hover:bg-current hover:text-brand-300",
    ghost: "bg-transparent border-transparent text-black hover:bg-brand-200",
  };

  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-12 py-4 text-base",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} rounded-none`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;