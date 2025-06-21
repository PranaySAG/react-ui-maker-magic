
import React from 'react';

const SimpleButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = "primary",
  size = "medium"
}) => {
  const baseStyles = "font-medium rounded-lg transition-colors duration-200";
  
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
  };
  
  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
