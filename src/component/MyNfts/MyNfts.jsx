import React, { useEffect } from 'react';
import DiscoverCard from '../Home/Cards/DiscoverCard';
import { discoverData } from '../../utils/DiscoverData';
import { ethers } from 'ethers';
import { contract } from '../../apis/redsoftContractAbi';
import axios from 'axios';
import { create } from 'ipfs-http-client';

let apiKey = '98cbaf5b71172582997a';
let secretApiKey = '7157138cbed6fe3dab8dd7b274d2c390d079e167d8132e8b1c7f78368c881148';

// const PINATA_API_ENDPOINT = 'https://api.pinata.cloud';
// const pinataApi = axios.create({
//   baseURL: PINATA_API_ENDPOINT,
//   headers: {
//     pinata_api_key: apiKey,
//     pinata_secret_api_key: secretApiKey
//   }
// });

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

const MyNfts = () => {
  async function fetchMetadata(ipfsUrl) {
    const cid = ipfsUrl.replace('ipfs://', '');
    const data = await ipfs.cat(cid);
    const metadata = JSON.parse(data.toString());
    return metadata;
  }

  const fetchNFT = async () => {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const requestAccounts = await provider.send('eth_requestAccounts', []);
    const account = requestAccounts[0];
    const signer = provider.getSigner();
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    const fetchNftMinted = await contractConnector.fetchNFTsMintedUser(account);

    let tk = fetchNftMinted[0].tokenId.toString();
    const tokenUri = await contractConnector.tokenURI(tk);
    console.log(tokenUri);

    fetchMetadata(tokenUri).then((data) => console.log(data));

    // const cid = tokenUri.replace('ipfs://', '');
    // const data = ipfs.cat(cid);
    // const metadata = JSON.parse(data.toString());
    // console.log(metadata);
  };

  useEffect(() => {
    fetchNFT();
  }, []);
  return (
    <section className="container mx-auto">
      <div className="py-12 px-8 md:px-12 lg:px-20">
        <div className="creators-container">
          <div className="mt-10 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {discoverData &&
              discoverData.map((item, index) => {
                return <DiscoverCard key={index} item={item} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyNfts;
