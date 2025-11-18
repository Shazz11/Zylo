import React from "react";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";
import { FaCartPlus } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import Carousel from "../common/Carousel";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext"
import { useEffect } from "react";



function NewArrivalsPage() {
  // const { singleLoading, singleProduct, getSingleProduct } = useContext(ProductContext);
  const {data, loading} = useContext(ProductContext);

//   useEffect(() => {
//   getSingleProduct("prod-001");
// }, []);


  if(loading) return <p>Loading...</p>

  const newArrivalProducts = data.filter(item => item.newArrival === true);

  const breakpoints = {
    320: { slidesPerView: 1.9, spaceBetween: 10 },
    390: { slidesPerView: 2, spaceBetween: 10 },
    410: { slidesPerView: 2.3, spaceBetween: 5 },
    540: { slidesPerView: 3, spaceBetween: 5 },
    640: { slidesPerView: 3, spaceBetween: 0 },
    760: { slidesPerView: 3, spaceBetween: 5 },
    910: { slidesPerView: 3.5, spaceBetween: 5 },
    1024: { slidesPerView: 4, spaceBetween: 0 },
    1280: { slidesPerView: 5, spaceBetween: 5 },
  };
  return (
    <div className="my-10">
      <Carousel
        heading="New Arrivals"
        text="Explore our wide range of products by category"
        cards={newArrivalProducts}
        CardComponent={ProductCard}
        breakpoints={breakpoints}
      />
    </div>
  );
}

export default NewArrivalsPage;
