import React, { useRef, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SearchIcon from '../../assets/icons/MagnifyingGlass.png';
import { discoverData } from '../../utils/DiscoverData';
import { collection } from '../../utils/TrendingCollections';
import CollectionCard from '../Home/Cards/CollectionCard';
import DiscoverCard from '../Home/Cards/DiscoverCard';

function Marketplace() {
  const inputRef = useRef();
  const [nftData, setNftData] = useState(discoverData);
  const [collectionData, setCollectionData] = useState(collection);
  const [tabIndex, setTabIndex] = useState(1);

  function collectionTabIndex() {
    setTabIndex(2);
    inputRef.current.value = '';
    setCollectionData(collection);
  }

  function nftTabIndex() {
    setTabIndex(1);
    inputRef.current.value = '';
    setNftData(discoverData);
  }

  function filterNftData(e) {
    const value = inputRef.current.value.toLowerCase();

    if (tabIndex === 1 && e.key === 'Enter') {
      const filterNft = nftData.filter((item) => {
        return item.imgTitle.toLowerCase().includes(value);
      });
      setNftData(filterNft);
    } else {
      const filterCollection = collectionData.filter((item) => {
        return item.design.toLowerCase().includes(value);
      });
      setCollectionData(filterCollection);
    }

    if (value === '') {
      setNftData(discoverData);
      setCollectionData(collection);
    }
  }

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
          <div className="relative z-0 h-18 flex items-center justify-center">
            <input
              type="text"
              className="w-full h-full mt-3 py-3 px-5 placeholder:text-sm placeholder:text-[#858584] rounded-2xl bg-transparent border border-[#3b3b3b]"
              placeholder="Search your favourite NFTs"
              ref={inputRef}
              onKeyUp={filterNftData}
            />

            <button className="absolute w-5 right-5 top-6" onClick={filterNftData}>
              <img src={SearchIcon} alt="" />
            </button>
          </div>
        </div>

        <Tabs defaultFocus className="mt-16">
          <TabList className="w-full flex justify-between font-normal text-lg border border-[#3b3b3b]">
            <Tab
              className="nft-tab w-full h-full flex items-center justify-center cursor-pointer text-[#858584] hover:text-white duration-200 focus:text-white focus:bg-[#575757] focus:outline-none"
              onClick={nftTabIndex}>
              <div className="outline-none py-5">
                NFTs{' '}
                <span className="font-space-mono bg-[#3b3b3b] text-base py-1 px-2 rounded-2xl focus:bg-[#858584] text-white">
                  {discoverData.length}
                </span>
              </div>
            </Tab>
            <Tab
              className="w-full h-full flex items-center justify-center cursor-pointer text-[#858584] hover:text-white duration-200 focus:text-white focus:bg-[#575757] focus:outline-none"
              onClick={collectionTabIndex}>
              <div className="outline-none py-5">
                Collections{' '}
                <span className="font-space-mono bg-[#3b3b3b] focus:bg-[#858584] text-base py-1 px-2 rounded-2xl text-white">
                  {collectionData.length}
                </span>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="creators-container">
              <div className="mt-10 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {nftData &&
                  nftData.map((item, index) => {
                    return <DiscoverCard key={index} item={item} />;
                  })}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card-container">
              <div className="py-14 main-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {collectionData &&
                  collectionData.map((item, index) => {
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
