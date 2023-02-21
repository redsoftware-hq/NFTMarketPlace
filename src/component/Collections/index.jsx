import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import MoreFromArtist from "./MoreFromArtist/MoreFromArtist";
import Timer from "./Timer/Timer";

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
