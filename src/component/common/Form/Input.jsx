import React from 'react';

const Input = ({
  name,
  type,
  register,
  options = {},
  show = true,
  placeholder = '',
  handleFileChange
}) => {
  const opacity = show ? '' : 'opacity-0';
  return (
    <input
      id={name}
      type={type}
      className={`${opacity} rounded-2xl caret-[#f15623] focus:accent-[#f15623]`}
      placeholder={placeholder}
      {...register(name, options)}
      onChange={handleFileChange}
    />
  );
};

export default Input;
