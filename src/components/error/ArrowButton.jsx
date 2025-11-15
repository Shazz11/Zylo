import React from 'react';
import { FaArrowLeft, FaHome, FaEnvelope } from 'react-icons/fa';

const ArrowButton = ({ 
  children, 
  variant = 'solid', 
  size = 'md', 
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = "rounded-lg font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantClasses = {
    solid: "bg-black text-white hover:bg-gray-800 active:scale-95",
    outline: "bg-white text-black border border-gray-300 hover:bg-gray-50 active:scale-95"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const iconSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={`${iconSize[size]} mr-2`}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={`${iconSize[size]} ml-2`}>{icon}</span>
      )}
    </button>
  );
};

export default ArrowButton;