import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        Meet Our expert <span className="text-red-600">Chefs</span>
      </h1>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <TeamCard
            image="/images/t1.jpg"
            name="Chef Antonio Rossi"
            position="Master of the Grill"
            shortDescription="A graduate of Le Cordon Bleu in Paris, Chef Antonio Rossi specializes in grilling techniques and is renowned for his expertise in crafting perfectly charred burgers."
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <TeamCard
            image="/images/t2.jpg"
            name="Chef Maria Sanchez"
            position="Burger Architect"
            shortDescription="Trained at the Culinary Institute of America, Chef Maria Sanchez excels in burger design, with a keen eye for flavor balance and innovative ingredient pairings."
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <TeamCard
            image="/images/t3.jpg"
            name="Chef Hiroshi Tanaka"
            position="Flavor Innovator"
            shortDescription="Educated at the Tokyo Culinary Academy, Chef Hiroshi Tanaka is an expert in blending traditional and modern flavors, bringing a unique twist to every burger he creates."
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
