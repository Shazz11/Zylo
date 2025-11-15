import React from 'react';

const TrustPoints = () => {
  const trustPoints = [
    {
      id: 1,
      icon: (
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      ),
      title: '100% Authentic Products',
      description: 'All shoes are genuine and sourced directly from brands.'
    },
    {
      id: 2,
      icon: (
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      ),
      title: 'Authorized Brand Partnerships',
      description: 'Official partnerships ensure authenticity and quality.'
    },
    {
      id: 3,
      icon: (
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: 'Pan-India Fast Delivery',
      description: 'Get your favorite shoes delivered quickly anywhere in India.'
    },
    {
      id: 4,
      icon: (
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      ),
      title: '24/7 Customer Support',
      description: 'Our team is always ready to help with any questions.'
    }
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Why Trust ShoeKart
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We're committed to providing you with authentic products and exceptional service
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.id}
              className="group bg-white rounded-2xl p-5 sm:p-7 md:p-8 
                         shadow-md hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1
                         flex flex-col items-center text-center"
            >
              <div className="mb-4 sm:mb-6">
                {point.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                {point.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base">
                {point.description}
              </p>

              <div className="mt-4 sm:mt-6 w-10 sm:w-12 h-1 bg-gray-200 group-hover:bg-gray-300 transition-colors duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustPoints;
