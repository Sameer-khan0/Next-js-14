import React from 'react';

const Card = ({ children, maxWidth = '600px', maxHeight = 'auto', padding = '20px' }) => {
  return (
    <div
      className={`w-full rounded-lg overfile-sc shadow-lg flex items-center justify-center gap-4 overflow-hidden md:flex-col md:items-start md:justify-between`}
      style={{ maxWidth, maxHeight, padding }}
    >
      <div className="text-center md:text-left">{children}</div>
    </div>
  );
};

export default Card;
