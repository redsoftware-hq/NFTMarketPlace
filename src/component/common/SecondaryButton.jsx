function SecondaryButton({ btnName }) {
  return (
    <button className="py-3 px-10 bg-[#2b2b2b] border-2 border-[#A259FF] hover:text-[#A259FF] ease-in-out duration-300 rounded-2xl capitalize text-white text-base font-medium">
      {btnName}
    </button>
  );
}

export default SecondaryButton;
