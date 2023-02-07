import React from "react";
import StoreFront from "../../assets/StoreFront.png";
import User from "../../assets/User.png";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="py-5 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navLogo flex items-center gap-2">
          <div className="">
            <img className="w-7 h-7" src={StoreFront} alt="" />
          </div>
          <p className="font-mono text-white font-bold text-xl">
            NFT Marketplace
          </p>
        </div>

        <div className="hidden">
          <div className="text-white flex items-center gap-5 font-medium font-work-sans space-x-5">
            <a href="#">Marketplace</a>
            <a href="#">Rankings</a>
            <a href="#">Connect a wallet</a>
            <button className="bg-[#A259FF] py-4 px-7 rounded-2xl flex items-center gap-2">
              <img className="w-5" src={User} alt="" /> Sign Up
            </button>
          </div>
        </div>
        <div>
          <CgMenuLeft className="text-white text-2xl" />
        </div>

        <div className="fixed flex flex-col left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-white pt-6  bg-[#2b2b2b]">
          <div className="navLogo flex items-center gap-2">
            <div className="">
              <img className="w-7 h-7" src={StoreFront} alt="" />
            </div>
            <p className="font-mono text-white font-bold text-xl">
              NFT Marketplace
            </p>
          </div>

          <div className="flex flex-col mt-8 text-center">
            <a className="p-4 border-b border-gray-800" href="#">
              Marketplace
            </a>
            <a className="p-4 border-b border-gray-800" href="#">
              Rankings
            </a>
            <a className="p-4 border-b border-gray-800" href="#">
              Connect a wallet
            </a>
          </div>
          <div className="flex justify-center mt-3 text-center">
            <button className="bg-[#A259FF] py-4 px-7 rounded-2xl flex items-center gap-2">
              <img className="w-5" src={User} alt="" /> Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
