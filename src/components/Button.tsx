import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
}
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary'
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'text-white bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 shadow-sm hover:shadow-md focus:ring-red-700',
    secondary: 'text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 shadow-sm hover:shadow-md focus:ring-gray-700',
    outline: 'text-red-800 bg-transparent border-red-800 hover:bg-red-50 focus:ring-red-700'
  };
  return <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>;
};