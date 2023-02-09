import React from "react";

const ArtistCard = ({ item }) => {
  return (
    <>
      <div className="bg-[#3b3b3b] max-w-[240px] max-h-[238px] flex flex-col items-center rounded-2xl py-3 px-4 gap-3">
        <div className="profile-rank flex">
          <span className="flex-initial">
            <img src={item.rank} alt="" />
          </span>
          <div>
            <img src={item.artistImage} alt="" />
          </div>
        </div>
        <div className="profile-name flex flex-col items-center gap-2">
          <p className=" text-white">{item.name}</p>
          <p className="text-[#858584]">
            Total Sales:{" "}
            <span className="text-white font-space-mono">
              {item.totalSales}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
