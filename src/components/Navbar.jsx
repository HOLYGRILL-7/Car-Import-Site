import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import logoWhite from ".././assets/LOGO'S/logoWhite.png"
// import logoBlack from ".././assets/LOGO'S/blackbg-logo.png"

const Navbar = () => {
  const { user, logout, isLoggedIn, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";

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

  if (isLoggedIn() && isAdmin()) {
    return null;
  }

  return (

    
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? "bg-transparent"
          : "bg-primary-dark shadow-lg"  // Changed to primary navy
      }`}
    >
      {/* Backdrop blur for transparency */}
      {isHomePage && !isScrolled && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      )}

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="transition-transform hover:scale-105"
          >
            {/* <img src={logoBlack} alt="CarWise" width={130} /> */}
            {/* <img src={isScrolled ? logoWhite : logoBlack} alt="CarWise" width={130} /> */}
            <img src={ logoWhite}  alt="CarWise" width={130} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 text-lg">
            <Link
              to="/"
              className="text-white hover:text-primary-light transition-colors font-medium"  // Hover to red
            >
              Home
            </Link>
            <Link
              to="/newArrivals"
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              New Cars
            </Link>
            <Link
              to="/usedCars"
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              Used Cars
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/reviews"
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              Reviews
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-primary-light transition-colors font-medium"
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
                  className="text-white hover:text-secondary-light transition-colors font-medium"
                >
                  Dashboard
                </Link>
                <span className="text-neutral-light border-l border-neutral pl-4">
                  Welcome, <span className="font-semibold">{user.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-secondary hover:bg-secondary-dark px-5 py-2 rounded-lg font-medium transition-all text-white"  // Red button
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
                  className="bg-secondary hover:bg-secondary-dark text-white px-5 py-2 rounded-lg transition-all"  // Red register button
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-secondary-light transition-colors"
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
          <div className="lg:hidden py-4 border-t border-neutral">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-white hover:text-secondary-light transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/newArrivals"
                className="text-white hover:text-secondary-light transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                to="/usedCars"
                className="text-white hover:text-secondary-light transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Used Cars
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-secondary-light transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/reviews"
                className="text-white hover:text-secondary-light transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-secondary-light transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              {isLoggedIn() ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-white hover:text-secondary-light transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <span className="text-neutral-light">
                    Welcome, <span className="font-semibold">{user.name}</span>
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="bg-secondary hover:bg-secondary-dark text-white px-5 py-2 rounded-lg font-medium transition-all text-left"
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
                    className="bg-secondary hover:bg-secondary-dark text-white px-5 py-2 rounded-lg font-medium transition-all text-center"
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


// ### **Links:**
// - `text-white` - Default state
// - `hover:text-secondary-light` (Red#dc2626) - Hover state

// ### **Buttons:**
// - **Register/Logout:** `bg-secondary hover:bg-secondary-dark` (Red buttons)
// - **Login:** Transparent with white text

// ### **Borders:**
// - `border-neutral` (Gray) - Mobile menu divider

// ### **Text:**
// - `text-neutral-light` - Welcome message

// ---

// ## **Visual Summary:**
// ```
// 🔵 Navy Background: bg-primary
// 🔴 Red Hover/Buttons: text-secondary-light, bg-secondary
// ⚪ White Text: text-white
// ⚫ Gray Borders: border-neutral