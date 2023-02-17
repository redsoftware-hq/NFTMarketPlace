import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
