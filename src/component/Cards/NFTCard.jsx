function NFTCard({ content, isAvailable }) {
  const availabilty = isAvailable ? "Available" : "Not Available";
  return (
    <div className="bg-[#3b3b3b] md:sticky md:top-0 md:left-0 rounded-2xl max-h-[365px]  lg:max-h-[57vh] lg:max-w-[40vw]">
      <div className="h-[60vw] md:h-[30vh] lg:h-[50vh] lg:w-[40vw]">
        <img
          className="w-full h-full bg-cover bg-center rounded-2xl"
          src={content}
        />
      </div>
      <span className="px-4 py-2 text-white font-space-mono font-semibold text-base float-right">
        Available
      </span>
    </div>
  );
}

export default NFTCard;
