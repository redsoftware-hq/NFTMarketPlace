import React from 'react';
import axios from 'axios';
import NFTCard from './Cards/NFTCard';
import { useParams } from 'react-router-dom';
import MakeOffer from './MakeOffer/MakeOffer';
import Bg from '../../assets/timersec/bg.png';
import Properties from './Properties/Properties';
import Shroomie from '../../assets/timersec/s.png';
import { discoverData } from '../../utils/DiscoverData';
import AvailableListings from './AvailableListings/AvailableListings';

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

  React.useEffect(async () => {
    const url =  'https://dev-cryptoapi.metajuice.link/v2';
    const payload = {
      jsonrpc: '2.0',
      method: 'upload_mint_transfer',
      id: '1',
      params: [
        {
          wallet: {
            walletAddress: '0xe4514d6bC3D32d69693c00BDe5F77f9ba58F4EcD',
            blockchain: {
              name: 'Ethereum_goerli',
            },
          },
        },
        {
          image: {
            name: '1.png',
            data: '',
          },
        },
        {
          text: {
            name: '1',
            data: JSON.stringify({
              name: 'Ape Collection #1',
              description: 'This is a unique Ape collection.',
              Background: 'Soft Pink',
              Head: 'Head5',
              'Head Uppar': 'winter cap',
              Shirt: 'Shirt1',
            }),
          },
        },
      ],
    };
    const mintNft = async () => {
      axios.post(url, payload, {
        headers: {
          'x-api-key': '216ggx2qQJ1w4c02cKtfF5bE0f4bvBsB47DpGT4o'
        }
      });
    };
    await mintNft();
  }, []);

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
