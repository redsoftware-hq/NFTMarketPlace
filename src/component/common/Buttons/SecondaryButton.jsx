function SecondaryButton({ btnName, className, handleClick, type }) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${className} py-3 px-10 bg-[#2b2b2b] border-2 border-[#F15623] hover:text-[#F15623] ease-in-out duration-300 rounded-2xl capitalize text-white text-base font-medium`}
    >
      {btnName}
    </button>
  );
}

export default SecondaryButton;
