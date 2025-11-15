import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticBrandsPage = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Trusted by the World's Leading Brands
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            We proudly partner with globally recognized names to bring you 100% authentic shoes.
          </p>
          <Link 
            to="/collections" 
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Shop Authentic Brands
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthenticBrandsPage;