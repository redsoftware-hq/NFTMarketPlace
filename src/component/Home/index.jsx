import Hero from "../component/Hero/Hero";
import TimerSec from "../component/TimerSec/TimerSec";
import Discover from "../component/Discover/Discover";
import WorkingSec from "../component/WorkingSec/WorkingSec";
import Categories from "../component/Categories/Categories";
import NewsLetter from "../component/NewsLetterSec/NewsLetter";
import TopCreatersSec from "../component/TopCreators/TopCreatersSec";
import TrendingSec from "../component/TrendingCollection/TrendingSec";

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
