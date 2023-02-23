import { ethers } from "ethers";
import { CgMenuLeft } from "react-icons/cg";
import User from "../../../assets/icons/User.png";
import React, { useState, useReducer } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/icons/logo-metajuice.png";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { mintWalletNew, updateBalanceAsync } from "../../../apis/cryptoApi";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [viewNft, setViewNft] = useState(false);
  const [walletData, setWalletData] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      signer: null,
      balance: null,
      network: null,
      provider: null,
      walletAddress: null,
    }
  );

  const handleConnect = async () => {
    const provider = new ethers.providers.Web3Provider(
      window?.ethereum,
      "goerli"
    );
    const requestAccounts = await provider.send("eth_requestAccounts", []);
    const network = await provider.getNetwork();
    const account = requestAccounts[0];
    const signer = provider.getSigner();
    const balance = await signer.getBalance();
    const signedString = await signer.signMessage(
      "Only sign this request if you’ve initiated an action with Immutable X."
    );
    const signedKeyLinking = await signer.signMessage(
      "Only sign this key linking request from Immutable X."
    );
    try {
      const signedWallet = await mintWalletNew({
        walletAddress: account,
        blockchain: "Ethereum_" + network.name,
        signedKeyLinking,
        signedString,
      });
      const balance = await updateBalanceAsync(signedWallet);
      localStorage.setItem("wallet", JSON.stringify(signedWallet));
      localStorage.setItem("balance", JSON.stringify(balance[0]));
    } catch (e) {
      console.log(e);
    }
    setWalletData({ provider });
    setWalletData({ signer });
    setWalletData({ network });
    setWalletData({ walletAddress: account });
    setWalletData({ balance: ethers.utils.formatEther(balance) });
  };

  function handleNav() {
    setNav(!nav);
  }

  return (
    <nav className="py-5 md:py-8 md:px-10 px-5">
      <div className="flex flex-1 justify-between items-center">
        <div className="navLogo flex items-center gap-2 cursor-pointer">
          <div className="w-auto h-[2rem]" onClick={() => navigate("/")}>
            <img className="w-full h-full" src={logo} alt="" />
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="text-white flex items-center gap-5 font-medium font-work-sans space-x-5">
            <NavLink
              to="marketplace"
              className="hover:text-[#F15623] duration-300"
            >
              Marketplace
            </NavLink>
            <NavLink
              to="rankings"
              className="hover:text-[#F15623] duration-300"
            >
              Rankings
            </NavLink>
            <div className="flex justify-between items-center gap-2">
              <div>
                <button
                  className="hover:text-[#F15623] duration-300"
                  onClick={handleConnect}
                >
                  {walletData.walletAddress
                    ? "Wallet Connected"
                    : "Connect Wallet"}
                </button>
              </div>
              {walletData.walletAddress && walletData.network && (
                <div className="relative group cursor-pointer">
                  <AiOutlineInfoCircle />
                  <div className="absolute z-10 py-3 px-5 hidden w-[200px] text-sm text-white bg-[#3b3b3b] rounded-lg shadow-md top-8 right-0 group-hover:block space-y-3">
                    <div className="flex flex-col mt-1">
                      <span className="font-normal">Address:</span>
                      <span className="font-light">{`${walletData.walletAddress.substring(
                        0,
                        9
                      )}....${walletData.walletAddress.substring(
                        walletData.walletAddress.length - 9
                      )}`}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-normal">Connected To:</span>
                      <span className="font-light">
                        {walletData.network.name}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-normal">Wallet Balance:</span>
                      <span className="font-light">
                        {`${Number(walletData.balance).toFixed(2)} eth`}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => navigate("/create-account")}
              className="bg-[#F15623] py-4 px-7 rounded-2xl flex items-center gap-2 border-2 border-[transparent] hover:border-[#F15623] hover:bg-transparent duration-300"
            >
              <img className="w-5" src={User} alt="" /> Sign Up
            </button>
          </div>
        </div>
        <div className="block lg:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose className="text-white text-2xl" />
          ) : (
            <CgMenuLeft className="text-white text-2xl" />
          )}
        </div>

        <div
          className={
            nav
              ? "fixed flex flex-col left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-white pt-6 ease-in-out duration-500 bg-[#2b2b2b] z-50"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex flex-col mt-8 text-center">
            <NavLink
              to="marketplace"
              className="p-4 border-b border-gray-800 hover:text-[#F15623] duration-300"
            >
              Marketplace
            </NavLink>
            <NavLink
              to="rankings"
              className="p-4 border-b border-gray-800 hover:text-[#F15623] duration-300"
            >
              Rankings
            </NavLink>
            <a
              className="p-4 border-b border-gray-800 hover:text-[#F15623] duration-300"
              href="#"
            >
              Connect Wallet
            </a>
          </div>
          <div className="flex justify-center mt-3 text-center">
            <button
              onClick={() => navigate("/create-account")}
              className="bg-[#F15623] py-4 px-7 rounded-2xl flex items-center gap-2 border-2 border-[transparent] hover:border-[#F15623] hover:bg-transparent duration-300"
            >
              <img className="w-5" src={User} alt="" /> Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
