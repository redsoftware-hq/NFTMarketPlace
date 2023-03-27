import React from 'react';

const DropdownMenu = ({ openListNFT, tokenId, setModalTokenId }) => {
  // let listNftForSaleNonceResponse;

  // const callListNft = async (e) => {
  //   e.stopPropagation();
  //   const provider = new ethers.providers.Web3Provider(window?.ethereum, 'goerli');
  //   const requestAccounts = await provider.send('eth_requestAccounts', []);
  //   const account = requestAccounts[0];
  //   const network = await provider.getNetwork();
  //   const signer = provider.getSigner();
  //   const signedString = await signer.signMessage(
  //     'Only sign this request if you’ve initiated an action with Immutable X.'
  //   );

  //   listNftForSaleNonceResponse = await listNftForSaleNonce({
  //     walletAddress: account,
  //     blockchain: 'Ethereum_' + network.name,
  //     contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
  //     tokenId: '445504650',
  //     signedString: signedString
  //   });

  //   console.log('listNftForSaleNonceResponse', listNftForSaleNonceResponse);

  //   const signedNonce = await signer.signMessage(listNftForSaleNonceResponse[0]?.nonce.nonce);

  //   listNftForSaleNonceResponse = await listNftForSale({
  //     walletAddress: account,
  //     blockchain: 'Ethereum_' + network.name,
  //     contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
  //     tokenId: '445504650',
  //     nonce: {
  //       actionType: 'listNftForSale',
  //       orderDetails: listNftForSaleNonceResponse[0].nonce.orderDetails,
  //       nonce: signedNonce
  //     },
  //     signedString
  //   });

  //   console.log('listNftForSaleResponse', listNftForSaleNonceResponse[0].nonce);
  // };

  // let burnNftNonceResponse;
  // const callBurnNft = async (e) => {
  //   e.stopPropagation();
  //   const provider = new ethers.providers.Web3Provider(window?.ethereum, 'goerli');
  //   const requestAccounts = await provider.send('eth_requestAccounts', []);
  //   const account = requestAccounts[0];
  //   const network = await provider.getNetwork();
  //   const signer = provider.getSigner();
  //   const signedString = await signer.signMessage(
  //     'Only sign this request if you’ve initiated an action with Immutable X.'
  //   );

  //   burnNftNonceResponse = await burnNftNonce({
  //     walletAddress: account,
  //     blockchain: 'Ethereum_' + network.name,
  //     contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
  //     tokenId: '602617024',
  //     signedString: signedString
  //   });

  //   const signedNonce = await signer.signMessage(burnNftNonceResponse[0]?.nonce.nonce);

  //   burnNftNonceResponse = await burnNft({
  //     walletAddress: account,
  //     blockchain: 'Ethereum_' + network.name,
  //     contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
  //     tokenId: '602617024',
  //     nonce: {
  //       actionType: 'burnNft',
  //       orderDetails: burnNftNonceResponse[0].nonce.orderDetails,
  //       nonce: signedNonce
  //     },
  //     signedString
  //   });
  // };

  // let delistNftNonceResponse;
  // const callDelistNft = async (e) => {
  //   e.stopPropagation();
  //   const provider = new ethers.providers.Web3Provider(window?.ethereum, 'goerli');
  //   const requestAccounts = await provider.send('eth_requestAccounts', []);
  //   const account = requestAccounts[0];
  //   const network = await provider.getNetwork();
  //   const signer = provider.getSigner();
  //   const signedString = await signer.signMessage(
  //     'Only sign this request if you’ve initiated an action with Immutable X.'
  //   );

  //   delistNftNonceResponse = await delistNftNonce({
  //     walletAddress: account,
  //     blockchain: 'Ethereum_' + network.name,
  //     contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
  //     tokenId: '47528588',
  //     signedString: signedString
  //   });

  //   const signedNonce = await signer.signMessage(delistNftNonceResponse[0]?.nonce.nonce);

  //   delistNftNonceResponse = await delistNft({
  //     walletAddress: account,
  //     blockchain: 'Ethereum_' + network.name,
  //     contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
  //     tokenId: '47528588',
  //     nonce: {
  //       actionType: 'delistNft',
  //       orderDetails: delistNftNonceResponse[0].nonce.orderDetails,
  //       nonce: signedNonce
  //     },
  //     signedString
  //   });
  // };

  function setListTokenId(e) {
    openListNFT(e, true);
    setModalTokenId(tokenId);
  }

  return (
    <div className="w-36 flex flex-col absolute top-12 right-6 bg-[#3b3b3b] rounded-md">
      <ul className="flex flex-col gap-2 text-white text-base">
        <li
          className="hover:bg-[#575757] rounded-t-md duration-300 py-2 px-2"
          onClick={(e) => setListTokenId(e)}>
          <span className="">List NFT</span>
        </li>
        <li className="hover:bg-[#575757] duration-300 py-2 px-2">
          <span className="">Delist NFT</span>
        </li>
        <li className="hover:bg-[#575757] rounded-b-md duration-300 py-2 px-2">
          <span className="">Burn NFT</span>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
