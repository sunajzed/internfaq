import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react"; 

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl">
      <button
        className="flex justify-between items-center w-full text-left p-4 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white font-medium transition-colors duration-300 hover:bg-gradient-to-l focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-xl">{question}</span>
        {isOpen ? (
          <MinusCircle className="w-6 h-6 transition-transform duration-200 transform rotate-180" />
        ) : (
          <PlusCircle className="w-6 h-6 transition-transform duration-200" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-800 border-t border-gray-200">
          <p className="text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};


export default FAQItem;
