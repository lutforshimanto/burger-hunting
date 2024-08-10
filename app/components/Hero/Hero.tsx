"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

import BurgerImage1 from "@/public/images/b1.png";
import BurgerImage2 from "@/public/images/b2.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
        showDots={true}
      >
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
            <Image
              src={BurgerImage1}
              alt="burger"
              className="hidden md:block"
            />
            <div className="">
              <h1 className="text-[40px] font-semibold text-yellow-400">
                Fast Food Burger
              </h1>
              <h1 className="text-[90px] landing-[5rem] uppercase text-white font-bold">
                Best <br /> Burgers
              </h1>
              <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                Burgers are one of the most convenient and easiest foods to eat
                on the fly when we are in a hurry. We can have a burger at any
                time of day, whether it is breakfast, lunch, or supper, and
                maybe some fries and a Coke to go with it.
              </p>

              <button className="mt-[2rem] px-8 py-3 sm:text-[16px] bg-green-700 transition-all duration-200 hover:bg-green-800 flex items-center rounded-md space-x-2 text-white">
                <span>
                  <BiCycling className="w-[1.7] h-[1.7rem]" />
                </span>
                <span className="font-bold">Order now</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
            <Image
              src={BurgerImage2}
              alt="burger"
              className="hidden md:block"
            />
            <div className="">
              <h1 className="text-[40px] font-semibold text-yellow-400">
                Popular Burger
              </h1>
              <h1 className="text-[90px] landing-[5rem] uppercase text-white font-bold">
                Tasty <br /> Burgers
              </h1>
              <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                Burgers are one of the most convenient and easy foods to eat on
                the go when we are in a hurry. We can enjoy a burger at any time
                of day, whether it is breakfast, lunch, or supper, and maybe
                some fries and a Coke to go with it.
              </p>

              <button className="mt-[2rem] px-8 py-3 sm:text-[16px] bg-blue-500 transition-all duration-200 hover:bg-green-800 flex items-center rounded-md space-x-2 text-white">
                <span>
                  <BiCycling className="w-[1.7] h-[1.7rem]" />
                </span>
                <span className="font-bold">Order now</span>
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
