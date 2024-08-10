import React from "react";
import Image from "next/image";
import DeliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center gird-cols-1 lg:grid-cols-2 gap-[3rem]">
        <div data-aos="fade-right" data-aos-anchor-placement="top-cent">
          <Image src={DeliveryImg} alt="delivery" />
        </div>
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Your <span className="text-red-700">Favorite Burger</span> on the
            way...
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Why go out when you can have the burger of your dreams delivered to
            your doorstep in 30 minutes flat? Free shipping because, hey, it’s
            2024, and waiting is so last year. Just sit back, relax, and prepare
            to meet your burger destiny—minus the awkward “did they forget the
            ketchup?” moments.
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-700" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 min!
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-700" />
            <h1 className="text-[18px] text-black font-medium">
              Free shipping...
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-700" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery on your Doorstep.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
