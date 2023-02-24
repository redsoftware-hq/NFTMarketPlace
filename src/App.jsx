import Home from "./component/Home";
import SignUp from "./component/SignUp";
import Details from "./component/Details";
import Rankings from "./component/Rankings";
import Layout from "./component/common/Layout";
import Collections from "./component/Collections";
import Marketplace from "./component/Marketplace";
import { createRoutesFromElements } from "react-router";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import CreateCollection from "./component/CreateCollection";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="marketplace" element={<Marketplace />} />
      <Route path="rankings" element={<Rankings />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="collections" element={<Collections />} />
      <Route
        path="collections/create-collection"
        element={<CreateCollection />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
  return <RouterProvider router={router} />;
}

export default App;
