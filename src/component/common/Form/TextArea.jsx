const TextArea = ({ name, register, rows, id }) => {
  return (
    <textarea
      id={id}
      className="p-3 rounded-2xl w-full caret-[#f15623] focus:accent-[#f15623]"
      rows={rows}
      {...register(name)}
    />
  );
};

export default TextArea;
