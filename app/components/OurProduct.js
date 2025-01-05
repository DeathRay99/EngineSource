'use client'
import React, { useRef, useEffect, useState } from "react";
import EngineCards from "./EngineCards";

const OurProducts = () => {
  const products = [
    { name: 'BMW Engine', imagePath: 'usedengine1.png', status: 'In Stock', link: '/call-us' },
    { name: 'Audi A4 Engine', imagePath: 'usedengine2.png', status: 'In Stock', link: '/call-us' },
    { name: 'Chevy Engines', imagePath: 'usedengine3.png', status: 'In Stock', link: '/call-us' },
  ];
  const scrollContainer = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const autoScrollTimeout = useRef(null);

  // Auto-scrolling logic
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (isScrolling && scrollContainer.current) {
        const container = scrollContainer.current;
        container.scrollBy({ left: 2, behavior: "smooth" });

        // Looping logic when reaching the end
        if (
          container.scrollLeft + container.clientWidth >= container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "instant" });
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  // Handle manual scrolling
  const scroll = (direction) => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;

      setIsScrolling(false); // Pause auto-scrolling
      clearTimeout(autoScrollTimeout.current);

      container.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });

      // Resume auto-scroll after delay
      autoScrollTimeout.current = setTimeout(() => {
        setIsScrolling(true);
      }, 3000);
    }
  };

  // Infinite loop logic: Clone cards at the start and end
  const cloneCards = () => {
    const container = scrollContainer.current;
    if (!container) return;

    const cards = Array.from(container.children);
    if (cards.length > 0) {
      const firstClone = cards[0].cloneNode(true);
      const lastClone = cards[cards.length - 1].cloneNode(true);

      container.insertBefore(lastClone, cards[0]);
      container.appendChild(firstClone);
    }
  };

  useEffect(() => {
    cloneCards();
  }, []);

  return (
    <section className="max-w-screen-lg w-[100%] mx-auto p-8 text-center">
      <div className="mb-8">
        <h2 id="order" className="text-4xl font-bold text-black-600">Our Products</h2>
        <p className="text-lg text-gray-600 mt-4">
          Revitalize your journey with our premium-quality used engines,
          meticulously chosen for optimal performance and exceptional
          efficiency. At EngineSource, we fuel your ambitions with engines that
          marry power and precision. Our advanced technology and trusted
          partners ensure you experience unmatched reliability and innovation.
          Drive your future forward with EngineSource.
        </p>
      </div>

      {/* Carousel with Arrow Buttons */}
      <div className="relative w-[100%] mt-[-80] ">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black text-3xl font-bold rounded-full p-4 shadow-md opacity-90 hover:opacity-100 transition-all duration-300 focus:outline-none z-10"
          onClick={() => scroll("left")}
        >
          &#x2190;
        </button>

        {/* Cards Container */}
        <div
          className="flex flex-row overflow-x-scroll scrollbar-hide"
          ref={scrollContainer}
          onMouseEnter={() => setIsScrolling(false)}
          onMouseLeave={() => setIsScrolling(true)}
        >
           {products.map((product, index) => (
          <EngineCards
            key={index}
            productName={product.name}
            productImage={product.imagePath}
          />
        ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black text-3xl font-bold rounded-full p-4 shadow-md opacity-90 hover:opacity-100 transition-all duration-300 focus:outline-none z-10"
          onClick={() => scroll("right")}
        >
          &#x2192;
        </button>
      </div>
    </section>
  );
};

export default OurProducts;




