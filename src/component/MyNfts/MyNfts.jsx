import axios from 'axios';
import { ethers } from 'ethers';
import Modal from '../common/Modal';
import React, { useEffect } from 'react';
import ModalInput from '../ModalInput/ModalInput';
import DiscoverCard from '../Home/Cards/DiscoverCard';
import { contract } from '../../apis/redsoftContractAbi';
import Toast from '../common/Toast';
import { useNavigate } from 'react-router-dom';

const MyNfts = () => {
  const [visible, setVisible] = React.useState(false);
  const [modalTokenId, setModalTokenId] = React.useState();
  const [mintedNftList, setMintedNftList] = React.useState([]);
  const [listedNftList, setListedNftList] = React.useState([]);
  const [allNftist, setAlldNftList] = React.useState([]);
  const [allBroughtedNft, setAllBroughtedNft] = React.useState([]);

  const [toastMessage, setToastMessage] = React.useState('');
  const navigate = useNavigate();
  const redirectCallback = () => {
    navigate('/mynfts');
  };

  const fetchNFT = async () => {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const requestAccounts = await provider.send('eth_requestAccounts', []);
    const account = requestAccounts[0];
    const signer = provider.getSigner();
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    const fetchNftMinted = await contractConnector.fetchNFTsMintedUser(account);

    if (fetchNftMinted) {
      for (const nft of fetchNftMinted) {
        const regex = /\/([^/]+)$/;
        let tokenId = nft?.tokenId.toString();
        if (tokenId !== '0') {
          const tokenUri = await contractConnector.tokenURI(tokenId);

          const match = tokenUri.match(regex);

          if (tokenUri) {
            let fetchMetadata = await axios.get(`https://ipfs.io/ipfs/${match[1]}`);
            const newMintedNftData = { tokenId, metadata: fetchMetadata?.data };
            setMintedNftList((prev) => [...prev, newMintedNftData]);
          }
        }
      }
    }

    const fetchNftListed = await contractConnector.fetchNFTsListedUser(account);

    if (fetchNftListed) {
      for (const nft of fetchNftListed) {
        const regex = /\/([^/]+)$/;
        let tokenId = nft?.tokenId.toString();
        let price = parseFloat(ethers.utils.formatEther(nft?.price));
        const tokenUri = await contractConnector.tokenURI(tokenId);

        const match = tokenUri.match(regex);

        if (tokenUri) {
          let fetchMetadata = await axios.get(`https://ipfs.io/ipfs/${match[1]}`);
          const newListedNftData = { tokenId, metadata: fetchMetadata?.data, price };

          setListedNftList((prev) => [...prev, newListedNftData]);
        }
      }
    }
  };

  async function allNft() {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const signer = provider.getSigner();
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    const fetchAllNft = await contractConnector.fetchNFTsUser();

    if (fetchAllNft) {
      for (const nft of fetchAllNft) {
        const regex = /\/([^/]+)$/;
        let tokenId = nft?.tokenId.toString();
        let price = parseFloat(ethers.utils.formatEther(nft?.price));
        const tokenUri = await contractConnector.tokenURI(tokenId);

        const match = tokenUri.match(regex);

        if (tokenUri) {
          let fetchMetadata = await axios.get(`https://ipfs.io/ipfs/${match[1]}`);
          const newAllNftData = { tokenId, metadata: fetchMetadata?.data, price };

          setAlldNftList((prev) => [...prev, newAllNftData]);
        }
      }
    }
  }

  async function broughtedNft() {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const signer = provider.getSigner();
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    const fetchBroughtedNft = await contractConnector.fetchAllListedTokens();

    if (fetchBroughtedNft) {
      for (const nft of fetchBroughtedNft) {
        const regex = /\/([^/]+)$/;
        let tokenId = nft?.tokenId.toString();
        let price = parseFloat(ethers.utils.formatEther(nft?.price));
        const tokenUri = await contractConnector.tokenURI(tokenId);

        const match = tokenUri.match(regex);

        if (tokenUri) {
          let fetchMetadata = await axios.get(`https://ipfs.io/ipfs/${match[1]}`);
          const newAllBroughtNftData = { tokenId, metadata: fetchMetadata?.data, price };

          setAllBroughtedNft((prev) => [...prev, newAllBroughtNftData]);
        }
      }
    }
  }

  useEffect(() => {
    fetchNFT();
    allNft();
    broughtedNft();
  }, []);

  console.log(allBroughtedNft);

  function openListNFT(e, toggleTo) {
    e.stopPropagation();
    setVisible(toggleTo);
  }

  return (
    <section className="container mx-auto">
      <div className="py-12 px-8 md:px-12 lg:px-20">
        <div className="creators-container  mb-10">
          <h4 className="capitalize text-3xl md:text-4xl font-semibold">All NFTs</h4>
          <div className="mt-5 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {!!allNftist.length &&
              allNftist.map((item, index) => {
                return <DiscoverCard key={index} item={item} />;
              })}
          </div>
        </div>

        <div className="creators-container  mb-10">
          <h4 className="capitalize text-3xl md:text-4xl font-semibold">NFTs you brought</h4>
          <div className="mt-5 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {!!allBroughtedNft.length &&
              allBroughtedNft.map((item, index) => {
                return <DiscoverCard key={index} item={item} />;
              })}
          </div>
        </div>

        <div className="creators-container  mb-10">
          <h4 className="capitalize text-3xl md:text-4xl font-semibold">My Minted NFTs</h4>
          <div className="mt-5 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {!!mintedNftList.length &&
              mintedNftList.map((item, index) => {
                return (
                  <DiscoverCard
                    key={index}
                    item={item}
                    openListNFT={openListNFT}
                    modalTokenId={modalTokenId}
                    setModalTokenId={setModalTokenId}
                  />
                );
              })}
          </div>
        </div>

        <div className="creators-container mb-10">
          <h4 className="capitalize text-3xl md:text-4xl font-semibold">My Listed NFTs</h4>
          <div className="mt-5 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {!!listedNftList &&
              listedNftList.map((item, index) => {
                return (
                  <DiscoverCard
                    key={index}
                    item={item}
                    openListNFT={openListNFT}
                    modalTokenId={modalTokenId}
                    setModalTokenId={setModalTokenId}
                  />
                );
              })}
          </div>
        </div>
      </div>
      {visible && (
        <Modal heading={'Listing Price'} isOpen={visible}>
          <ModalInput
            openListNFT={openListNFT}
            modalTokenId={modalTokenId}
            setToastMessage={setToastMessage}
          />
        </Modal>
      )}

      {toastMessage !== '' && (
        <Toast type="success" message={toastMessage} callback={redirectCallback} />
      )}
    </section>
  );
};

export default MyNfts;
