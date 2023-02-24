const TextArea = ({ name, register, rows, id, options = {} }) => {
  return (
    <textarea
      id={id}
      className="p-3 rounded-2xl w-full caret-[#f15623] focus:accent-[#f15623]"
      rows={rows}
      {...register(name, options)}
    />
  );
};

export default TextArea;
