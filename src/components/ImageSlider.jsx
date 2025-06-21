import React, { useState } from 'react';

export default function ImageSlider() {
ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  
    return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[current]}
        alt="slide"
        className="w-full h-64 object-cover transition duration-500"
      />

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

  }

  

