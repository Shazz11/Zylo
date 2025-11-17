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

function Carousel({ heading, text, cards, CardComponent,breakpoints }) {
  const swiperRef = useRef(null);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between md:items-center px-3 py-3 md:px-5 md:py-3">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            {heading}
          </h1>
          <p className="text-gray-600 text-xs md:text-lg">{text}</p>
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
      <div className="w-full px-3 md:px-5">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          // slidesPerView={3}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={breakpoints}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id ?? card.name}>
              <CardComponent card={card} /> {/* Spread props dynamically */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
