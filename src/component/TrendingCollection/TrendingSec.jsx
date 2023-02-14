import React from "react";
import CollectionCard from "../Cards/CollectionCard";
import { collection } from "../../utils/TrendingCollections";

const TrendingSec = () => {
	return (
		<>
			<section className="container mx-auto">
				<div className="py-10 px-7 md:px-10 lg:px-20">
					<div className="text-white space-y-2">
						<h4 className="capitalize text-lg md:text-3xl lg:text-4xl font-semibold tracking-wide">
							trending collection
						</h4>
						<p className="capitalize text-sm md:text-xl tracking-wider">
							checkout our weekle updated trending collection.
						</p>
					</div>

					<div className="card-container">
						<div className="py-14 collection-card flex flex-1 flex-wrap justify-between">
							{collection &&
								collection.map((item, index) => {
									return <CollectionCard key={index} item={item} />;
								})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TrendingSec;
