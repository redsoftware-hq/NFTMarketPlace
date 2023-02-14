import React from "react";
import Rocket from "../../assets/icons/RocketLaunch.png";
import avatar from "../../assets/banner/Avatar Placeholder.png";
import imagePlace from "../../assets/banner/Image Placeholder.png";

const Hero = () => {
	return (
		<section className="container mx-auto">
			<div className="py-12 px-8 md:px-12 lg:px-20">
				<div className="flex justify-between flex-col md:flex-row gap-10">
					<div className="space-y-5">
						<h1 className="text-white font-medium lg:text-7xl md:text-5xl text-2xl capitalize leading-8 md:leading-15 tracking-wide font-work-sans">
							Discover <br /> digital art & <br /> Collect NFTs
						</h1>

						<p className="text-white capitalize text-sm font-work-sans">
							NFT marketplace UI created with Anima for <br /> Figma. Collect,
							buy and sell art from more <br /> than 20k NFT artists.
						</p>
						<div>
							<button
								className="
							py-3 
							px-10 
							bg-[#A259FF] 
							rounded-2xl 
							flex 
							items-center 
							capitalize
							 text-white 
							 text-xs 
							 md:text-lg 
							 gap-2 
							 transition-all 
							 duration-300 
							 hover:scale-110
							"
							>
								<img className="w-4 md:w-5" src={Rocket} alt="" /> get started
							</button>
						</div>

						<div className="flex items-center justify-between ">
							<p className="text-white font-light text-base capitalize font-work-sans">
								<span className="font-space-mono text-lg">240k+</span> <br />{" "}
								Total Sale
							</p>
							<p className="text-white font-light text-base capitalize font-work-sans">
								<span className="font-space-mono text-lg">100k+</span> <br />{" "}
								Auctions
							</p>
							<p className="text-white font-light text-base capitalize font-work-sans">
								<span className="font-space-mono text-lg">240k+</span> <br />{" "}
								Artists
							</p>
						</div>
					</div>

					<div className="hero-cover-image transform transition-all hover:animate-pulse cursor-pointer duration-500">
						<div className="img-div">
							<img className="" src={imagePlace} alt="" />
						</div>

						<div className=" bg-[#3b3b3b] text-white py-4 px-3 rounded-b-xl space-y-3">
							<h6 className="font-medium capitalize">space walking</h6>
							<div className="flex items-center gap-2">
								<span>
									<img className="w-4" src={avatar} alt="" />
								</span>
								<span className="text-xs font-normal">Aminakid</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
