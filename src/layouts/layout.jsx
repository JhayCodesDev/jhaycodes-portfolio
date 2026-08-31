import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;