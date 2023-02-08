import React, { useState } from "react";
import StoreFront from "../../assets/StoreFront.png";
import User from "../../assets/User.png";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <nav className="py-5 px-6">
      <div className="flex justify-between items-center">
        <div className="navLogo flex items-center gap-2">
          <div className="">
            <img className="w-7 h-7" src={StoreFront} alt="" />
          </div>
          <p className="font-mono text-white font-bold text-xl">
            NFT Marketplace
          </p>
        </div>

        <div className="hidden md:flex">
          <div className="text-white flex items-center gap-5 font-medium font-work-sans space-x-5">
            <a href="#">Marketplace</a>
            <a href="#">Rankings</a>
            <a href="#">Connect a wallet</a>
            <button className="bg-[#A259FF] py-4 px-7 rounded-2xl flex items-center gap-2">
              <img className="w-5" src={User} alt="" /> Sign Up
            </button>
          </div>
        </div>
        <div className="block md:hidden" onClick={handleNav}>
          {!nav ? (
            <AiOutlineClose className="text-white text-2xl" />
          ) : (
            <CgMenuLeft className="text-white text-2xl" />
          )}
          {/* <CgMenuLeft className="text-white text-2xl" /> */}
        </div>

        <div
          className={
            !nav
              ? "fixed flex flex-col left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-white pt-6 ease-in-out duration-500  bg-[#2b2b2b]"
              : "fixed left-[-100%]"
          }
        >
          {/* <div className="navLogo flex items-center gap-2 mx-5 ">
            <div className="">
              <img className="w-7 h-7" src={StoreFront} alt="" />
            </div>
            <p className="font-mono text-white font-bold text-xl">
              NFT Marketplace
            </p>
          </div> */}

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
