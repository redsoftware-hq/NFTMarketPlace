import React from 'react';
import CollectionCard from '../Cards/CollectionCard';
import { collectionList } from '../../../utils/TrendingCollections';

const TrendingSec = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="py-12 px-8 md:px-12 lg:px-20">
          <div className="text-white space-y-2">
            <h4 className="capitalize text-3xl md:text-4xl font-semibold">trending collection</h4>
            <p className="capitalize text-sm md:text-xl tracking-wider">
              checkout our weekle updated trending collection.
            </p>
          </div>

          <div className="card-container">
            <div className="py-14 main-card grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {collectionList &&
                collectionList.map((item, index) => {
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
