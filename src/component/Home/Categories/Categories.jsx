import CategoryCard from "../Cards/CategoryCard";
import { categoriesData } from "../../../utils/CategoreisCollection";

const Categories = () => {
	return (
		<>
			<section className="container mx-auto">
				<div className="py-12 px-8 md:px-12 lg:px-20">
					<div className="text-white mt-10">
						<h4 className="capitalize text-3xl md:text-4xl font-semibold tracking-wide">
							browse categories
						</h4>
					</div>

					<div className="creators-container">
						<div className="mt-10 creators-card grid content-center grid-cols-6 md:grid-cols-6 sm:grid-cols-3 gap-5">
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
