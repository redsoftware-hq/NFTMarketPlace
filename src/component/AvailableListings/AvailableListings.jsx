const listings = [
  {
    listedBy: "0x183e7b...d3b6",
    time: "3 hours",
    price: "0.003209396",
  },
  {
    listedBy: "0x183e7b...d3b6",
    time: "3 hours",
    price: "0.003209396",
  },
  {
    listedBy: "0x183e7b...d3b6",
    time: "3 hours",
    price: "0.003209396",
  },
];

function AvailableListings() {
  return (
    <div className="py-2">
      <div className="flex p-2 items-center justify-between">
        <h4 className="text-white font-work-sans text-base lg:text-lg font-light">
          Available Listings
        </h4>
        <span className="text-[#858584] text-xs">Last updated moments ago</span>
      </div>
      <div className="flex flex-col gap-3 items-center px-2 lg:items-start">
        {listings &&
          listings.map((listing, index) => {
            return (
              <div
                key={index}
                className="bg-[#3b3b3b] rounded-2xl p-4 gap-3 flex items-center flex-wrap  justify-between  max-w-[330px] md:max-w-[500px] lg:w-full lg:max-w-[620px]"
              >
                <div className="text-[#858584] font-work-sans text-sm basis-3/5">
                  Listed by
                  <span className="text-white px-2 font-space-mono text-base">
                    {listing.listedBy}
                  </span>
                </div>
                <div className="text-white font-space-mono font-semibold text-base lg:text-xl">
                  {listing.price} ETH
                </div>
                <div className="text-[#858584] font-work-sans text-sm">
                  {listing.time}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AvailableListings;
