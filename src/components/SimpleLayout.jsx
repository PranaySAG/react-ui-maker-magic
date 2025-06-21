
import React from 'react';

const SimpleLayout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto p-6">
        {children}
      </div>
    </div>
  );
};

export default SimpleLayout;
