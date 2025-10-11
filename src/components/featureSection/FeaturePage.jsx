/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../common/Button";

function FeaturePage() {
  const features = [
    {
      img: "src/assets/Features/perfume.jpg",
      title: "Perfumes",
      link: "#",
    },
    {
      img: "src/assets/Features/shoes.jpg",
      title: "Shoes",
      link: "#",
    },
    {
      img: "src/assets/Features/sunglass.jpg",
      title: "Sunglasses",
      link: "#",
    },
    {
      img: "src/assets/Features/watch.jpg",
      title: "Watches",
      link: "#",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row flex-wrap h-200">
      {features.map((feature, i) => (
        <div className="flex justify-center items-center w-full h-50 md:w-1/2 md:h-1/2 relative">
          <img
            src={feature.img}
            alt={feature.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-4 md:left-10 md:bottom-10">
            <Button variant="solid" text={"Shop Now"} width="40" px={5} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturePage;

