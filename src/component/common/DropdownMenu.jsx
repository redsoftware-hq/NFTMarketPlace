import React from 'react';
import { ethers } from 'ethers';
import { listNftForSaleNonce, listNftForSale } from '../../apis/cryptoApi';

const DropdownMenu = () => {
  let listNftForSaleNonceResponse;

  const apiCall = async () => {
    const provider = new ethers.providers.Web3Provider(window?.ethereum, 'goerli');
    const requestAccounts = await provider.send('eth_requestAccounts', []);
    const network = await provider.getNetwork();
    const account = requestAccounts[0];
    const signer = provider.getSigner();
    const signedString = await signer.signMessage(
      'Only sign this request if you’ve initiated an action with Immutable X.'
    );

    listNftForSaleNonceResponse = await listNftForSaleNonce({
      walletAddress: account,
      blockchain: 'IMXStarkEx_' + network.name,
      contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
      tokenId: '445504650',
      signedString: signedString
    });

    console.log('listNftForSaleNonceResponse', listNftForSaleNonceResponse);

    const signedNonce = await signer.signMessage(listNftForSaleNonceResponse[0]?.nonce.nonce);

    listNftForSaleNonceResponse = await listNftForSale({
      walletAddress: account,
      blockchain: 'IMXStarkEx_' + network.name,
      contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
      tokenId: '445504650',
      nonce: {
        actionType: 'listNftForSale',
        orderDetails: listNftForSaleNonceResponse[0].nonce.orderDetails,
        nonce: signedNonce
      },
      signedString
    });

    console.log('listNftForSaleResponse', listNftForSaleNonceResponse[0].nonce);
  };

  return (
    <div className="w-36 flex flex-col absolute top-12 right-6 bg-[#3b3b3b] rounded-md">
      <ul className="flex flex-col gap-2 text-white text-base">
        <li className="hover:bg-[#575757] rounded-t-md duration-300 py-2 px-2" onClick={apiCall}>
          <span className="">List</span>
        </li>
        <li className="hover:bg-[#575757] duration-300 py-2 px-2">
          <span className="">Burn</span>
        </li>
        <li className="hover:bg-[#575757] rounded-b-md duration-300 py-2 px-2">
          <span className="">De-list</span>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
