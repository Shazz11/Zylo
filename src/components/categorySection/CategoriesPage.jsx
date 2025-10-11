import React from "react";
import Carousel from "../common/Carousel";
import CategoryCard from "./CategoryCard";

function CategoriesPage() {
  const categories = [
    {
      img: "src/assets/Category/Perfume.jpg",
      btnText: "Shop Now",
      description: "Latest Perfume Collection",
    },
    {
      img: "src/assets/Category/Shoes.jpg",
      btnText: "Shop Now",
      description: "Latest Shoes Collection",
    },
    {
      img: "src/assets/Category/Watch.jpg",
      btnText: "Shop Now",
      description: "Latest Watches Collection",
    },
    {
      img: "src/assets/Category/Bag.jpg",
      btnText: "Shop Now",
      description: "Trendy Bags Collection",
    },
    {
      img: "src/assets/Category/Perfume.jpg",
      btnText: "Shop Now",
      description: "Latest Perfume Collection",
    },
    {
      img: "src/assets/Category/Shoes.jpg",
      btnText: "Shop Now",
      description: "Latest Shoes Collection",
    },
    {
      img: "src/assets/Category/Watch.jpg",
      btnText: "Shop Now",
      description: "Latest Watches Collection",
    },
    {
      img: "src/assets/Category/Bag.jpg",
      btnText: "Shop Now",
      description: "Trendy Bags Collection",
    },
  ];

  const breakpoints = {
    320: { slidesPerView: 2.5, spaceBetween: 10 },
    410: { slidesPerView: 3, spaceBetween: 10 },
    540: { slidesPerView: 4, spaceBetween: 15 },
    640: { slidesPerView: 3, spaceBetween: 0 },
    760: { slidesPerView: 2.5, spaceBetween: 15 },
    910: { slidesPerView: 3, spaceBetween: 15 },
    1024: { slidesPerView: 3.2, spaceBetween: 0 },
    1280: { slidesPerView: 4.5, spaceBetween: 10 },
  };

  return (
    <div className="my-5">
      <Carousel
        heading="Categories"
        text="Explore our wide range of products by category"
        cards={categories}
        CardComponent={CategoryCard}
        breakpoints={breakpoints}
      />
    </div>
  );
}

export default CategoriesPage;

