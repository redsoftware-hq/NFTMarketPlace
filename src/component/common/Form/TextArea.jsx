import React from 'react';

const TextArea = ({ name, register, rows, options = {}, placeholder }) => {
  return (
    <textarea
      id={name}
      className="p-3 rounded-2xl w-full caret-[#f15623] focus:accent-[#f15623]"
      rows={rows}
      placeholder={placeholder}
      {...register(name, options)}
    />
  );
};

export default TextArea;
