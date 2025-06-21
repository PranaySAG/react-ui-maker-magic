
import React from 'react';

const SimpleCard = ({ 
  title, 
  children, 
  className = "",
  gradient = "blue"
}) => {
  const gradients = {
    blue: "bg-gradient-to-r from-blue-400 to-blue-500",
    purple: "bg-gradient-to-r from-purple-400 to-purple-500",
    orange: "bg-gradient-to-r from-orange-400 to-orange-500",
    pink: "bg-gradient-to-r from-pink-400 to-pink-500"
  };
  
  return (
    <div className={`${gradients[gradient]} text-white p-6 rounded-xl ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
};

export default SimpleCard;
