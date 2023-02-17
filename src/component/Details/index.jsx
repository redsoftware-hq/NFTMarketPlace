import NFTCard from "./Cards/NFTCard";
import MakeOffer from "./MakeOffer/MakeOffer";
import Properties from "./Properties/Properties";
import AvailableListings from "./AvailableListings/AvailableListings";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const nft = location.state.item;
  return (
    <>
      <section className="flex flex-col p-2 gap-4 md:flex-row lg:justify-between m-auto max-w-[1280px]">
        <NFTCard image={nft.image} isAvailable={nft.isAvailable} />
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
