import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Rating from "../common/Rating";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.css"


function HeroSection() {
  const banners = [
    {
      img: "src/assets/Banners/S.jpg",
      title: "Shoes 1",
      desc: "Latest Tech at Best Price",
      cta: "Buy Now",
    },
    {
      img: "src/assets/Banners/S2.jpg",
      title: "Shoes 2",
      desc: "Latest Tech at Best Price",
      cta: "Buy Now",
    },
    {
      img: "src/assets/Banners/S3.jpg",
      title: "Shoes 3",
      desc: "Latest Tech at Best Price",
      cta: "Buy Now",
    },
  ];
  return (
    <div className="w-full h-50 md:min-h-130 relative">  
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
      style={{ width: "100%", height: "100%" }}
    >
      {banners.map((banner, i) => (
        <SwiperSlide key={i}>
          <img
            src={banner.img}
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    </div>
  );
}

export default HeroSection;
