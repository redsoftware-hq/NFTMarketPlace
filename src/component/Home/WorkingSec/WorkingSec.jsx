import React from "react";
import WorkingCard from "../Cards/WorkingCard";
import { workingData } from "../../../utils/workingData";

const WorkingSec = () => {
	return (
		<>
			<section className="container mx-auto">
				<div className="py-12 px-8 md:px-12 lg:px-20">
					<div className="text-white space-y-2 mt-7">
						<h4 className="capitalize text-3xl md:text-4xl font-semibold tracking-wide">
							How it works
						</h4>
						<p className="text-lg md:text-xl tracking-wider">
							Find out how to get started
						</p>
					</div>

					<div className="creators-container">
						<div className="mt-10 creators-card grid content-center grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
							{workingData &&
								workingData.map((item, index) => {
									return <WorkingCard key={index} item={item} />;
								})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WorkingSec;
