export default function PrimaryButton({ btnName, className }) {
  return (
    <button
      className={`${className} py-3 px-10 bg-[#F15623] rounded-2xl capitalize text-white text-base md:text-lg gap-2`}
    >
      {btnName}
    </button>
  );
}
