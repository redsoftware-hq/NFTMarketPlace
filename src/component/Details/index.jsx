import React from 'react';
import NFTCard from './Cards/NFTCard';
import { useParams } from 'react-router-dom';
import MakeOffer from './MakeOffer/MakeOffer';
import Bg from '../../assets/timersec/bg.png';
import Properties from './Properties/Properties';
import Shroomie from '../../assets/timersec/s.png';
import { discoverData } from '../../utils/DiscoverData';
import AvaliableListings from './AvailableListings/AvaliableListings';
import { collectionList } from '../../utils/TrendingCollections';

function Details() {
  window.scrollTo(0, 0);
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

  const allCollectionNFTs = collectionList.reduce((acc, item) => {
    return acc.concat(
      item.nftList.map((nftItem) => {
        return {
          id: nftItem.id,
          image: nftItem.image,
          imgTitle: item.imgTitle,
          avatar: item.avatar,
          avatarName: item.avatarName,
          price: item.price,
          highestBid: item.highestBid,
          fiatPrice: item.fiatPrice
        };
      })
    );
  }, []);

  let data = [...discoverData];
  data.push(HIGHLIGHTED_NFT, ...allCollectionNFTs);
  let nft = data.find((item) => item.id == urlParams.id);

  return (
    <section className="flex flex-col p-2 gap-4 md:flex-row lg:justify-between m-auto max-w-[1280px]">
      <NFTCard image={nft.image} isAvailable={nft.isAvailable} />
      <div className="md:w-3/6 mt-1">
        <MakeOffer nft={nft} />
        <Properties />
        <AvaliableListings />
      </div>
    </section>
  );
}

export default Details;
