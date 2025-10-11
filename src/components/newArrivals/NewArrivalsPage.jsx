import React from "react";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";
import { FaCartPlus } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import Carousel from "../common/Carousel";

function NewArrivalsPage() {
  const newArrivals = [
    {
      img: "src/assets/Category/Perfume.jpg",
      name: "Tommy 1",
      description: "Latest Perfume Collection",
      price: "300",
      dPrice: "400",
      rating: 4,
    },
    {
      img: "src/assets/Category/Perfume.jpg",
      name: "Tommy 2",
      description: "Latest Perfume Collection",
      price: "300",
      dPrice: "400",
      rating: 4,
    },
    {
      img: "src/assets/Category/Perfume.jpg",
      name: "Tommy 3",
      description: "Latest Perfume Collection",
      price: "300",
      dPrice: "400",
      rating: 4,
    },
    {
      img: "src/assets/Category/Perfume.jpg",
      name: "Tommy 4",
      description: "Latest Perfume Collection",
      price: "300",
      dPrice: "400",
      rating: 4,
    },  
    {
      img: "src/assets/Category/Perfume.jpg",
      name: "Tommy 5",
      description: "Latest Perfume Collection",
      price: "300",
      dPrice: "400",
      rating: 4,
    }, 
    {
      img: "src/assets/Category/Perfume.jpg",
      name: "Tommy 6",
      description: "Latest Perfume Collection",
      price: "300",
      dPrice: "400",
      rating: 4,
    }, 
    {
      img: "src/assets/Category/Perfume.jpg",
      name: "Tommy 7",
      description: "Latest Perfume Collection",
      price: "300",
      dPrice: "400",
      rating: 4,
    }, 
    {
      img: "src/assets/Category/Perfume.jpg",
      name: "Tommy 8",
      description: "Latest Perfume Collection",
      price: "300",
      dPrice: "400",
      rating: 4,
    },    
  ];

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
        cards={newArrivals}
        CardComponent={ProductCard}
        breakpoints={breakpoints}
      />
    </div>
  );
}

export default NewArrivalsPage;
