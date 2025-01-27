"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function EngineCards({productImage , productName}) {
  return (
    (<CardContainer className="w-[70%]">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-3 border ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {productName}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/assets/OurProducts/${productImage}`} 
            height="1000"
            width="1000"
            className=" object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-center items-center mt-5">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            <a
            href="tel:+14023964181" >
            Call Us Now
          </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}
