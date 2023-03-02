import React from 'react';
import Footer from './Footer';
import { ethers } from 'ethers';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { listNftForSaleNonce, listNftForSale } from '../../apis/cryptoApi';

function Layout() {
  // React.useEffect(() => {
  //   let listNftForSaleResponse;
  //   let listNftForSaleNonceResponse;

  //   const apiCall = async () => {
  //     const provider = new ethers.providers.Web3Provider(window?.ethereum, 'goerli');
  //     const requestAccounts = await provider.send('eth_requestAccounts', []);
  //     const network = await provider.getNetwork();
  //     const account = requestAccounts[0];
  //     listNftForSaleNonceResponse = await listNftForSaleNonce({
  //       walletAddress: account,
  //       blockchain: 'Ethereum_' + network.name,
  //       contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
  //       tokenId: '78216660'
  //     });

  //     const signer = provider.getSigner();
  //     const signedString = await signer.signMessage(
  //       'Only sign this request if you’ve initiated an action with Immutable X.'
  //     );
  //     listNftForSaleResponse = await listNftForSale({
  //       walletAddress: account,
  //       blockchain: 'Ethereum_' + network.name,
  //       contractAddress: '0xa4de988522a68a4f07aba97043e5266e8465b622',
  //       tokenId: '78216660',
  //       nonce: listNftForSaleNonceResponse.nonce,
  //       signedString
  //     });
  //   };

  //   apiCall();
  // }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
