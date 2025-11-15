import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ isMobile = false }) => {
  const containerClass = isMobile ? "flex mt-2" : "hidden md:flex";
  const inputClass = isMobile ? "flex-1 rounded-l-md focus:outline-none" : "w-40 rounded-l-md focus:outline-none";

  return (
    <div className={containerClass}>
      <div className="flex bg-gray-200 px-3 py-1.5 rounded-4xl">
        <input type="text" placeholder="Search" className={inputClass} />
        <button className="rounded-r-md transition-colors duration-200 cursor-pointer">
          <IoSearch size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;