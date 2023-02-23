import NFTCard from './Cards/NFTCard';
import MakeOffer from './MakeOffer/MakeOffer';
import Properties from './Properties/Properties';
import AvailableListings from './AvailableListings/AvailableListings';
import Bg from '../../assets/timersec/bg.png';
import Shroomie from '../../assets/timersec/s.png';
import { useParams } from 'react-router-dom';
import { discoverData } from '../../utils/DiscoverData';

function Details() {
  const urlParams = useParams();
  const HIGHLIGHTED_NFT = {
    id: 'higlighted-nft',
    image: Bg,
    imgTitle: 'Magic Mushrooms',
    avatar: Shroomie,
    avatarName: 'Shroomie',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
    fiatPrice: '4.95',
    isAvailabe: true
  };
  let data = [...discoverData];
  data.push(HIGHLIGHTED_NFT);
  let nft = data.find((item) => item.id == urlParams.id);
  return (
    <>
      <section className="flex flex-col p-2 gap-4 md:flex-row lg:justify-between m-auto max-w-[1280px]">
        <NFTCard image={nft.image} isAvailable={nft.isAvailable} />
        <div className="md:w-3/6 mt-1">
          <MakeOffer nft={nft} />
          <AvailableListings />
          <Properties />
        </div>
      </section>
    </>
  );
}

export default Details;
