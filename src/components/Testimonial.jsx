import React from "react";
import Carousel from "./Carousel";

const Testimonial = () => {
  return (
    <section className="min-h-fit font-DMSans">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary110 text-[1.375rem] md:text-[46px] text-center max-w-[29ch] leading-[50px] mt-8 mb-0">
          What Others Have to Say
        </h1>
      </div>
      <div className="mx-1">
        <Carousel />
      </div>
    </section>
  );
};

export default Testimonial;
