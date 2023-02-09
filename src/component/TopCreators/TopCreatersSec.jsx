import React from "react";
import { artistsData } from "../../utils/artistsCollection";
import ArtistCard from "../Cards/ArtistCard";
import RocketPurple from "../../assets/icons/RocketLaunchPurple.png";

const TopCreatersSec = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="py-16 px-7 md:px-10 lg:px-20">
          <div className="text-white flex items-center justify-between">
            <div>
              <h4 className="capitalize text-lg md:text-3xl lg:text-4xl font-semibold tracking-wide">
                top creators
              </h4>
              <p className="capitalize text-sm md:text-xl tracking-wider mt-2">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>
            <div className="btn-div">
              <button className="py-3 px-10 bg-[#2b2b2b] border-2 border-[#A259FF] hover:text-[#A259FF] ease-in-out duration-300 rounded-2xl flex items-center capitalize text-white text-xs md:text-sm font-medium gap-2">
                <img className="w-4 md:w-5" src={RocketPurple} alt="" /> view
                rankings
              </button>
            </div>
          </div>

          <div className="creators-container">
            <div className="py-14 creators-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
              {artistsData &&
                artistsData.map((item, index) => {
                  return <ArtistCard key={index} item={item} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCreatersSec;
