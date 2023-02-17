import NFTCard from "./Cards/NFTCard";
import nftContent from "../../assets/details/bg.png";
import artistAvatar from "../../assets/details/a1.png";
import MakeOffer from "./MakeOffer/MakeOffer";
import Properties from "./Properties/Properties";
import AvailableListings from "./AvailableListings/AvailableListings";

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
