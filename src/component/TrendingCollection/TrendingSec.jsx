import React from "react";
import { Collection } from "../../utils/TrendingCollections";
import CollectionCard from "../Cards/CollectionCard";

const TrendingSec = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="py-10 px-7 md:px-10 lg:px-20">
          <div className="text-white space-y-2">
            <h4 className="capitalize text-3xl md:text-4xl font-semibold">
              trending collection
            </h4>
            <p className="capitalize text-sm md:text-xl tracking-wider">
              checkout our weekle updated trending collection.
            </p>
          </div>

          <div className="card-Container">
            <div className="py-14 main-card grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {Collection &&
                Collection.map((item, index) => {
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
