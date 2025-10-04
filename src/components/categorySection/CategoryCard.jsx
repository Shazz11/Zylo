import React from "react";

export default function CategoryCard({ img, btnText, description, onClick }) {
  return (
    <div
      className="w-30 h-30 md:w-72 md:h-52 rounded-lg overflow-hidden relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/30"></div> {/* dark overlay */}
      <div className="absolute bottom-1 md:bottom-4 w-full flex flex-col items-center text-center text-white px-2">
        <button className="bg-white text-black font-bold py-1 px-4 rounded mb-1 text-xs md:text-lg">
          {btnText}
        </button>
        <p className="text-xs hidden md:flex">{description}</p>
      </div>
    </div>
  );
}
