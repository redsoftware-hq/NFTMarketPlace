import { createRoutesFromElements } from "react-router";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Rankings from "./pages/Rankings";
import CreateAccount from "./pages/CreateAccount";
import ConnectWallet from "./pages/ConnectWallet";
import Details from "./pages/Details";

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
