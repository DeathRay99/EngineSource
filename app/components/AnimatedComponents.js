"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AboutUs from "./AboutUs";
import OurProducts from "./OurProducts";

export function AnimatedAboutUs() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div data-aos="flip-right" data-aos-duration="1600">
      <AboutUs />
    </div>
  );
}

export function AnimatedOurProduct() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="1200">
      <OurProducts />
    </div>
  );
}
