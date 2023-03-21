import React from "react";
import Carousel from "./Carousel";

const Testimonial = () => {
  return (
    <section className="min-h-fit my-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[40px] text-center max-w-[29ch] leading-[48px] mt-8 mb-8">
          Testimonials
        </h1>
      </div>
      <div className="mx-1">
        <Carousel />
      </div>
    </section>
  );
};

export default Testimonial;
