import React from "react";
import CollectionCard from "../Cards/CollectionCard";
import { Collection } from "../../utils/TrendingCollections";

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

					<div className="card-Container">
						<div className="py-14 main-card grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
							{Collection &&
								Collection.map((item, index) => {
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
