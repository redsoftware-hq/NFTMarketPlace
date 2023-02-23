const CollectionCard = ({ item }) => {
  return (
    <div className="card-1 grid grid-flow-row w-full h-full gap-2 hover:brightness-90 hover:scale-105 duration-300 cursor-pointer">
      <div className="">
        <img className="w-full" src={item?.url} alt="" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <img className="w-full" src={item?.thumbnailOne} alt="" />
        </div>
        <div>
          <img className="w-full" src={item?.thumbnailTwo} alt="" />
        </div>
        <div className="w-full bg-[#F15623] text-white rounded-2xl flex items-center justify-center font-space-mono font-bold text-lg">
          {item.collectionSize}
        </div>
      </div>
      <div className="artist-info text-white">
        <p className="font-medium text-lg tracking-wider">{item.design}</p>
        <div className="flex items-center gap-2 mt-2">
          <span>
            <img className="w-5" src={item.avatar} alt="" />
          </span>
          <span>{item.artistName}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
