import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["Home", "Shop", "Categories", "About", "Contact"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 lg:px-2">
      <div className="w-full  px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Nav */}
          <NavLinks links={navLinks} />

          <div className="flex items-center md:space-x-2">
            {/* <SearchBar /> */}
            <UserMenu />

            {/* Mobile menu button */}
            <div className="lg:hidden ">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-4">
            <NavLinks links={navLinks} isMobile />
            <SearchBar isMobile />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;