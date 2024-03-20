import React from 'react';

const Card = ({ children }) => {
  return (
    <div className='w-40 h-20 bg-red-300 grid place-items-center'>
      {children}
    </div>
  );
};

export default Card;
