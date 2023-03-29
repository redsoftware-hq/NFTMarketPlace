import React from 'react';
import { ethers } from 'ethers';
import { contract } from '../../apis/redsoftContractAbi';

const ModalInput = ({ openListNFT, modalTokenId, setToastMessage }) => {
  const [price, setPrice] = React.useState();

  async function handleListNft(e) {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const signer = provider.getSigner();
    const etherPrice = ethers.utils.parseUnits(price, 'ether');
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    const listingNft = await contractConnector.listNFT(modalTokenId, etherPrice, {
      value: ethers.utils.parseUnits('0.005', 'ether')
    });
    openListNFT(e, false);
    console.log(listingNft);
    setToastMessage('Listed Successfully');
  }

  return (
    <div className="flex flex-col gap-2">
      <h5>Input price to list NFT</h5>
      <input
        className="border border-black py-1 px-2 rounded-sm"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleListNft} className="py-1 px-2 bg-[#f15623] text-white">
        Submit
      </button>
    </div>
  );
};

export default ModalInput;
