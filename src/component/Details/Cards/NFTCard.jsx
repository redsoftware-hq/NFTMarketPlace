function NFTCard({ image, isAvailable }) {
  const availabilty = isAvailable ? "Available" : "Not Available";
  return (
    <div className="bg-[#3b3b3b] md:sticky md:top-0 md:left-0 rounded-2xl max-h-[365px] md:max-w-[49vw] md:max-h-[40vw] lg:max-h-[38vw] lg:max-w-[37vw]">
      <div className="h-[70vw] md:h-[35vw] lg:h-[35vw] lg:w-[37vw]">
        <img className="w-full h-full object-cover rounded-2xl" src={image} />
      </div>
      <span className="px-4 py-2 text-white font-space-mono font-semibold text-base float-right">
        {availabilty}
      </span>
    </div>
  );
}

export default NFTCard;
