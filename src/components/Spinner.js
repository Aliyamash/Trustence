'use client';

import React from 'react';

const Spinner = ({ size = 'w-10 h-10', color = 'border-t-blue-500' }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className={`${size} ${color} border-4 border-gray-200 rounded-full animate-spin`} />
    </div>
  );
};

export default Spinner;