import { ethers } from 'ethers';
import React from 'react';
import { contract } from '../../apis/redsoftContractAbi';

const ModalInput = ({ toggleModal, tokenId, modalTokenId }) => {
  const [listValue, setListValue] = React.useState('');

  function convertValueToEther(e) {
    const etherValue = ethers.utils.parseEther(listValue);
    // console.log(tokenId);
    console.log(etherValue);
    console.log(modalTokenId);
    toggleModal(e);
    return etherValue;
  }

  async function handleList(e) {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const signer = provider.getSigner();
    const price = ethers.utils.parseUnits(listValue, 'ether');
    console.log(price);
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    const listingNft = await contractConnector.listNft(modalTokenId, price, {
      value: ethers.utils.parseUnits('0.005', 'ether')
    });
    console.log(listingNft);
    toggleModal(e);

    // let listingNft = await contract.getListPrice();
    // listingPrice = listingPrice.toString();
  }

  return (
    <div className="flex flex-col gap-2">
      <h5>Input price to list NFT</h5>
      <input
        className="border border-black py-1 px-2 rounded-sm"
        type="number"
        value={listValue}
        onChange={(e) => setListValue(e.target.value)}
      />
      <button onClick={handleList} className="py-1 px-2 bg-[#f15623] text-white">
        Submit
      </button>
    </div>
  );
};

export default ModalInput;
