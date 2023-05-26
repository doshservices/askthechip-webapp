import React from "react";

const WhyCard = ({ title, text, icon }) => {
  return (
    <div className="bg-[#ffffff] max-w-[274px] shadow-lg rounded-xl px-5 pt-8 pb-5 mt-16">
      <div className="flex justify-center">
        <div className="flex justify-center items-center mb-6 bg-white rounded-full shadow-lg w-20 aspect-square -mt-16">
          <img src={icon} alt="Why Joining" className="p-3" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="font-normal text-xl leading-[26px] text-primary mb-3">
          {title}
        </h2>
        <h3 className=" text-[#2d2d2d] text-justify text-xs leading-[24px]">
          {text}
        </h3>
      </div>
    </div>
  );
};

export default WhyCard;
