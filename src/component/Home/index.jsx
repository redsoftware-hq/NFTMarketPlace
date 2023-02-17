import Hero from "./Hero/Hero";
import TimerSec from "./TimerSec/TimerSec";
import Discover from "./Discover/Discover";
import WorkingSec from "./WorkingSec/WorkingSec";
import Categories from "./Categories/Categories";
import NewsLetter from "./NewsLetterSec/NewsLetter";
import TopCreatersSec from "./TopCreators/TopCreatersSec";
import TrendingSec from "./TrendingCollection/TrendingSec";

function Home() {
  return (
    <>
      <Hero />
      <TrendingSec />
      <Discover />
      <TopCreatersSec />
      <Categories />
      <TimerSec />
      <WorkingSec />
      <NewsLetter />
    </>
  );
}

export default Home;
