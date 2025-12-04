import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import SortDropDown from "./SortDropDown";

function Filters() {
  const [showFilters, setShowFilters] = useState(false);

  // Selected Values
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const categories = ["Sneakers", "Loafers", "Sports Shoes", "Formal Shoes", "Chelsea boots"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Bata", "New Balance"];
  const sizes = [6, 7, 8, 9];
  const colors = ["#000000", "#FFFFFF", "#8B4513", "#808080", "#D2B48C"];

  // RESET ALL
  const handleReset = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setSelectedSize(null);
    setSelectedColor("");
    setShowFilters(false); // mobile me close bhi ho jaye
  };

  // APPLY FILTERS
  const handleApply = () => {
    setShowFilters(false); // mobile panel close
  };

  return (
    <aside className="bg-white relative rounded w-full md:w-1/4 md:py-3 shadow-sm md:sticky md:top-0">

      {/* -------------------- DESKTOP HEADER -------------------- */}
      <div className="hidden md:flex items-center justify-between px-3">
        <span className="flex items-center gap-2 text-lg font-semibold">
          <FaFilter /> Filters
        </span>
        <button
          onClick={handleReset}
          className="text-sm text-red-500 hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* -------------------- DESKTOP BODY -------------------- */}
      <div className="hidden md:block px-3 space-y-2">

        {/* CATEGORY */}
        <section>
          <h2 className="font-semibold mb-1">Category</h2>
          <ul className="space-y-1">
            {categories.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`text-sm cursor-pointer hover:text-blue-600 ${
                  selectedCategory === item ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* BRANDS */}
        <section>
          <h2 className="font-semibold mb-1">Brands</h2>
          <ul className="space-y-1">
            {brands.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedBrand(item)}
                className={`text-sm cursor-pointer hover:text-blue-600 ${
                  selectedBrand === item ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* SIZES */}
        <section>
          <h2 className="font-semibold mb-1">Sizes</h2>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((item, index) => (
              <span
                key={index}
                onClick={() => setSelectedSize(item)}
                className={`px-3 py-1 border rounded text-sm cursor-pointer
                ${
                  selectedSize === item
                    ? "bg-black text-white border-black"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* COLORS */}
        <section>
          <h2 className="font-semibold mb-1">Colors</h2>
          <div className="flex gap-3 flex-wrap">
            {colors.map((item, index) => (
              <span
                key={index}
                onClick={() => setSelectedColor(item)}
                style={{ backgroundColor: item }}
                className={`w-6 h-6 rounded-full border cursor-pointer ${
                  selectedColor === item ? "ring-2 ring-blue-500" : ""
                }`}
              ></span>
            ))}
          </div>
        </section>

        {/* BUTTON FIXED BOTTOM */}
          <div
            className="bg-red-500 text-white py-2 rounded-md text-center font-semibold cursor-pointer w-full"
          >
            Apply Filters
          </div>
      </div>

      {/* -------------------- MOBILE BOTTOM FIXED BAR -------------------- */}
      <div className="bg-gray-300 flex justify-center items-center text-lg rounded md:hidden fixed bottom-0 z-40 w-full">
        <button
          className="w-full flex justify-center items-center gap-2 py-2"
          onClick={() => setShowFilters(true)}
        >
          <FaFilter /> Filters
        </button>

        <div className="border-l px-2">
          <SortDropDown />
        </div>
      </div>

      {/* -------------------- MOBILE FULL PANEL -------------------- */}
      {showFilters && (
        <div className="bg-white w-full py-2 md:hidden fixed top-0 left-0 h-full z-50 px-3 shadow-md border overflow-y-auto">

          {/* Header */}
          <div className="flex items-center justify-between py-2">
            <span className="flex items-center gap-2 text-lg font-semibold">
              <FaFilter /> Filters
            </span>
            <span
              onClick={handleReset}
              className="text-red-500 text-sm cursor-pointer"
            >
              Reset All
            </span>
          </div>

          {/* CATEGORY */}
          <section className="mt-3">
            <h2 className="font-semibold">Category</h2>
            <ul className="space-y-1 mt-1">
              {categories.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(item)}
                  className={`text-sm cursor-pointer hover:text-blue-600 ${
                    selectedCategory === item ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* BRANDS */}
          <section className="mt-4">
            <h2 className="font-semibold">Brands</h2>
            <ul className="space-y-1 mt-1">
              {brands.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedBrand(item)}
                  className={`text-sm cursor-pointer hover:text-blue-600 ${
                    selectedBrand === item ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* SIZES */}
          <section className="mt-4">
            <h2 className="font-semibold">Sizes</h2>
            <div className="flex gap-2 flex-wrap mt-1">
              {sizes.map((item, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedSize(item)}
                  className={`px-3 py-1 border rounded text-sm cursor-pointer
                  ${
                    selectedSize === item
                      ? "bg-black text-white border-black"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* COLORS */}
          <section className="mt-4 mb-20">
            <h2 className="font-semibold">Colors</h2>
            <div className="flex gap-3 flex-wrap mt-1">
              {colors.map((item, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedColor(item)}
                  style={{ backgroundColor: item }}
                  className={`w-6 h-6 rounded-full border cursor-pointer ${
                    selectedColor === item ? "ring-2 ring-blue-500" : ""
                  }`}
                ></span>
              ))}
            </div>
          </section>

          {/* BUTTON FIXED BOTTOM */}
          <div
            onClick={handleApply}
            className="bg-red-500 text-white py-3 rounded-md text-center font-semibold cursor-pointer fixed bottom-0 left-0 w-full"
          >
            Apply Filters
          </div>
        </div>
      )}
    </aside>
  );
}

export default Filters;
