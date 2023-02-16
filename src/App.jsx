import Categories from "./component/Categories/Categories";
import Discover from "./component/Discover/Discover";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import NewsLetter from "./component/NewsLetterSec/NewsLetter";
import TimerSec from "./component/TimerSec/TimerSec";
import TopCreatersSec from "./component/TopCreators/TopCreatersSec";
import TrendingSec from "./component/TrendingCollection/TrendingSec";
import WorkingSec from "./component/WorkingSec/WorkingSec";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<TrendingSec />
			<TopCreatersSec />
			<Categories />
			<Discover />
			<TimerSec />
			<WorkingSec />
			<NewsLetter />
			<Footer />
		</div>
	);
}

export default App;
