import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { formatCurrency } from "../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";
import { navigateToSnglProduct } from "../../utils/navigateToSnglProduct";
import Rating from "./Rating";

function ProductCard({ card }) {
  const { id, img = "", name, price, ratings, rating, discountedPrice } = card;

  const [addToCard, setAddToCard] = useState(false);

  const ratingValue = ratings?.average ?? rating ?? 0;

  const navigate = useNavigate();

  return (
    <div
      className="shadow-md rounded w-auto md:w-60 h-80 relative"
      onClick={() => navigateToSnglProduct(navigate, id)}
    >
      <img
        src={img}
        alt="img"
        className="object-cover rounded w-full h-[58%]"
      />

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

      <div className="px-2 py-0 flex flex-col gap-0.5">
        <h2 className="text-lg truncate">{name}</h2>

        <p className="text-xs md:text-base">
          {formatCurrency(discountedPrice, "INR")}{" "}
          <span className="text-gray-500 line-through">
            {formatCurrency(price, "INR")}
          </span>
        </p>

        <span>
          <Rating value={ratingValue} variant="small"/>
        </span>

        <div className="flex items-center py-1 gap-2">
          <Button
            variant="solid"
            text="Buy"
            icon={IoBagHandle}
            width="w-16 md:w-full"
            textSize="text-xs"
            px="0"
            onClick={(e) => {
              e.stopPropagation(); // stop bubble effect (stop to trigger div onclick function)
              alert("clicked on  Buy Now");
            }}
          />

          <Button
            variant="outline"
            text="Add"
            icon={FaCartPlus}
            width="w-16 md:w-full"
            textSize="text-xs"
            px="0"
            onClick={(e) => {
              e.stopPropagation(); // stop bubble effect (stop to trigger div onclick function)
              alert("clicked on Add to Cart");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
