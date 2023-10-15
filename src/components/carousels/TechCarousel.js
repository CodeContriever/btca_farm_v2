import React, { useState, useEffect, useRef } from 'react';
import Technologies from '../../constants/Technologies';

function TechCarousel() {
  // State to keep track of the current active index
  const [activeIndex, setActiveIndex] = useState(0);

  // State to control whether the carousel is currently animating
  const [isAnimating, setIsAnimating] = useState(false);

  // Reference to the carousel container element
  const carouselRef = useRef(null);

  // Function to handle the transition end event
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    // Move the active index by 2 positions, looping around the array
    setActiveIndex((prevIndex) => (prevIndex + 2) % Technologies.length);
  };

  // Set up an interval to start animating the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
    }, 4500); // Start animating a bit before the transition completes

    // Clear the interval when the component unmounts or is updated
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Update the carousel's transform property when activeIndex or isAnimating changes
  useEffect(() => {
    if (isAnimating) {
      carouselRef.current.style.transform = `translateX(-${activeIndex * 50}%)`;
    }
  }, [activeIndex, isAnimating]);

  return (
    <div className="flex items-center justify-center w-full">

      <div className="carousel-container overflow-hidden">

        <div
          ref={carouselRef}
          className={`carousel-items grid grid-cols-2 md:grid-cols-2 gap-4 transition-transform duration-500`}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: isAnimating ? `translateX(-${activeIndex * 50}%)` : 'none',
            transition: isAnimating ? 'transform 2s ease-in-out' : 'none',
          }}
        >
          {/* Map over a slice of Technologies array (2 items) */}
          {Technologies.slice(activeIndex, activeIndex + 2).map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              style={{
                width: '100%',
                // Apply the transform animation only to the first item
                transform: isAnimating && index === 0 ? 'translateX(-100%)' : 'none',
              }}
            >
              <div
                className="flex flex-col items-center justify-center">
                {/* Render the icon from the Technologies array */}
                {item.icon}

                <h3 className="mb-2 leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#A020F0] dark:text-white">

                  {/* Render the title from the Technologies array */}
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechCarousel;
