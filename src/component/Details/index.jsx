import React from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import NFTCard from './Cards/NFTCard';
import { useParams } from 'react-router-dom';
import MakeOffer from './MakeOffer/MakeOffer';
import Bg from '../../assets/timersec/bg.png';
import { mintNft } from '../../apis/cryptoApi';
import Properties from './Properties/Properties';
import Shroomie from '../../assets/timersec/s.png';
import { discoverData } from '../../utils/DiscoverData';
import AvaliableListings from './AvailableListings/AvaliableListings';

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

  React.useEffect(() => {
    try {
      const mintNftRpcInvoke = async () => {
        const provider = new ethers.providers.Web3Provider(window?.ethereum, 'goerli');
        const requestAccounts = await provider.send('eth_requestAccounts', []);
        const network = await provider.getNetwork();
        const account = requestAccounts[0];

        const mintedNft = await mintNft({
          walletAddress: account,
          blockchain: 'IMXStarkEx_' + network.name,
        });
      };
      mintNftRpcInvoke();
    } catch (e) {
      console.log(e);
    }
  }, []);

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
