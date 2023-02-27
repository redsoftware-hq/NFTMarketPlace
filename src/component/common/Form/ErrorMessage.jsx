import React from 'react';

export default function ErrorMessage({ message }) {
  return <p className="px-2 text-red-500 font-space-mono font-semibold">{message}</p>;
}
