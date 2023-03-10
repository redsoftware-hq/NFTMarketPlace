import React from 'react';

export default function ErrorMessage({ message, className = '' }) {
  return (
    <div>
      <p className={`${className} px-2 text-red-500 font-space-mono font-semibold`}>{message}</p>
    </div>
  );
}
