import React from "react";

function Searchbar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}

export default Searchbar;
