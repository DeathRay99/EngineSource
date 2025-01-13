import React from "react";
import ProductCarousel from "./ProductCarousel";

const OurProducts = () => {
  return (
    <section className="max-w-screen-lg w-[100%] mx-auto p-8">
      <div className="mb-8">
        <h2
          id="order"
          className="text-4xl font-bold text-black-600 text-center"
        >
          Our Products
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4 text-justify ">
          Revitalize your journey with our premium-quality used engines,
          meticulously chosen for optimal performance and exceptional
          efficiency. At PartsStoreUS, we fuel your ambitions with engines that
          marry power and precision. Our advanced technology and trusted
          partners ensure you experience unmatched reliability and innovation.
          Drive your future forward with PartsStoreUS.
        </p>
      </div>
      <ProductCarousel />
    </section>
  );
};

export default OurProducts;
