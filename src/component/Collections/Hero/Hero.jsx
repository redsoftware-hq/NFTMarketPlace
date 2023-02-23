import { COLLECTION, ARTIST } from '../../../utils/collectionPageData';
import { FiGlobe } from 'react-icons/fi';
import Timer from '../Timer/Timer';

function Hero() {
  const links = ['Etherscan', 'Original'];
  return (
    <section className="md:basis-1/2 lg:basis-3/5">
      <div className="text-white pt-4 pb-8 px-7 font-work-sans flex flex-col gap-2">
        <div className="header py-2 ">
          <h1 className="py-2 text-3xl font-semibold">{COLLECTION.name}</h1>
          <span className="py-2 text-[#858584] capitalize text-base">
            minted on {COLLECTION.minted}
          </span>
        </div>
        <div className="flex justify-center md:hidden">
          <Timer />
        </div>
        <div className="created-by">
          <span className="py-2 text-[#858584] font-space-mono">Created By</span>
          <div className="py-2 flex gap-2">
            <div className="max-w-[24px]">
              <img className="w-full h-full" src={ARTIST.avatar} />
            </div>
            <span>{ARTIST.name}</span>
          </div>
        </div>

        <div className="description">
          <span className="py-4 capitalize text-[#858584] font-space-mono">description</span>
          <p className="py-2 whitespace-pre-line">{COLLECTION.description}</p>
        </div>

        <div className="details">
          <span className="py-4 capitalize text-[#858584] font-space-mono">Details</span>
          {links.map((link, index) => (
            <div key={index} className="pt-2 flex items-center gap-2 text-[#858584]">
              <FiGlobe />
              <a className="text-white" href="#">
                View on {link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
