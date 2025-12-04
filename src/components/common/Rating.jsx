import React from "react";
import { FaStar } from "react-icons/fa6";

function Rating({ value, variant = "small" }) {
  const styles = {
    small: "text-xs px-2 py-0.5",
    large: "text-sm md:text-base px-3 py-1"
  };

  return (
    <span
      className={`
        inline-flex 
        items-center 
        gap-1 
        bg-green-500 
        text-white 
        rounded 
        ${styles[variant]}
      `}
    >
      <FaStar className="text-yellow-300" />
      {value}
    </span>
  );
}

export default Rating;
