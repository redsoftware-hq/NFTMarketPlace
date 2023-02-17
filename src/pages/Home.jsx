import Hero from "../component/Hero/Hero";
import TimerSec from "../component/TimerSec/TimerSec";
import TopCreatersSec from "../component/TopCreators/TopCreatersSec";
import TrendingSec from "../component/TrendingCollection/TrendingSec";
import WorkingSec from "../component/WorkingSec/WorkingSec";
import Categories from "../component/Categories/Categories";
import Discover from "../component/Discover/Discover";
import NewsLetter from "../component/NewsLetterSec/NewsLetter";

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
