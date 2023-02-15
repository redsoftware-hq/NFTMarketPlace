export default function PrimaryButton({ btnName }) {
  return (
    <button className="py-3 px-10 bg-[#A259FF] rounded-2xl capitalize text-white text-base md:text-lg gap-2">
      {btnName}
    </button>
  );
}
