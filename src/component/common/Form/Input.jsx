const Input = ({ name, type, placeholder, register, id }) => {
  return (
    <input
      id={id}
      type={type}
      className="p-3 rounded-2xl w-full caret-[#f15623] focus:accent-[#f15623]"
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default Input;
