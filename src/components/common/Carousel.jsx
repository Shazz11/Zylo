/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel({ heading, text, cards, CardComponent }) {
  const swiperRef = useRef(null);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-3">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {heading}
          </h1>
          <p className="text-gray-600 md:text-lg">{text}</p>
        </div>
        <div className="flex gap-2">
          <IoIosArrowDropleftCircle
            size={40}
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <IoIosArrowDroprightCircle
            size={40}
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full p-5">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          // slidesPerView={3}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 2.5, spaceBetween: 10 },
            410: { slidesPerView: 3, spaceBetween: 10 },
            540: { slidesPerView: 4, spaceBetween: 15 },
            640: { slidesPerView: 3, spaceBetween: 0 },
            760: { slidesPerView: 2.5, spaceBetween: 15 },
            910: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 3.2, spaceBetween: 0 },
            1280: { slidesPerView: 4.5, spaceBetween: 10 }
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardComponent {...card} /> {/* Spread props dynamically */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
