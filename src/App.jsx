import Layout from "./component/common/Layout";
import Home from "./component/Home";
import Details from "./component/Details";
import Rankings from "./component/Rankings";
import Marketplace from "./component/Marketplace";
import SignUp from "./component/SignUp";
import { createRoutesFromElements } from "react-router";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="marketplace" element={<Marketplace />} />
			<Route path="rankings" element={<Rankings />} />
			<Route path="create-account" element={<SignUp />} />
			<Route path="details" element={<Details />} />
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
