import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/UseAuth";

const Navbar = () => {
  const { user, logout, isLoggedIn, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Don't show navbar for admin users
  if (isLoggedIn() && isAdmin()) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? "bg-transparent"
          : "bg-linear-to-r from-gray-900 to-black shadow-lg"
      }`}
    >
      {/* Backdrop blur overlay for hero (only on homepage when not scrolled) */}
      {/* //the second and acts like 'then' because JS checks if the previous values are true, then render the third value */}
      {isHomePage && !isScrolled && <div className="absolute "></div>}

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className={`text-xl sm:text-2xl font-bold transition-colors ${
              isHomePage && !isScrolled
                ? "text-blue-400 hover:text-blue-400"
                : "text-blue-400 hover:text-blue-400"
            }`}
          >
            AutoHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 text-lg">
            <Link
              to="/"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/newArrivals"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              New Arrivals
            </Link>
            <Link
              to="/usedCars"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Used Cars
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/reviews"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Reviews
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden sm:flex items-center gap-4">
            {isLoggedIn() ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-white hover:text-blue-400 transition-colors font-medium"
                >
                  Dashboard
                </Link>
                <span className="text-gray-300 border-l border-gray-700 pl-4">
                  Welcome, <span className="font-semibold">{user.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-medium transition-all text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-2 text-lg font-semibold">
                <Link
                  to="/login"
                  className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-white hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/newArrivals"
                className="text-white hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                to="/usedCars"
                className="text-white hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Used Cars
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/reviews"
                className="text-white hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              {isLoggedIn() ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <span className="text-gray-300">
                    Welcome, <span className="font-semibold">{user.name}</span>
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition-all text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-all text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
