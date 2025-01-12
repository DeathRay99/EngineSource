"use client"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AboutUs from './AboutUs';

function AnimatedAboutUs() {
    useEffect(() => {
        AOS.init({});
      }, []);
  return (
    <div data-aos="flip-right" data-aos-duration="1600"><AboutUs/></div>
  )
}

export default AnimatedAboutUs