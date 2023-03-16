import React from 'react';

const Input = ({ name, type, register, options = {}, show = true, placeholder = '' }) => {
  const opacity = show ? '' : 'opacity-0';
  return (
    <input
      id={name}
      type={type}
      className={`${opacity} p-3 rounded-2xl w-full caret-[#f15623] focus:accent-[#f15623]`}
      placeholder={placeholder}
      {...register(name, options)}
    />
  );
};

export default Input;
