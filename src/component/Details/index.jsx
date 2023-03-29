import React from 'react';
import NFTCard from './Cards/NFTCard';
import { useNavigate, useParams } from 'react-router-dom';
import MakeOffer from './MakeOffer/MakeOffer';
import Bg from '../../assets/timersec/bg.png';
import Properties from './Properties/Properties';
import Shroomie from '../../assets/timersec/s.png';
import { discoverData } from '../../utils/DiscoverData';
import AvaliableListings from './AvailableListings/AvaliableListings';
import { collectionList } from '../../utils/TrendingCollections';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { contract } from '../../apis/redsoftContractAbi';
import axios from 'axios';
import Toast from '../common/Toast';

function Details() {
  window.scrollTo(0, 0);

  const [seletedNft, setSelectedNft] = React.useState([]);
  const [listedNftList, setListedNftList] = React.useState([]);
  const urlParams = useParams();

  const [toastMessage, setToastMessage] = React.useState('');
  const navigate = useNavigate();
  const redirectCallback = () => {
    navigate('/mynfts');
  };

  async function fetchListedNFT() {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const requestAccounts = await provider.send('eth_requestAccounts', []);
    const account = requestAccounts[0];
    const signer = provider.getSigner();
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    const fetchNftListed = await contractConnector.fetchNFTsListedUser(account);

    // let tokenIds = fetchNftListed.map((item) => item.tokenId.toString());

    for (const nft of fetchNftListed) {
      const regex = /\/([^/]+)$/;
      let tokenId = nft?.tokenId.toString();
      let price = parseFloat(ethers.utils.formatEther(nft?.price));
      const tokenUri = await contractConnector.tokenURI(tokenId);
      const match = tokenUri.match(regex);

      let fetchMetadata = await axios.get(`https://ipfs.io/ipfs/${match[1]}`);
      const newListedNftData = { tokenId, metadata: fetchMetadata?.data, price };
      setListedNftList((prev) => [...prev, newListedNftData]);
    }

    // for(const nft of fetchNftListed)

    // if (fetchNftListed) {
    //   for (const nft of fetchNftListed) {
    //     const regex = /\/([^/]+)$/;
    //     let tokenId = nft?.tokenId.toString();
    //     let price = parseFloat(ethers.utils.formatEther(nft?.price));
    //     const tokenUri = await contractConnector.tokenURI(tokenId);

    //     const match = tokenUri.match(regex);

    //     if (tokenUri) {
    //       let fetchMetadata = await axios.get(`https://ipfs.io/ipfs/${match[1]}`);
    //       const newListedNftData = { tokenId, metadata: fetchMetadata?.data, price };

    //       setListedNftList((prev) => [...prev, newListedNftData]);
    //     }
    //   }
    // }
  }

  useEffect(() => {
    fetchListedNFT();
  }, []);

  let nft = listedNftList.find((item) => item.tokenId == urlParams.id);

  return (
    <section className="flex flex-col p-2 gap-4 md:flex-row lg:justify-between m-auto max-w-[1280px]">
      <NFTCard image={nft?.metadata?.imageUrl} isAvailable={'available'} />
      <div className="md:w-3/6 mt-1">
        <MakeOffer nft={nft} setToastMessage={setToastMessage} />
        <Properties />
        <AvaliableListings />
        {toastMessage !== '' && (
          <Toast type="success" message={toastMessage} callback={redirectCallback} />
        )}
      </div>
    </section>
  );
}

export default Details;
