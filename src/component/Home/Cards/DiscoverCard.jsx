import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropdownMenu from '../../common/DropdownMenu';
import { BsThreeDotsVertical } from 'react-icons/bs';

const DiscoverCard = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/marketplace/${item?.tokenId}`);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  function buttonClicked(e) {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  }

  return (
    <div className="w-full hover:scale-[1.03] duration-300 cursor-pointer" onClick={handleClick}>
      <div className="relative">
        <img className="w-full h-80 rounded-t-2xl" src={item?.imageUrl} alt="" />
        {location.pathname !== '/' && (
          <BsThreeDotsVertical
            size={25}
            className="absolute top-5 right-5 text-white bg-[#3b3b3b] rounded-full p-1 hover:bg-[#575757]"
            onClick={buttonClicked}
          />
        )}
        {dropdown && <DropdownMenu />}
      </div>
      <div className="bg-[#3b3b3b] rounded-b-2xl py-5 px-7 space-y-5">
        <div className="text-white">
          <p className="text-xl font-bold">{item?.name}</p>
          <p className="text-xl font-bold">{item?.description}</p>
          {/* <p className="pt-2 flex items-center gap-3">
            <span>
              <img src={item.avatar} alt="" />
            </span>
            <span className="font-space-mono">{item.avatarName}</span>
          </p> */}
        </div>

        {/* <div className="font-space-mono flex justify-between">
          <div className="price-div ">
            <span className="text-[#858584] text-xs">Price</span>
            <p className="text-white">{item.price}</p>
          </div>
          <div className="bid-div">
            <span className="capitalize text-[#858584] text-xs">highest bid</span>
            <p className="text-white">{item.highestBid}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DiscoverCard;
