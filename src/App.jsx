import Categories from "./component/Categories/Categories";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import TopCreatersSec from "./component/TopCreators/TopCreatersSec";
import TrendingSec from "./component/TrendingCollection/TrendingSec";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrendingSec />
      <TopCreatersSec />
      <Categories />
    </div>
  );
}

export default App;
