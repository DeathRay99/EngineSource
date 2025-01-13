"use client"
import React from 'react'
import EngineCards from "./EngineCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function ProductCarousel() {
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
  return (
    <Carousel
    className="w-11/12 mx-auto"
    plugins={[
      Autoplay({
        delay: 2000,
        stopOnInteraction: true,
      }),
    ]}
  >
    <CarouselContent className="-ml-2 md:-ml-4">
      {products.map((product, index) => (
        <CarouselItem
          key={index}
          className="md:basis-1/2 lg:basis-1/2 pl-2 md:pl-3"
        >
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
  )
}

export default ProductCarousel