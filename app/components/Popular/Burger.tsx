import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";

interface BurgerProps {
  title: string;
  image: string;
  price: string;
  reviews: string;
}

const Burger = ({ title, image, price, reviews }: BurgerProps) => {
  return (
    <div className="bg-white p-6 rounded-lg m-3">
      <div className="w-[200px mx-auto h-[200px]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
        {title}
      </h1>
      <div className="flex items-center mt-[0.5rem] space-x-3">
        <div className="flex items-center">
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
        </div>
        <div className="text-black opacity-80">({reviews})</div>
      </div>
      <p className="mt-[0.5rem] text-black opacity-70">
        Packaged hamburger and hot dog bun prices were up 7% while potato chips
        were up 6.9%. Ground beef has gotten more expensive this year.
      </p>
      <div className="flex mt-[1.4rem] items-center justify-between">
        <h1 className="text-[25px] font-bold text-red-800">{price}</h1>
        <button className="px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-white">
          <BiShoppingBag className="w-[1.3rem] h-[1.3rem]" />
        </button>
      </div>
    </div>
  );
};

export default Burger;
