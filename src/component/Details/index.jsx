import React from 'react';
import NFTCard from './Cards/NFTCard';
import { useNavigate, useParams } from 'react-router-dom';
import MakeOffer from './MakeOffer/MakeOffer';
import Properties from './Properties/Properties';
import AvaliableListings from './AvailableListings/AvaliableListings';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { contract } from '../../apis/redsoftContractAbi';
import axios from 'axios';
import Toast from '../common/Toast';

function Details() {
  window.scrollTo(0, 0);
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
