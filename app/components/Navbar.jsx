// components/Navbar.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
// Import icons from react-icons
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaAngleUp } from "react-icons/fa";

const navigationItems = [
  { name: "Buy", href: "/buy" },
  { name: "Rent", href: "/rent" },
  { name: "Sell", href: "/sell" },
  { name: "Agents", href: "/agents" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

// Using the exact color from your login page: #7b1450
const PRIMARY_COLOR = "#7b1450";
const PRIMARY_HOVER = "#6b1145";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-gray-900"
            >
              <img
                src="https://res.cloudinary.com/bytestore/image/upload/v1764929690/Frame_9_n22pfw.png"
                alt="WiztecBD Logo"
                className="h-6 w-auto mr-2"
              />
              <span className="text-gray-900">WiztecBD</span>
            </Link>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#7b1450] inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Favourite Link */}
            <Link
              href="/favourite"
              className="flex items-center text-sm font-medium text-gray-600 hover:text-[#7b1450] transition-colors duration-200"
            >
              <AiOutlineHeart className="h-5 w-5 mr-1" />
              Favourite
            </Link>

            {/* Login Button */}
            <Link
              href="/auth/signin"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#7b1450] hover:bg-[#6b1145] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7b1450] transition-colors duration-200"
            >
              Login Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Favourite icon for mobile */}
            <Link
              href="/favourite"
              className="text-gray-600 hover:text-[#7b1450] p-1"
            >
              <AiOutlineHeart className="h-5 w-5" />
            </Link>

            {/* Mobile menu toggle button */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#7b1450] focus:outline-none"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slides down */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#7b1450] hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Login Button */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link
                href="/auth/signin"
                className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#7b1450] hover:bg-[#6b1145] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
