"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Burger from "./Burger";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Popular = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-800"> Burgers</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <Burger
            title="Beef Bite Classic"
            image="/images/b1.png"
            reviews="13"
            price="10.54$"
          />
          <Burger
            title="Cheese Delight"
            image="/images/b2.png"
            reviews="14"
            price="11.29$"
          />
          <Burger
            title="Spicy Beef"
            image="/images/b3.png"
            reviews="15"
            price="10.72$"
          />
          <Burger
            title="Veggie Feast"
            image="/images/b4.png"
            reviews="20"
            price="9.54$"
          />
          <Burger
            title="Chicken Crunch"
            image="/images/b5.png"
            reviews="18"
            price="10.99$"
          />
          <Burger
            title="BBQ Blast"
            image="/images/b6.png"
            reviews="22"
            price="12.49$"
          />
          <Burger
            title="Fish Fillet"
            image="/images/b7.png"
            reviews="17"
            price="9.89$"
          />
          <Burger
            title="Double Trouble"
            image="/images/b8.png"
            reviews="19"
            price="13.54$"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Popular;
