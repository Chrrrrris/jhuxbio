import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "/", scroll: false },
    { name: "About", to: "about", scroll: true },
    { name: "Events", to: "events", scroll: true },
    { name: "Membership", to: "membership", scroll: true },
    { name: "Contact", to: "contact", scroll: true },
    { name: "Gallery", to: "/gallery", scroll: false },
    { name: "Team", to: "/team", scroll: false },
  ];

  const isHomePage = location.pathname === "/";

  const handleNavClick = (item) => {
    if (item.scroll) {
      if (isHomePage) {
        // Scroll to section directly if on the Home Page
        document.getElementById(item.to)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Navigate to Home Page first, then scroll to section
        navigate("/");
        setTimeout(() => {
          document.getElementById(item.to)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500); // Delay to allow the Home Page to load
      }
    } else {
      // Navigate to other pages (e.g., Gallery or Team)
      navigate(item.to);
    }
    setNavOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo aligned to the left */}
        <div className="flex items-center space-x-3">
          <RouterLink to="/">
            <img
              src="/assets/logo.png" 
              alt="JHUXBIO"
              className="h-10" 
            />
          </RouterLink>
          <RouterLink to="/">
            <span className="text-lg md:text-xl font-bold text-gray-800">
              Synthetic Biology Society
            </span>
          </RouterLink>
        </div>

        {/* Desktop Menu items (hidden on small screens) */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavClick(item)}
                className="text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)} className="focus:outline-none">
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when navOpen is true) */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="block text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
