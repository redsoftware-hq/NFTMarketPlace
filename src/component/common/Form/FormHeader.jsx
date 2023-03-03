import React from 'react';
export default function FormHeader({ title }) {
  return (
    <div className="inline-grid gap-1 p-1">
      <h1 className="px-2 text-white text-4xl font-work-sans font-semibold">{title}</h1>
    </div>
  );
}
