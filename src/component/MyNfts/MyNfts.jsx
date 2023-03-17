import React from 'react';
import DiscoverCard from '../Home/Cards/DiscoverCard';
import { discoverData } from '../../utils/DiscoverData';

const MyNfts = () => {
  return (
    <section className="container mx-auto">
      <div className="py-12 px-8 md:px-12 lg:px-20">
        <div className="creators-container">
          <div className="mt-10 creators-card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {discoverData &&
              discoverData.map((item, index) => {
                return <DiscoverCard key={index} item={item} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyNfts;
