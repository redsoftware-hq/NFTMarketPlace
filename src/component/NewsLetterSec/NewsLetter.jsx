import React from "react";
import n1 from "../../assets/newsletterSec/n1.png";
import Envelope from "../../assets/newsletterSec/EnvelopeSimple.png";

const NewsLetter = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="py-10 px-7 md:px-10 lg:px-20">
          <div className="padding-div rounded-2xl md:bg-[#3b3b3b] md:px-10 md:py-10">
            <div className="container-div grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className="container-1">
                <div className="w-full h-full">
                  <img className="w-full h-full" src={n1} alt="" />
                </div>
              </div>
              <div className="container-2 text-white lg:space-y-10 lg:flex flex-col justify-center">
                <h3 className="text-3xl lg:text-5xl 2xl:text-6xl mt-5 md:mt-0 font-medium lg:font-semibold capitalize">
                  join our weekly digest
                </h3>
                <p className="mt-2 lg:text-xl">
                  Get exclusive promotions & updates straight to your inbox.
                </p>
                <form action="">
                  <div className="flex flex-col lg:flex-row mt-5 gap-3 lg:gap-0 lg:relative">
                    <div className="grow">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                        className="w-full px-5 py-2 lg:py-5 placeholder-[#2b2b2b] placeholder:text-sm lg:placeholder:text-lg focus:outline-none focus:border-[#A259FF] rounded-2xl bg-white text-[#2b2b2b]"
                      />
                    </div>
                    <div className="lg:absolute right-0">
                      <button
                        type="submit"
                        className="flex w-full lg:text-base items-center justify-center gap-2 rounded-2xl bg-[#A259FF] px-14 2xl:px-24 py-2 lg:py-5"
                      >
                        <img src={Envelope} alt="" />
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
