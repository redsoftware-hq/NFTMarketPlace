import React from "react";
import Rocket from "../../assets/RocketLaunch.png";
import imagePlace from "../../assets/Image Placeholder.png";
import avatar from "../../assets/Avatar Placeholder.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="py-12">
        <div className="flex justify-between flex-col md:flex-row gap-5">
          <div className="space-y-5">
            <h1 className="text-white font-medium md:text-6xl text-2xl capitalize leading-8 md:leading-15 tracking-wide font-work-sans">
              Discover <br /> digital art & <br /> Collect NFTs
            </h1>

            <p className="text-white capitalize text-sm font-work-sans">
              NFT marketplace UI created with Anima for <br /> Figma. Collect,
              buy and sell art from more <br /> than 20k NFT artists.
            </p>
            <div>
              <button className="py-3 px-10 bg-[#A259FF] rounded-2xl flex items-center capitalize text-white text-xs md:text-lg gap-2">
                <img className="w-4 md:w-5" src={Rocket} alt="" /> get started
              </button>
            </div>

            <div className="flex items-center justify-between ">
              <p className="text-white font-light text-base capitalize font-work-sans">
                <span className="font-space-mono text-lg">240k+</span> <br />{" "}
                Total Sale
              </p>
              <p className="text-white font-light text-base capitalize font-work-sans">
                <span className="font-space-mono text-lg">100k+</span> <br />{" "}
                Auctions
              </p>
              <p className="text-white font-light text-base capitalize font-work-sans">
                <span className="font-space-mono text-lg">240k+</span> <br />{" "}
                Artists
              </p>
            </div>
          </div>

          <div className="">
            <div className="img-div">
              <img className="w-full object-cover" src={imagePlace} alt="" />
            </div>

            <div className=" bg-[#3b3b3b] text-white py-4 px-3 rounded-b-xl space-y-3">
              <h6 className="font-medium capitalize">space walking</h6>
              <div className="flex items-center gap-2">
                <span>
                  <img className="w-4" src={avatar} alt="" />
                </span>
                <span className="text-xs font-normal">Aminakid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
