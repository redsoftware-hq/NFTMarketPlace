import AvailableListings from "../component/AvailableListings/AvailableListings";
import NFTCard from "../component/Cards/NFTCard";
import MakeOffer from "../component/MakeOffer/MakeOffer";
import Navbar from "../component/Navbar/Navbar";
import Properties from "../component/Properties/Properties";
const nft = {
  artistName: "Shroomie",
  artistAvatar: "/img/details/a1.png",
  name: "Magic Mushrooms",
  content: "/img/details/bg.png",
  price: "0.0031937",
  fiatPrice: "4.95",
  isAvailable: true,
};
function Details() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col p-2 gap-4 md:flex-row lg:justify-between m-auto max-w-[1280px]">
        <NFTCard content={nft.content} isAvailable={nft.isAvailable} />
        <div className="md:w-3/6">
          <MakeOffer nft={nft} />
          <AvailableListings />
          <Properties />
        </div>
      </div>
    </>
  );
}

export default Details;
