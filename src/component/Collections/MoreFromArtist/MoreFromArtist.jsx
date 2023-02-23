import SecondaryButton from '../../common/Buttons/SecondaryButton';
import { artistWorks } from '../../../utils/collectionPageData';
import DiscoverCard from '../../Home/Cards/DiscoverCard';
export default function MoreFromArtist() {
  return (
    <section className="container mx-auto">
      <div className="px-7 md:px-10 lg:px-20 lg:py-10">
        <div className="text-white flex items-center justify-between mt-10">
          <h2 className="capitalize text-white text-2xl font-semibold font-work-sans">
            More From This Artist
          </h2>
          <SecondaryButton className="hidden md:flex" btnName="Go to artist page" />
        </div>
        <div className="mt-10 creators-card grid content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
          {artistWorks &&
            artistWorks.map((item, index) => {
              return <DiscoverCard key={index} item={item} />;
            })}
        </div>
        <div className="px-1 py-8">
          <SecondaryButton className="w-full md:hidden lg:hidden" btnName="Go to artist page" />
        </div>
      </div>
    </section>
  );
}
