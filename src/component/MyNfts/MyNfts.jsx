import axios from 'axios';
import { ethers } from 'ethers';
import React, { useEffect } from 'react';
import DiscoverCard from '../Home/Cards/DiscoverCard';
import { discoverData } from '../../utils/DiscoverData';
import { contract } from '../../apis/redsoftContractAbi';

const MyNfts = () => {
  const [mintedNftList, setMintedNftList] = React.useState([]);

  const fetchNFT = async () => {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const requestAccounts = await provider.send('eth_requestAccounts', []);
    const account = requestAccounts[0];
    const signer = provider.getSigner();
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    const fetchNftMinted = await contractConnector.fetchNFTsMintedUser(account);

    if (fetchNftMinted) {
      for (const nft of fetchNftMinted) {
        let tokenId = nft?.tokenId.toString();
        const tokenUri = await contractConnector.tokenURI(tokenId);
        const regex = /\/([^/]+)$/;

        const match = tokenUri.match(regex);

        if (tokenUri) {
          let fetchMetadata = await axios.get(`https://ipfs.io/ipfs/${match[1]}`);
          const newMintedNftData = { tokenId, metadata: fetchMetadata?.data };

          setMintedNftList((prev) => [...prev, newMintedNftData]);
        }
      }
      // fetchNftMinted.map(async (i) => {
      //   let tokenId = i?.tokenId.toString();
      //   const tokenUri = await contractConnector.tokenURI(tokenId);
      //   const tokenIpfsCid = tokenUri.replace('ipfs://', '');

      //   if (tokenIpfsCid) {
      //     let fetchMetadata = await axios.get(
      //       `https://ipfs.io/ipfs/${tokenIpfsCid}`
      //     )?.data;

      //     console.log(fetchMetadata);
      //   }
      // });
    }
  };

  useEffect(() => {
    fetchNFT();
  }, []);

  return (
    <section className="container mx-auto">
      <div className="py-12 px-8 md:px-12 lg:px-20">
        <div className="creators-container">
          <div className="mt-10 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mintedNftList.length &&
              mintedNftList.map((item, index) => {
                return <DiscoverCard key={index} item={item} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyNfts;
