import React from 'react';
import Hero from './Hero/Hero';
import Timer from './Timer/Timer';
import Header from './Header/Header';
import MoreFromArtist from './MoreFromArtist/MoreFromArtist';

function Collections() {
  return (
    <section>
      <Header />
      <div className="flex md:p-10 lg:px-20 lg:py-10">
        <Hero />
        <div className="hidden mb-auto ml-auto md:flow-root">
          <Timer />
        </div>
      </div>
      <MoreFromArtist />
    </section>
  );
}

export default Collections;
