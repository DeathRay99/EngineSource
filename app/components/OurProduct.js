"use client"
import React from "react";
import EngineCards from "./EngineCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Autoplay from "embla-carousel-autoplay"

const OurProducts = () => {
  const products = [
    {
      name: "BMW Engine",
      imagePath: "usedengine1.png",
      status: "In Stock",
      link: "/call-us",
    },
    {
      name: "Audi A4 Engine",
      imagePath: "usedengine2.png",
      status: "In Stock",
      link: "/call-us",
    },
    {
      name: "Chevy Engines",
      imagePath: "usedengine3.png",
      status: "In Stock",
      link: "/call-us",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <section className="max-w-screen-lg w-[100%] mx-auto p-8" data-aos="zoom-in">
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

     
        <Carousel className="w-11/12 mx-auto" plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true
        }),
      ]}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-2 md:pl-3">
                <EngineCards
                  productName={product.name}
                  productImage={product.imagePath}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

       
    </section>
  );
};

export default OurProducts;
