import React, { useState, useContext, useEffect } from "react";
import Button from "../components/common/Button";
import { FaCartPlus, FaStar } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function SingleProductPage() {
  const { id } = useParams();

  const { singleLoading, singleProduct, singleError, getSingleProduct } =
    useContext(ProductContext);

    const product = singleProduct;
  const {
    name,
    description,
    images,
    img,
    price,
    ratings,
    reviews,
    sizes,
    colors,
    discount
  } = product;

  const discountedPrice = Math.round(
    price - (price * (discount?.percentage ?? 0)) / 100
  );

  const [state, setState] = useState({
    fav: false,
    imgIndex: 0,
    size: null,
    color: null,
  });

  const toggle = (key, value) =>
    setState((prev) => ({ ...prev, [key]: value ?? !prev[key] }));

  // FETCH SINGLE PRODUCT ON PAGE LOAD
  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  // HANDLE STATES
  if (singleLoading) return <h1>Loading...</h1>;
  if (singleError) return <h1>Error: {singleError}</h1>;
  if (!singleProduct) return <p>Product not found</p>;


  return (
    <div className="md:p-2">
      <div className="flex flex-col md:flex-row">
        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/3">
          <img
            src={images?.[state.imgIndex] || img}
            alt={name}
            className="w-full h-90 md:h-96 object-cover md:rounded-xl"
          />

          {images?.length > 1 && (
            <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
              {images.map((image, i) => (
                <div
                  key={i}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 cursor-pointer ${
                    state.imgIndex === i ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => toggle("imgIndex", i)}
                >
                  <img src={image} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PRODUCT DETAILS */}
        <div className="md:text-base px-3 mt-3 flex flex-col gap-3">
          <h1 className="font-bold md:text-2xl">{name}</h1>
          <p className="text-xs md:text-base md:w-1/2">{description}</p>

          <div className="text-xs md:text-base flex gap-3 items-center">
            <span className="bg-green-500 flex items-center gap-1 px-3 py-1 rounded text-white">
              <FaStar className="text-yellow-300" /> {ratings?.average}
            </span>
            <span>|</span>
            <span>{ratings?.count || 0} Reviews</span>
          </div>

          <div className="flex gap-2 text-xs md:text-base">
            <span>₹{discountedPrice}</span>
            <span className="line-through text-gray-500">{price}</span>
          </div>

          {/* SIZES */}
          {sizes?.length > 0 && (
            <div className="flex gap-2 mt-2 ">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={`px-4 py-2 text-xs border-2 rounded transition-all duration-200 ${
                    state.size === s
                      ? "border-black bg-amber-300"
                      : "border-gray-300 bg-white hover:border-gray-400"
                  }`}
                  onClick={() => toggle("size", s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* COLORS */}
          {colors?.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-2">Color:</h3>
              <div className="flex gap-2 flex-wrap">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      state.color === c
                        ? "border-black ring-2 ring-black"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: c }}
                    onClick={() => toggle("color", c)}
                  >
                    {state.color === c && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex justify-center gap-2 mt-3 md:w-full">
            <div
              className="p-1 rounded text-3xl cursor-pointer "
              onClick={() => toggle("fav")}
            >
              {state.fav ? (
                <IoMdHeart className="text-red-500" />
              ) : (
                <IoMdHeartEmpty className="text-black" />
              )}
            </div>

            <Button
              variant="outline"
              text="Add"
              icon={FaCartPlus}
              width="w-full"
              textSize="text-xs"
              py="0"
            />

            <Button
              variant="solid"
              text="Buy"
              icon={IoBagHandle}
              width="w-full"
              textSize="text-xs"
              py="0"
            />
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-3 px-3">
        <h1 className="font-bold">Customer Reviews ({ratings?.count || 0})</h1>

        {singleProduct?.ratings?.reviews?.length ? (
          singleProduct.ratings.reviews.map((r, i) => (
            <div
              key={i}
              className="text-xs flex flex-col gap-2 border-b pb-2 mt-1"
            >
              <div className="flex gap-2 items-center">
                <span className="font-bold">{r.name}</span>
                <span>|</span>
                <span className="bg-green-500 px-3 py-1 rounded text-white flex gap-1">
                  <FaStar className="text-yellow-300" />
                  {r.rating}
                </span>
              </div>

              <p>{r.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default SingleProductPage;
