import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import User from "../../assets/icons/User.png";
import { AiOutlineClose } from "react-icons/ai";
import StoreFront from "../../assets/icons/StoreFront.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	function handleNav() {
		setNav(!nav);
	}
	return (
		<nav className="py-5 md:py-8 md:px-10 px-5">
			<div className="flex justify-between items-center">
				<div className="navLogo flex items-center gap-2">
					<div className="">
						<img className="w-7 h-7" src={StoreFront} alt="" />
					</div>
					<p className="font-mono text-white font-bold text-lg md:text-xl">
						NFT Marketplace
					</p>
				</div>

				<div className="hidden lg:flex">
					<div className="text-white flex items-center gap-5 font-medium font-work-sans space-x-5">
						<a href="#">Marketplace</a>
						<a href="#">Rankings</a>
						<a href="#">Connect a wallet</a>
						<button className="bg-[#A259FF] py-4 px-7 rounded-2xl flex items-center gap-2 overflow-hidden transition-all duration-300 hover:scale-110">
							<img
								className="w-5 transition-transform duration-300 transform"
								src={User}
								alt=""
							/>
							<span className="transition-all duration-300">Sign Up</span>
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
			</div>
		</nav>
	);
};

export default Navbar;
