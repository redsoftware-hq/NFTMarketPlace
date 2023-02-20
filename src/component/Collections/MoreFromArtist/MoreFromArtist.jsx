import SecondaryButton from "../../common/Buttons/SecondaryButton";
import { artistWorks } from "../../../utils/collectionPageData";
import DiscoverCard from "../../Home/Cards/DiscoverCard";
export default function MoreFromArtist() {
  return (
    <section className="container mx-auto">
      <div className="px-7 md:px-10 lg:px-20 lg:py-10">
        <div className="text-white flex items-center justify-between mt-10">
          <h2 className="capitalize text-white text-2xl font-semibold font-work-sans">
            More From This Artist
          </h2>
          <SecondaryButton
            className="hidden md:flex"
            btnName="Go to artist page"
          />
        </div>
        <div className="mt-10 creators-card grid content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-8">
          {artistWorks &&
            artistWorks.map((item, index) => {
              return <DiscoverCard key={index} item={item} />;
            })}
        </div>

        <div className="py-4">
          <button className="w-full mt-8 py-5 px-10 flex items-center justify-center md:hidden lg:hidden bg-[#2b2b2b] border-2 border-[#F15623] hover:text-[#F15623] ease-in-out duration-300 rounded-2xl capitalize text-white text-sm font-semibold gap-2 lg:mr-8">
            view rankings
          </button>
        </div>
      </div>
    </section>
  );
}
