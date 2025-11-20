import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!hideNavbar && <Navbar />}

      {/* Add pt-20 for pages that need it */}
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
