import React, { useState, useEffect } from 'react';
import { FaHome, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import ArrowButton from '../components/error/ArrowButton';
import ErrorIllustration from '../components/error/ErrorIllustration';

const ErrorPage = ({ type = '404' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleContactSupport = () => {
    window.location.href = '/contact';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const errorContent = {
    '404': {
      title: "Oops! Page Not Found",
      description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
    },
    '500': {
      title: "Something Went Wrong",
      description: "We're experiencing a technical issue. Our team has been notified and is working to fix it."
    }
  };

  const content = errorContent[type];

  return (
    <div className=" bg-white flex flex-col items-center justify-center px-6 md:px-0 py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Illustration with fade-in animation */}
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <ErrorIllustration type={type} />
        </div>
        
        {/* Heading with fade-in animation */}
        <h1 className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {content.title}
        </h1>
        
        {/* Subtext with fade-in animation */}
        <p className={`text-gray-600 max-w-md mx-auto mb-8 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {content.description}
        </p>
        
        {/* Buttons with fade-in animation */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-6 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <ArrowButton 
            variant="solid" 
            icon={<FaHome />}
            onClick={handleGoHome}
          >
            Go Home
          </ArrowButton>
          <ArrowButton 
            variant="outline" 
            icon={<FaEnvelope />}
            onClick={handleContactSupport}
          >
            Contact Support
          </ArrowButton>
        </div>
        
        {/* Back to previous page link with fade-in animation */}
        <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button 
            onClick={handleGoBack}
            className="text-gray-600 hover:text-black underline text-sm flex items-center justify-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Previous Page
          </button>
        </div>
      </div>
      
      {/* Custom animations using Tailwind */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { 
            opacity: 0;
            transform: translateY(1rem);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
        .animate-fadeUp {
          animation: fadeUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;