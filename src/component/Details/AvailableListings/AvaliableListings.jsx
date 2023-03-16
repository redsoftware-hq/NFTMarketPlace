import React, { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { BiLineChart } from 'react-icons/bi';
import { FaEthereum } from 'react-icons/fa';

const listings = [
  {
    listedBy: '0x183e7b...d3b6',
    time: '3 hours',
    price: '0.003209396'
  },
  {
    listedBy: '0x183e7b...d3b6',
    time: '3 hours',
    price: '0.003209396'
  },
  {
    listedBy: '0x183e7b...d3b6',
    time: '3 hours',
    price: '0.003209396'
  }
];

const AvaliableListings = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div
      className="mt-5 my-2 sm:my-4 md:my-6 cursor-pointer bg-[#3b3b3b] rounded-2xl"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1 text-white text-base flex items-center gap-1">
          <span>
            <BiLineChart />
          </span>
          Price History
        </h5>
        <div className="flex-none pl-2">
          {expanded ? (
            <MdKeyboardArrowUp
              size={25}
              className="text-white rotate-0 transition-all duration-500 ease-in-out"
            />
          ) : (
            <MdKeyboardArrowUp
              size={25}
              className="text-white rotate-180 transition-all duration-500 ease-in-out"
            />
          )}
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        {listings &&
          listings.map((listing, index) => {
            return (
              <div
                key={index}
                className="bg-[#3b3b3b] rounded-2xl px-0 py-3 gap-3 flex items-center flex-wrap  justify-between w-full"
              >
                <div className="text-[#858584] font-work-sans text-sm lg:basis-3/5">
                  Listed by
                  <span className="text-white px-2 font-space-mono text-base">
                    {listing.listedBy}
                  </span>
                </div>
                <div className="text-white font-space-mono font-semibold text-base lg:text-xl flex items-center gap-1">
                  <span>
                    <FaEthereum />
                  </span>
                  {listing.price} ETH
                </div>
                <div className="text-[#858584] font-work-sans text-sm">{listing.time}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AvaliableListings;
