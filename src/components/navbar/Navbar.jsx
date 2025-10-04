import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <nav className="w-full bg-white text-black shadow-md px-6 py-3 flex items-center justify-between flex-wrap">
      {/* Logo */}
      <Logo />

      {/* Navigation links */}
      <div className="flex items-center gap-6">
        <NavLinks />
        <Searchbar />
      </div>
    </nav>
  );
}

export default Navbar;
