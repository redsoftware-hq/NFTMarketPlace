import React from 'react';
import { useNavigate } from 'react-router-dom';

const CollectionCard = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/marketplace/${id}`);
  const handleNFTNumberClick = () => navigate(`/collections/${item.id}`);
  return (
    <div className="card-1 grid grid-flow-row w-full h-full gap-2">
      <div
        className="hover:brightness-90 hover:scale-[1.01] duration-300 cursor-pointer"
        onClick={() => {
          handleClick(item.nftList[0].id);
        }}>
        <img className="w-full" src={item.nftList[0].image} alt="" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div
          className="hover:brightness-90 hover:scale-[1.03] duration-300 cursor-pointer"
          onClick={() => {
            handleClick(item.nftList[1].id);
          }}>
          <img className="w-full" src={item.nftList[1].image} alt="" />
        </div>
        <div
          className="hover:brightness-90 hover:scale-[1.03] duration-300 cursor-pointer"
          onClick={() => {
            handleClick(item.nftList[2].id);
          }}>
          <img className="w-full" src={item.nftList[2].image} alt="" />
        </div>
        <div
          className="w-full bg-[#F15623] text-white rounded-2xl flex items-center justify-center font-space-mono font-bold text-lg hover:brightness-90 hover:scale-[1.03] duration-300 cursor-pointer"
          onClick={handleNFTNumberClick}>
          {item.collectionSize}
        </div>
      </div>
      <div className="artist-info text-white">
        <p className="font-medium text-lg tracking-wider">{item.imgTitle}</p>
        <div className="flex items-center gap-2 mt-2 cursor-pointer">
          <span>
            <img className="w-5" src={item.avatar} alt="" />
          </span>
          <span>{item.avatarName}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
