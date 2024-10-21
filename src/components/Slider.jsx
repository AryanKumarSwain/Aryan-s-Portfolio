import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Slider = ({ slides }) => {
  const totalSlides = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto flex justify-center items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full relative transition-all duration-500"
          >
            {/* Image Container */}
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-[50vh] md:h-[70vh]"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Show title and description only when hovered */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4 py-2 transition-opacity duration-300 ease-in-out ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-lg md:text-3xl font-bold mb-2">{slide.title}</h3>
                <p className="m-4 text-sm md:text-lg text-center">{slide.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 z-20 p-4 rounded-full"
      >
        <SlArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 z-20 p-4 rounded-full"
      >
        <SlArrowRight size={24} />
      </button>
    </div>
  );
};

export default Slider;
