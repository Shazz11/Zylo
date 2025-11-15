import React from 'react';
import { Link } from 'react-router-dom';

const FooterCTA = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Join thousands of happy customers and shop authentic brands today.
          </h2>
          <Link 
            to="/shop" 
            className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 mb-8"
          >
            Explore Now
          </Link>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verified Payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;