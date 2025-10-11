import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Button from "./Button";
import { FaArrowRight, FaCartPlus } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";

function ProductCard({ img, name, price, dPrice, rating }) {
  const [addToCard, setAddToCard] = useState(false);

  return (
    <div className="shadow-md rounded w-41 md:w-60 h-80 relative">
      {/* IMAGE CONTAINER  */}
      <img
        src={img}
        alt="img"
        className="object-cover rounded w-full h-[58%]"
      />

      {/* ADD TO CART BUTTON  */}
      <div
        className="absolute top-2 right-2 p-1 bg-black/30 rounded-full text-2xl cursor-pointer"
        onClick={() => setAddToCard(!addToCard)}
      >
        {addToCard ? (
          <IoMdHeart className="text-red-500 transition-all duration-300" />
        ) : (
          <IoMdHeartEmpty className="text-white transition-all duration-300" />
        )}
      </div>

      {/* TEXT CONTAINER  */}
      <div className="px-2 py-0 flex flex-col gap-0.5">
        <h2 className="text-lg">{name}</h2>
        <p className="text-xs md:text-base">
          ${price} <span className="text-gray-500 line-through">${dPrice}</span>
        </p>

        <Rating name="read-only" value={rating} readOnly size="small" />

        {/* BUTTON CONTAINER  */}
        <div className="flex items-center justify-center py-1 gap-2">
          <Button
            variant="outline"
            text="Add"
            icon={FaCartPlus}
            width="w-16 md:w-25"
            textSize="text-xs"
          />

          <Button
            variant="solid"
            text="Buy"
            icon={IoBagHandle}
            width="w-16 md:w-25"
            textSize="text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
