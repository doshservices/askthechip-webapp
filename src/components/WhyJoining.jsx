import React from "react";
import { whyData } from "../data";
import WhyCard from "./WhyCard";
import Button from "./Button/Button";

const WhyJoining = () => {
  return (
    <div className="font-DMSans" id="about">
      <section className="flex justify-center items-center flex-col min-h-screen">
        <h2 className="font-medium capitalize text-2xl md:text-[36px] text-center w-[90%] max-w-[29ch] md:leading-[44px] mt-8 mb-4 text-[#021B38]">
          Why you should join our Community
        </h2>
        <p className="text-[.9rem] leading-[24px] md:text-[18px] w-[90%] max-w-[49ch] text-center mb-12 text-[#343432]">
          We promote innovation and value creation by addressing the non-core
          but critical factors that affect Entrepreneurs and Start-ups. Thereby
          allowing for focus on the development of the core ideas and solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xm:grid-cols-4 gap-4 md:gap-10 mb-6 md:mb-0 mx-4">
          {whyData.map((item, index) => (
            <WhyCard
              key={index}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="mt-16 mb-2">
          <Button path="login" title="Get Started" />
        </div>
      </section>
    </div>
  );
};

export default WhyJoining;
