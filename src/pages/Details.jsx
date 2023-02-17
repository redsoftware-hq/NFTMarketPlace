import AvailableListings from "../component/AvailableListings/AvailableListings";
import NFTCard from "../component/Cards/NFTCard";
import MakeOffer from "../component/MakeOffer/MakeOffer";
import Properties from "../component/Properties/Properties";
import artistAvatar from "../assets/details/a1.png";
import nftContent from "../assets/details/bg.png";
const nft = {
  artistName: "Shroomie",
  artistAvatar: artistAvatar,
  name: "Magic Mushrooms",
  content: nftContent,
  price: "0.0031937",
  fiatPrice: "4.95",
  isAvailable: true,
};
function Details() {
  return (
    <>
      <section className="flex flex-col p-2 gap-4 md:flex-row lg:justify-between m-auto max-w-[1280px]">
        <NFTCard content={nft.content} isAvailable={nft.isAvailable} />
        <div className="md:w-3/6">
          <MakeOffer nft={nft} />
          <AvailableListings />
          <Properties />
        </div>
      </section>
    </>
  );
}

export default Details;
