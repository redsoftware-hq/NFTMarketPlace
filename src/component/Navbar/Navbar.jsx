import { ethers } from "ethers";
import { CgMenuLeft } from "react-icons/cg";
import User from "../../assets/icons/User.png";
import React, { useState, useEffect, useReducer } from "react";
import StoreFront from "../../assets/icons/StoreFront.png";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

const Navbar = () => {
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
			<div className="flex justify-between items-center">
				<div className="navLogo flex items-center gap-2 cursor-pointer">
					<div className="">
						<img className="w-7 h-7" src={StoreFront} alt="" />
					</div>
					<p className="font-mono text-white font-bold text-lg md:text-xl">
						NFT Marketplace
					</p>
				</div>

				<div className="hidden lg:flex">
					<div className="text-white flex items-center gap-5 font-medium font-work-sans space-x-5">
						<a className="hover:text-[#A259FF] duration-300" href="#">
							Marketplace
						</a>
						<a className="hover:text-[#A259FF] duration-300" href="#">
							Rankings
						</a>
						<div className="flex justify-between items-center gap-2">
							<div>
								<button
									className="hover:text-[#A259FF] duration-300"
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
									<div className="absolute z-10 hidden w-auto p-2 text-sm font-semibold text-white bg-gray-800 rounded-lg shadow-md top-8 right-0 group-hover:block">
										<div className="my-2">
											<span>Address</span>
											<span className="mx-2">{`${walletData.walletAddress.substring(
												0,
												6
											)}....${walletData.walletAddress.substring(
												walletData.walletAddress.length - 6
											)}`}</span>
										</div>
										<div className="my-2">
											<span>Connected To</span>
											<span className="mx-2">{walletData.network.name}</span>
										</div>
										<div className="my-2">
											<span>Wallet Balance</span>
											<span className="mx-2">{walletData.balance}</span>
										</div>
									</div>
								</div>
							)}
						</div>
						<button className="bg-[#A259FF] py-4 px-7 rounded-2xl flex items-center gap-2 border-2 border-[transparent] hover:border-[#A259FF] hover:bg-transparent duration-300">
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
							? "fixed flex flex-col left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-white pt-6 ease-in-out duration-500 bg-[#2b2b2b]"
							: "fixed left-[-100%]"
					}
				>
					<div className="flex flex-col mt-8 text-center">
						<a
							className="p-4 border-b border-gray-800 hover:text-[#A259FF] duration-300"
							href="#"
						>
							Marketplace
						</a>
						<a
							className="p-4 border-b border-gray-800 hover:text-[#A259FF] duration-300"
							href="#"
						>
							Rankings
						</a>
						<a
							className="p-4 border-b border-gray-800 hover:text-[#A259FF] duration-300"
							href="#"
						>
							Connect Wallet
						</a>
					</div>
					<div className="flex justify-center mt-3 text-center">
						<button className="bg-[#A259FF] py-4 px-7 rounded-2xl flex items-center gap-2 border-2 border-[transparent] hover:border-[#A259FF] hover:bg-transparent duration-300">
							<img className="w-5" src={User} alt="" /> Sign Up
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
