import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import SortDropDown from "./SortDropDown";
import { useFilterContext } from "../../context/FilterContext";

/**
 * Filters component
 * - Uses filter state from FilterContext (single source of truth)
 * - Clicking an option immediately updates context via updateFilterValue
 * - Works same on desktop & mobile (no duplicated / wrong handlers)
 * - Reset clears filters in context and closes mobile panel
 */

function Filters() {
  const [showFilters, setShowFilters] = useState(false);

  // get filters object and update function from context
  const {
    filters = {},            // filters: { text, category, brand, size, color, ... }
    updateFilterValue,
  } = useFilterContext();

  // read current selected values from context (no duplicated local state)
  const selectedCategory = filters.category ?? "";
  const selectedBrand = filters.brand ?? "";
  const selectedSize = filters.size ?? "";
  const selectedColor = filters.color ?? "";

  // static options
  const categories = [
    "Sneakers",
    "Loafers",
    "Sports Shoes",
    "Formal Shoes",
    "Chelsea boots",
  ];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Bata", "New Balance"];
  const sizes = [6, 7, 8, 9];
  const colors = ["#000000", "#FFFFFF", "#8B4513", "#808080", "#D2B48C"];

  // reset all filters in context and close mobile panel
  const handleReset = () => {
    // call updateFilterValue with shaped "event" objects as your context expects
    updateFilterValue({ target: { name: "text", value: "" } });
    updateFilterValue({ target: { name: "category", value: "" } });
    updateFilterValue({ target: { name: "brand", value: "" } });
    updateFilterValue({ target: { name: "size", value: "" } });
    updateFilterValue({ target: { name: "color", value: "" } });
    setShowFilters(false);
  };

  // mobile apply just closes the panel (filters already applied on select)
  const handleApply = () => {
    setShowFilters(false);
  };

  return (
    <aside className="bg-white relative rounded w-full md:w-1/3 md:py-3 shadow-sm md:sticky md:top-0">
      {/* DESKTOP HEADER */}
      <div className="hidden md:flex items-center justify-between px-3">
        <span className="flex items-center gap-2 text-lg font-semibold">
          <FaFilter /> Filters
        </span>
        <button onClick={handleReset} className="text-sm text-red-500 hover:underline">
          Reset All
        </button>
      </div>

      {/* DESKTOP BODY (always visible on md+) */}
      <div className="hidden md:block px-3 space-y-2">
        {/* CATEGORY */}
        <section>
          <h2 className="font-semibold mb-1">Category</h2>
          <ul className="space-y-1">
            {categories.map((item, index) => (
              <li
                key={index}
                className={`text-sm cursor-pointer hover:text-blue-600 ${
                  selectedCategory === item ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() =>
                  updateFilterValue({ target: { name: "category", value: item } })
                }
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
            {brands.map((item, i) => (
              <li
                key={i}
                className={`text-sm cursor-pointer hover:text-blue-600 ${
                  selectedBrand === item ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => updateFilterValue({ target: { name: "brand", value: item } })}
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
            {sizes.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`px-3 py-1 border rounded text-sm cursor-pointer ${
                  String(selectedSize) === String(item)
                    ? "bg-black text-white border-black"
                    : "hover:bg-black hover:text-white"
                }`}
                onClick={() => updateFilterValue({ target: { name: "size", value: item } })}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* COLORS */}
        <section>
          <h2 className="font-semibold mb-1">Colors</h2>
          <div className="flex gap-3 flex-wrap">
            {colors.map((c, idx) => (
              <button
                key={idx}
                type="button"
                style={{ backgroundColor: c }}
                className={`w-6 h-6 rounded-full border cursor-pointer ${selectedColor === c ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => updateFilterValue({ target: { name: "color", value: c } })}
                aria-label={`Color ${c}`}
              />
            ))}
          </div>
        </section>

        {/* APPLY (desktop still shows as button) */}
        <div className="bg-red-500 text-white py-2 rounded-md text-center font-semibold cursor-pointer w-full">
          Apply Filters
        </div>
      </div>

      {/* MOBILE BOTTOM BAR */}
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

      {/* MOBILE FULL PANEL */}
      {showFilters && (
        <div className="bg-white w-full py-2 md:hidden fixed top-0 left-0 h-full z-50 px-3 shadow-md border overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between py-2">
            <span className="flex items-center gap-2 text-lg font-semibold">
              <FaFilter /> Filters
            </span>
            <span onClick={handleReset} className="text-red-500 text-sm cursor-pointer">
              Reset All
            </span>
          </div>

          {/* CATEGORY (mobile) */}
          <section className="mt-3">
            <h2 className="font-semibold">Category</h2>
            <ul className="space-y-1 mt-1">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm cursor-pointer hover:text-blue-600 ${
                    selectedCategory === item ? "text-blue-600 font-semibold" : ""
                  }`}
                  onClick={() => updateFilterValue({ target: { name: "category", value: item } })}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* BRANDS (mobile) */}
          <section className="mt-4">
            <h2 className="font-semibold">Brands</h2>
            <ul className="space-y-1 mt-1">
              {brands.map((item, i) => (
                <li
                  key={i}
                  className={`text-sm cursor-pointer hover:text-blue-600 ${
                    selectedBrand === item ? "text-blue-600 font-semibold" : ""
                  }`}
                  onClick={() => updateFilterValue({ target: { name: "brand", value: item } })}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* SIZES (mobile) */}
          <section className="mt-4">
            <h2 className="font-semibold">Sizes</h2>
            <div className="flex gap-2 flex-wrap mt-1">
              {sizes.map((item, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 border rounded text-sm cursor-pointer ${
                    String(selectedSize) === String(item) ? "bg-black text-white border-black" : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => updateFilterValue({ target: { name: "size", value: item } })}
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* COLORS (mobile) */}
          <section className="mt-4 mb-20">
            <h2 className="font-semibold">Colors</h2>
            <div className="flex gap-3 flex-wrap mt-1">
              {colors.map((c, idx) => (
                <span
                  key={idx}
                  style={{ backgroundColor: c }}
                  className={`w-6 h-6 rounded-full border cursor-pointer ${selectedColor === c ? "ring-2 ring-blue-500" : ""}`}
                  onClick={() => updateFilterValue({ target: { name: "color", value: c } })}
                />
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
