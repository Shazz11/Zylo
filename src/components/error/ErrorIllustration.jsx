import React from 'react';

const ErrorIllustration = ({ type }) => {
  if (type === '404') {
    return (
      <div className="relative max-w-xs md:max-w-sm mx-auto mb-8 transition-all duration-700 transform translate-y-4 opacity-0 animate-fadeIn">
        <div className="relative">
          {/* Main illustration - 404 */}
          <div className="text-9xl font-bold text-gray-200 opacity-50">404</div>
          
          {/* Compass illustration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-gray-300 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gray-400 origin-bottom rotate-45"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gray-400 origin-bottom"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-200 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gray-200 rounded-full opacity-50"></div>
        </div>
      </div>
    );
  }
  
  if (type === '500') {
    return (
      <div className="relative max-w-xs md:max-w-sm mx-auto mb-8 transition-all duration-700 transform translate-y-4 opacity-0 animate-fadeIn">
        <div className="relative">
          {/* Main illustration - 500 */}
          <div className="text-9xl font-bold text-gray-200 opacity-50">500</div>
          
          {/* Robot illustration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Robot head */}
              <div className="w-24 h-24 bg-gray-300 rounded-lg relative">
                {/* Eyes */}
                <div className="absolute top-6 left-4 w-4 h-4 bg-gray-500 rounded-full"></div>
                <div className="absolute top-6 right-4 w-4 h-4 bg-gray-500 rounded-full"></div>
                {/* Mouth - sad */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-500 rounded-full"></div>
                {/* Crack */}
                <div className="absolute top-0 left-1/2 w-1 h-6 bg-gray-500 transform -translate-x-1/2 rotate-12"></div>
              </div>
              {/* Robot body */}
              <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mt-2 relative">
                {/* Crack on body */}
                <div className="absolute top-0 left-1/2 w-1 h-10 bg-gray-500 transform -translate-x-1/2 -rotate-6"></div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-200 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-200 rounded-full opacity-50"></div>
        </div>
      </div>
    );
  }
  
  return null;
};

export default ErrorIllustration;