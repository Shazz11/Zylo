import React from "react";
import { IoSearch } from "react-icons/io5";
import {useFilterContext} from '../../context/FilterContext'

const SearchBar = ({ isMobile = false }) => {

  const {filters: {text}, updateFilterValue} = useFilterContext();

  const containerClass = isMobile ? "flex mt-2" : "hidden md:flex";
  const inputClass = isMobile
    ? "flex-1 rounded-l-md focus:outline-none"
    : "w-40 rounded-l-md focus:outline-none";

  return (
    <div className={containerClass}>
      <form
        className="flex bg-gray-200 px-3 py-1.5 rounded-4xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search"
          className={inputClass}
          name="text"
          value={text}
          onChange={updateFilterValue}
        />
        <button className="rounded-r-md transition-colors duration-200 cursor-pointer">
          <IoSearch size={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
