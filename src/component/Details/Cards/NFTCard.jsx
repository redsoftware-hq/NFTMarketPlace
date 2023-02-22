function NFTCard({ image, isAvailable }) {
  const availabilty = isAvailable ? "Available" : "Not Available";
  return (
    <div className=" bg-[#3b3b3b] rounded-2xl md:basis-1/2 md:sticky md:top-0 md:left-0 max-w-[415px] max-h-fit md:max-h-[375px] lg:max-w-[475px] lg:max-h-[445px] xl:max-w-[575px] xl:max-h-[535px]">
      <div className="h-5/6">
        <img className="w-full h-full object-cover rounded-t-2xl" src={image} />
      </div>
      <div className="h-1/6 text-white font-space-mono font-semibold text-base flex justify-end items-center w-full p-3">
        {availabilty}
      </div>
    </div>
  );
}

export default NFTCard;
