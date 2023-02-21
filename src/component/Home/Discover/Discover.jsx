import DiscoverCard from "../Cards/DiscoverCard";
import { discoverData } from "../../../utils/DiscoverData";
import PurpleEye from "../../../assets/discoverSec/Eye.png";

const Discover = () => {
  return (
    <section className="container mx-auto">
      <div className="py-12 px-8 md:px-12 lg:px-20">
        <div className="text-white flex items-center justify-between mt-10">
          <div>
            <h4 className="capitalize text-3xl md:text-4xl font-semibold tracking-wide">
              discover more NFTs
            </h4>
            <p className="capitalize text-base md:text-lg mt-3">
              explore new trending NFTs
            </p>
          </div>
          <button className="py-3 px-10 hidden md:flex bg-[#2b2b2b] border-2 border-[#F15623] hover:text-[#F15623] ease-in-out duration-300 rounded-2xl items-center capitalize text-white text-xs md:text-sm font-medium gap-2">
            <img className="w-4 md:w-5" src={PurpleEye} alt="" /> see all
          </button>
        </div>

        <div className="creators-container">
          <div className="mt-10 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {discoverData &&
              discoverData.map((item, index) => {
                return <DiscoverCard key={index} item={item} />;
              })}
          </div>
          <div>
            <button className="w-full mt-8 py-5 px-10 flex items-center justify-center md:hidden lg:hidden bg-[#2b2b2b] border-2 border-[#F15623] hover:text-[#F15623] ease-in-out duration-300 rounded-2xl capitalize text-white text-sm font-semibold gap-2 lg:mr-8">
              <img className="w-4 md:w-5" src={PurpleEye} alt="" /> view
              rankings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
