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
        Revitalize your journey with premium-quality used engines and transmissions, meticulously chosen for performance and efficiency. PartsStoreUS offers a vast inventory of used car parts for American and import vehicles. From used Ford parts and robust Chevy engines to reliable Toyota transmissions and specialized BMW/Audi engines, we've got you covered. Our selection includes V6, V8, and fuel-efficient 4-cylinder options. As a trusted source for auto parts in the USA, we provide quality used truck, SUV, and recycled auto parts for engine replacement and transmission repair. We also source hard-to-find second-hand and legit engines through our network of American auto salvage yards. Drive your future forward with PartsStoreUS.
        </p>
      </div>
      <ProductCarousel />
    </section>
  );
};

export default OurProducts;
