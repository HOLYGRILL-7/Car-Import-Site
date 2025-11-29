import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();

  const navItems = [
    { path: "/about", label: "About Us" },
    { path: "/about/team", label: "Our Team" },
    { path: "/about/press", label: "Press & Media" },
  ];

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary via-[#1e3a5f] to-primary-dark text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">ABOUT US</h1>
            <p className="text-xl text-neutral-cream">
              Learn more about our company and mission.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap font-medium ${
                  location.pathname === item.path
                    ? "border-accent text-accent font-semibold"
                    : "border-transparent text-neutral hover:text-primary hover:border-neutral"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Children Section - Where Outlet renders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-xl text-neutral-light">
            Let us help you source and import your dream vehicle today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/newArrivals">
              <button className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;