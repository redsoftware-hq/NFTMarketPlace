import React from "react";

const DiscoverCard = ({ item }) => {
  return (
    <>
      <div className="w-full hover:scale-105 duration-300 cursor-pointer">
        <div>
          <img className="w-full" src={item.image} alt="" />
        </div>
        <div className="bg-[#3b3b3b] rounded-b-2xl py-5 px-7 space-y-5">
          <div className="text-white">
            <p className="text-xl font-bold">{item.imgTitle}</p>
            <p className="pt-2 flex items-center gap-3">
              <span>
                <img src={item.avatar} alt="" />
              </span>
              <span className="font-space-mono">{item.avatarName}</span>
            </p>
          </div>

          <div className="font-space-mono flex justify-between">
            <div className="price-div ">
              <span className="text-[#858584] text-xs">Price</span>
              <p className="text-white">{item.price}</p>
            </div>
            <div className="bid-div">
              <span className="capitalize text-[#858584] text-xs">
                highest bid
              </span>
              <p className="text-white">{item.highestBid}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
