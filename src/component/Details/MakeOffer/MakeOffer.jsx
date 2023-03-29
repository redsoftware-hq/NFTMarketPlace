import { ethers } from 'ethers';
import React from 'react';
import { contract } from '../../../apis/redsoftContractAbi';
import PrimaryButton from '../../common/Buttons/PrimaryButton';

function MakeOffer({ nft, setToastMessage }) {
  async function handleBuy() {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'maticmum');
    const signer = provider.getSigner();
    const contractConnector = new ethers.Contract(contract.address, contract.abi, signer);
    let tokenId = nft?.tokenId.toString();
    const buyingNft = await contractConnector.buyNFT(tokenId, {
      value: ethers.utils.parseUnits(nft?.price.toString(), 'ether')
    });

    setToastMessage('Purchase Successful.');
  }
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* <div className="p-3 bg-[#3B3B3B] flex gap-2 justify-evenly rounded-2xl max-w-fit">
        {nft.avatar ? <img className="max-w-[24px]" src={nft.avatar} alt="" /> : <span>a</span>}
        <span className="text-white font-space-mono font-medium text-base">{nft.avatarName}</span>
      </div> */}
      <h2 className="text-white text-2xl font-work-sans font-semibold">{nft?.metadata?.name}</h2>
      <div className="text-[#858584] font-space-mono text-sm flex flex-wrap gap-2 items-center justify-between w-full">
        <h1 className="text-white text-3xl basis-3/4">{nft?.price}</h1>
        {/* <h2>${nft.fiatPrice} USD</h2> */}
        <span className="font-work-sans">Include fees</span>
      </div>
      <PrimaryButton btnName="Buy Now" handleBuy={handleBuy} />
    </div>
  );
}

export default MakeOffer;
