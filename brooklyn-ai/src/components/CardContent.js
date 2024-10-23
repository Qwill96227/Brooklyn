import React from 'react';

const CardContent = ({ children, className }) => {
  return (
    <div className={`bg-white ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;