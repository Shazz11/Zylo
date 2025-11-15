import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4 cursor-pointer" onClick={toggleOpen}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{question}</h3>
        <FaChevronDown 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'mt-2 max-h-96' : 'max-h-0'}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;