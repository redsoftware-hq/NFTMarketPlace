const ArtistCard = ({ item }) => {
  return (
    <div className="bg-[#3b3b3b] w-full h-full flex lg:flex-col items-center rounded-2xl p-4 gap-3 hover:scale-105 duration-300 cursor-pointer">
      <div className="relative profile-rank flex">
        <span className="absolute top-[-5px] left-[-10px] lg:left-[-40px] lg:top-0">
          <img className="w-7" src={item.rank} alt="" />
        </span>
        <div>
          <img className="w-14 lg:w-24 xl:w-28" src={item.artistImage} alt="" />
        </div>
      </div>
      <div className="profile-name flex flex-col lg:items-center pb-0">
        <p className="text-xl font-semibold text-white">{item.name}</p>
        <p className="text-[#858584] lg:text-sm mt-3">
          Total Sales: <span className="text-white font-space-mono">{item.totalSales}</span>
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
