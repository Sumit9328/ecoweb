import React from 'react';

const WordSlider = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Word Slider */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {/* Repeat the words to enable looping */}
          <span className="mx-8 text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            PRODUCTS
          </span>
          <span className="mx-8 text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            HANDMADE GOODS
          </span>
          <span className="mx-8 text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            VINTAGE ITEMS
          </span>
          <span className="mx-8 text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            PRODUCTS
          </span>
          <span className="mx-8 text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            HANDMADE GOODS
          </span>
          <span className="mx-8 text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            VINTAGE ITEMS
          </span>
        </div>
      </div>
    </div>
  );
};

export default WordSlider;
