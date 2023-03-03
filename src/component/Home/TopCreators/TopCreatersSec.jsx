import React from 'react';
import ArtistCard from '../Cards/ArtistCard';
import { artistsData } from '../../../utils/ArtistsCollection';
import RocketPurple from '../../../assets/icons/RocketLaunchPurple.png';
import { useNavigate } from 'react-router';

const TopCreatersSec = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/rankings');
  };
  return (
    <>
      <section className="container mx-auto">
        <div className="py-12 px-8 md:px-12 lg:px-20">
          <div className="text-white flex items-center justify-between">
            <div>
              <h4 className="capitalize text-3xl lg:text-4xl font-semibold tracking-wide">
                top creators
              </h4>
              <p className="md:hidden lg:block capitalize text-lg mt-3">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
              <p className="capitalize hidden md:block lg:hidden text-lg mt-3">
                Checkout Top Rated Creators on the NFT <br /> Marketplace
              </p>
            </div>
            <button
              onClick={handleClick}
              className="py-3 px-10 hidden md:flex bg-[#2b2b2b] border-2 border-[#F15623] hover:text-[#F15623] ease-in-out duration-300 rounded-2xl items-center capitalize text-white text-xs md:text-sm font-medium gap-2"
            >
              <img className="w-4 md:w-5" src={RocketPurple} alt="" /> view rankings
            </button>
          </div>

          <div className="creators-container">
            <div className="mt-10 creators-card grid content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {artistsData &&
                artistsData.map((item, index) => {
                  return <ArtistCard key={index} item={item} />;
                })}
            </div>
            <div>
              <button
                onClick={handleClick}
                className="w-full mt-8 py-5 px-10 flex items-center justify-center md:hidden lg:hidden bg-[#2b2b2b] border-2 border-[#F15623] hover:text-[#F15623] ease-in-out duration-300 rounded-2xl capitalize text-white text-sm font-semibold gap-2 lg:mr-8"
              >
                <img className="w-4 md:w-5" src={RocketPurple} alt="" /> view rankings
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCreatersSec;
