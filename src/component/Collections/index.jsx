import React from 'react';
import Hero from './Hero/Hero';
import Timer from './Timer/Timer';
import Header from './Header/Header';
import MoreFromArtist from './MoreFromArtist/MoreFromArtist';
import { useParams } from 'react-router-dom';
import { collectionList } from '../../utils/TrendingCollections';

function Collections() {
  const urlParams = useParams();
  let data = [...collectionList];
  let nftData = data.find((item) => item.id == urlParams.id);

  return (
    <section>
      <Header image={nftData.nftList[0].image} />
      <div className="flex md:p-10 lg:px-20 lg:py-10">
        <Hero
          collectionName={nftData.imgTitle}
          avatarName={nftData.avatarName}
          avatarImage={nftData.avatar}
        />
        <div className="hidden mb-auto ml-auto md:flow-root">
          <Timer />
        </div>
      </div>
      <MoreFromArtist moreNft={[nftData]} />
    </section>
  );
}

export default Collections;
