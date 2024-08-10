import React from "react";
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        <div>
          <div className="flex items-center text-white space-x-2">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4] sm:h-[1.4rem] text-orange-500" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold">
              BurgerHunt
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-[0.4rem]">
            Burgers with a Bite, Flavor with a Fight!
          </p>
          <p className="mt-[1rem] text-white">burgerhuntingsupport@gmail.com</p>
          <p className="text-red-700 font-bold text-[19px]">+8801766593469</p>
        </div>

        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Products
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            Classic Beef Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            Spicy Chicken Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            Veggie Delight Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            BBQ Pulled Pork Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            Mushroom Swiss Burger
          </p>
        </div>

        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Quick Link
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            Home
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            About
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            Manu
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            Products
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-600 transition-all duration-200 cursor-pointer w-fit">
            News
          </p>
        </div>

        <div>
          <h1 className="text-[23px] uppercase font-semibold mb-[2rem] text-white">
            Opening Hours
          </h1>
          <p className="text-white text-[18px]">
            Monday - Friday:{" "}
            <span className="text-yellow-500">8:00 AM - 4:00 PM</span>
          </p>
          <p className="text-white text-[18px]">
            Mondya - Friday:{" "}
            <span className="text-yellow-500">8:00 AM - 12:00 AM</span>
          </p>
          <div className="flex mt-[2rem] items-center space-x-6">
            <FaFacebook className="w-[1rem] h-[1.5rem] text-blue-400" />
            <FaInstagram className="w-[1rem] h-[1.5rem] text-red-400" />
            <FaTwitter className="w-[1rem] h-[1.5rem] text-blue-300" />
          </div>
        </div>
      </div>
      <p className="text-center text-white opacity-60 mt-[1rem]">
        Copyright © 2024 <span className="text-yellow-500">Burger Hunt</span>.
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
