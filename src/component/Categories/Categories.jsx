import React from "react";
import { categoriesData } from "../../utils/CategoreisCollection";
import CategoryCard from "../Cards/CategoryCard";

const Categories = () => {
	return (
		<>
			<section className="container mx-auto">
				<div className="py-10 px-7 md:px-10 lg:px-20">
					<div className="text-white mt-10">
						<h4 className="capitalize text-3xl md:text-4xl font-semibold tracking-wide">
							browse categories
						</h4>
					</div>

					<div className="creators-container">
						<div className="mt-10 creators-card grid content-center grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
							{categoriesData &&
								categoriesData.map((item, index) => (
									<CategoryCard key={index} item={item} />
								))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Categories;
