import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SearchIcon from '../../assets/icons/MagnifyingGlass.png';
import { discoverData } from '../../utils/DiscoverData';
import { collection } from '../../utils/TrendingCollections';
import CollectionCard from '../Home/Cards/CollectionCard';
import DiscoverCard from '../Home/Cards/DiscoverCard';

function Marketplace() {
  return (
    <section className="container mx-auto">
      <div className="py-12 px-8 md:px-12 lg:px-20">
        <div className="text-white space-y-2 mt-7">
          <h4 className="capitalize text-3xl md:text-4xl font-medium tracking-wide">
            browse marketplace
          </h4>
          <p className="text-base md:text-lg tracking-wider">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
          <div className="relative z-0 h-18">
            <input
              type="text"
              className="w-full h-full mt-3 py-3 px-5 placeholder:text-sm placeholder:text-[#858584] rounded-2xl bg-transparent border border-[#3b3b3b]"
              placeholder="Search your favourite NFTs"
            />

            <button className="absolute w-5 right-5 top-7">
              <img src={SearchIcon} alt="" />
            </button>
          </div>
        </div>

        <Tabs className="mt-16">
          <TabList className="w-full flex justify-between font-normal text-lg border border-[#3b3b3b] py-5">
            <Tab className="mx-auto cursor-pointer outline-none text-[#858584] hover:text-white duration-200  focus:text-white">
              NFTs{' '}
              <span className="font-space-mono bg-[#3b3b3b] text-base py-1 px-2 rounded-2xl focus:bg-[#858584] text-white">
                382
              </span>
            </Tab>
            <Tab className="mx-auto cursor-pointer outline-none text-[#858584] hover:text-white duration-200  focus:text-white">
              Collections{' '}
              <span className="font-space-mono bg-[#3b3b3b] focus:bg-[#858584] text-base py-1 px-2 rounded-2xl text-white">
                67
              </span>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="creators-container">
              <div className="mt-10 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {discoverData &&
                  discoverData.map((item, index) => {
                    return <DiscoverCard key={index} item={item} />;
                  })}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card-container">
              <div className="py-14 main-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {collection &&
                  collection.map((item, index) => {
                    return <CollectionCard key={index} item={item} />;
                  })}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}

export default Marketplace;
