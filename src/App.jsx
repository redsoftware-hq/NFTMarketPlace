import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Details from "./pages/Details";
import Rankings from "./pages/Rankings";
import Marketplace from "./pages/Marketplace";
import CreateAccount from "./pages/CreateAccount";
import { createRoutesFromElements } from "react-router";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="marketplace" element={<Marketplace />} />
			<Route path="rankings" element={<Rankings />} />
			<Route path="create-account" element={<CreateAccount />} />
			<Route path="details" element={<Details />} />
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
