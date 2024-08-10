import React from "react";
import Image from "next/image";
import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        Burgers made with <br /> love and
        <span> Care</span>
      </h1>
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img1} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Our Burger
            </h1>
            <p className="mt-[0.2rem text-black text-opacity-60 text-center]">
              We live in a planet where burgers exist. Thank goodness! Indeed,
              we are so fortunate to have these tasty creations in our midst.
              The least we can do is share their picture-perfect goodness
              wherever we can.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={Img2} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              You are Important
            </h1>
            <p className="mt-[0.2rem text-black text-opacity-60 text-center]">
              Burger + Bacon = Perfect Combo! Following your heart will
              eventually lead you to burgers. Paradise between two buns.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img3} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Cheeseburger
            </h1>
            <p className="mt-[0.2rem text-black text-opacity-60 text-center]">
              There’s no “we” in cheeseburger. Quarter pound? Half pound? Give
              me a whole pound! Saying this is just a cheeseburger is like
              saying Mona Lisa is just a painting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
