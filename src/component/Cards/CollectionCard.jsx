import React from "react";

const CollectionCard = ({ item }) => {
	return (
		<>
			<div className="card-1 grid grid-flow-row w-full h-full gap-2 hover:scale-105 duration-300 cursor-pointer">
				<div className="">
					<img className="w-full" src={item?.url} alt="" />
				</div>
				<div className="grid grid-cols-3 gap-3">
					<div>
						<img className="w-full" src={item?.thumbnailOne} alt="" />
					</div>
					<div>
						<img className="w-full" src={item?.thumbnailTwo} alt="" />
					</div>
					<div className="w-full bg-[#A259FF] text-white rounded-2xl flex items-center justify-center font-space-mono font-bold text-lg">
						1025+
					</div>
				</div>
				<div className="artist-info text-white">
					<p className="font-medium text-lg tracking-wider">{item.design}</p>
					<div className="flex items-center gap-2 mt-2">
						<span>
							<img className="w-5" src={item.avatar} alt="" />
						</span>
						<span>{item.artistName}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CollectionCard;
