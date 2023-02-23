import React from 'react';
import Yt from '../../assets/FooterSec/yt.png';
import logo from '../../assets/icons/logo-metajuice.png';
import Discord from '../../assets/FooterSec/discord.png';
import Twitter from '../../assets/FooterSec/twitter.png';
import Instagram from '../../assets/FooterSec/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-[#3b3b3b]">
      <div className="container mx-auto mt-5">
        <div className="py-10 px-7 md:px-10 lg:px-20 ">
          <div className="main-container flex flex-col lg:flex-row lg:justify-between gap-6">
            <div className="conatiner-1 text-white">
              <div className="img-title flex items-center gap-2 cursor-pointer">
                <div className="w-[213px] h-[2rem]">
                  <img className="w-full h-full" src={logo} alt="" />
                </div>
              </div>
              <div className="social-div text-[#cccc] mt-5 space-y-3">
                <p className="text-lg font-bold">NFT Marketplace.</p>
                <div className="space-y-2">
                  <p>Join our community</p>
                  <div className="flex items-center gap-2">
                    <span className="cursor-pointer">
                      <img src={Discord} alt="" />
                    </span>
                    <span className="cursor-pointer">
                      <img src={Yt} alt="" />
                    </span>
                    <span className="cursor-pointer">
                      <img src={Twitter} alt="" />
                    </span>
                    <span className="cursor-pointer">
                      <img src={Instagram} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-2">
              <h6 className="text-white text-lg font-medium font-space-mono">Explore</h6>
              <div className="text-[#cccc] text-sm mt-5 space-y-3">
                <p className="cursor-pointer hover:text-white duration-300">Marketplace</p>
                <p className="cursor-pointer hover:text-white duration-300">Rankings</p>
                <p className="cursor-pointer hover:text-white duration-300">Connect a wallet</p>
              </div>
            </div>

            <div className="container-3">
              <div className="text-white lg:flex flex-col justify-center space-y-3">
                <h6 className="capitalize font-space-mono text-lg font-medium">
                  join our weekly digest
                </h6>
                <p className="text-[#cccc] text-sm">
                  Get exclusive promotions & updates straight to your inbox.
                </p>
                <form action="">
                  <div className="flex flex-col lg:flex-row mt-5 gap-3 md:gap-0 md:relative md:w-[420px]">
                    <div className="grow">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                        className="w-full px-5 py-2 md:py-3 placeholder-[#2b2b2b] placeholder:text-sm focus:outline-none focus:border-[#F15623] rounded-2xl bg-white text-[#2b2b2b]"
                      />
                    </div>
                    <div className="md:absolute right-0">
                      <button
                        type="submit"
                        className="flex w-full lg:text-base items-center justify-center gap-2 rounded-2xl bg-[#F15623] px-14 py-2 md:py-3 md:px-14">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
