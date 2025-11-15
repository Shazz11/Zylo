import React from 'react';
import { Link } from 'react-router-dom';
import { SiNike, SiAdidas, SiPuma, SiReebok, SiNewbalance, SiBata } from "react-icons/si";

const BrandGrid = () => {
  const brands = [
    { id: 1, name: 'Nike', logo: <SiNike size={38} /> },
    { id: 2, name: 'Adidas', logo: <SiAdidas size={38} /> },
    { id: 3, name: 'Puma', logo: <SiPuma size={38} /> },
    { id: 4, name: 'Reebok', logo: <SiReebok size={38} /> },
    { id: 5, name: 'Bata', logo: <SiBata size={38} /> },
    { id: 6, name: 'New Balance', logo: <SiNewbalance size={38} /> },
  ];

  return (
    <section className="py-1 md:py-8 bg-white">
      <div className="container mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Our Partner Brands
        </h2>

        {/* FLEX + RESPONSIVE CARDS */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to="/"
              className="
                w-28 h-28 
                sm:w-32 sm:h-32 
                md:w-36 md:h-36 
                lg:w-40 lg:h-40

                bg-white rounded-2xl shadow-sm hover:shadow-lg 
                transition-all duration-300 border border-gray-200 
                flex flex-col items-center justify-center hover:scale-105
              "
            >
              <div className="grayscale hover:grayscale-0 transition-all duration-300 flex flex-col items-center gap-2">
                {brand.logo}
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
                  {brand.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandGrid;
