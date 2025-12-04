import React from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { useFilterContext } from "../../context/FilterContext";

function SortDropDown() {
  const { sorting, sortingValue } = useFilterContext();

  return (
    <div className="relative inline-block">
      <select
        className="pl-10 pr-4 py-2 border-none md:border rounded outline-none cursor-pointer"
        onChange={sorting}
        defaultValue=""
      >
        <option value="" disabled>
          Sort Price
        </option>
        <option value="high-low">High → Low</option>
        <option value="low-high">Low → High</option>
      </select>

      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black md:text-gray-500">
        <FaSortAmountDown />
      </span>
    </div>
  );
}

export default SortDropDown;
